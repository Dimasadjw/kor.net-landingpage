import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Wifi, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-24 gap-10">
      <div className="text-center lg:text-start space-y-6">

        <main className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
          <h1 className="inline">
            Internet WiFi{" "}
            <span className="inline bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
              Fiber Optic
            </span>{" "}
          </h1>
          Super Cepat &{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Unlimited
            </span>{" "}
            Tanpa FUP
          </h2>
        </main>

        <p className="text-lg md:text-xl text-muted-foreground md:w-11/12 mx-auto lg:mx-0 leading-relaxed">
          Nikmati pengalaman internetan tanpa ngadat dengan kecepatan simetris <strong>1:1 Download & Upload</strong>. Cocok untuk streaming film 4K, mabar game online tanpa lag, WFH, hingga operasional bisnis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#pricing"
            className={`${buttonVariants({
              size: "lg",
            })} font-bold text-base px-8 py-6 shadow-lg shadow-primary/20`}
          >
            <Wifi className="mr-2 w-5 h-5" />
            Pilih Paket WiFi
          </a>

          <a
            rel="noreferrer noopener"
            href="https://wa.me/628230038392?text=Halo%20Fibernet,%20saya%20mau%20cek%20jangkauan%20dan%20pasang%20wifi"
            target="_blank"
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })} font-bold text-base px-8 py-6 hover:bg-muted`}
          >
            Cek Jangkauan Area
            <ArrowRight className="ml-2 w-5 h-5 text-primary" />
          </a>
        </div>

        {/* Value badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Murni 100% Fiber Optic</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Tanpa Batasan Kuota (No FUP)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Teknisi Siaga Pasang 24 Jam</span>
          </div>
        </div>
      </div>

      {/* Hero cards section */}
      <div className="z-10 w-full flex justify-center">
        <HeroCards />
      </div>

      {/* Background Glow */}
      <div className="shadow"></div>
    </section>
  );
};
