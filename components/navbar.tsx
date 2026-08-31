"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavDropdown } from "@/components/nav-dropdown";

const NAV_ITEMS = [
  {
    label: "خدماتنا",
    items: [
      { href: "/services/food", label: "توصيلة ايت" },
      { href: "/services/grocery", label: "توصيلة ماركت" },
      { href: "/services/shop", label: "توصيلة شوب" },
    ],
  },
  {
    label: "عن الشركة",
    items: [
      { href: "/about", label: "من نحن" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
  {
    label: "كونوا شركاء",
    items: [
      { href: "/partners/driver", label: "انضم كسائق" },
      { href: "/partners/business", label: "انضم كمتجر شريك" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-blue">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Fixed width/height matching the logo's square aspect ratio.
              rounded-xl clips the corners slightly so the logo's own
              rounded-square background blends cleanly into the navbar. */}
          <Image
            src="/logo.png"
            alt="توصيلة"
            width={40}
            height={40}
            className="rounded-xl"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            return <NavDropdownOnBlue key={item.label} {...item} />;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
            aria-label="فتح القائمة"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => {
            return (
              <div key={item.label} className="py-2">
                <div className="mb-1 text-sm font-semibold text-white/60">
                  {item.label}
                </div>
                {item.items.map((sub) => {
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                    >
                      {sub.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}

function NavDropdownOnBlue({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="[&_button]:text-white/90 [&_button:hover]:text-brand-yellow [&_svg]:text-white/90">
      <NavDropdown label={label} items={items} />
    </div>
  );
}