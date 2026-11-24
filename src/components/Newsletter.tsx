import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MapPin, Sparkles } from "lucide-react";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Terima kasih! Tim operasional kami akan segera mengecek ketersediaan tiang fiber optik di alamat Anda via WhatsApp / Telepon.");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-16 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cek Jangkauan Fiber Optic Otomatis</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-black">
          Cek Jangkauan Area di{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            Lokasi Rumahmu
          </span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground mt-3 mb-8 max-w-xl mx-auto">
          Masukkan alamat lengkap atau nama perumahan / kelurahan untuk verifikasi ketersediaan port fiber optik terdekat.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-8/12 lg:w-6/12 mx-auto gap-3"
          onSubmit={handleSubmit}
        >
          <div className="relative flex-1">
            <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              required
              placeholder="Ketik alamat lengkap atau nama perumahan..."
              className="bg-muted/50 dark:bg-muted/80 pl-10"
              aria-label="lokasi"
            />
          </div>
          <Button type="submit" className="font-bold">
            Cek Jangkauan
          </Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
