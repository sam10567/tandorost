import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { doctors, formatPrice } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() { return doctors.map((doctor) => ({ id: doctor.id })); }

export default async function DoctorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = doctors.find((item) => item.id === id);
  if (!doctor) notFound();
  return <><Header /><main className="mx-auto min-h-[65vh] max-w-4xl px-5 py-10"><div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:p-8"><div className="flex flex-col gap-6 sm:flex-row"><div className="relative h-56 w-full overflow-hidden rounded-2xl bg-[#e5f3ef] sm:w-56"><Image src={doctor.image} alt={doctor.name} fill sizes="224px" className="object-cover" /></div><div className="flex-1"><span className="rounded-lg bg-[#e2f7ef] px-3 py-1 text-sm font-bold text-[#08785f]">★ {doctor.rating}</span><h1 className="mt-4 text-2xl font-black">{doctor.name}</h1><p className="mt-2 text-slate-600">متخصص {doctor.specialty} · {doctor.city}</p><p className="mt-3 text-sm text-slate-500">{doctor.experience} سال سابقه‌ی کاری</p><p className="mt-5 leading-8 text-slate-600">{doctor.bio}</p><p className="mt-5 text-lg font-black text-[#08785f]">هزینه ویزیت: {formatPrice(doctor.fee)}</p></div></div><div className="mt-8 rounded-2xl bg-[#f5f9fb] p-5"><h2 className="text-lg font-black">رزرو آزمایشی نوبت</h2><p className="mt-2 text-sm leading-7 text-slate-600">این بخش نمایشی است. برای ثبت نوبت، روز و ساعت دلخواه را انتخاب کنید.</p><form action="/appointments" className="mt-4 grid gap-3 sm:grid-cols-3"><input type="hidden" name="doctor" value={doctor.name} /><label className="text-sm">تاریخ<input required name="date" type="date" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white p-3" /></label><label className="text-sm">ساعت<select name="time" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white p-3"><option>۱۰:۰۰</option><option>۱۲:۳۰</option><option>۱۶:۰۰</option><option>۱۸:۳۰</option></select></label><button className="self-end rounded-xl bg-[#15803d] px-4 py-3 text-sm font-bold text-white">ادامه رزرو</button></form></div><Link href="/doctors" className="mt-6 inline-flex text-sm font-bold text-[#0f766e]">← بازگشت به پزشکان</Link></div></main><Footer /></>;
}
