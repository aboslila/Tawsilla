import Link from "next/link";
import { Utensils, ShoppingBasket, Package, ArrowLeft } from "lucide-react";

const SERVICE_CARDS = [
  {
    icon: Utensils,
    title: "توصيلة ايت",
    desc: "توصيل من المطاعم",
    href: "/services/food",
  },
  {
    icon: ShoppingBasket,
    title: "توصيلة ماركت",
    desc: "توصيل المواد الغذائية",
    href: "/services/grocery",
  },
  {
    icon: Package,
    title: "توصيلة شوب",
    desc: "توصيل المتاجر الإلكترونية",
    href: "/services/shop",
  },
];

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-4 text-center text-sm font-semibold text-brand-blue">
        ماذا نفعل
      </div>
      <h2 className="mb-12 text-center text-brand-yellow text-3xl font-bold md:text-4xl">
        خدماتنا
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICE_CARDS.map((card) => {
          return (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-3xl bg-brand-blue p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <ArrowLeft className="absolute right-6 top-6 h-6 w-6 text-white/60 transition group-hover:-translate-x-1 group-hover:text-white" />
              <card.icon className="mb-16 h-14 w-14 text-brand-yellow" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-brand-yellow">{card.title}</h3>
              <p className="mt-1 text-white/70">{card.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}