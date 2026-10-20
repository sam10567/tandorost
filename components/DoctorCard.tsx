import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
      <div className="flex gap-3">
        <div className="relative h-28 w-[42%] shrink-0 overflow-hidden rounded-xl bg-[#e5f3ef]">
          <Image src={doctor.image} alt={doctor.name} fill sizes="160px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1 py-1 text-right">
          <div className="mb-2 inline-flex rounded-md bg-[#e2f7ef] px-2 py-1 text-[10px] font-extrabold text-[#08785f]">★ {doctor.rating}</div>
          <h3 className="text-sm font-black leading-6 text-[#102a43]">{doctor.name}</h3>
          <p className="mt-1 text-xs text-slate-500">متخصص {doctor.specialty}</p>
          <p className="mt-2 text-xs text-slate-500">{doctor.experience} سال سابقه</p>
          <p className="mt-2 text-xs font-extrabold text-[#08785f]">{formatPrice(doctor.fee)}</p>
        </div>
      </div>
      <Link href={`/doctors/${doctor.id}`} className="mt-3 flex h-9 items-center justify-center rounded-xl bg-[#07834f] text-xs font-bold text-white transition hover:bg-[#166534]">مشاهده پروفایل و رزرو نوبت</Link>
    </article>
  );
}
