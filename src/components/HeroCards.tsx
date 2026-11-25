import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Check,
  Zap,
  ShieldCheck,
  Router,
  Gauge,
  PhoneCall,
  Activity,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[530px]">
      {/* Live Speedtest Card */}
      <Card className="absolute w-[340px] -top-[10px] left-0 drop-shadow-xl shadow-blue-500/10 border-blue-500/20 bg-card/95 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-sm font-bold">Speedtest Terverifikasi</CardTitle>
              <CardDescription className="text-xs">Uji Jaringan Fiber Optic</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="text-[11px] text-green-500 border-green-500/30">
            <Activity className="w-3 h-3 mr-1 animate-pulse" /> Live 1:1
          </Badge>
        </CardHeader>

        <CardContent className="pt-2 pb-3">
          <div className="grid grid-cols-3 gap-2 text-center bg-muted/60 p-2.5 rounded-lg border">
            <div>
              <div className="flex items-center justify-center text-xs text-muted-foreground gap-0.5">
                <ArrowDown className="w-3 h-3 text-cyan-500" />
                <span>Download</span>
              </div>
              <span className="text-base font-black text-cyan-600 dark:text-cyan-400">
                100.4 <span className="text-[10px] font-normal">Mbps</span>
              </span>
            </div>
            <div>
              <div className="flex items-center justify-center text-xs text-muted-foreground gap-0.5">
                <ArrowUp className="w-3 h-3 text-blue-500" />
                <span>Upload</span>
              </div>
              <span className="text-base font-black text-blue-600 dark:text-blue-400">
                99.8 <span className="text-[10px] font-normal">Mbps</span>
              </span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Latency</span>
              <span className="text-base font-black text-green-600 dark:text-green-400">
                2 <span className="text-[10px] font-normal">ms</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Package Highlight Card */}
      <Card className="absolute right-[10px] top-2 w-80 flex flex-col drop-shadow-xl shadow-cyan-500/10 border-primary/30 bg-card/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center mb-1">
            <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-cyan-500">
              <Zap className="w-3 h-3 mr-1 fill-white" /> Paling Diminati
            </Badge>
            <span className="text-xs font-semibold text-muted-foreground">Fiber Home</span>
          </div>
          <CardTitle className="text-lg">Paket Family Pro 50 Mbps</CardTitle>
          <CardDescription className="text-xs">Ideal untuk 5-8 Perangkat Sekaligus</CardDescription>
        </CardHeader>

        <CardContent className="text-sm pb-3">
          <div className="bg-muted/80 rounded-lg p-3 border">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-2xl font-black text-primary">Rp 245.000</span>
              <span className="text-xs text-muted-foreground">/ bulan</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Harga flat tanpa kenaikan mendadak, kuota unlimited sepuasnya tanpa FUP.
            </p>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <a
            href="https://wa.me/628230038392?text=Halo%20KOR.NET,%20saya%20mau%20pasang%20Paket%20Family%20Pro%2050%20Mbps"
            target="_blank"
            className="w-full"
          >
            <Button size="sm" className="w-full font-bold">
              <PhoneCall className="w-4 h-4 mr-2" />
              Pasang Paket Ini
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Benefit / Free Router Card */}
      <Card className="absolute top-[175px] left-[30px] w-72 drop-shadow-xl shadow-indigo-500/10 border-indigo-500/20 bg-card/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-base">
            Fasilitas Gratis
            <Badge variant="secondary" className="text-xs text-indigo-500 font-bold">
              Hemat Rp 750Rb
            </Badge>
          </CardTitle>
          <CardDescription className="text-xs mt-1">
            Semua fasilitas sudah termasuk dalam biaya langganan bulanan.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2">
          <div className="space-y-2 text-xs">
            {[
              "Gratis Biaya Instalasi & Tarik Kabel",
              "Gratis Sewa Router Dual-Band AC1200",
              "100% Unlimited Tanpa Kuota FUP",
              "Garansi Maintenance & Ganti Alat",
            ].map((benefit: string) => (
              <span
                key={benefit}
                className="flex items-center gap-1.5"
              >
                <Check className="text-green-500 w-3.5 h-3.5 flex-shrink-0" />
                <span>{benefit}</span>
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2 pb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 p-2 rounded w-full">
            <Router className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Router Gigabit Wi-Fi 5 / Wi-Fi 6 Ready</span>
          </div>
        </CardFooter>
      </Card>

      {/* 24/7 Technician Guarantee Card */}
      <Card className="absolute w-[340px] -right-[5px] bottom-[25px] drop-shadow-xl shadow-green-500/10 border-green-500/20 bg-card/95 backdrop-blur-sm">
        <CardHeader className="space-y-1 flex flex-row items-center gap-3 py-3">
          <div className="bg-green-500/10 text-green-600 dark:text-green-400 p-2.5 rounded-xl flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-sm font-bold">Jaminan SLA Uptime 99.9%</CardTitle>
            <CardDescription className="text-xs mt-1">
              Koneksi terganggu? Tim teknisi siaga respon cepat dan siap kunjungan lokasi 24/7.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
