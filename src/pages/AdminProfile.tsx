import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { User, Save, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminProfile = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
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
      setEmail(user.email || "");
    };
    checkAuth();
  }, [navigate]);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match", variant: "destructive" });
      return;
    }
    if (newPassword.length < 8) {
      toast({ title: "Error", description: "Password must be at least 8 characters", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Password updated successfully" });
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const handleUpdateEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ email });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Email update initiated. Check your inbox to confirm." });
    }
  };

  return (
    <Layout>
      <section className="container py-24 max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/admin/security")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <User size={24} className="text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Profile</h1>
            <p className="text-sm text-muted-foreground">Manage your account settings</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-card rounded-xl p-6 card-elevated mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Email Address</h2>
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <button
              onClick={handleUpdateEmail}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              <Save size={14} /> Update
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="bg-card rounded-xl p-6 card-elevated">
          <h2 className="text-lg font-semibold text-foreground mb-4">Change Password</h2>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              <Save size={14} /> {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AdminProfile;
