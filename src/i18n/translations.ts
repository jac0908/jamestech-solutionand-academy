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
    contact: { en: "Contact", am: "ያግኙን", om: "Nu Quunnamaa" },
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
      {
        name: "Meron Alemu",
        role: { en: "VP of Client Success", am: "የደንበኛ ስኬት ምክትል ፕሬዚዳንት", om: "I/A P. Milkaa'ina Maamiltootaa" },
        bio: {
          en: "Dedicated to ensuring every Ethiopian client achieves their strategic objectives.",
          am: "እያንዳንዱ ኢትዮጵያዊ ደንበኛ ስልታዊ ዓላማቸውን እንዲያሳኩ መርዳት።",
          om: "Maamilli Itoophiyaa hundi kaayyoo tarsiimoowwan isaanii akka galmaan ga'an mirkaneessuu.",
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
} as const;
