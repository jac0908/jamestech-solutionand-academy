import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Shield, AlertTriangle, Activity, Clock, LogOut, RefreshCw } from "lucide-react";

interface SecurityEvent {
  id: string;
  event_type: string;
  severity: string;
  ip_address: string | null;
  user_agent: string | null;
  path: string | null;
  description: string;
  metadata: Record<string, unknown>;
  notified: boolean;
  created_at: string;
}

const severityColors: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  high: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  critical: "bg-destructive/10 text-destructive",
};

const AdminSecurity = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const navigate = useNavigate();

  const fetchEvents = async () => {
    setLoading(true);
    let query = supabase
      .from("security_events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (filter !== "all") {
      query = query.eq("severity", filter);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Failed to fetch events:", error);
      if (error.code === "42501" || error.message?.includes("permission")) {
        navigate("/admin/login");
        return;
      }
    }

    setEvents((data as SecurityEvent[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    // Check auth
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/admin/login");
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        await supabase.auth.signOut();
        navigate("/admin/login");
        return;
      }
      fetchEvents();
    };
    checkAuth();
  }, [filter]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleString();
  };

  const stats = {
    total: events.length,
    critical: events.filter((e) => e.severity === "critical").length,
    high: events.filter((e) => e.severity === "high").length,
    today: events.filter((e) => {
      const today = new Date();
      const eventDate = new Date(e.created_at);
      return eventDate.toDateString() === today.toDateString();
    }).length,
  };

  return (
    <Layout>
      <section className="container py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield size={24} className="text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Security Dashboard</h1>
              <p className="text-sm text-muted-foreground">Monitor and review security events</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchEvents}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Events", value: stats.total, icon: Activity, color: "text-accent" },
            { label: "Critical", value: stats.critical, icon: AlertTriangle, color: "text-destructive" },
            { label: "High Severity", value: stats.high, icon: Shield, color: "text-orange-500" },
            { label: "Today", value: stats.today, icon: Clock, color: "text-muted-foreground" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-5 card-elevated">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon size={18} className={stat.color} />
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", "critical", "high", "medium", "low"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-card rounded-xl card-elevated overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="p-12 text-center">
              <Shield size={40} className="text-accent/30 mx-auto mb-3" />
              <p className="text-muted-foreground">No security events found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Time</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Severity</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">IP</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Path</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 text-muted-foreground whitespace-nowrap text-xs">
                        {formatDate(event.created_at)}
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-mono text-xs bg-muted px-2 py-1 rounded">{event.event_type}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${severityColors[event.severity] || ""}`}>
                          {event.severity}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-foreground max-w-xs truncate">{event.description}</td>
                      <td className="px-5 py-4 text-muted-foreground font-mono text-xs">{event.ip_address || "—"}</td>
                      <td className="px-5 py-4 text-muted-foreground text-xs">{event.path || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminSecurity;
