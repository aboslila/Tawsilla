import { Smartphone, MapPinned, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: Smartphone,
    title: "اطلب من التطبيق",
    desc: "اختر ما تحتاجه بضغطة زر",
  },
  {
    icon: MapPinned,
    title: "تابع طلبك",
    desc: "شاهد مندوب التوصيل وهو في الطريق إليك",
  },
  {
    icon: PackageCheck,
    title: "استلم طلبك",
    desc: "يوصلك طلبك بسرعة وأمان",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">كيف تعمل توصيلة</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => {
            return (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-brand-yellow">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-sm font-semibold text-brand-blue">
                  الخطوة {i + 1}
                </div>
                <h3 className="mt-1 font-bold text-brand-yellow">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}