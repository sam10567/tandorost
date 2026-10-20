import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/data";

export default function MagazinePage() {
  return <><Header /><main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-10"><p className="text-sm font-bold text-[#0f766e]">دانستنی‌های سلامتی</p><h1 className="mt-2 text-3xl font-black">مجله سلامت تندرست</h1><p className="mt-3 max-w-2xl leading-8 text-slate-600">مقاله‌های کوتاه برای آشنایی بیشتر با مراقبت‌های پیشگیرانه و انتخاب آگاهانه‌تر خدمات سلامت.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:shadow-lg"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ddf7f1] text-2xl text-[#0f766e]">{article.icon}</div><p className="mt-5 text-xs font-bold text-[#0f766e]">{article.category}</p><h2 className="mt-2 text-lg font-black leading-8">{article.title}</h2><p className="mt-4 text-xs text-slate-500">{article.time}</p><p className="mt-4 text-sm leading-7 text-slate-600">این مطلب نمونه است و می‌تواند در مرحله‌ی بعد با محتوای واقعی و صفحه‌ی جزئیات مقاله تکمیل شود.</p></article>)}</div></main><Footer /></>;
}
