import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return <><Header /><main className="mx-auto min-h-[65vh] max-w-4xl px-5 py-12"><div className="rounded-3xl bg-gradient-to-br from-[#e3f6ef] to-white p-8 md:p-12"><p className="font-bold text-[#0f766e]">درباره تندرست</p><h1 className="mt-3 text-3xl font-black leading-relaxed">سلامت، ساده‌تر از همیشه</h1><p className="mt-5 leading-9 text-slate-600">تندرست یک نمونه‌ی آموزشی از پلتفرم معرفی پزشکان است که با هدف ساده‌تر کردن جست‌وجوی تخصص‌ها، بررسی اطلاعات پزشکان و نمایش جریان رزرو نوبت طراحی شده است.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{["تجربه کاربری ساده","طراحی واکنش‌گرا","رزرو آزمایشی"].map((x) => <div key={x} className="rounded-2xl bg-white p-4 font-bold shadow-sm">{x}</div>)}</div><p className="mt-8 text-sm leading-7 text-slate-500">اطلاعات پزشکان نمونه هستند و این پروژه جایگزین خدمات پزشکی یا سامانه‌ی واقعی نوبت‌دهی نیست.</p></div></main><Footer /></>;
}
