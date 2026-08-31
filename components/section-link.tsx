import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:gap-3"
      >
        {label}
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}