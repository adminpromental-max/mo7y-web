export type Locale = "ar" | "en";

export const translations = {
  ar: {
    nav: {
      services: "الخدمات",
      clients: "عملاؤنا",
      why: "لماذا Mo7y",
      journey: "رحلتنا",
      contact: "تواصل",
      studio: "Mo7y Studio",
      cta: "احجز استشارتك",
      menu: "القائمة",
    },
    hero: {
      badge: "7 خدمات متكاملة",
      tagline: "نُحيي مشروعك",
      taglineSub: "7 خدمات متكاملة — من الاستراتيجية للنمو",
      description:
        "فريق متكامل بخبرة +15 سنة — نشتغل مع رواد الأعمال والشركات الناشئة والقائمة في السعودية.",
      ctaPrimary: "احجز استشارتك",
      ctaSecondary: "استكشف الخدمات",
      scroll: "اكتشف المزيد",
    },
    clients: {
      badge: "عملاؤنا",
      title: "ثقة شركاء النجاح",
      subtitle: "أكثر من 200 عميل اختاروا Mo7y لبناء حضورهم الرقمي",
    },
    stats: [
      { value: 15, suffix: "+", label: "سنوات خبرة" },
      { value: 500, suffix: "+", label: "مشروع منجز" },
      { value: 200, suffix: "+", label: "عميل سعيد" },
      { value: 7, suffix: "", label: "خدمات متكاملة" },
    ],
    services: {
      badge: "خدماتنا",
      titleBefore: "فريق",
      titleAfter: "يقدم 7 خدمات لخدمه مشروعك",
      subtitle:
        "مرّر فوق أي خدمة لاستكشافها — اسحب الدائرة للتدوير",
      dragHint: "اسحب للتدوير",
      cta: "مش متأكد أي خدمة تحتاج؟ احجز استشارة",
      studioLink: "عبر Mo7y Studio",
      items: [
        {
          id: "growth",
          number: "01",
          title: "استراتيجيات النمو وتطوير الأعمال",
          description:
            "دراسة سوق · تحليل منافسين · خطة نمو قابلة للتنفيذ — قبل أي إعلان أو تصوير.",
        },
        {
          id: "visual",
          number: "02",
          title: "الإنتاج المرئي وصناعة المحتوى",
          description:
            "تصوير · فيديو · مونتاج · موشن جرافيك — إنتاج بصري يخدم أهدافك التسويقية.",
          isStudio: true,
        },
        {
          id: "branding",
          number: "03",
          title: "بناء العلامة التجارية والهوية",
          description:
            "هوية متكاملة · رسالة واضحة · تميز عن المنافسين — مش شعار وألوان بس.",
        },
        {
          id: "web",
          number: "04",
          title: "تصميم المواقع والتجارب الرقمية",
          description:
            "مواقع · متاجر · صفحات هبوط — سريعة · SEO · تحوّل الزوار لعملاء.",
        },
        {
          id: "marketing",
          number: "05",
          title: "التسويق الرقمي وتحليل الأداء",
          description:
            "حملات · SEO · استراتيجية محتوى · تحليل أداء — نتائج قابلة للقياس.",
        },
        {
          id: "consulting",
          number: "06",
          title: "استشارات النمو والأعمال والتقنية",
          description:
            "جلسات استشارية · خارطة طريق · تحول رقمي — قرارات مبنية على بيانات.",
        },
        {
          id: "personal-brand",
          number: "07",
          title: "البرسونال براند والإرشاد",
          description:
            "حضور مهني · استراتيجية محتوى · positioning — مش مشهورية، فرص حقيقية.",
        },
      ],
    },
    audienceChips: [
      "رواد الأعمال",
      "شركات ناشئة",
      "شركات قائمة",
      "البرسونال براند",
      "مشاريع بفكرة",
    ],
    why: {
      badge: "لماذا Mo7y",
      title: "مش بس وكالة — شريك نمو",
      p1: "نحن لا نبيع تصويراً أو مونتاجاً أو تصميم مواقع فقط. نبني علامات تجارية قوية ونساعد الشركات على النمو والسيطرة على مكانتها في السوق.",
      p2: "كل قرار مبني على دراسة وتحليل، وكل قطعة محتوى لها هدف واضح، وكل حملة تقاس بنتائجها.",
      points: [
        "منظومة متكاملة — مش خدمات منفصلة",
        "كل قرار مبني على دراسة وتحليل",
        "كل محتوى له هدف واضح",
        "كل حملة تُقاس بنتائجها",
        "نبني علامات تجارية — مش بس تصوير أو مواقع",
      ],
    },
    journey: {
      badge: "رحلتنا معاك",
      title: "من الفكرة للنمو",
      subtitle: "4 خطوات واضحة — مش تعقيد enterprise.",
      steps: [
        {
          step: "01",
          title: "دراسة وفهم",
          description: "نفهم مشروعك · السوق · الجمهور · المنافسين.",
        },
        {
          step: "02",
          title: "استراتيجية",
          description: "خطة نمو · هوية · قنوات · أولويات تنفيذ.",
        },
        {
          step: "03",
          title: "تنفيذ",
          description: "مواقع · محتوى · تسويق · إنتاج بصري عند الحاجة.",
        },
        {
          step: "04",
          title: "نمو وقياس",
          description: "تحليل أداء · تحسين مستمر · نتائج قابلة للقياس.",
        },
      ],
    },
    studio: {
      badge: "Mo7y Studio",
      title: "تحتاج تصوير أو فيديو؟",
      description:
        "الإنتاج المرئي عبر Mo7y Studio — تصوير فوتوغرافي · فيديو · مونتاج · موشن جرافيك. نفس الجودة · نفس الفريق.",
      cta: "زور Mo7y Studio",
    },
    contact: {
      badge: "تواصل معنا",
      title: "جاهز نُحيي مشروعك؟",
      subtitle: "احجز استشارتك الأولى — Online أو حضوري في السعودية.",
      whatsapp: "تواصل عبر واتساب",
      whatsappMsg: "مرحباً، أريد حجز استشارة مع Mo7y",
    },
    footer: {
      tagline: "نُحيي مشروعك — 7 خدمات متكاملة للمشاريع الناشئة والشركات في السعودية.",
      servicesTitle: "الخدمات",
      servicesList: [
        "استراتيجيات النمو",
        "الهوية والبراند",
        "تصميم المواقع",
        "التسويق الرقمي",
      ],
      linksTitle: "روابط",
      studioLink: "Mo7y Studio — إنتاج بصري",
      ourServices: "خدماتنا",
      contactUs: "تواصل معنا",
      contactTitle: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      motto: "7 SERVICES · ONE VISION",
    },
    lang: { switch: "EN" },
  },
  en: {
    nav: {
      services: "Services",
      clients: "Clients",
      why: "Why Mo7y",
      journey: "Our Process",
      contact: "Contact",
      studio: "Mo7y Studio",
      cta: "Book a Consultation",
      menu: "Menu",
    },
    hero: {
      badge: "7 Integrated Services",
      tagline: "We Revive Your Project",
      taglineSub: "7 integrated services — from strategy to growth",
      description:
        "A complete team with 15+ years of experience — working with entrepreneurs, startups, and established businesses across Saudi Arabia.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "Explore Services",
      scroll: "Discover More",
    },
    clients: {
      badge: "Our Clients",
      title: "Trusted by Industry Leaders",
      subtitle: "200+ clients chose Mo7y to build their digital presence",
    },
    stats: [
      { value: 15, suffix: "+", label: "Years Experience" },
      { value: 500, suffix: "+", label: "Projects Delivered" },
      { value: 200, suffix: "+", label: "Happy Clients" },
      { value: 7, suffix: "", label: "Integrated Services" },
    ],
    services: {
      badge: "Our Services",
      titleBefore: "",
      titleAfter: "team offers 7 services for your project",
      subtitle: "Hover any service to explore — drag the circle to rotate",
      dragHint: "Drag to rotate",
      cta: "Not sure which service you need? Book a consultation",
      studioLink: "via Mo7y Studio",
      items: [
        {
          id: "growth",
          number: "01",
          title: "Growth Strategy & Business Development",
          description:
            "Market research · competitor analysis · actionable growth plans — before any ads or production.",
        },
        {
          id: "visual",
          number: "02",
          title: "Visual Production & Content",
          description:
            "Photography · video · editing · motion graphics — visual content that serves your marketing goals.",
          isStudio: true,
        },
        {
          id: "branding",
          number: "03",
          title: "Brand Building & Identity",
          description:
            "Complete identity · clear messaging · stand out from competitors — more than just a logo.",
        },
        {
          id: "web",
          number: "04",
          title: "Web Design & Digital Experiences",
          description:
            "Websites · e-commerce · landing pages — fast · SEO-optimized · converts visitors to customers.",
        },
        {
          id: "marketing",
          number: "05",
          title: "Digital Marketing & Analytics",
          description:
            "Campaigns · SEO · content strategy · performance analytics — measurable results.",
        },
        {
          id: "consulting",
          number: "06",
          title: "Growth, Business & Tech Consulting",
          description:
            "Consulting sessions · roadmaps · digital transformation — data-driven decisions.",
        },
        {
          id: "personal-brand",
          number: "07",
          title: "Personal Brand & Mentorship",
          description:
            "Professional presence · content strategy · positioning — real opportunities, not just fame.",
        },
      ],
    },
    audienceChips: [
      "Entrepreneurs",
      "Startups",
      "Established Companies",
      "Personal Brands",
      "Idea-Stage Projects",
    ],
    why: {
      badge: "Why Mo7y",
      title: "Not Just an Agency — A Growth Partner",
      p1: "We don't just sell photography, editing, or web design. We build strong brands and help companies grow and dominate their market position.",
      p2: "Every decision is backed by research and analysis. Every piece of content has a clear purpose. Every campaign is measured by its results.",
      points: [
        "Integrated ecosystem — not disconnected services",
        "Every decision backed by research & analysis",
        "Every piece of content has a clear purpose",
        "Every campaign measured by results",
        "We build brands — not just websites or content",
      ],
    },
    journey: {
      badge: "Our Journey With You",
      title: "From Idea to Growth",
      subtitle: "4 clear steps — no enterprise complexity.",
      steps: [
        {
          step: "01",
          title: "Research & Discovery",
          description:
            "We understand your project · market · audience · competitors.",
        },
        {
          step: "02",
          title: "Strategy",
          description:
            "Growth plan · identity · channels · execution priorities.",
        },
        {
          step: "03",
          title: "Execution",
          description:
            "Websites · content · marketing · visual production when needed.",
        },
        {
          step: "04",
          title: "Growth & Measurement",
          description:
            "Performance analytics · continuous optimization · measurable results.",
        },
      ],
    },
    studio: {
      badge: "Mo7y Studio",
      title: "Need Photography or Video?",
      description:
        "Visual production through Mo7y Studio — photography · video · editing · motion graphics. Same quality · same team.",
      cta: "Visit Mo7y Studio",
    },
    contact: {
      badge: "Get in Touch",
      title: "Ready to Revive Your Project?",
      subtitle:
        "Book your first consultation — online or in-person in Saudi Arabia.",
      whatsapp: "Chat on WhatsApp",
      whatsappMsg: "Hello, I'd like to book a consultation with Mo7y",
    },
    footer: {
      tagline:
        "We revive your project — 7 integrated services for startups and businesses in Saudi Arabia.",
      servicesTitle: "Services",
      servicesList: [
        "Growth Strategy",
        "Brand & Identity",
        "Web Design",
        "Digital Marketing",
      ],
      linksTitle: "Links",
      studioLink: "Mo7y Studio — Visual Production",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      motto: "7 SERVICES · ONE VISION",
    },
    lang: { switch: "عربي" },
  },
} as const;

export type Translations = (typeof translations)[Locale];
