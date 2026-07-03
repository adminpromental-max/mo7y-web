import {
  TrendingUp,
  Camera,
  Palette,
  Globe,
  BarChart3,
  Lightbulb,
  UserCircle,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  number: string;
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isStudio?: boolean;
}

export const services: Service[] = [
  {
    number: "01",
    id: "growth",
    title: "استراتيجيات النمو وتطوير الأعمال",
    description:
      "دراسة سوق · تحليل منافسين · خطة نمو قابلة للتنفيذ — قبل أي إعلان أو تصوير.",
    icon: TrendingUp,
  },
  {
    number: "02",
    id: "visual",
    title: "الإنتاج المرئي وصناعة المحتوى",
    description:
      "تصوير · فيديو · مونتاج · موشن جرافيك — إنتاج بصري يخدم أهدافك التسويقية.",
    icon: Camera,
    isStudio: true,
  },
  {
    number: "03",
    id: "branding",
    title: "بناء العلامة التجارية والهوية",
    description:
      "هوية متكاملة · رسالة واضحة · تميز عن المنافسين — مش شعار وألوان بس.",
    icon: Palette,
  },
  {
    number: "04",
    id: "web",
    title: "تصميم المواقع والتجارب الرقمية",
    description:
      "مواقع · متاجر · صفحات هبوط — سريعة · SEO · تحوّل الزوار لعملاء.",
    icon: Globe,
  },
  {
    number: "05",
    id: "marketing",
    title: "التسويق الرقمي وتحليل الأداء",
    description:
      "حملات · SEO · استراتيجية محتوى · تحليل أداء — نتائج قابلة للقياس.",
    icon: BarChart3,
  },
  {
    number: "06",
    id: "consulting",
    title: "استشارات النمو والأعمال والتقنية",
    description:
      "جلسات استشارية · خارطة طريق · تحول رقمي — قرارات مبنية على بيانات.",
    icon: Lightbulb,
  },
  {
    number: "07",
    id: "personal-brand",
    title: "البرسونال براند والإرشاد",
    description:
      "حضور مهني · استراتيجية محتوى · positioning — مش مشهورية، فرص حقيقية.",
    icon: UserCircle,
  },
];
