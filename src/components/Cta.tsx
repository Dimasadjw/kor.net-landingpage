import { Button } from "./ui/button";
import { PhoneCall, MapPin, Zap } from "lucide-react";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/40 py-16 my-16 sm:my-24 border-y"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8">
        <div className="lg:col-start-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 mb-3 border border-green-500/20">
            <Zap className="w-3.5 h-3.5 fill-green-500" />
            <span>Kouta Pemasangan Hari Ini Terbatas</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black">
            Mau Pasang WiFi di Rumah Tanpa{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
              Biaya Instalasi?
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 mb-8 lg:mb-0 leading-relaxed">
            Klaim promo bebas biaya instalasi senilai Rp 350.000 sekarang juga. Tim kami akan mengecek tiang fiber optik di dekat lokasimu dalam hitungan menit!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:col-start-2 w-full lg:w-auto justify-center lg:justify-end">
          <a
            rel="noreferrer noopener"
            href="https://wa.me/628230038392?text=Halo%20Fibernet,%20saya%20mau%20pasang%20wifi%20baru%20di%20rumah"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="w-full font-bold shadow-md shadow-primary/25">
              <PhoneCall className="mr-2 w-5 h-5" />
              Pasang Sekarang
            </Button>
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full font-bold"
            >
              <MapPin className="mr-2 w-5 h-5 text-primary" />
              Lihat Daftar Paket
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
