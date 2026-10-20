import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="صفحه اصلی تندرست">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08785f] text-2xl text-white">♥</span>
          <span className="text-xl font-black text-[#075c50] md:text-2xl">تندرست</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          <Link className="text-[#0f766e]" href="/">خانه</Link>
          <Link href="/doctors" className="hover:text-[#15803d]">پزشکان</Link>
          <a href="/#specialties" className="hover:text-[#15803d]">تخصص‌ها</a>
          <Link href="/magazine" className="hover:text-[#15803d]">مجله سلامت</Link>
          <Link href="/about" className="hover:text-[#15803d]">درباره ما</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/appointments" className="hidden rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 sm:inline-flex">نوبت‌های من</Link>
          <Link href="/doctors" className="rounded-xl bg-[#15803d] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#166534]">نوبت‌گیری</Link>
        </div>
      </div>
    </header>
  );
}
