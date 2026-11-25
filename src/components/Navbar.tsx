import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, Wifi, PhoneCall } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Keunggulan",
  },
  {
    href: "#pricing",
    label: "Paket WiFi",
  },
  {
    href: "#features",
    label: "Kategori Layanan",
  },
  {
    href: "#howItWorks",
    label: "Cara Pasang",
  },
  {
    href: "#about",
    label: "Tentang Kami",
  },
  {
    href: "#testimonials",
    label: "Testimoni",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white/95 dark:border-b-slate-700 dark:bg-background/95 backdrop-blur-md">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-black text-xl flex items-center gap-2 tracking-wide"
            >
              <span className="font-extrabold tracking-tight">KOR.NET</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    KOR.NET ID
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://wa.me/628230038392?text=Halo%20KOR.NET,%20saya%20mau%20pasang%20wifi%20di%20rumah"
                    target="_blank"
                    className={`w-full border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    <PhoneCall className="mr-2 w-4 h-4" />
                    Pasang Sekarang
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-1">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] font-semibold ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/628230038392?text=Halo%20KOR.NET,%20saya%20mau%20cek%20coverage%20area%20dan%20pasang%20wifi"
              target="_blank"
              className={`font-semibold border shadow-sm ${buttonVariants({ variant: "default" })}`}
            >
              <PhoneCall className="mr-2 w-4 h-4" />
              Pasang WiFi Baru
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
