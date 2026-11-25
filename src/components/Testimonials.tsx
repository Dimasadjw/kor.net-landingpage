import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  location: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Rizky Ramadhan",
    role: "Software Engineer WFH",
    location: "Jakarta Selatan",
    comment:
      "Sejak pasang paket 50 Mbps dari KOR.NET, video call daily standup dan upload code repository super lancar. Upload simetris 1:1 beneran terasa bedanya dibanding provider lama.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Bambang Sutrisno",
    role: "Kepala Keluarga",
    location: "Surabaya",
    comment:
      "Anak-anak sekolah online sambil istri nonton Netflix 4K di ruang tengah nggak pernah buffering sama sekali. Yang paling saya suka harganya flat tanpa biaya siluman.",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Fikri Maulana",
    role: "Content Creator & Gamer",
    location: "Bandung",
    comment:
      "Ping Valorant stabil di 2-5ms, live streaming YouTube 1080p 60fps tanpa drop frame sama sekali. Beneran 100% True Unlimited tanpa ada penurunan speed di akhir bulan!",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "dr. Anita Wijaya",
    role: "Pemilik Klinik Mandiri",
    location: "Semarang",
    comment:
      "Pakai paket 100 Mbps buat sistem rekam medis online dan WiFi gratis pengunjung klinik. Pasien senang nunggu dan koneksinya cepat banget.",
  },
  {
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    name: "Dimas Prasetyo",
    role: "Owner Kopi Ruang Temu",
    location: "Yogyakarta",
    comment:
      "Cafe kami makin ramai pengunjung nugas berkat WiFi KOR.NET. Puluhan laptop nyambung bersamaan router dual-band nya tetap adem dan lancar.",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    name: "Sarah Handayani",
    role: "Owner Olshop Fashion",
    location: "Tangerang",
    comment:
      "Teknisi datang tepat waktu waktu pemasangan dan narik kabelnya sangat rapi. Customer care di WhatsApp juga sigap banget waktu saya tanya cara ubah password WiFi.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-16 sm:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
          PENGALAMAN PELANGGAN
        </p>
        <h2 className="text-3xl md:text-4xl font-black">
          Apa Kata Mereka yang Sudah{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            Beralih ke KOR.NET?
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-3">
          Mulai dari kebutuhan rumah tangga, profesional WFH, hingga pengusaha cafe telah membuktikan kualitas koneksi kami.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(
          ({ image, name, role, location, comment }: TestimonialProps) => (
            <Card
              key={name}
              className="border bg-card/60 hover:bg-card transition-all flex flex-col justify-between"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-3">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-base font-bold">{name}</CardTitle>
                  <CardDescription className="text-xs text-primary font-medium">
                    {role} &bull; {location}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground leading-relaxed pt-0">
                <div className="flex text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                &ldquo;{comment}&rdquo;
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
