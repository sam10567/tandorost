import Link from "next/link";
import { specialties } from "@/lib/data";

const colorClasses: Record<string, string> = {
  mint: "bg-[#ddf7f1] text-[#0f766e]",
  blue: "bg-[#e1f1f7] text-[#0f7490]",
  rose: "bg-[#fff0f1] text-[#ef4444]",
  sky: "bg-[#e2f3ff] text-[#1676b8]",
  violet: "bg-[#f3eafb] text-[#77528d]",
};

export default function Specialties() {
  return (
    <section id="specialties" className="mx-auto max-w-7xl px-5 py-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-black text-[#102a43] md:text-2xl">تخصص‌های پرطرفدار</h2>
        <Link href="/doctors" className="text-xs font-bold text-[#0f766e] hover:underline">مشاهده همه ←</Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {specialties.map((item) => (
          <Link key={item.id} href={`/doctors?specialty=${encodeURIComponent(item.title)}`} className="group flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3 transition hover:-translate-y-1 hover:border-[#b6e4d8] hover:shadow-lg hover:shadow-teal-900/5">
            <span className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold ${colorClasses[item.color]}`}>{item.icon}</span>
            <span className="text-center text-xs font-bold text-[#17324d] group-hover:text-[#15803d]">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
