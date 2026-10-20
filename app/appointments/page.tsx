import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function AppointmentsPage({ searchParams }: { searchParams: Promise<{ doctor?: string; date?: string; time?: string }> }) {
  const params = await searchParams;
  return <><Header /><main className="mx-auto min-h-[65vh] max-w-4xl px-5 py-10"><p className="text-sm font-bold text-[#0f766e]">پنل بیمار</p><h1 className="mt-2 text-3xl font-black">نوبت‌های من</h1>{params.doctor ? <div className="mt-8 rounded-2xl border border-[#b7e4d4] bg-white p-6 shadow-sm"><span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#15803d]">رزرو آزمایشی ثبت شد</span><h2 className="mt-4 text-xl font-black">{params.doctor}</h2><p className="mt-2 text-sm text-slate-600">تاریخ: {params.date} · ساعت: {params.time}</p><p className="mt-4 text-sm leading-7 text-slate-500">این رزرو فقط برای نمایش جریان کار است و در پایگاه داده ذخیره نشده است.</p></div> : <div className="mt-8 rounded-2xl bg-white p-8 text-center"><div className="text-4xl text-[#0f766e]">▦</div><h2 className="mt-4 font-bold">هنوز نوبتی ثبت نکرده‌اید</h2><p className="mt-2 text-sm text-slate-500">از فهرست پزشکان، پزشک مورد نظر را انتخاب کنید.</p><a href="/doctors" className="mt-5 inline-flex rounded-xl bg-[#15803d] px-5 py-3 text-sm font-bold text-white">مشاهده پزشکان</a></div>}</main><Footer /></>;
}
