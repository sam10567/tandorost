import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3">
        <div><Link href="/" className="text-xl font-black text-[#08785f]">♥ تندرست</Link><p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">راهی ساده‌تر برای پیدا کردن پزشک و مدیریت نوبت‌های پزشکی.</p></div>
        <div><h3 className="font-bold">دسترسی سریع</h3><div className="mt-3 flex flex-col gap-2 text-sm text-slate-500"><Link href="/doctors">پزشکان</Link><Link href="/appointments">نوبت‌های من</Link><Link href="/magazine">مجله سلامت</Link></div></div>
        <div><h3 className="font-bold">یادآوری</h3><p className="mt-3 text-sm leading-7 text-slate-500">این وب‌سایت یک پروژه‌ی نمونه است؛ اطلاعات پزشکان و رزروها آزمایشی‌اند.</p></div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">© تندرست — پروژه‌ی آموزشی فرانت‌اند</div>
    </footer>
  );
}
