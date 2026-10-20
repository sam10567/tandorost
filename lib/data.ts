export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  rating: string;
  experience: number;
  fee: number;
  image: string;
  bio: string;
};

export const specialties = [
  { id: "general", title: "عمومی", icon: "✚", color: "mint" },
  { id: "dermatology", title: "پوست و مو", icon: "♧", color: "blue" },
  { id: "cardiology", title: "قلب و عروق", icon: "♡", color: "rose" },
  { id: "pediatrics", title: "کودکان", icon: "♧", color: "sky" },
  { id: "gynecology", title: "زنان و زایمان", icon: "♀", color: "violet" },
  { id: "orthopedics", title: "ارتوپدی", icon: "✣", color: "mint" },
  { id: "dentistry", title: "دندان‌پزشکی", icon: "✦", color: "blue" },
  { id: "ophthalmology", title: "چشم‌پزشکی", icon: "◉", color: "sky" },
];

export const doctors: Doctor[] = [
  { id: "1", name: "دکتر نگین احمدی", specialty: "زنان و زایمان", city: "تهران", rating: "4.9", experience: 14, fee: 300000, image: "/images/doctor-1.svg", bio: "ارائه‌ی خدمات مشاوره و مراقبت‌های تخصصی زنان و زایمان." },
  { id: "2", name: "دکتر امیرحسین رضایی", specialty: "داخلی", city: "تهران", rating: "4.6", experience: 12, fee: 330000, image: "/images/doctor-2.svg", bio: "ویزیت و پیگیری بیماری‌های داخلی با رویکردی دقیق و بیمارمحور." },
  { id: "3", name: "دکتر سارا کریمی", specialty: "پوست و مو", city: "کرج", rating: "4.7", experience: 10, fee: 280000, image: "/images/doctor-3.svg", bio: "مشاوره‌ی تخصصی سلامت پوست و مو و برنامه‌ی مراقبتی فردی." },
  { id: "4", name: "دکتر علی محمدی", specialty: "قلب و عروق", city: "شیراز", rating: "4.8", experience: 15, fee: 350000, image: "/images/doctor-4.svg", bio: "ارزیابی سلامت قلب و عروق و پیگیری عوامل خطر." },
  { id: "5", name: "دکتر مریم موسوی", specialty: "کودکان", city: "مشهد", rating: "4.8", experience: 9, fee: 260000, image: "/images/doctor-3.svg", bio: "مراقبت‌های پیشگیرانه و مشاوره‌ی سلامت کودکان." },
  { id: "6", name: "دکتر آرمان حیدری", specialty: "ارتوپدی", city: "تهران", rating: "4.5", experience: 11, fee: 320000, image: "/images/doctor-2.svg", bio: "بررسی مشکلات حرکتی و مشاوره‌ی ارتوپدی." },
];

export const articles = [
  { title: "چطور پزشک مناسب خود را انتخاب کنیم؟", category: "راهنمای سلامت", time: "۵ دقیقه مطالعه", icon: "✚" },
  { title: "چکاپ سالانه؛ چه آزمایش‌هایی مهم‌اند؟", category: "پیشگیری", time: "۴ دقیقه مطالعه", icon: "♡" },
  { title: "چند عادت ساده برای خواب بهتر", category: "سبک زندگی", time: "۳ دقیقه مطالعه", icon: "☾" },
];

export const formatPrice = (price: number) => new Intl.NumberFormat("fa-IR").format(price) + " تومان";
