import { Router, Cpu, Network, Radio, Wifi, Server } from "lucide-react";

interface TechPartnerProps {
  icon: JSX.Element;
  name: string;
  category: string;
}

const techPartners: TechPartnerProps[] = [
  {
    icon: <Network className="w-5 h-5 text-blue-500" />,
    name: "CISCO",
    category: "Core Routing",
  },
  {
    icon: <Router className="w-5 h-5 text-cyan-500" />,
    name: "MIKROTIK",
    category: "Traffic Management",
  },
  {
    icon: <Radio className="w-5 h-5 text-indigo-500" />,
    name: "HUAWEI",
    category: "GPON Infrastructure",
  },
  {
    icon: <Wifi className="w-5 h-5 text-sky-500" />,
    name: "TP-LINK",
    category: "Gigabit Dual-Band",
  },
  {
    icon: <Server className="w-5 h-5 text-blue-600" />,
    name: "ZTE FIBER",
    category: "Optical Network Unit",
  },
  {
    icon: <Cpu className="w-5 h-5 text-teal-500" />,
    name: "RUIJIE",
    category: "Enterprise Wi-Fi AP",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-14 sm:py-20"
    >
      <div className="text-center space-y-2 mb-8">
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">
          INFRASTRUKTUR KELAS DUNIA
        </p>
        <h2 className="text-2xl sm:text-3xl font-black">
          Didukung Perangkat Jaringan & Standar Industri Terbaik
        </h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Kami hanya menggunakan perangkat keras berstandar sertifikasi internasional untuk menjamin kestabilan koneksi internet kamu.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
        {techPartners.map(({ icon, name, category }: TechPartnerProps) => (
          <div
            key={name}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border bg-muted/40 hover:bg-muted/80 hover:border-primary/40 transition-all cursor-default"
          >
            <span>{icon}</span>
            <div>
              <h3 className="text-base font-black tracking-wider">{name}</h3>
              <p className="text-[11px] text-muted-foreground font-medium">{category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
