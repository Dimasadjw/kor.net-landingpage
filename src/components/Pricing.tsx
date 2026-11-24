import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Zap, Wifi, PhoneCall, Gauge } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  speed: string;
  popular: PopularPlanType;
  price: string;
  originalPrice: string;
  description: string;
  deviceRecommendation: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter Home",
    speed: "30 Mbps",
    popular: 0,
    price: "Rp 175.000",
    originalPrice: "Rp 225.000",
    description: "Paling hemat untuk kebutuhan kos, kontrakan, atau keluarga kecil.",
    deviceRecommendation: "Ideal untuk 1-4 Perangkat",
    buttonText: "Pilih Paket 30 Mbps",
    benefitList: [
      "Kecepatan Simetris 30 Mbps (1:1)",
      "100% Unlimited Kuota Tanpa FUP",
      "Streaming YouTube & Zoom HD Lancar",
      "Gratis Sewa Router Wi-Fi",
      "Gratis Biaya Pemasangan Teknisi",
      "Layanan Customer Care 24/7",
    ],
  },
  {
    title: "Family Ultra",
    speed: "50 Mbps",
    popular: 1,
    price: "Rp 245.000",
    originalPrice: "Rp 320.000",
    description: "Paket paling favorit! Cepat, stabil, dan pas untuk seluruh keluarga di rumah.",
    deviceRecommendation: "Ideal untuk 5-8 Perangkat",
    buttonText: "Pilih Paket 50 Mbps",
    benefitList: [
      "Kecepatan Simetris 50 Mbps (1:1)",
      "100% Unlimited Kuota Tanpa FUP",
      "Streaming 4K Netflix di Smart TV",
      "WFH, Video Conference & Belajar Online",
      "Gratis Router Dual-Band Gigabit (2.4 & 5 GHz)",
      "Gratis Biaya Pemasangan Rp 350.000",
      "Prioritas Response Penanganan Kendala",
    ],
  },
  {
    title: "Gamer & Pro",
    speed: "100 Mbps",
    popular: 0,
    price: "Rp 345.000",
    originalPrice: "Rp 450.000",
    description: "Performa maksimal untuk gamers kompetitif, content creator, & streamer.",
    deviceRecommendation: "Ideal untuk 9-15 Perangkat",
    buttonText: "Pilih Paket 100 Mbps",
    benefitList: [
      "Kecepatan Simetris 100 Mbps (1:1)",
      "Dedicated Game Routing (Ping 1-5ms)",
      "Live Streaming 1080p 60fps No Drop Frame",
      "Download Game Ratusan GB Hitungan Menit",
      "Gratis Router Wi-Fi 6 High Power",
      "Gratis Biaya Pemasangan & Kabel Dropcore",
      "Jaminan Uptime SLA 99.9%",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-16 sm:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
          PILIHAN PAKET INTERNET
        </p>
        <h2 className="text-3xl md:text-4xl font-black">
          Paket WiFi Fiber Optic{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            Hemat & Unlimited
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-3">
          Harga flat bulanan transparan tanpa biaya siluman. Seluruh paket sudah termasuk gratis biaya pasang dan sewa router.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`flex flex-col justify-between relative ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-2xl shadow-blue-500/15 border-primary border-2 scale-105 bg-card"
                : "border bg-card/60"
            }`}
          >
            <CardHeader>
              <div className="flex justify-between items-center mb-1">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  {pricing.title}
                </CardTitle>
                {pricing.popular === PopularPlanType.YES && (
                  <Badge
                    variant="default"
                    className="text-xs bg-gradient-to-r from-blue-600 to-cyan-500"
                  >
                    <Zap className="w-3 h-3 mr-1 fill-white" /> Paling Diminati
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 my-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg w-fit">
                <Gauge className="w-4 h-4" />
                <span className="font-extrabold text-lg">{pricing.speed}</span>
                <span className="text-xs text-muted-foreground font-semibold">Simetris</span>
              </div>

              <div className="pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">{pricing.price}</span>
                  <span className="text-xs text-muted-foreground line-through">
                    {pricing.originalPrice}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">/ bulan</span>
                </div>
                <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  {pricing.deviceRecommendation}
                </div>
              </div>

              <CardDescription className="text-sm mt-2">
                {pricing.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <a
                href={`https://wa.me/628230038392?text=Halo%20Fibernet,%20saya%20tertarik%20dengan%20${encodeURIComponent(pricing.title)}%20(${pricing.speed})`}
                target="_blank"
                className="w-full"
              >
                <Button
                  className="w-full font-bold shadow-sm"
                  variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  {pricing.buttonText}
                </Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-3 w-full">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex items-center text-sm"
                  >
                    <Check className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
