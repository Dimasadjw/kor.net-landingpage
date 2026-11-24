import { CheckCircle2 } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-16 sm:py-24"
    >
      <div className="bg-muted/40 border rounded-2xl py-12 px-6 sm:px-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group w-full max-w-[420px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80"
                  alt="Infrastruktur Fiber Optic Fibernet"
                  className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Core Network Infrastructure
                  </span>
                  <p className="text-sm font-semibold text-white">
                    100% Backbone Serat Optik Standar Tier-1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2">
                TENTANG KOR.NET
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                Penyedia Internet Fiber Optic{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-transparent bg-clip-text">
                  Handal Untuk Seluruh Kebutuhan
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                <strong>FIBERNET</strong> adalah penyedia jasa pemasangan jaringan internet dan WiFi berbasis 100% Fiber to the Home (FTTH). Kami berkomitmen menghadirkan koneksi berkecepatan tinggi tanpa hambatan kuota (True Unlimited) untuk rumah, kos, kantor, hingga cafe & UMKM.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-3 leading-relaxed">
                Dengan jaringan kabel optik modern, koneksi internet Anda tetap stabil meskipun cuaca hujan lebat atau angin kencang, dengan latensi ultra rendah untuk kenikmatan gaming dan video conference tanpa jeda.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Teknologi 100% Full Fiber Optic</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Kecepatan Simetris 1:1 Download & Upload</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Bebas Kuota FUP Selamanya</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Jaringan Terkoneksi Direct Peering & CDN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
