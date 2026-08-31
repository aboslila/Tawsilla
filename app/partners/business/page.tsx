import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrendingUp, Users, Smartphone } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";

export const metadata: Metadata = {
  title: "انضم كمتجر شريك | توصيلة",
};

const BUSINESS_BENEFITS = [
  {
    icon: Users,
    title: "وصول لعملاء أكثر",
    desc: "اعرض متجرك أو مطعمك أمام آلاف المستخدمين يوميًا.",
  },
  {
    icon: TrendingUp,
    title: "زيادة المبيعات",
    desc: "قناة توصيل إضافية تزيد من طلباتك دون تكلفة تشغيل إضافية.",
  },
  {
    icon: Smartphone,
    title: "إدارة سهلة",
    desc: "تابع طلباتك ومبيعاتك من لوحة تحكم بسيطة وواضحة.",
  },
];

export default function BusinessPartnerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mb-4 text-5xl font-semibold text-brand-blue">
            كونوا شركاء
          </div>
          <h1 className="text-4xl text-brand-yellow font-extrabold md:text-5xl">
            انضم إلى توصيلة كمتجر شريك
          </h1>
          <p className="mt-6 text-lg text-foreground/90">
            وسّع نطاق عملك من خلال الوصول إلى عملاء جدد عبر منصة توصيلة.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-4 font-semibold text-brand-yellow transition hover:brightness-85"
          >
            سجل متجرك
          </a>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
            {BUSINESS_BENEFITS.map((b) => {
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
          <h2 className="text-2xl text-brand-blue font-bold">جاهز لتسجيل متجرك؟</h2>
          <p className="mt-3 text-foreground/90">
            تواصل معنا وسنساعدك في إضافة متجرك إلى منصة توصيلة.
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
