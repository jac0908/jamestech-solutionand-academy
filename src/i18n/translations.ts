export type Language = "en" | "am" | "om";

export const languageLabels: Record<Language, string> = {
  en: "English",
  am: "አማርኛ",
  om: "Afaan Oromoo",
};

export const t = {
  nav: {
    home: { en: "Home", am: "መነሻ", om: "Fuula Jalqabaa" },
    about: { en: "About", am: "ስለ እኛ", om: "Waa'ee Keenya" },
    services: { en: "Services", am: "አገልግሎቶች", om: "Tajaajila" },
    pricing: { en: "Pricing", am: "ዋጋ", om: "Gatii" },
    portfolio: { en: "Portfolio", am: "ፖርትፎሊዮ", om: "Poortfooliyoo" },
    contact: { en: "Contact", am: "ያግኙን", om: "Nu Quunnamaa" },
    oromoHistory: { en: "Oromo History", am: "የኦሮሞ ታሪክ", om: "Seenaa Oromoo" },
    getStarted: { en: "Get Started", am: "ይጀምሩ", om: "Jalqabaa" },
  },
  hero: {
    badge: { en: "Next-Generation Platform", am: "ዘመናዊ መድረክ", om: "Ardii Haaraa" },
    title1: { en: "Technology that", am: "ቴክኖሎጂ", om: "Teeknooloojii" },
    title2: { en: "powers your ambition", am: "ህልምዎን ያሳካል", om: "hawwii keessan guutu" },
    desc: {
      en: "We build scalable software solutions that help Ethiopian enterprises streamline operations, unlock insights, and accelerate growth.",
      am: "ለኢትዮጵያ ድርጅቶች ስራቸውን ለማቀላጠፍ፣ ግንዛቤዎችን ለማግኘት እና እድገትን ለማፋጠን የሚረዱ ተስፋፊ የሶፍትዌር መፍትሔዎችን እንገነባለን።",
      om: "Dhaabbilee Itoophiyaatiif hojii isaanii salphisuuf, hubannoo argachuuf fi guddina saffisiisuuf furmaata sooftweerii bal'inaan ijaarruu dandeenyu ni hojjenna.",
    },
    badges: {
      certified: { en: "ISO Certified", am: "ISO የተረጋገጠ", om: "ISO Mirkanaa'e" },
      uptime: { en: "99.9% Uptime", am: "99.9% ያለማቋረጥ", om: "99.9% Yeroo Hunda" },
      local: { en: "Made in Ethiopia", am: "በኢትዮጵያ የተሰራ", om: "Itoophiyaatti Hojjetame" },
    },
  },
  trustedBy: { en: "Trusted by", am: "ታማኝ ደንበኞቻችን", om: "Maamiltoonni Keenya" },
  stats: {
    items: [
      { value: "200+", label: { en: "Ethiopian Clients", am: "ኢትዮጵያዊ ደንበኞች", om: "Maamiltota Itoophiyaa" } },
      { value: "99.9%", label: { en: "Uptime SLA", am: "ያለማቋረጥ ስምምነት", om: "Waliigaltee Yeroo" } },
      { value: "5M+", label: { en: "Transactions/Day", am: "ግብይቶች/ቀን", om: "Daldala/Guyyaa" } },
      { value: "10+", label: { en: "Years in Ethiopia", am: "ዓመታት በኢትዮጵያ", om: "Waggaa Itoophiyaa keessa" } },
    ],
  },
  capabilities: { en: "Capabilities", am: "አቅሞቻችን", om: "Dandeettii Keenya" },
  featuresTitle: { en: "Built for enterprise demands", am: "ለድርጅታዊ ፍላጎቶች የተገነባ", om: "Fedhii dhaabbileetiif ijaarame" },
  featuresDesc: {
    en: "Every feature is designed to meet the rigorous requirements of modern Ethiopian businesses at scale.",
    am: "እያንዳንዱ ባህሪ ዘመናዊ የኢትዮጵያ ንግዶችን ጥብቅ መስፈርቶች ለማሟላት የተነደፈ ነው።",
    om: "Amalli hundi fedhii dhaabbilee Itoophiyaa ammayyaa guutuuf kan qophaa'edha.",
  },
  features: [
    {
      title: { en: "Lightning Performance", am: "ፈጣን አፈጻጸም", om: "Saffisa Guddaa" },
      desc: {
        en: "Sub-millisecond response times powered by our distributed infrastructure across Ethiopia.",
        am: "በኢትዮጵያ ውስጥ በተሰራጨው መሰረተ ልማታችን የሚመራ ፈጣን ምላሽ ጊዜ።",
        om: "Yeroo deebii saffisaa bu'uura misoomaa Itoophiyaa keessatti babal'ateen.",
      },
    },
    {
      title: { en: "Enterprise Security", am: "የድርጅት ደህንነት", om: "Nageenya Dhaabbilee" },
      desc: {
        en: "End-to-end encryption and advanced threat detection for Ethiopian financial and government sectors.",
        am: "ለኢትዮጵያ የፋይናንስ እና የመንግስት ዘርፎች ከጫፍ እስከ ጫፍ ምስጠራ።",
        om: "Icciitii guutuu fi adda baasuu balaa dhaabbilee faayinaansii fi mootummaa Itoophiyaatiif.",
      },
    },
    {
      title: { en: "Actionable Analytics", am: "ተግባራዊ ትንተና", om: "Xiinxala Hojii irra Oolu" },
      desc: {
        en: "Real-time dashboards and predictive insights to inform strategic decisions.",
        am: "የቅጽበት ዳሽቦርዶች እና ስልታዊ ውሳኔዎችን ለማሳወቅ ትንበያዊ ግንዛቤዎች።",
        om: "Daashboordii yeroo qabatamaa fi hubannoo tilmaamaa murtoo tarsiimootiif.",
      },
    },
    {
      title: { en: "Local Infrastructure", am: "የአገር ውስጥ መሰረተ ልማት", om: "Bu'uura Misoomaa Biyya Keessaa" },
      desc: {
        en: "Hosted locally in Addis Ababa data centers with automatic failover and redundancy.",
        am: "በአዲስ አበባ ዳታ ሴንተሮች ውስጥ በአካባቢው የሚስተናገድ ከራስ-ሰር ፌልኦቨር ጋር።",
        om: "Giddugala deetaa Finfinnee keessatti qabachiifamee fi of-dandeettii waliin.",
      },
    },
    {
      title: { en: "Team Collaboration", am: "የቡድን ትብብር", om: "Walta'iinsa Garee" },
      desc: {
        en: "Built-in tools for cross-functional teams with role-based access controls.",
        am: "ለተለያዩ ቡድኖች የተዘጋጁ መሣሪያዎች ከሚና ላይ ተመስርተው ቁጥጥር ያላቸው።",
        om: "Meeshaalee garee hojii adda addaatiif qophaa'an to'annoo gahee irratti hundaa'e waliin.",
      },
    },
    {
      title: { en: "Developer-First", am: "ለገንቢዎች ቅድሚያ", om: "Ijaartoota Dursa" },
      desc: {
        en: "Comprehensive APIs, SDKs, and documentation for seamless integration.",
        am: "ለተሳሳረ ውህደት አጠቃላይ APIዎች፣ SDKዎች እና ሰነዶች።",
        om: "API, SDK fi sanada guutuu walitti makamsa salphaadhaan.",
      },
    },
  ],
  testimonials: {
    badge: { en: "Testimonials", am: "ምስክርነቶች", om: "Ragaalee" },
    title: { en: "Trusted by industry leaders", am: "በኢንዱስትሪ መሪዎች ታምኗል", om: "Hoggantoota Industirii biratti amaname" },
    items: [
      {
        quote: {
          en: "James Tech Solution transformed our banking infrastructure. We reduced processing times by 60% while improving security.",
          am: "James Tech Solution የባንክ መሰረተ ልማታችንን ቀይሮታል። ደህንነትን እያሻሻልን የማቀነባበሪያ ጊዜን በ60% ቀንሰናል።",
          om: "James Tech Solution bu'uura baankii keenyaa jijjiireera. Yeroo adeemsaa 60% hir'isnee nageenya fooyyessineerra.",
        },
        author: "Abebe Kebede",
        role: { en: "CTO, Commercial Bank of Ethiopia", am: "ዋና ቴክኖሎጂ ኃላፊ፣ የኢትዮጵያ ንግድ ባንክ", om: "Hogganaa Teeknooloojii, Baankii Daldalaa Itoophiyaa" },
      },
      {
        quote: {
          en: "The team's expertise in local regulations and technology is unmatched. They delivered a system that works perfectly for Ethiopian businesses.",
          am: "የቡድኑ በአካባቢው ደንቦች እና ቴክኖሎጂ ላይ ያለው እውቀት ተወዳዳሪ የለውም።",
          om: "Beekumsi garichaa seerota biyyaa fi teeknooloojii irratti qixxee hin qabu.",
        },
        author: "Tigist Haile",
        role: { en: "Director, Ethiopian Airlines Digital", am: "ዳይሬክተር፣ የኢትዮጵያ አየር መንገድ ዲጂታል", om: "Daayirektara, Daandii Qilleensa Itoophiyaa Dijitaalaa" },
      },
      {
        quote: {
          en: "Their platform handles millions of daily transactions for our telecom operations flawlessly. Truly enterprise-grade.",
          am: "መድረካቸው ለቴሌኮም ስራዎቻችን በየቀኑ በሚሊዮኖች የሚቆጠሩ ግብይቶችን ያለምንም ችግር ያስተናግዳል።",
          om: "Ardiin isaanii daldala miliyoonaan lakkaa'amu guyyaa guyyaadhaan hojii telekoomii keenyaatiif rakkoo malee raawwata.",
        },
        author: "Mohammed Ali",
        role: { en: "VP Engineering, Ethio Telecom", am: "የምህንድስና ምክትል ፕሬዚዳንት፣ ኢትዮ ቴሌኮም", om: "I/A Pirezidaantii Injinariingii, Itoophiyaa Telekoom" },
      },
    ],
  },
  cta: {
    title1: { en: "Ready to transform", am: "ንግድዎን ለመቀየር", om: "Daldalaa keessan" },
    title2: { en: "your business?", am: "ዝግጁ ነዎት?", om: "jijjiiruuf qophiidha?" },
    desc: {
      en: "Let's discuss how James Tech Solution can help you achieve your goals.",
      am: "James Tech Solution ግቦችዎን ለማሳካት እንዴት ሊረዳዎ እንደሚችል እንነጋገር።",
      om: "James Tech Solution kaayyoo keessan galmaan ga'uuf akkamiin akka isin gargaaruu danda'u haa mari'annu.",
    },
    contact: { en: "Contact Us", am: "ያግኙን", om: "Nu Quunnamaa" },
    learn: { en: "Learn More", am: "ተጨማሪ ይወቁ", om: "Dabalata Baraa" },
  },
  // About page
  about: {
    badge: { en: "About Us", am: "ስለ እኛ", om: "Waa'ee Keenya" },
    title1: { en: "Building the future of", am: "የኢትዮጵያ", om: "Gara fuula duraa" },
    title2: { en: "Ethiopian technology", am: "ቴክኖሎጂ ወደፊት", om: "teeknooloojii Itoophiyaa" },
    desc: {
      en: "Founded in 2014, James Tech Solution has grown from a small Addis Ababa startup into a trusted technology partner for over 200 organizations across the country.",
      am: "በ2014 የተመሰረተው James Tech Solution ከትንሽ የአዲስ አበባ ጅምር ወደ 200 በላይ ድርጅቶች ታማኝ የቴክኖሎጂ አጋር ሆኗል።",
      om: "Bara 2014 kan hundeeffame James Tech Solution jalqabbii xixiqqaa Finfinnee irraa gara michuu teeknooloojii amanamaa dhaabbilee 200 ol ta'eera.",
    },
    statsYears: { en: "Years of Excellence", am: "የላቀ ዓመታት", om: "Waggaa Gaarii" },
    statsGrowth: { en: "Revenue Growth YoY", am: "ዓመታዊ ገቢ ዕድገት", om: "Guddina Galii Waggaa" },
    statsResponse: { en: "Avg Response Time", am: "አማካይ ምላሽ ጊዜ", om: "Yeroo Deebii Giddugaleessa" },
    foundation: { en: "Our Foundation", am: "መሰረታችን", om: "Bu'uura Keenya" },
    foundationTitle: { en: "What drives us forward", am: "ወደ ፊት የሚያራምደን", om: "Kan nu fuulduratti oofuu" },
    mission: { en: "Mission", am: "ተልዕኮ", om: "Ergama" },
    missionDesc: {
      en: "To empower Ethiopian organizations with technology that simplifies complexity and drives measurable outcomes.",
      am: "ውስብስብነትን በሚያቃልል እና ሊለካ የሚችል ውጤት በሚያመጣ ቴክኖሎጂ የኢትዮጵያ ድርጅቶችን ማብቃት።",
      om: "Dhaabbilee Itoophiyaa teeknooloojii walxaxiinsa salphisuu fi bu'aa madaalamuu fidu'n cimsuu.",
    },
    vision: { en: "Vision", am: "ራዕይ", om: "Mul'ata" },
    visionDesc: {
      en: "A digitally empowered Ethiopia where every business has access to world-class technology.",
      am: "ዲጂታላዊ ብቃት ያለው ኢትዮጵያ፤ እያንዳንዱ ንግድ ዓለም አቀፍ ቴክኖሎጂ ማግኘት የሚችልበት።",
      om: "Itoophiyaa dijitaalaan cimte bakka daldalli hundi teeknooloojii sadarkaa addunyaa argachuu danda'u.",
    },
    values: { en: "Values", am: "እሴቶች", om: "Duudhaalee" },
    valuesDesc: {
      en: "Integrity, innovation, and an unwavering commitment to Ethiopia's digital transformation.",
      am: "ታማኝነት፣ ፈጠራ እና ለኢትዮጵያ ዲጂታል ለውጥ ቁርጠኝነት።",
      om: "Amanamummaa, kalaqaa fi kutannoo jijjiirama dijitaalaa Itoophiyaatiif.",
    },
    journey: { en: "Our Journey", am: "ጉዞአችን", om: "Imala Keenya" },
    journeyTitle: { en: "Milestones that matter", am: "ጉልህ ምዕራፎች", om: "Waantota Barbaachisan" },
    milestones: [
      {
        year: "2014",
        title: { en: "Founded", am: "ተመሠረተ", om: "Hundeeffame" },
        desc: {
          en: "Started as a 5-person tech team in Addis Ababa.",
          am: "በአዲስ አበባ 5 ሰዎች ቡድን ሆኖ ተጀመረ።",
          om: "Garee nama 5 ta'een Finfinnee keessatti jalqabe.",
        },
      },
      {
        year: "2017",
        title: { en: "First Major Client", am: "የመጀመሪያ ዋና ደንበኛ", om: "Maamila Guddaa Jalqabaa" },
        desc: {
          en: "Partnered with Ethiopian Airlines for digital transformation.",
          am: "ከኢትዮጵያ አየር መንገድ ጋር ለዲጂታል ለውጥ ተባበረ።",
          om: "Daandii Qilleensa Itoophiyaa waliin jijjiirama dijitaalaatiif michoomne.",
        },
      },
      {
        year: "2020",
        title: { en: "National Expansion", am: "ሀገራዊ መስፋፋት", om: "Babal'ina Biyyaalessaa" },
        desc: {
          en: "Opened offices in Hawassa, Bahir Dar, and Adama.",
          am: "በሀዋሳ፣ ባህር ዳር እና አዳማ ቢሮዎች ተከፈቱ።",
          om: "Waajjira Hawaasaa, Baahir Daar fi Adaamaa keessatti bane.",
        },
      },
      {
        year: "2024",
        title: { en: "200+ Clients", am: "200+ ደንበኞች", om: "Maamiltota 200+" },
        desc: {
          en: "Serving organizations across Ethiopia in finance, telecom, and government.",
          am: "በፋይናንስ፣ ቴሌኮም እና መንግስት ዘርፍ ድርጅቶችን ያገለግላል።",
          om: "Dhaabbilee Itoophiyaa faayinaansii, telekoomii fi mootummaa keessatti tajaajila.",
        },
      },
    ],
    story: { en: "Our Story", am: "ታሪካችን", om: "Seenaa Keenya" },
    storyTitle: { en: "From startup to national partner", am: "ከጅምር ወደ ሀገራዊ አጋር", om: "Jalqabbii irraa gara michuu biyyaalessaatti" },
    storyP1: {
      en: "James Tech Solution was born from a simple observation: Ethiopian businesses deserved world-class technology solutions built for local needs. Our founders, experienced engineers and entrepreneurs, saw an opportunity to bridge the gap between global tech and Ethiopian business requirements.",
      am: "James Tech Solution ከቀላል ምልከታ ተወለደ፡ የኢትዮጵያ ንግዶች ለአካባቢው ፍላጎቶች የተገነቡ ዓለም አቀፍ ቴክኖሎጂ መፍትሔዎች ይገባቸዋል። መስራቾቻችን ልምድ ያላቸው መሃንዲሶች እና ስራ ፈጣሪዎች ዓለም አቀፍ ቴክ እና የኢትዮጵያ ንግድ መስፈርቶችን ለማገናኘት ዕድሉን ተመልክተዋል።",
      om: "James Tech Solution hubannoo salphaa irraa dhalate: daldalli Itoophiyaa furmaata teeknooloojii sadarkaa addunyaa fedhii naannootiif ijaarame ni barbaada. Hundeessitoonni keenya injinaroota fi daldaltootni muuxannoo qaban carraa teeknooloojii addunyaa fi fedhii daldalaa Itoophiyaa walitti fiduuf argan.",
    },
    storyP2: {
      en: "Today we serve over 200 organizations across Ethiopia, from banks and telecoms to government agencies and growing startups. Our platform processes over 5 million transactions daily, and we maintain a 99.9% uptime SLA.",
      am: "ዛሬ ከባንኮች እና ቴሌኮም እስከ የመንግስት ኤጀንሲዎች እና እያደጉ ያሉ ጅምሮች ድረስ በኢትዮጵያ ውስጥ ከ200 በላይ ድርጅቶችን እናገለግላለን።",
      om: "Har'a dhaabbilee 200 ol Itoophiyaa keessatti baankii fi telekoomii hanga eejensii mootummaa fi jalqabbiiwwanitti tajaajilaa jirra.",
    },
    storyP3: {
      en: "We are proudly Ethiopian, with offices in Addis Ababa, Hawassa, Bahir Dar, and Adama. Our team of 150+ engineers, designers, and strategists are committed to Ethiopia's digital future.",
      am: "ኩሩ ኢትዮጵያዊ ነን፤ በአዲስ አበባ፣ ሀዋሳ፣ ባህር ዳር እና አዳማ ቢሮዎች አሉን። 150+ መሃንዲሶች፣ ዲዛይነሮች እና ስትራቴጂስቶች ላሉት ቡድናችን ለኢትዮጵያ ዲጂታል ወደፊት ቁርጠኛ ነው።",
      om: "Itoophiyaanota of boonnuudha, waajjira Finfinnee, Hawaasaa, Baahir Daar fi Adaamaa keessatti qabna. Gareen keenya injinaroota, dizaayinaroota fi tarsiimoota 150+ fuula duraa dijitaalaa Itoophiyaatiif kutannoo qabu.",
    },
    leadership: { en: "Leadership", am: "አመራር", om: "Hogganaa" },
    leadershipTitle: { en: "The team behind James Tech Solution", am: "ከJames Tech Solution ጀርባ ያለው ቡድን", om: "Garee James Tech Solution duuba jiru" },
    team: [
      {
        name: "Yaikob Diriba Tadessa",
        role: { en: "Founder & CEO", am: "መስራች እና ዋና ሥራ አስፈጻሚ", om: "Hundeessaa fi Hojii Raawwachiisaa Olaanaa" },
        bio: {
          en: "BSc in Computer Science from Gambella University. Passionate about leveraging technology to transform Ethiopian businesses.",
          am: "ከጋምቤላ ዩኒቨርሲቲ በኮምፒውተር ሳይንስ BSc። ቴክኖሎጂን በመጠቀም የኢትዮጵያ ንግዶችን ለመቀየር ቁርጠኛ።",
          om: "BSc Saayinsii Kompitaraa Yuunivarsiitii Gambellaa irraa. Teeknooloojiidhaan daldalaa Itoophiyaa jijjiiruuf kutannoo qabu.",
        },
      },
    ],
  },
  // Services page
  services: {
    badge: { en: "Services", am: "አገልግሎቶች", om: "Tajaajila" },
    title1: { en: "Solutions engineered", am: "ለውጤት የተነደፉ", om: "Furmaata hojjetame" },
    title2: { en: "for results", am: "መፍትሔዎች", om: "bu'aatiif" },
    desc: {
      en: "Comprehensive technology services designed to solve the most complex challenges facing Ethiopian businesses.",
      am: "የኢትዮጵያ ንግዶችን ውስብስብ ፈተናዎች ለመፍታት የተነደፉ ሁለንተናዊ የቴክኖሎጂ አገልግሎቶች።",
      om: "Tajaajila teeknooloojii guutuu qormaata walxaxaa daldalaa Itoophiyaa furuuf qophaa'e.",
    },
    whatWeDo: { en: "What We Do", am: "የምንሰራው", om: "Kan Hojjennu" },
    whatWeDoTitle: { en: "End-to-end technology services", am: "ከጫፍ እስከ ጫፍ የቴክኖሎጂ አገልግሎቶች", om: "Tajaajila teeknooloojii guutummaatti" },
    items: [
      {
        title: { en: "Cloud Solutions", am: "ክላውድ መፍትሔ", om: "Furmaata Kilaawudii" },
        desc: {
          en: "Migrate, optimize, and manage your cloud infrastructure. We design architectures that maximize performance for Ethiopian businesses.",
          am: "ክላውድ መሰረተ ልማትዎን ያስተዳድሩ። ለኢትዮጵያ ንግዶች አፈጻጸምን ከፍ የሚያደርጉ ንድፎችን እንነድፋለን።",
          om: "Bu'uura kilaawudii keessan bulchaa. Hojmaata daldalaa Itoophiyaatiif dizaayinii saffisa guddisuu hojjenna.",
        },
        features: [
          { en: "Cloud Migration", am: "ክላውድ ፍልሰት", om: "Godaansa Kilaawudii" },
          { en: "Infrastructure as Code", am: "መሰረተ ልማት እንደ ኮድ", om: "Bu'uura akka Koodii" },
          { en: "Cost Optimization", am: "ወጪ ማመቻቸት", om: "Baasii Fooyyessuu" },
          { en: "24/7 Monitoring", am: "24/7 ክትትል", om: "To'annoo 24/7" },
        ],
      },
      {
        title: { en: "Data & Analytics", am: "ዳታ እና ትንተና", om: "Deetaa fi Xiinxala" },
        desc: {
          en: "Transform raw data into strategic advantage with real-time insights and predictive models for Ethiopian markets.",
          am: "ጥሬ ዳታን ወደ ስልታዊ ጥቅም ይቀይሩ ለኢትዮጵያ ገበያዎች የቅጽበት ግንዛቤዎች።",
          om: "Deetaa dheeraa gara fayyadamaa tarsiimootti jijjiiraa hubannoo yeroo qabatamaa gabaa Itoophiyaatiif.",
        },
        features: [
          { en: "Data Warehousing", am: "ዳታ ማከማቻ", om: "Kuusaa Deetaa" },
          { en: "BI Dashboards", am: "BI ዳሽቦርዶች", om: "Daashboordii BI" },
          { en: "Machine Learning", am: "ማሽን ለርኒንግ", om: "Barumsa Maashinii" },
          { en: "ETL Pipelines", am: "ETL ፓይፕላይኖች", om: "Paayiplaaynii ETL" },
        ],
      },
      {
        title: { en: "Custom Development", am: "ብጁ ልማት", om: "Misoomaa Addaa" },
        desc: {
          en: "Purpose-built software tailored to Ethiopian business workflows, from microservices to full-stack applications.",
          am: "ከማይክሮሰርቪስ እስከ ሙሉ-ስታክ አፕሊኬሽኖች ለኢትዮጵያ ንግድ የተበጁ ሶፍትዌር።",
          om: "Sooftweerii hojii daldalaa Itoophiyaatiif addaan hojjetame.",
        },
        features: [
          { en: "API Development", am: "API ልማት", om: "Misoomaa API" },
          { en: "Web Applications", am: "ዌብ አፕሊኬሽኖች", om: "Apilikeeshinii Weebii" },
          { en: "Mobile Apps", am: "ሞባይል አፕስ", om: "Appii Moobayilaa" },
          { en: "System Integration", am: "ሲስተም ውህደት", om: "Walitti Makamsa Sirnaa" },
        ],
      },
      {
        title: { en: "Digital Strategy", am: "ዲጂታል ስትራቴጂ", om: "Tarsiimoo Dijitaalaa" },
        desc: {
          en: "Align technology investments with business goals. Build roadmaps that deliver measurable ROI for Ethiopian organizations.",
          am: "የቴክኖሎጂ ኢንቨስትመንቶችን ከንግድ ግቦች ጋር ያስተካክሉ።",
          om: "Invastimantii teeknooloojii kaayyoo daldalaa waliin walsimsiisuun.",
        },
        features: [
          { en: "Technology Assessment", am: "ቴክኖሎጂ ግምገማ", om: "Madaallii Teeknooloojii" },
          { en: "Roadmap Planning", am: "ሮድማፕ ፕላኒንግ", om: "Karoora Karaa" },
          { en: "Process Automation", am: "ሂደት ኦቶሜሽን", om: "Adeemsa Of-hojjechisuu" },
          { en: "Change Management", am: "ለውጥ አስተዳደር", om: "Bulchiinsa Jijjiiramaa" },
        ],
      },
      {
        title: { en: "Cybersecurity", am: "ሳይበር ደህንነት", om: "Nageenya Saayibarii" },
        desc: {
          en: "Protect Ethiopian organizations with defense-in-depth security. From compliance to incident response.",
          am: "የኢትዮጵያ ድርጅቶችን በጥልቅ ደህንነት ይጠብቁ።",
          om: "Dhaabbilee Itoophiyaa nageenya gadi fagoo'n eeguu.",
        },
        features: [
          { en: "Security Audits", am: "ደህንነት ኦዲት", om: "Odiitii Nageenyaa" },
          { en: "Compliance", am: "ተገዢነት", om: "Hordoffii Seeraa" },
          { en: "Threat Detection", am: "ስጋት ማወቂያ", om: "Adda Baasuu Sodaachisaa" },
          { en: "Incident Response", am: "ክስተት ምላሽ", om: "Deebii Balaa" },
        ],
      },
      {
        title: { en: "Managed Services", am: "የተቀናጁ አገልግሎቶች", om: "Tajaajila Bulchiinsaa" },
        desc: {
          en: "Focus on your core business while we handle the technology. Reliability, performance, and continuous improvement.",
          am: "በዋና ንግድዎ ላይ ያተኩሩ ቴክኖሎጂውን እኛ እንይዛለን።",
          om: "Daldalaa ijoo keessan irratti xiyyeeffadhaa teeknooloojii nutu qaba.",
        },
        features: [
          { en: "DevOps & SRE", am: "DevOps & SRE", om: "DevOps & SRE" },
          { en: "Application Support", am: "አፕሊኬሽን ድጋፍ", om: "Deeggarsa Apilikeeshinii" },
          { en: "Performance Tuning", am: "አፈጻጸም ማስተካከያ", om: "Fooyyessa Raawwii" },
          { en: "SLA Management", am: "SLA አስተዳደር", om: "Bulchiinsa SLA" },
        ],
      },
    ],
    process: { en: "Our Process", am: "ሂደታችን", om: "Adeemsa Keenya" },
    processTitle: { en: "How we deliver", am: "እንዴት እናቀርባለን", om: "Akkamiin dhiyeessinu" },
    processDesc: {
      en: "A proven methodology that minimizes risk and maximizes value.",
      am: "ስጋትን በመቀነስ ዋጋን ከፍ የሚያደርግ የተረጋገጠ ዘዴ።",
      om: "Mala mirkaneeffame balaa xiqqeessuu fi gatii guddisu.",
    },
    processSteps: [
      {
        step: "01",
        title: { en: "Discovery", am: "ግኝት", om: "Argannoo" },
        desc: { en: "We listen to understand your challenges and goals.", am: "ፈተናዎችዎን እና ግቦችዎን ለመረዳት እናዳምጣለን።", om: "Qormaata fi kaayyoo keessan hubachuuf dhageeffanna." },
      },
      {
        step: "02",
        title: { en: "Strategy", am: "ስትራቴጂ", om: "Tarsiimoo" },
        desc: { en: "We design a tailored roadmap for your objectives.", am: "ለዓላማዎችዎ የተዘጋጀ ሮድማፕ እንነድፋለን።", om: "Kaayyoo keessaniif karaa addaan dizaayinii gochina." },
      },
      {
        step: "03",
        title: { en: "Build", am: "ግንባታ", om: "Ijaarsa" },
        desc: { en: "Our engineers develop and test using proven methods.", am: "መሃንዲሶቻችን በተረጋገጡ ዘዴዎች ያዘጋጃሉ።", om: "Injinaroonni keenya mala mirkaneeffameen hojjetu." },
      },
      {
        step: "04",
        title: { en: "Launch & Scale", am: "ማስጀመር እና ማስፋት", om: "Eegaluu fi Babal'isuu" },
        desc: { en: "We deploy, monitor, and optimize for long-term success.", am: "ለረጅም ጊዜ ስኬት እንሰማራለን።", om: "Milkaa'ina yeroo dheeraatiif bobbaafna." },
      },
    ],
    ctaTitle: { en: "Not sure where to start?", am: "ከየት እንደሚጀምሩ እርግጠኛ አይደሉም?", om: "Eessaa akka jalqabdan hin beektan?" },
    ctaDesc: {
      en: "Our team will assess your needs and recommend the right approach.",
      am: "ቡድናችን ፍላጎትዎን ገምግሞ ትክክለኛውን አካሄድ ይመክራል።",
      om: "Gareen keenya fedhii keessan madaalee karaa sirrii gorsa.",
    },
    ctaButton: { en: "Book a Consultation", am: "ምክክር ያስይዙ", om: "Gorsa Qabsiisaa" },
  },
  // Contact page
  contact: {
    badge: { en: "Contact", am: "ያግኙን", om: "Nu Quunnamaa" },
    title1: { en: "Let's start a", am: "ውይይት", om: "Haasaa" },
    title2: { en: "conversation", am: "እንጀምር", om: "haa jalqabnu" },
    desc: {
      en: "Whether you have a specific project in mind or want to explore possibilities, we're here to help.",
      am: "የተወሰነ ፕሮጀክት ካለዎት ወይም ዕድሎችን ማሰስ ከፈለጉ ልንረዳዎ ዝግጁ ነን።",
      om: "Piroojektii addaa yoo qabaattan ykn carraa qorachuu yoo barbaaddan, isin gargaaruuf qophiidha.",
    },
    getInTouch: { en: "Get in touch", am: "ያግኙን", om: "Nu quunnamaa" },
    getInTouchDesc: {
      en: "Reach out through the form or contact us directly. Our team typically responds within one business day.",
      am: "በቅጹ ወይም በቀጥታ ያግኙን። ቡድናችን በአንድ የስራ ቀን ውስጥ ምላሽ ይሰጣል።",
      om: "Unka kanaan ykn kallattiin nu quunnamaa. Gareen keenya guyyaa hojii tokko keessatti deebisa.",
    },
    email: { en: "Email", am: "ኢሜይል", om: "Imeelii" },
    phone: { en: "Phone", am: "ስልክ", om: "Bilbila" },
    headquarters: { en: "Headquarters", am: "ዋና መስሪያ ቤት", om: "Waajjira Muummee" },
    businessHours: { en: "Business Hours", am: "የስራ ሰዓታት", om: "Sa'aatii Hojii" },
    sendMessage: { en: "Send us a message", am: "መልዕክት ይላኩልን", om: "Ergaa nuuf ergaa" },
    sendMessageDesc: {
      en: "Fill out the form and we'll get back to you shortly.",
      am: "ቅጹን ይሙሉ እና በቅርቡ እንመለሳለን።",
      om: "Unka guutaa yeroo gabaabaa keessatti isinitti deebina.",
    },
    firstName: { en: "First Name", am: "ስም", om: "Maqaa" },
    lastName: { en: "Last Name", am: "የአባት ስም", om: "Maqaa Abbaa" },
    workEmail: { en: "Work Email", am: "የስራ ኢሜይል", om: "Imeelii Hojii" },
    company: { en: "Company", am: "ድርጅት", om: "Dhaabbata" },
    message: { en: "Message", am: "መልዕክት", om: "Ergaa" },
    messagePlaceholder: { en: "Tell us about your project...", am: "ስለ ፕሮጀክትዎ ይንገሩን...", om: "Waa'ee piroojektii keessanii nutti himaa..." },
    sendButton: { en: "Send Message", am: "መልዕክት ላክ", om: "Ergaa Ergi" },
    privacy: { en: "We respect your privacy. No spam, ever.", am: "ግላዊነትዎን እናከብራለን።", om: "Icciitiiwwan keessan ni kabajnaa." },
    messageSent: { en: "Message sent!", am: "መልዕክት ተልኳል!", om: "Ergaan ergameera!" },
    thankYou: {
      en: "Thank you for reaching out. We'll be in touch within one business day.",
      am: "ስለ ተገናኘን እናመሰግናለን። በአንድ የስራ ቀን ውስጥ እንገናኛለን።",
      om: "Nu quunnamuu keessaniif galatoomaa. Guyyaa hojii tokko keessatti isiniin wal arganna.",
    },
    sendAnother: { en: "Send another message", am: "ሌላ መልዕክት ላክ", om: "Ergaa biraa ergi" },
  },
  // Pricing page
  pricing: {
    badge: { en: "Pricing", am: "ዋጋ", om: "Gatii" },
    title1: { en: "Simple, transparent", am: "ቀላል፣ ግልጽ", om: "Salphaa, ifaa" },
    title2: { en: "pricing", am: "ዋጋ አወጣጥ", om: "gatii" },
    desc: {
      en: "Choose the plan that fits your business. No hidden fees, no surprises.",
      am: "ለንግድዎ የሚስማማውን ዕቅድ ይምረጡ። ምንም ድብቅ ክፍያ የለም።",
      om: "Karoora daldalaa keessaniif ta'u filadhaa. Kaffaltiin dhoksaa hin jiru.",
    },
    plansLabel: { en: "Plans", am: "ዕቅዶች", om: "Karooraalee" },
    plansTitle: { en: "Find the right plan for you", am: "ለእርስዎ ተስማሚ ዕቅድ ያግኙ", om: "Karoora sirrii ta'e argadhaa" },
    popular: { en: "Most Popular", am: "በጣም ተወዳጅ", om: "Baay'ee Jaalatamaa" },
    tiers: [
      {
        name: { en: "Starter", am: "ጀማሪ", om: "Jalqabaa" },
        desc: { en: "Perfect for small businesses getting started with technology.", am: "ቴክኖሎጂ ለሚጀምሩ ትናንሽ ንግዶች ተስማሚ።", om: "Daldalaa xixiqqaa teeknooloojii jalqabuuf mijataa." },
        price: { en: "$499", am: "$499", om: "$499" },
        period: { en: "/month", am: "/ወር", om: "/ji'a" },
        features: [
          { en: "Up to 5 users", am: "እስከ 5 ተጠቃሚዎች", om: "Hanga fayyadamtoota 5" },
          { en: "Basic cloud hosting", am: "መሰረታዊ ክላውድ ማስተናገድ", om: "Kilaawudii bu'uuraa" },
          { en: "Email support", am: "የኢሜይል ድጋፍ", om: "Deeggarsa Imeelii" },
          { en: "Monthly reports", am: "ወርሃዊ ሪፖርቶች", om: "Gabaasa Ji'aa" },
          { en: "Basic security", am: "መሰረታዊ ደህንነት", om: "Nageenya Bu'uuraa" },
        ],
        cta: { en: "Get Started", am: "ይጀምሩ", om: "Jalqabaa" },
      },
      {
        name: { en: "Professional", am: "ፕሮፌሽናል", om: "Ogummaa" },
        desc: { en: "For growing businesses that need advanced features and support.", am: "የላቀ ባህሪያት እና ድጋፍ ለሚፈልጉ እያደጉ ያሉ ንግዶች።", om: "Daldalaa guddachaa amala olaanaa fi deeggarsa barbaadaniif." },
        price: { en: "$1,299", am: "$1,299", om: "$1,299" },
        period: { en: "/month", am: "/ወር", om: "/ji'a" },
        features: [
          { en: "Up to 25 users", am: "እስከ 25 ተጠቃሚዎች", om: "Hanga fayyadamtoota 25" },
          { en: "Advanced cloud infrastructure", am: "የላቀ ክላውድ መሰረተ ልማት", om: "Bu'uura kilaawudii olaanaa" },
          { en: "Priority support (24/7)", am: "ቅድሚያ ድጋፍ (24/7)", om: "Deeggarsa dursa (24/7)" },
          { en: "Real-time analytics", am: "የቅጽበት ትንተና", om: "Xiinxala yeroo qabatamaa" },
          { en: "Advanced security & compliance", am: "የላቀ ደህንነት እና ተገዢነት", om: "Nageenya olaanaa fi hordoffii" },
          { en: "Custom integrations", am: "ብጁ ውህደቶች", om: "Walitti makamsa addaa" },
          { en: "Dedicated account manager", am: "ልዩ ሂሳብ አስተዳዳሪ", om: "Bulchaa herrega addaa" },
        ],
        cta: { en: "Get Started", am: "ይጀምሩ", om: "Jalqabaa" },
      },
      {
        name: { en: "Enterprise", am: "ድርጅት", om: "Dhaabbata" },
        desc: { en: "Tailored solutions for large organizations with complex needs.", am: "ውስብስብ ፍላጎቶች ላላቸው ትላልቅ ድርጅቶች የተበጁ መፍትሔዎች።", om: "Furmaata dhaabbilee gurguddaa fedhii walxaxaa qabaniif qophaa'e." },
        price: { en: "Custom", am: "ብጁ", om: "Addaa" },
        period: null,
        features: [
          { en: "Unlimited users", am: "ያልተገደበ ተጠቃሚ", om: "Fayyadamtoota daangaa hin qabne" },
          { en: "Dedicated infrastructure", am: "ልዩ መሰረተ ልማት", om: "Bu'uura misoomaa addaa" },
          { en: "24/7 premium support", am: "24/7 ፕሪሚየም ድጋፍ", om: "Deeggarsa piremiyeemii 24/7" },
          { en: "Custom analytics & AI", am: "ብጁ ትንተና እና AI", om: "Xiinxala addaa fi AI" },
          { en: "Enterprise-grade security", am: "የድርጅት ደረጃ ደህንነት", om: "Nageenya sadarkaa dhaabbataa" },
          { en: "Full API access", am: "ሙሉ API ተደራሽነት", om: "Argama API guutuu" },
          { en: "SLA guarantee", am: "SLA ዋስትና", om: "Waadaa SLA" },
          { en: "On-site consultation", am: "በቦታው ምክክር", om: "Gorsa iddootti" },
        ],
        cta: { en: "Contact Sales", am: "ሽያጮችን ያግኙ", om: "Gurgurtaa Quunnamaa" },
      },
    ],
    faqLabel: { en: "FAQ", am: "ጥያቄዎች", om: "Gaaffilee" },
    faqTitle: { en: "Frequently asked questions", am: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች", om: "Gaaffilee yeroo baay'ee gaafataman" },
    faqs: [
      {
        q: { en: "Can I switch plans at any time?", am: "በማንኛውም ጊዜ ዕቅድ መቀየር እችላለሁ?", om: "Yeroo barbaaddetti karoora jijjiiruu nan danda'aa?" },
        a: { en: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.", am: "አዎ፣ በማንኛውም ጊዜ ዕቅድዎን ማሻሻል ወይም ማውረድ ይችላሉ።", om: "Eeyyee, yeroo barbaaddetti karoora keessan olkaasuu ykn gadi buusuu dandeessu." },
      },
      {
        q: { en: "Is there a free trial?", am: "ነጻ ሙከራ አለ?", om: "Yaalii bilisaa ni jiraa?" },
        a: { en: "We offer a 14-day free trial on our Starter and Professional plans. No credit card required.", am: "በጀማሪ እና ፕሮፌሽናል ዕቅዶች ላይ 14 ቀን ነጻ ሙከራ እናቀርባለን።", om: "Karoora Jalqabaa fi Ogummaa irratti yaalii bilisaa guyyaa 14 kennina." },
      },
      {
        q: { en: "What payment methods do you accept?", am: "ምን ዓይነት የክፍያ ዘዴዎች ይቀበላሉ?", om: "Mala kaffaltii akkamii fudhattan?" },
        a: { en: "We accept bank transfers, Telebirr, CBE Birr, and international credit cards.", am: "የባንክ ዝውውር፣ ቴሌብር፣ CBE ብር እና ዓለም አቀፍ ክሬዲት ካርዶችን እንቀበላለን።", om: "Dabarsa baankii, Telebirr, CBE Birr fi kaardii kireediitii addunyaa ni fudhanna." },
      },
      {
        q: { en: "Do you offer custom solutions?", am: "ብጁ መፍትሔዎች ያቀርባሉ?", om: "Furmaata addaa ni kennitan?" },
        a: { en: "Absolutely. Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements.", am: "በእርግጥ። የድርጅት ዕቅዳችን ሙሉ በሙሉ ሊበጅ ይችላል።", om: "Tole. Karoorri Dhaabbataa guutummaatti jijjiiramu danda'a. Fedhii keessan mari'achuuf garee gurgurtaa quunnamaa." },
      },
    ],
    ctaTitle: { en: "Ready to get started?", am: "ለመጀመር ዝግጁ ነዎት?", om: "Jalqabuuf qophiidha?" },
    ctaDesc: { en: "Contact us today and let's find the perfect solution for your business.", am: "ዛሬ ያግኙን ለንግድዎ ፍፁም መፍትሔ እናግኝ።", om: "Har'a nu quunnamaa furmaata daldalaa keessaniif sirrii ta'e haa argannu." },
    ctaButton: { en: "Contact Us", am: "ያግኙን", om: "Nu Quunnamaa" },
  },
  // Portfolio page
  portfolio: {
    badge: { en: "Portfolio", am: "ፖርትፎሊዮ", om: "Poortfooliyoo" },
    title1: { en: "Our proven", am: "የተረጋገጡ", om: "Hojii keenya" },
    title2: { en: "track record", am: "ስራዎቻችን", om: "mirkaneeffame" },
    desc: {
      en: "Explore the projects that showcase our expertise in building transformative technology solutions for Ethiopian organizations.",
      am: "ለኢትዮጵያ ድርጅቶች ለውጥ አምጪ የቴክኖሎጂ መፍትሔዎችን በመገንባት ላይ ያለንን ችሎታ የሚያሳዩ ፕሮጀክቶችን ያስሱ።",
      om: "Piroojektota dandeettii keenya furmaata teeknooloojii jijjiiramaa dhaabbilee Itoophiyaatiif ijaaruu agarsiisan qoradhaa.",
    },
    workLabel: { en: "Our Work", am: "ስራዎቻችን", om: "Hojii Keenya" },
    workTitle: { en: "Featured projects", am: "ተመራጭ ፕሮጀክቶች", om: "Piroojektota Filataman" },
    viewProject: { en: "View Project", am: "ፕሮጀክት ይመልከቱ", om: "Piroojektii Ilaalaa" },
    filters: [
      { key: "all", label: { en: "All", am: "ሁሉም", om: "Hunda" } },
      { key: "fintech", label: { en: "Fintech", am: "ፊንቴክ", om: "Fintekii" } },
      { key: "ecommerce", label: { en: "E-Commerce", am: "ኢ-ኮሜርስ", om: "Daldalaa Elektiroonikii" } },
      { key: "healthcare", label: { en: "Healthcare", am: "ጤና", om: "Fayyaa" } },
      { key: "logistics", label: { en: "Logistics", am: "ሎጂስቲክስ", om: "Loojistikii" } },
      { key: "government", label: { en: "Government", am: "መንግስት", om: "Mootummaa" } },
      { key: "telecom", label: { en: "Telecom", am: "ቴሌኮም", om: "Telekoomii" } },
    ],
    projects: [
      {
        title: { en: "Digital Banking Platform", am: "ዲጂታል ባንኪንግ መድረክ", om: "Ardii Baankii Dijitaalaa" },
        desc: { en: "A comprehensive digital banking solution processing 2M+ daily transactions for one of Ethiopia's largest commercial banks.", am: "ለኢትዮጵያ ትልቁ ንግድ ባንክ በቀን ከ2 ሚሊዮን በላይ ግብይቶችን የሚያቀናብር አጠቃላይ ዲጂታል ባንኪንግ መፍትሔ።", om: "Furmaata baankii dijitaalaa guutuu baankii daldalaa Itoophiyaa guddaa tokkoof guyyaatti daldala miliyoona 2 ol raawwatu." },
        category: { en: "Fintech", am: "ፊንቴክ", om: "Fintekii" },
        tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: { en: "Ethiopian Marketplace", am: "የኢትዮጵያ የገበያ ቦታ", om: "Gabaa Itoophiyaa" },
        desc: { en: "A scalable e-commerce platform connecting 10,000+ Ethiopian vendors with customers across East Africa.", am: "ከ10,000 በላይ የኢትዮጵያ ነጋዴዎችን ከምስራቅ አፍሪካ ደንበኞች ጋር የሚያገናኝ ተስፋፊ ኢ-ኮሜርስ መድረክ።", om: "Ardii daldalaa elektiroonikii bal'inaan daldaltoota Itoophiyaa 10,000 ol maamiltota Afrikaa Bahaa waliin walitti fidu." },
        category: { en: "E-Commerce", am: "ኢ-ኮሜርስ", om: "Daldalaa Elektiroonikii" },
        tech: ["Next.js", "Stripe", "MongoDB", "Docker"],
      },
      {
        title: { en: "Health Records System", am: "የጤና መዝገብ ስርዓት", om: "Sirnaa Galmee Fayyaa" },
        desc: { en: "An integrated health management system serving 50+ hospitals and clinics across Ethiopia with real-time patient data.", am: "በኢትዮጵያ ከ50 በላይ ሆስፒታሎችን እና ክሊኒኮችን የሚያገለግል የተዋሃደ የጤና አስተዳደር ስርዓት።", om: "Sirnaa bulchiinsa fayyaa walitti makamame hospitaalota fi kilinika 50 ol Itoophiyaa keessatti tajaajilu." },
        category: { en: "Healthcare", am: "ጤና", om: "Fayyaa" },
        tech: ["React", "Python", "FHIR", "Azure"],
      },
      {
        title: { en: "Supply Chain Dashboard", am: "የአቅርቦት ሰንሰለት ዳሽቦርድ", om: "Daashboordii Dhiyeessii" },
        desc: { en: "Real-time logistics tracking and analytics platform for Ethiopia's leading import/export company.", am: "ለኢትዮጵያ ግንባር ቀደም ኢምፖርት/ኤክስፖርት ድርጅት የቅጽበት ሎጂስቲክስ ክትትል እና ትንተና መድረክ።", om: "Ardii hordoffii loojistikii fi xiinxala yeroo qabatamaa dhaabbata galchii/alergii Itoophiyaa hogganaa ta'eef." },
        category: { en: "Logistics", am: "ሎጂስቲክስ", om: "Loojistikii" },
        tech: ["Vue.js", "Go", "Kafka", "GCP"],
      },
      {
        title: { en: "Citizen Services Portal", am: "የዜጎች አገልግሎት ፖርታል", om: "Portaalii Tajaajila Lammiilee" },
        desc: { en: "A unified government portal enabling citizens to access 200+ public services digitally, reducing wait times by 80%.", am: "ዜጎች ከ200 በላይ የመንግስት አገልግሎቶችን በዲጂታል እንዲያገኙ የሚያስችል የተዋሃደ ፖርታል።", om: "Portaalii mootummaa tokkomme lammiilee tajaajila uummataa 200 ol dijitaalaan akka argatan dandeessisu." },
        category: { en: "Government", am: "መንግስት", om: "Mootummaa" },
        tech: ["Angular", "Java", "Oracle", "Kubernetes"],
      },
      {
        title: { en: "Telecom Analytics Engine", am: "የቴሌኮም ትንተና ሞተር", om: "Injinii Xiinxala Telekoomii" },
        desc: { en: "An advanced analytics platform processing network data for Ethiopia's national telecom operator, optimizing coverage for 65M+ subscribers.", am: "ለ65 ሚሊዮን+ ተመዝጋቢዎች ሽፋንን ለማሻሻል የኔትወርክ ዳታን የሚያቀናብር የላቀ ትንተና መድረክ።", om: "Ardii xiinxala olaanaa deetaa neetworkii oparaatara telekoomii biyyaalessaa Itoophiyaatiif, uwwisa maamiltota miliyoona 65+ fooyyessu." },
        category: { en: "Telecom", am: "ቴሌኮም", om: "Telekoomii" },
        tech: ["Python", "Spark", "Elasticsearch", "AWS"],
      },
    ],
    stats: [
      { value: "50+", label: { en: "Projects Delivered", am: "የተጠናቀቁ ፕሮጀክቶች", om: "Piroojektota Xumuraman" } },
      { value: "200+", label: { en: "Happy Clients", am: "ደስተኛ ደንበኞች", om: "Maamiltota Gammadan" } },
      { value: "99.9%", label: { en: "Client Satisfaction", am: "የደንበኛ እርካታ", om: "Itti Quufinsa Maamiltootaa" } },
      { value: "10+", label: { en: "Industries Served", am: "የሚገለገሉ ኢንዱስትሪዎች", om: "Industirii Tajaajilamanii" } },
    ],
    ctaTitle: { en: "Have a project in mind?", am: "ፕሮጀክት በአእምሮዎ አለ?", om: "Piroojektii sammuu keessan keessa jiraa?" },
    ctaDesc: { en: "Let's discuss how we can bring your vision to life with our proven expertise.", am: "ራዕይዎን ወደ ተግባር ለመቀየር እንዴት ልንረዳዎ እንደምንችል እንነጋገር።", om: "Mul'ata keessan gara hojii qabatamaatti jijjiiruuf akkamiin akka isin gargaarru haa mari'annu." },
    ctaButton: { en: "Start a Project", am: "ፕሮጀክት ይጀምሩ", om: "Piroojektii Jalqabaa" },
  },
  // Footer
  footer: {
    desc: {
      en: "Empowering Ethiopian businesses with intelligent software solutions that drive growth and operational excellence.",
      am: "ዕድገትን እና ስራ አፈጻጸም ፍፁምነትን የሚያሳድጉ ብልጥ የሶፍትዌር መፍትሔዎችን በማቅረብ የኢትዮጵያ ንግዶችን ማብቃት።",
      om: "Furmaata sooftweerii ogummaa guddina fi gahumsa hojii oofaniin daldalaa Itoophiyaa cimsuu.",
    },
    company: { en: "Company", am: "ኩባንያ", om: "Dhaabbata" },
    aboutUs: { en: "About Us", am: "ስለ እኛ", om: "Waa'ee Keenya" },
    servicesLabel: { en: "Services", am: "አገልግሎቶች", om: "Tajaajila" },
    contactLabel: { en: "Contact", am: "ያግኙን", om: "Nu Quunnamaa" },
    servicesTitle: { en: "Services", am: "አገልግሎቶች", om: "Tajaajila" },
    cloud: { en: "Cloud Solutions", am: "ክላውድ መፍትሔ", om: "Furmaata Kilaawudii" },
    data: { en: "Data Analytics", am: "ዳታ ትንተና", om: "Xiinxala Deetaa" },
    dev: { en: "Custom Development", am: "ብጁ ልማት", om: "Misoomaa Addaa" },
    consulting: { en: "Consulting", am: "ማማከር", om: "Gorsaa" },
    connect: { en: "Connect", am: "ይገናኙ", om: "Wal Qunnamaa" },
    rights: { en: "© 2026 James Tech Solution. All rights reserved.", am: "© 2026 James Tech Solution. መብቶች በሙሉ የተጠበቁ ናቸው።", om: "© 2026 James Tech Solution. Mirgi hundi eegamaa dha." },
    privacy: { en: "Privacy Policy", am: "የግላዊነት ፖሊሲ", om: "Imaammata Iccitii" },
    terms: { en: "Terms of Service", am: "የአገልግሎት ውል", om: "Haala Tajaajilaa" },
  },
  oromoHistory: {
    badge: { en: "Heritage & Culture", am: "ቅርስ እና ባህል", om: "Aadaa fi Duudhaa" },
    title1: { en: "The Rich History of the", am: "የኦሮሞ ህዝብ", om: "Seenaa Badhaadhaa" },
    title2: { en: "Oromo People", am: "ታላቅ ታሪክ", om: "Ummata Oromoo" },
    desc: {
      en: "Explore the fascinating history, culture, and traditions of the Oromo people — one of the largest ethnic groups in Africa with a rich heritage spanning thousands of years.",
      am: "የኦሮሞ ህዝብ አስደናቂ ታሪክ፣ ባህል እና ወጎች ያስሱ — ከአፍሪካ ትልልቅ ብሄረሰቦች አንዱ ሲሆን በሺዎች ዓመታት የሚቆጠር ሀብታም ቅርስ ያለው ነው።",
      om: "Seenaa, aadaa fi duudhaa ummata Oromoo — gosa sanyii guddaa Afriikaa keessaa tokko kan duudhaa badhaadhinaan waggaa kumaatamaaf turu qabu — qoradhaa.",
    },
    introLabel: { en: "Overview", am: "አጠቃላይ እይታ", om: "Waliigala" },
    introTitle: { en: "Who Are the Oromo People?", am: "የኦሮሞ ህዝብ ማን ነው?", om: "Ummanni Oromoo Eenyu?" },
    introP1: {
      en: "The Oromo are a Cushitic-speaking people native to the Horn of Africa, primarily inhabiting Ethiopia. They are the largest ethnic group in Ethiopia and one of the largest in Africa, with a population of over 40 million. The Oromo have a rich cultural heritage that includes the Gadaa system of governance, vibrant oral traditions, and deep connections to the land.",
      am: "ኦሮሞዎች በአፍሪካ ቀንድ ውስጥ በዋነኝነት ኢትዮጵያን የሚኖሩ የኩሻዊ ቋንቋ ተናጋሪ ህዝብ ናቸው። በኢትዮጵያ ውስጥ ትልቁ ብሄረሰብ ሲሆኑ ከ40 ሚሊዮን በላይ ህዝብ አላቸው። ኦሮሞዎች የገዳ ስርዓት፣ ህያው የአፍ ወግ እና ከመሬት ጋር ጥልቅ ትስስርን ያካተተ ሀብታም ባህላዊ ቅርስ አላቸው።",
      om: "Oromoon ummata afaan Kuush dubbatu kan Gaanfa Afriikaa keessumaa Itoophiyaa jiraatudha. Gosa sanyii guddicha Itoophiyaa keessaa fi kan Afriikaa keessaa isa guddaa tokko yoo ta'u, baay'inni ummata isaa miliyoona 40 ol ta'a. Oromoon sirna bulchiinsa Gadaa, aadaa afaanii badhaadhinaa fi walitti dhufeenya lafa waliin gadi fagoo qabu hammatu qabu.",
    },
    introP2: {
      en: "Historically, the Oromo people have been pastoralists, farmers, and traders, with a deep spiritual connection to Waaqa (God) and nature. Their language, Afaan Oromoo, is the most widely spoken Cushitic language in the world and serves as a unifying force among the diverse Oromo clans.",
      am: "በታሪክ ኦሮሞዎች ከዋቃ (እግዚአብሄር) እና ከተፈጥሮ ጋር ጥልቅ መንፈሳዊ ትስስር ያላቸው አርብቶ አደሮች፣ ገበሬዎች እና ነጋዴዎች ነበሩ። ቋንቋቸው አፋን ኦሮሞ በዓለም ላይ በስፋት የሚነገር የኩሻዊ ቋንቋ ሲሆን በተለያዩ የኦሮሞ ጎሳዎች መካከል አንድ የሚያደርግ ኃይል ነው።",
      om: "Seenaa keessatti ummanni Oromoo horsiisee bultoota, qonnaan bultoota fi daldaltoota ta'uun Waaqa fi uumamaa waliin hariiroo ruuhii gadi fagoo qabu. Afaan isaanii, Afaan Oromoo, afaan Kuush addunyaa irratti bal'inaan dubbatamu yoo ta'u, gosota Oromoo garaa garaa gidduutti humna tokkoomsaa ta'ee tajaajila.",
    },
    timelineLabel: { en: "Historical Journey", am: "ታሪካዊ ጉዞ", om: "Adeemsa Seenaa" },
    timelineTitle: { en: "Key Periods in Oromo History", am: "በኦሮሞ ታሪክ ውስጥ ዋና ዋና ወቅቶች", om: "Yeroo Murteessaa Seenaa Oromoo Keessatti" },
    sections: [
      {
        title: { en: "Ancient Origins", am: "ጥንታዊ አመጣጥ", om: "Madda Durii" },
        content: {
          en: "The Oromo people trace their origins to the ancient Cushitic civilizations of Northeast Africa. Archaeological evidence suggests continuous habitation in the Horn of Africa for thousands of years, with distinct cultural practices and social structures developing over millennia.",
          am: "የኦሮሞ ህዝብ አመጣጡን ከሰሜን ምስራቅ አፍሪካ ጥንታዊ የኩሻዊ ስልጣኔዎች ያገኛል። የአርኪኦሎጂ ማስረጃዎች በአፍሪካ ቀንድ ውስጥ ለሺዎች ዓመታት ቀጣይ መኖሪያን ያመላክታሉ።",
          om: "Ummanni Oromoo madda isaanii sivilaayizeeshinii Kuush durii Afriikaa Kaaba Bahaa irraa maddu. Ragaaleen arkiyooloojii Gaanfa Afriikaa keessatti waggaa kumaatamaaf walitti fufiinsaan jiraachuu agarsiisu.",
        },
      },
      {
        title: { en: "The Gadaa System (Pre-16th Century)", am: "የገዳ ስርዓት (ከ16ኛው ክፍለ ዘመን በፊት)", om: "Sirna Gadaa (Jaarraa 16ffaa Dura)" },
        content: {
          en: "The Gadaa system is a traditional system of governance that has regulated the political, economic, social, and religious life of the Oromo people for centuries. It is a democratic system where leaders are elected every eight years, making it one of the oldest democratic traditions in the world. UNESCO inscribed it as an Intangible Cultural Heritage of Humanity in 2016.",
          am: "የገዳ ስርዓት ለዘመናት የኦሮሞ ህዝብ ፖለቲካዊ፣ ኢኮኖሚያዊ፣ ማህበራዊ እና ሃይማኖታዊ ህይወትን የሚቆጣጠር ባህላዊ የአስተዳደር ስርዓት ነው። መሪዎች በየ8 ዓመቱ የሚመረጡበት ዴሞክራሲያዊ ስርዓት ነው።",
          om: "Sirni Gadaa sirna bulchiinsa aadaa jireenya siyaasaa, dinagdee, hawaasummaa fi amantii ummata Oromoo jaarraa hedduuf to'ataa ture. Sirna dimokiraasii kan hogganoonni waggaa saddeet saddeetiin filataman yoo ta'u, aadaa dimokiraasii addunyaa irratti durii keessaa isa tokko. UNESCOn bara 2016 Duudhaa Aadaa Hin-tuqamne Dhala Namaatti galmeesse.",
        },
      },
      {
        title: { en: "The Oromo Expansion (16th Century)", am: "የኦሮሞ መስፋፋት (16ኛው ክፍለ ዘመን)", om: "Babal'ina Oromoo (Jaarraa 16ffaa)" },
        content: {
          en: "During the 16th century, the Oromo people underwent a significant expansion across the Horn of Africa. This movement, sometimes called the 'Oromo migrations,' saw the Oromo people settle in vast new territories, establishing their cultural and political presence across what is now central and southern Ethiopia, as well as parts of Kenya.",
          am: "በ16ኛው ክፍለ ዘመን የኦሮሞ ህዝብ በአፍሪካ ቀንድ ውስጥ ከፍተኛ መስፋፋት አካሄደ። ይህ እንቅስቃሴ ኦሮሞዎች በሰፊ አዲስ ግዛቶች ውስጥ እንዲሰፍሩ አድርጓል።",
          om: "Jaarraa 16ffaa keessatti ummanni Oromoo Gaanfa Afriikaa keessatti babal'ina guddaa raawwate. Sochiin kun ummanni Oromoo naannoo haaraa bal'aa keessatti akka qubatan taasise.",
        },
      },
      {
        title: { en: "Resistance & Resilience (19th-20th Century)", am: "ተቃውሞ እና ጽናት (19ኛ-20ኛ ክፍለ ዘመን)", om: "Mormii fi Cimina (Jaarraa 19-20ffaa)" },
        content: {
          en: "The Oromo faced significant challenges during the imperial expansion of the Ethiopian Empire under Emperor Menelik II in the late 19th century. Despite losing political autonomy, the Oromo maintained their cultural identity, language, and traditions. Throughout the 20th century, various Oromo movements emerged seeking self-determination and cultural rights.",
          am: "ኦሮሞዎች በ19ኛው ክፍለ ዘመን መጨረሻ በንጉስ ምኒልክ 2ኛ ዘመነ መንግስት ከፍተኛ ፈተናዎች ገጠሟቸው። ፖለቲካዊ ራስ ገዝነትን ቢያጡም ባህላዊ ማንነታቸውን፣ ቋንቋቸውን እና ወጋቸውን ጠብቀዋል።",
          om: "Oromoon jaarraa 19ffaa dhuma irratti babal'ina Impaayera Itoophiyaa Mootii Minilik 2ffaa jalatti rakkoo guddaa mudatan. Birmadummaa siyaasaa dhabaniillee, eenyummaa aadaa, afaan fi aadaa isaanii eegan.",
        },
      },
      {
        title: { en: "Modern Era & Cultural Revival", am: "ዘመናዊ ዘመን እና ባህላዊ ትንሣኤ", om: "Bara Ammaa fi Haaromsa Aadaa" },
        content: {
          en: "Today, the Oromo people are experiencing a cultural renaissance. Afaan Oromoo has become the official working language of the Oromia Regional State, Oromo music and art flourish globally, and there is growing pride in Oromo identity. The election of Abiy Ahmed (of Oromo heritage) as Prime Minister of Ethiopia in 2018 marked a historic moment.",
          am: "ዛሬ የኦሮሞ ህዝብ ባህላዊ ትንሣኤ እያሳየ ነው። አፋን ኦሮሞ የኦሮሚያ ክልል ርስመ መንግስት ኦፊሴላዊ የስራ ቋንቋ ሆኗል፣ የኦሮሞ ሙዚቃ እና ስነ-ጥበብ በዓለም ዙሪያ እያበበ ነው።",
          om: "Har'a ummanni Oromoo haaromsa aadaa mulataa jiru. Afaan Oromoo afaan hojii mootummaa naannoo Oromiyaa ta'eera, muuziqaa fi aartiin Oromoo addunyaa irratti dagaagaa jiru, akkasumas eenyummaa Oromootiin boonuun guddachaa jira.",
        },
      },
    ],
    gadaaLabel: { en: "Democratic Heritage", am: "ዴሞክራሲያዊ ቅርስ", om: "Duudhaa Dimokiraasii" },
    gadaaTitle: { en: "The Gadaa System: Africa's Oldest Democracy", am: "የገዳ ስርዓት: የአፍሪካ እጅግ ጥንታዊ ዴሞክራሲ", om: "Sirna Gadaa: Dimokiraasii Durii Afriikaa" },
    gadaaP1: {
      en: "The Gadaa system is an indigenous democratic socio-political system of the Oromo people. It organizes society into age-grade classes (Gadaa grades) that rotate power every eight years, ensuring no single leader or group holds authority indefinitely.",
      am: "የገዳ ስርዓት የኦሮሞ ህዝብ ልዩ ዴሞክራሲያዊ ማህበረ-ፖለቲካዊ ስርዓት ነው። ማህበረሰቡን በየ8 ዓመቱ ስልጣን በሚለዋወጡ የዕድሜ ደረጃ ክፍሎች ያደራጃል።",
      om: "Sirni Gadaa sirna hawaas-siyaasaa dimokiraatawaa uummataa ummata Oromoo ti. Hawaasa sadarkaa umurii (sadarkaa Gadaa) waggaa saddeet saddeetiin aangomsiisuun qindeessa.",
    },
    gadaaP2: {
      en: "Under the Gadaa system, Oromo society had checks and balances, rule of law, and peaceful transfer of power — principles that many modern democracies aspire to. The system governed everything from conflict resolution and resource management to marriage laws and religious ceremonies.",
      am: "በገዳ ስርዓት ስር የኦሮሞ ማህበረሰብ ቁጥጥር እና ሚዛን፣ የህግ የበላይነት እና ሰላማዊ የስልጣን ሽግግር ነበረው — ብዙ ዘመናዊ ዴሞክራሲዎች የሚመኟቸው መርሆዎች።",
      om: "Sirna Gadaa jalatti hawaasni Oromoo to'annoo fi madaala, seeraan bulmaata, fi dabarsaa aangoo nagaatiin — qajeelfamoota dimokiraasiin ammaa hedduun hawwan — qabu ture.",
    },
    gadaaP3: {
      en: "UNESCO recognized the Gadaa system as an Intangible Cultural Heritage of Humanity in 2016, acknowledging its exceptional value to world heritage and its enduring relevance as a model of democratic governance.",
      am: "UNESCO በ2016 የገዳ ስርዓትን እንደ ለሰው ልጅ ዋጋ ያለው ባህላዊ ቅርስ እውቅና ሰጥቷል — ለዓለም ቅርስ ልዩ ዋጋው እና እንደ ዴሞክራሲያዊ አስተዳደር ሞዴል ቀጣይ ጠቀሜታውን በመቀበል።",
      om: "UNESCOn bara 2016 Sirna Gadaa Duudhaa Aadaa Hin-tuqamne Dhala Namaatti beekamtii kenneera — gatii addaa duudhaa addunyaatiif qabu fi akka moodeela bulchiinsa dimokiraasii ta'ee barbaachisummaa isaa itti fufiinsa qabu fudhatee.",
    },
    cultureLabel: { en: "Living Heritage", am: "ህያው ቅርስ", om: "Duudhaa Jiraataa" },
    cultureTitle: { en: "Oromo Cultural Treasures", am: "የኦሮሞ ባህላዊ ሀብቶች", om: "Badhaadhina Aadaa Oromoo" },
    cultureItems: [
      {
        title: { en: "Music & Oral Traditions", am: "ሙዚቃ እና የአፍ ወግ", om: "Muuziqaa fi Aadaa Afaanii" },
        desc: {
          en: "Oromo music features unique instruments and poetic traditions. Geerarsa (war chants), Weedduu (love songs), and Faaruu (praise songs) form a rich oral literary tradition passed through generations.",
          am: "የኦሮሞ ሙዚቃ ልዩ መሳሪያዎችን እና ግጥማዊ ወጎችን ያሳያል። ገረርሳ፣ ዌዱ እና ፋሩ ከትውልድ ወደ ትውልድ የሚተላለፍ ሀብታም የአፍ ስነ-ጽሁፍ ወግ ይፈጥራሉ።",
          om: "Muuziqaan Oromoo meeshaalee addaa fi aadaa walaloo of keessatti qaba. Geerarsi, Weedduu fi Faaruun aadaa ogbarruu afaanii badhaadhaa dhaloota irraa dhalootatti darbu uumu.",
        },
      },
      {
        title: { en: "Irreecha Festival", am: "ኢሬቻ ፌስቲቫል", om: "Ayyaana Irreechaa" },
        desc: {
          en: "Irreecha is the annual Oromo thanksgiving festival celebrated at the end of the rainy season. Millions gather at Lake Hora Arsadi in Bishoftu to give thanks to Waaqa (God) for peace, fertility, and abundance.",
          am: "ኢሬቻ በየዓመቱ በክረምት ወቅት መጨረሻ ላይ የሚከበር የኦሮሞ የምስጋና በዓል ነው። ሚሊዮኖች ለሰላም፣ ለመራባት እና ለብዛት ለዋቃ ምስጋና ለማቅረብ ብሹፍቱ ሖራ አርሳዲ ሀይቅ ላይ ይሰበሰባሉ።",
          om: "Irreechaan ayyaana galateeffannaa Oromoo kan waggaa waggaan dhuma roobaa irratti kabajamu dha. Miliyoonni Hora Arsadii Bishooftuutti nagaa, hormaata fi badhaadhinaaf Waaqa galateeffachuuf walitti qabu.",
        },
      },
      {
        title: { en: "Social Unity & Kinship", am: "ማህበራዊ አንድነት", om: "Tokkummaa Hawaasaa" },
        desc: {
          en: "The Oromo value communal living through systems like Daadhii (communal labor), Guza (mutual aid), and Jigi (collective work). These practices strengthen social bonds and ensure community welfare across generations.",
          am: "ኦሮሞዎች እንደ ዳዲ፣ ጉዛ እና ጂጊ ባሉ ስርዓቶች በኩል የጋራ ኑሮን ከፍ አድርገው ይመለከታሉ። እነዚህ ልምዶች ማህበራዊ ትስስርን ያጠናክራሉ።",
          om: "Oromoon jireenya hawaasaa sirnoota akka Daadhii, Guzaa fi Jigii faa'idaa irraa fayyadamu. Shaakalonni kun hidhata hawaasummaa cimsu fi faayidaa hawaasaa dhaloota hunda mirkaneessu.",
        },
      },
    ],
    // Notable Leaders
    leadersLabel: { en: "Notable Figures", am: "ታዋቂ ሰዎች", om: "Namoota Beekamoo" },
    leadersTitle: { en: "Legendary Oromo Leaders", am: "አፈ ታሪካዊ የኦሮሞ መሪዎች", om: "Hoggantoota Oromoo Seenaa Qabeessa" },
    leadersDesc: {
      en: "Throughout history, remarkable Oromo leaders have shaped the course of the Horn of Africa through their courage, vision, and leadership.",
      am: "በታሪክ ውስጥ ልዩ ልዩ የኦሮሞ መሪዎች በድፍረታቸው፣ በራዕያቸው እና በአመራራቸው የአፍሪካ ቀንድን ታሪክ ቀርፀዋል።",
      om: "Seenaa keessatti hogganoonni Oromoo addaa ta'an gootummaa, mul'ataa fi hogganummaa isaaniitiin adeemsa Gaanfa Afriikaa bocaniiru.",
    },
    leaders: [
      {
        name: "Abba Jifar II",
        era: { en: "1861–1934", am: "1861–1934", om: "1861–1934" },
        desc: {
          en: "King of Jimma Abba Jifar, one of the five Gibe kingdoms. A skilled diplomat who maintained Jimma's autonomy through strategic alliances, making it one of the last independent Oromo kingdoms.",
          am: "የጅማ አባ ጅፋር ንጉስ፣ ከአምስቱ የጊቤ መንግስታት አንዱ። ጅማን በስልታዊ ህብረት ራስ ገዝነቷን ያስጠበቀ ብቃት ያለው ዲፕሎማት።",
          om: "Mootii Jimma Abbaa Jifaar, mootummoota Gibee shanan keessaa tokko. Diplomaatii ogummaa qabu kan birmadummaa Jimmaa tumsa tarsiimootiitiin eege, mootummoota Oromoo walaba ta'an keessaa isa dhumaa godhe.",
        },
      },
      {
        name: "Ras Gobana Dacche",
        era: { en: "1821–1889", am: "1821–1889", om: "1821–1889" },
        desc: {
          en: "A powerful Oromo military leader and general who played a significant role in the expansion of the Ethiopian Empire. Despite controversy, he remains one of the most influential Oromo figures of the 19th century.",
          am: "የኢትዮጵያ ኢምፓየር መስፋፋት ላይ ጉልህ ሚና የተጫወተ ኃያል የኦሮሞ ወታደራዊ መሪ። ከውዝግብ ቢኖርም በ19ኛው ክፍለ ዘመን ከፍተኛ ተጽዕኖ ካላቸው የኦሮሞ ሰዎች አንዱ ነው።",
          om: "Hogganaa waraanaa Oromoo cimaa kan babal'ina Impaayera Itoophiyaa keessatti gahee guddaa taphate. Falmiilee ta'us, jaarraa 19ffaa keessatti namoota Oromoo dhiibbaa guddaa qaban keessaa tokko ta'ee hafa.",
        },
      },
      {
        name: "General Tadesse Birru",
        era: { en: "1921–1975", am: "1921–1975", om: "1921–1975" },
        desc: {
          en: "A decorated Ethiopian military general of Oromo origin who became a champion of Oromo rights. He advocated for the recognition of Afaan Oromoo and equal rights for the Oromo people, ultimately paying with his life.",
          am: "ለኦሮሞ መብቶች ተሟጋች የሆነ ክቡር የኢትዮጵያ ጦር ጄኔራል። የአፋን ኦሮሞ እውቅና እና ለኦሮሞ ህዝብ እኩል መብቶች ተከራክሯል።",
          om: "Jeneraalii waraanaa Itoophiyaa kabajamaa dhiiga Oromoo kan mirga Oromoo falmuuf ka'e. Beekamtii Afaan Oromoo fi mirga walqixaa ummata Oromootiif falme, jireenya isaatiin kaffale.",
        },
      },
      {
        name: "Haile Fida",
        era: { en: "1943–1979", am: "1943–1979", om: "1943–1979" },
        desc: {
          en: "A brilliant Oromo linguist and intellectual who developed the Latin-based script (Qubee) for writing Afaan Oromoo. His work laid the foundation for Oromo literacy and language standardization.",
          am: "ለአፋን ኦሮሞ መጻፊያ የላቲን ቅርጸ ቁምፊ (ቁቤ) ያዘጋጀ ብቃት ያለው የኦሮሞ ቋንቋ ተመራማሪ። ስራው ለኦሮሞ ማንበብና መጻፍ እና ቋንቋ ደረጃ ማስያዝ መሰረት ጥሏል።",
          om: "Hayyuu afaanii Oromoo qaroo kan barreeffama Afaan Oromootiif akkaataa qubee Laatinii (Qubee) qopheesse. Hojiin isaa bu'uura barreeffamaa fi dhaabbata afaan Oromootiif kaa'e.",
        },
      },
    ],
    // Qubee Alphabet
    qubeeLabel: { en: "Language & Identity", am: "ቋንቋ እና ማንነት", om: "Afaan fi Eenyummaa" },
    qubeeTitle: { en: "The Qubee Alphabet: Writing the Oromo Voice", am: "ቁቤ ፊደል: የኦሮሞ ድምፅ መጻፊያ", om: "Qubee: Sagalee Oromoo Barreessuu" },
    qubeeP1: {
      en: "For centuries, Afaan Oromoo — one of the most widely spoken languages in Africa — had no standardized writing system. The adoption of the Latin-based Qubee alphabet in 1991 was a watershed moment in Oromo history, enabling millions to read and write in their mother tongue for the first time.",
      am: "ለዘመናት አፋን ኦሮሞ — ከአፍሪካ በስፋት ከሚነገሩ ቋንቋዎች አንዱ — ደረጃውን የጠበቀ የጽሑፍ ስርዓት አልነበረውም። በ1991 የላቲን ቅርጸ ቁቤ ፊደል መቀበል በኦሮሞ ታሪክ ውስጥ ወሳኝ ነጥብ ነበር።",
      om: "Jaarraa hedduuf Afaan Oromoo — afaanota Afriikaa keessatti bal'inaan dubbataman keessaa tokko — sirna barreeffamaa dhaabbataa hin qabu ture. Fudhannaan Qubee akkaataa Laatinii bara 1991 seenaa Oromoo keessatti yeroo jijjiiramaa ture, miliyoonota afaan haadhaatiin dubbisuu fi barreessuu dandeessise.",
    },
    qubeeP2: {
      en: "The intellectual groundwork for Qubee was laid by scholars like Haile Fida and Sheikh Bakri Sapalo, who championed the idea that Afaan Oromoo deserved its own accessible writing system. After decades of suppression, the Oromo Liberation Front (OLF) officially adopted Qubee in 1991.",
      am: "ለቁቤ የአዕምሮ መሰረት እንደ ሀይሌ ፊዳ እና ሸህ በክሪ ሳፓሎ ባሉ ምሁራን ተጥሏል። ከአስርት ዓመታት ጭቆና በኋላ የኦሮሞ ነፃነት ግንባር (OLF) በ1991 ቁቤን በይፋ ተቀበለ።",
      om: "Bu'uurri yaadaa Qubee hayyoota akka Haaile Fidaa fi Sheikh Bakrii Saphaloo faan kaa'ame, kan yaada Afaan Oromoo sirna barreeffamaa mataa isaa dhaqqabamaa ta'e argachuu qabu jedhu falman. Dhiibbaa waggoota kurnoota booda, Addi Bilisummaa Oromoo (ABO) bara 1991 Qubee ifatti fudhate.",
    },
    qubeeP3: {
      en: "Today, Qubee is the official script of the Oromia Regional State. It is used in schools, government, media, and literature. The alphabet has 33 characters (including 5 vowels and 28 consonants) and uses doubled letters to represent long sounds — a feature that elegantly captures the phonetic richness of Afaan Oromoo.",
      am: "ዛሬ ቁቤ የኦሮሚያ ክልል ኦፊሴላዊ ጽሁፍ ነው። በትምህርት ቤቶች፣ በመንግስት፣ በሚዲያ እና በስነ-ጽሁፍ ጥቅም ላይ ይውላል። ፊደሉ 33 ቁምፊዎች ያሉት ሲሆን ረዥም ድምፆችን ለማሳየት የድርብ ፊደል ይጠቀማል።",
      om: "Har'a Qubeen barreeffama ifatti Mootummaa Naannoo Oromiyaa ti. Manneen barnootaa, mootummaa, miidiyaa fi ogbarruu keessatti fayyadama. Qubeen arfii 33 (dubbachiiftota 5 fi dubbifamtoota 28 dabalatee) qaba, sagalee dheeraa agarsiisuf qubee dachaa fayyadama — amala miidhagaa badhaadhina sagalee Afaan Oromoo qabatu.",
    },
  },
} as const;
