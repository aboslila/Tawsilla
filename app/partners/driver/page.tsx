import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Wallet, Clock, ShieldCheck } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";

export const metadata: Metadata = {
  title: "انضم كسائق | توصيلة",
};

const DRIVER_BENEFITS = [
  {
    icon: Wallet,
    title: "دخل مرن",
    desc: "اربح حسب ساعات عملك، بدون التزام بجدول ثابت.",
  },
  {
    icon: Clock,
    title: "اعمل بالوقت الذي يناسبك",
    desc: "أنت من يحدد متى تعمل ومتى تتوقف.",
  },
  {
    icon: ShieldCheck,
    title: "دعم وحماية مستمرة",
    desc: "فريقنا معك في كل خطوة لضمان تجربة عمل آمنة.",
  },
];

export default function DriverPartnerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mb-4 text-5xl font-semibold text-brand-blue">
            كونوا شركاء
          </div>
          <h1 className="text-4xl font-extrabold text-brand-yellow md:text-5xl">
            انضم إلى توصيلة كسائق
          </h1>
          <p className="mt-6 text-lg text-foreground/90">
            حقق دخلًا إضافيًا مرنًا من خلال توصيل الطلبات في مدينتك.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-4 font-semibold text-brand-yellow transition hover:brightness-85"
          >
            سجل الآن
          </a>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
            {DRIVER_BENEFITS.map((b) => {
              return (
                <div key={b.title} className="rounded-2xl bg-background p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <b.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="mt-4 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section id="apply" className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-2xl text-brand-blue font-bold">جاهز للانضمام؟</h2>
          <p className="mt-3 text-foreground/90">
            تواصل معنا وسيقوم فريقنا بمساعدتك في خطوات التسجيل.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-full border-2 border-brand-blue px-8 py-3 font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-brand-yellow hover:border-brand-yellow"
          >
            تواصل معنا
          </a>
        </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
