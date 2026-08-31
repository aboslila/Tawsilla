import { Utensils, ShoppingCart, Package, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Utensils,
    title: "توصيل الطعام",
    desc: "اطلب من مطعمك المفضل ووصله لباب بيتك في دقائق.",
  },
  {
    icon: ShoppingCart,
    title: "البقالة والمشتريات",
    desc: "احتياجاتك اليومية من السوبرماركت توصلك بسرعة وأمان.",
  },
  {
    icon: Zap,
    title: "توصيل سريع",
    desc: "للطلبات المستعجلة، فريقنا جاهز للوصول في أسرع وقت.",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-brand-yellow/80">خدماتنا</h2>
        <p className="mt-3 text-foreground/70">
          كل اللي تحتاجه، توصيلة توصلهولك
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-brand-yellow">
        {SERVICES.map((service) => {
          return (
            <div
              key={service.title}
              className="group rounded-2xl bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <service.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}