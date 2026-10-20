import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/lib/data";

export default async function DoctorsPage({ searchParams }: { searchParams: Promise<{ q?: string; city?: string; specialty?: string }> }) {
  const params = await searchParams;
  const q = (params.q ?? "").trim();
  const city = params.city ?? "";
  const specialty = params.specialty ?? "";
  const filtered = doctors.filter((doctor) => {
    const textMatch = !q || `${doctor.name} ${doctor.specialty} ${doctor.city}`.includes(q);
    const cityMatch = !city || doctor.city === city;
    const specialtyMatch = !specialty || doctor.specialty === specialty;
    return textMatch && cityMatch && specialtyMatch;
  });
  return <><Header /><main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-10"><div className="mb-8"><p className="text-sm font-bold text-[#0f766e]">فهرست پزشکان</p><h1 className="mt-2 text-3xl font-black">پزشک مناسب خود را پیدا کنید</h1></div><form action="/doctors" className="mb-8 grid gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:grid-cols-[1fr_180px_auto]"><input name="q" defaultValue={q} placeholder="نام پزشک یا تخصص..." className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#15803d]" /><select name="city" defaultValue={city} className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none"><option value="">همه شهرها</option><option>تهران</option><option>کرج</option><option>شیراز</option><option>مشهد</option></select><button className="rounded-xl bg-[#15803d] px-6 py-3 text-sm font-bold text-white">اعمال فیلتر</button></form><p className="mb-4 text-sm text-slate-500">{filtered.length} پزشک پیدا شد</p>{filtered.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div> : <div className="rounded-2xl bg-white p-10 text-center text-slate-500">پزشکی با این مشخصات پیدا نشد. فیلترها را تغییر دهید.</div>}</main><Footer /></>;
}
