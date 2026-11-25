import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeftRight, Infinity, Router, ShieldCheck } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Kecepatan Simetris 1:1 (Download = Upload)",
    description:
      "Bukan sekadar kencang untuk unduh, kecepatan upload kami setara dengan download. Video call jernih tanpa putus, kirim file berukuran besar instan, dan live streaming resolusi tinggi tanpa drop frame.",
    icon: <ArrowLeftRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Murni Unlimited Tanpa FUP (Bebas Kuota)",
    description:
      "Bebas dari kekhawatiran kecepatan internet mendadak lemot di pertengahan bulan. Nikmati internetan bebas batas kuota 24 jam sehari selamanya tanpa ada batas FUP tersembunyi.",
    icon: <Infinity className="w-6 h-6 text-primary" />,
  },
  {
    title: "Gratis Pemasangan & Router Wi-Fi Dual Band",
    description:
      "Hemat ratusan ribu rupiah! Kami gratiskan seluruh biaya instalasi kabel dan meminjamkan router Wi-Fi Gigabit Dual-Band (2.4 GHz & 5 GHz) berteknologi Beamforming selama berlangganan.",
    icon: <Router className="w-6 h-6 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-16 sm:py-24">
      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
            KEUNGGULAN UTAMA
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Kenapa Memilih Jasa Pasang WiFi{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
              KOR.NET?
            </span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mt-4 mb-8 leading-relaxed">
            Kami memberikan garansi kualitas koneksi internet fiber optik terbaik dengan transparansi harga tanpa biaya tersembunyi.
          </p>

          <div className="flex flex-col gap-4">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="border bg-card/60 hover:bg-card transition-colors">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4 p-5">
                  <div className="mt-1 bg-primary/10 p-2.5 rounded-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
                    <CardDescription className="text-sm mt-1.5 leading-relaxed text-muted-foreground">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group w-full max-w-[460px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Router Wi-Fi Gigabit Dual-Band KOR.NET"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-1 rounded-md text-xs font-semibold w-fit mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Wi-Fi 6 & Gigabit Ready</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Router Wi-Fi Dual-Band High-Gain
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Mendukung sinyal tembus dinding kuat hingga ke seluruh sudut ruangan rumah Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
