"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavDropdown } from "@/components/nav-dropdown";

// Each top-level nav item is either a plain link or a dropdown.
// Structuring it as data (not hardcoded JSX) means adding a new
// menu item later is just adding one object here.
const NAV_ITEMS = [
  {
    label: "خدماتنا",
    items: [
      { href: "/services#food", label: "توصيل الطعام" },
      { href: "/services#grocery", label: "توصيل البقالة" },
      { href: "/services#parcels", label: "توصيل الطرود" },
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
          <span className="text-2xl font-bold text-white">توصيلة</span>
        </Link>

        {/* Desktop dropdown nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            return (
              <NavDropdownOnBlue key={item.label} {...item} />
            );
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

      {/* Mobile: flat expandable list, simpler than desktop dropdowns */}
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

// NavDropdown was designed for a light navbar (text-foreground/80,
// bg-background panel). On our solid blue bar the trigger text needs
// to be white instead - this thin wrapper overrides just that class
// rather than forking the whole component.
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