import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apakah benar koneksi KOR.NET 100% tanpa batasan FUP (True Unlimited)?",
    answer:
      "Benar sekali! KOR.NET menerapkan kebijakan True Unlimited tanpa Fair Usage Policy (FUP). Anda dapat menggunakan internet sepuasnya tanpa khawatir kecepatan diturunkan di tengah bulan meskipun telah menghabiskan ratusan hingga ribuan gigabyte.",
    value: "item-1",
  },
  {
    question: "Apa arti dari kecepatan simetris 1:1 Download & Upload?",
    answer:
      "Kecepatan simetris 1:1 berarti kecepatan mengunggah (upload) sama tingginya dengan kecepatan mengunduh (download). Jika Anda berlangganan 50 Mbps, Anda akan mendapatkan 50 Mbps download dan 50 Mbps upload. Hal ini membuat live streaming, video call Zoom 4K, dan pengiriman file besar menjadi jauh lebih cepat.",
    value: "item-2",
  },
  {
    question: "Berapa lama proses pemasangan teknisi setelah pendaftaran?",
    answer:
      "Setelah data pendaftaran Anda terverifikasi, tim teknisi kami akan menjadwalkan pemasangan dalam tempo 1x24 jam. Proses penarikan kabel dan konfigurasi router di lokasi rata-rata memakan waktu 1 hingga 2 jam hingga internet langsung aktif.",
    value: "item-3",
  },
  {
    question: "Apakah ada biaya tersembunyi seperti biaya pemasangan atau sewa router?",
    answer:
      "Tidak ada biaya tersembunyi. Promo saat ini menggratiskan 100% biaya instalasi dan penarikan kabel (hemat Rp 350.000), serta meminjamkan perangkat router WiFi Gigabit Dual Band secara gratis selama masa berlangganan.",
    value: "item-4",
  },
  {
    question: "Bagaimana jika koneksi mengalami gangguan teknis atau kabel putus?",
    answer:
      "Pusat Operasi Jaringan (NOC) kami beroperasi 24 jam non-stop. Jika terjadi gangguan jaringan atau kendala teknis, Anda dapat langsung menghubungi layanan pelanggan via WhatsApp, dan teknisi terdekat akan ditugaskan ke lokasi.",
    value: "item-5",
  },
  {
    question: "Metode pembayaran apa saja yang didukung untuk tagihan bulanan?",
    answer:
      "Kami mendukung pembayaran melalui Virtual Account bank nasional (BCA, Mandiri, BRI, BNI), QRIS (GoPay, OVO, Dana, ShopeePay), kartu debit/kredit, hingga pembayaran melalui gerai minimarket Indomaret dan Alfamart.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-16 sm:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
          PERTANYAAN UMUM
        </p>
        <h2 className="text-3xl md:text-4xl font-black">
          Pertanyaan Seputar Layanan{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            KOR.NET (FAQ)
          </span>
        </h2>
        <p className="text-base text-muted-foreground mt-2">
          Temukan jawaban cepat seputar pemasangan, kecepatan, kuota, dan sistem pembayaran.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b"
          >
            <AccordionTrigger className="text-left font-bold text-base py-4 hover:no-underline hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-8">
        <h3 className="font-medium text-sm text-muted-foreground inline-flex items-center gap-1.5">
          Ada pertanyaan lain seputar jangkauan alamat Anda?{" "}
          <a
            rel="noreferrer noopener"
            href="https://wa.me/628230038392?text=Halo%20KOR.NET,%20saya%20mau%20tanya%20seputar%20pemasangan%20wifi"
            target="_blank"
            className="text-primary font-bold hover:underline inline-flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp Customer Service
          </a>
        </h3>
      </div>
    </section>
  );
};
