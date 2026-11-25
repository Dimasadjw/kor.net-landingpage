import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  bio: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Ir. Hendra Wijaya",
    position: "VP Network Infrastructure",
    bio: "Pengalaman 15+ tahun mengelola jaringan backbone fiber optic & routing BGP nasional.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Budi Santoso",
    position: "Lead FTTH Engineer",
    bio: "Sertifikasi fiber optik internasional, memimpin standardisasi penarikan kabel rapi & aman.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Dewi Anggraini",
    position: "Head of Customer Dispatcher",
    bio: "Mengkoordinasikan respon cepat laporan kendala pelanggan 24 jam sehari 7 hari seminggu.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    name: "Rian Perkasa",
    position: "Senior Field Technician",
    bio: "Teknisi lapangan handal spesialis konfigurasi router Wi-Fi 6 & optimalisasi jangkauan sinyal rumah.",
  },
];

export const Team = () => {
  return (
    <section
      id="team"
      className="container py-16 sm:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
          TIM PROFESIONAL
        </p>
        <h2 className="text-3xl md:text-4xl font-black">
          Teknisi & Engineer{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
            KOR.NET
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-3">
          Dukungan tim ahli bersertifikasi resmi yang memastikan jaringan internet Anda selalu beroperasi prima tanpa hambatan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamList.map(({ imageUrl, name, position, bio }: TeamProps) => (
          <Card
            key={name}
            className="bg-card/60 border hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="relative mb-3">
                <img
                  src={imageUrl}
                  alt={name}
                  className="rounded-full w-24 h-24 object-cover border-2 border-primary/40"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
              </div>
              <CardTitle className="text-lg font-bold">{name}</CardTitle>
              <CardDescription className="text-xs font-semibold text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center text-xs text-muted-foreground leading-relaxed">
              <p>{bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
