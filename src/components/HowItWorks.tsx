import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Sliders, CalendarCheck, Wifi } from "lucide-react";

interface StepProps {
  icon: JSX.Element;
  stepNumber: string;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    stepNumber: "01",
    title: "Cek Coverage Lokasi",
    description:
      "Kirimkan alamat lengkap atau share lokasi via WhatsApp ke tim kami untuk verifikasi ketersediaan tiang ODP fiber terdekat.",
  },
  {
    icon: <Sliders className="w-8 h-8 text-primary" />,
    stepNumber: "02",
    title: "Pilih Paket Internet",
    description:
      "Tentukan pilihan paket mulai 30 hingga 200+ Mbps yang paling pas dengan budget dan jumlah perangkat di rumah atau tempat usahamu.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-primary" />,
    stepNumber: "03",
    title: "Jadwalkan Pemasangan",
    description:
      "Tentukan tanggal & jam yang fleksibel. Teknisi resmi kami yang ramah dan bersertifikat akan datang tepat waktu membawa seluruh alat.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    stepNumber: "04",
    title: "Aktivasi & Siap Ngebut",
    description:
      "Kabel ditarik rapi, router dual-band dikonfigurasi, pengujian speedtest dilakukan langsung di depanmu, dan internet langsung aktif!",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-16 sm:py-24"
    >
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
          PROSES CEPAT & MUDAH
        </p>
        <h2 className="text-3xl md:text-4xl font-black">
          Cara Pemasangan WiFi di{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            KOR.NET
          </span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-muted-foreground">
          Tanpa antre, tanpa syarat ribet. Cukup hubungi kami dari ponsel, teknisi siap pasang dalam 1x24 jam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon, stepNumber, title, description }: StepProps) => (
          <Card
            key={title}
            className="bg-muted/40 hover:bg-muted/70 border transition-all relative overflow-hidden group text-left"
          >
            <div className="absolute top-2 right-4 text-4xl font-black text-muted-foreground/15 group-hover:text-primary/20 transition-colors">
              {stepNumber}
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex flex-col items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <span className="text-lg font-bold">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
