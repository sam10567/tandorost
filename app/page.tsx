import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import FeaturedDoctors from "@/components/FeaturedDoctors";
import Footer from "@/components/Footer";

export default function HomePage() {
  return <><Header /><main><Hero /><Specialties /><FeaturedDoctors /><section id="magazine" className="mx-auto max-w-7xl px-5 pb-10"><div className="rounded-3xl bg-[#e7f5f0] p-6 md:flex md:items-center md:justify-between"><div><p className="text-sm font-bold text-[#0f766e]">مجله سلامت</p><h2 className="mt-2 text-xl font-black text-[#102a43]">برای انتخاب‌های سالم‌تر، آگاهانه‌تر بخوانید</h2></div><a href="/magazine" className="mt-4 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0f766e] md:mt-0">مطالعه مقاله‌ها</a></div></section></main><Footer /></>;
}
