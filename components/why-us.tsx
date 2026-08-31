import { ShoppingBasket, CreditCard, Headset, MapPinned, Tag } from "lucide-react";

const FEATURES = [
  {
    icon: ShoppingBasket,
    title: "اطلبوا من مطاعمكم ومتاجركم المفضلة",
    desc: "كل ما تحتاجونه في مكان واحد، من الطعام إلى المستلزمات اليومية.",
  },
  {
    icon: CreditCard,
    title: "خيارات دفع مرنة",
    desc: "ادفعوا نقدًا عند الاستلام أو عبر وسائل الدفع الإلكترونية المتاحة.",
  },
  {
    icon: Headset,
    title: "خدمة عملاء متاحة دائمًا",
    desc: "فريق الدعم جاهز لمساعدتكم قبل الطلب وأثناءه وبعده.",
  },
  {
    icon: MapPinned,
    title: "تتبع الطلب في الوقت الحقيقي",
    desc: "اعرفوا مكان طلبكم بالضبط حتى لحظة الوصول.",
  },
  {
    icon: Tag,
    title: "عروض وخصومات حصرية",
    desc: "استفيدوا من عروض دورية على مختلف المطاعم والمتاجر.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-4 text-center text-sm font-semibold text-brand-blue">
        لماذا نحن
      </div>
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        اكتشفوا مزايا توصيلة
      </h2>

      <div className="space-y-4">
        {FEATURES.map((feature) => {
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-6 rounded-2xl bg-surface p-8 text-center sm:flex-row sm:text-start"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10">
                <feature.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}