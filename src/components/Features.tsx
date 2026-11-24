import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  tag: string;
  description: string;
  imageUrl: string;
}

const features: FeatureProps[] = [
  {
    title: "Paket Rumah & Keluarga",
    tag: "Streaming & Hiburan 4K",
    description:
      "Koneksi stabil untuk seluruh anggota keluarga. Nonton YouTube & Netflix 4K di beberapa Smart TV sekaligus tanpa buffering dan bebas gangguan.",
    imageUrl:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "Paket Gamer & Streamer",
    tag: "Ultra Low Latency (Ping 1-5ms)",
    description:
      "Rute peering direct ke server game populer (Mobile Legends, Valorant, Steam, Dota 2). Tidak ada lag, no packet loss, dan upload gameplay super lancar.",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80",
  },
  {
    title: "Paket Kantor, Kafe & UMKM",
    tag: "Bandwidth Prioritas Tinggi",
    description:
      "Mampu menampung puluhan hingga ratusan perangkat bersamaan. Cocok untuk kafe, coworking space, toko online, dan sistem POS kasir cloud.",
    imageUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=700&auto=format&fit=crop&q=80",
  },
];

const featureList: string[] = [
  "Rumah & Keluarga",
  "Gamer & Live Streamer",
  "Bisnis & Kantor",
  "Kos & Kontrakan",
  "Kafe & Restoran",
  "1:1 Download & Upload Simetris",
  "100% Unlimited No FUP",
  "Router Dual-Band Gratis",
  "Teknisi 24 Jam Siaga",
  "Bisa Bayar Bulanan",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-16 sm:py-24 space-y-10"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">
          SOLUSI KONEKTIVITAS
        </p>
        <h2 className="text-3xl lg:text-4xl font-black">
          Kategori Layanan WiFi Sesuai{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            Kebutuhan Anda
          </span>
        </h2>
        <p className="text-base text-muted-foreground">
          Dirancang untuk performa maksimal dari rumah tinggal, hunian kost, hingga kebutuhan operasional perusahaan komersial.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-xs sm:text-sm py-1 px-3 border hover:border-primary/50 transition-colors"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, tag, description, imageUrl }: FeatureProps) => (
          <Card key={title} className="bg-card border hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
            <CardHeader className="pb-3">
              <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{tag}</div>
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {description}
            </CardContent>

            <CardFooter className="p-0 border-t overflow-hidden">
              <div className="w-full h-[180px] overflow-hidden bg-muted">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
