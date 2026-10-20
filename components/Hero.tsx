import Image from "next/image";
import Link from "next/link";

function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_35%,#e5f5f3_0%,#f8fbfc_44%,#f5f9fb_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-10 pt-8 md:min-h-[340px] md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:pb-0 md:pt-3">
        <div className="relative order-1 flex min-h-[260px] items-end justify-center md:min-h-[340px]">
          <div className="absolute inset-x-2 bottom-0 top-4 rounded-[45%_30%_12%_25%] bg-gradient-to-br from-[#e7f1f4] via-[#d5f0ed] to-[#9bdcd7]" />
          <div className="absolute bottom-8 left-2 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
          <Image src="/images/doctor-hero.svg" alt="پزشک تندرست" width={620} height={420} priority className="relative z-10 max-h-[330px] w-full object-contain object-bottom md:max-h-[340px]" />
          <div className="absolute bottom-12 right-0 z-20 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-900/5 sm:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9f4ed] text-xl text-[#0f766e]">✓</span>
            <span><b className="block text-sm">سلامت شما</b><small className="mt-1 block text-xs text-slate-500">اولویت ماست</small></span>
          </div>
        </div>

        <div className="order-2 py-4 text-right md:py-10">
          <span className="mb-4 inline-flex rounded-full bg-[#dff8ec] px-4 py-2 text-xs font-bold text-[#08785f]">همراه شما برای سلامتی بهتر</span>
          <h1 className="text-3xl font-black leading-[1.7] tracking-tight text-[#102a43] sm:text-4xl lg:text-[42px]">
            سلامت، <span className="text-[#15803d]">ساده‌تر</span> از همیشه
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            با تندرست، بهترین پزشکان را پیدا کنید و به‌راحتی نوبت خود را رزرو کنید.
          </p>

          <form action="/doctors" className="mt-6 flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_10px_30px_rgba(15,118,110,0.10)] sm:flex-row sm:items-center sm:gap-0">
            <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <span className="text-[#0f766e]"><SearchIcon /></span>
              <input name="q" placeholder="نام پزشک، تخصص یا مشکل مورد نظر..." className="h-12 min-w-0 w-full bg-transparent text-right text-sm outline-none placeholder:text-slate-400" />
            </label>
            <label className="flex items-center gap-3 border-t border-slate-100 px-3 sm:h-12 sm:border-r sm:border-t-0">
              <span className="text-[#0f766e]"><PinIcon /></span>
              <select name="city" defaultValue="" aria-label="انتخاب شهر" className="h-12 min-w-[105px] cursor-pointer bg-transparent text-sm text-slate-600 outline-none">
                <option value="">انتخاب شهر</option><option>تهران</option><option>کرج</option><option>شیراز</option><option>مشهد</option>
              </select>
            </label>
            <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#07834f] px-6 text-sm font-bold text-white transition hover:bg-[#166534]"><SearchIcon /> جست‌وجو</button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1 text-xs font-bold text-[#17324d] sm:text-sm">
            <span className="flex items-center gap-2"><span className="text-lg text-[#0f766e]">▣</span>مشاوره آنلاین</span>
            <span className="flex items-center gap-2"><span className="text-lg text-[#0f766e]">◷</span>نوبت‌دهی سریع</span>
            <span className="flex items-center gap-2"><span className="text-lg text-[#0f766e]">✓</span>پزشکان معتبر</span>
          </div>
          <Link href="/doctors" className="sr-only">مشاهده پزشکان</Link>
        </div>
      </div>
    </section>
  );
}
