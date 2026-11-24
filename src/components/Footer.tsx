import { Wifi, Instagram } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/30">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-16 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2 space-y-3">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-black text-xl flex items-center gap-2"
          >
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
              <Wifi className="w-5 h-5 animate-pulse" />
            </div>
            <span className="font-extrabold tracking-tight">KOR.NET</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed pr-4">
            Penyedia layanan internet broadband & jasa pemasangan WiFi berbasis 100% serat optik (FTTH). Menghadirkan koneksi simetris 1:1, stabil, dan unlimited tanpa FUP untuk seluruh kebutuhan digital Anda.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base">Paket Internet</h3>
          <div>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Starter Home 30 Mbps
            </a>
          </div>
          <div>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Family Ultra 50 Mbps
            </a>
          </div>
          <div>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Gamer & Pro 100 Mbps
            </a>
          </div>
          <div>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Business Dedicated
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base">Bantuan & Layanan</h3>
          <div>
            <a href="#howItWorks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cek Coverage Area
            </a>
          </div>
          <div>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Garansi Uptime 99.9%
            </a>
          </div>
          <div>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Panduan Ganti Password WiFi
            </a>
          </div>
          <div>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ & Bantuan
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base">Navigasi</h3>
          <div>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Daftar Paket
            </a>
          </div>
          <div>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Keunggulan Jaringan
            </a>
          </div>
          <div>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tentang Kami
            </a>
          </div>
          <div>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Testimoni
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base">Media Sosial</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://instagram.com"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://tiktok.com"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <TikTokIcon className="w-4 h-4" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-12 pt-4 text-center border-t border-muted">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <strong>FIBERNET ID</strong>. Hak Cipta Dilindungi. Layanan Internet Fiber Optic Unlimited Indonesia.
        </p>
      </section>
    </footer>
  );
};
