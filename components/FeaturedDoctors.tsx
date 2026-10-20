import Link from "next/link";
import { doctors } from "@/lib/data";
import DoctorCard from "@/components/DoctorCard";

export default function FeaturedDoctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 pb-10 pt-3">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div><h2 className="text-xl font-black text-[#102a43] md:text-2xl">پزشکان منتخب</h2><p className="mt-2 text-xs text-slate-500">پزشکان باتجربه و محبوب، با امتیازهای بالا</p></div>
        <Link href="/doctors" className="shrink-0 text-xs font-bold text-[#0f766e] hover:underline">مشاهده همه پزشکان ←</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {doctors.slice(0, 4).map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
      </div>
    </section>
  );
}
