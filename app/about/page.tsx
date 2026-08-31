import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeInSection } from "@/components/fade-in-section";
export const metadata: Metadata = {
  title: "من نحن | توصيلة",
};

const MISSION_POINTS = [
  "نقدم مجموعة واسعة من المطاعم والمتاجر، كل ذلك في مكان واحد.",
  "نمنح مندوبي التوصيل فرصة لتحقيق دخل مرن ونمو شخصي.",
  "نساعد الأعمال المحلية في الوصول لعدد أكبر من العملاء.",
  "نضع السلامة والموثوقية والراحة في مقدمة أولوياتنا في كل توصيلة.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mb-4 text-2xl font-semibold text-brand-blue">
            حول توصيلة
          </div>
          <h1 className="text-4xl text-brand-yellow font-extrabold md:text-5xl">
            اللي فات حاجة<br></br> واللي جاي توصيلة
          </h1>
          <p className="mt-6 text-lg text-foreground/90">
            توصيلة شركة توصيل ليبية مقرها مصراته، هدفنا تسهيل حياتكم اليومية
            من خلال توصيل كل ما تحتاجونه بسرعة وأمان.
          </p>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 md:grid-cols-2">
          {/* Local image from public/images/ - Next.js Image component
              handles responsive sizing/lazy-loading automatically,
              which a plain <img> tag doesn't do out of the box. */}
          <div className="order-2 relative h-96 overflow-hidden rounded-3xl md:order-1">
            <Image
              src="/images/rider-hero.jpg"
              alt="مندوب توصيلة"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl text-brand-yellow font-bold">رسالتنا واضحة</h2>
            <p className="mt-2 text-foreground/90">
              ملتزمون بتقديم التميز، طلبًا بعد طلب.
            </p>

            <div className="mt-8 space-y-4">
              {MISSION_POINTS.map((point) => {
                return (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <p className="text-sm text-foreground/90">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </FadeInSection>
        <FadeInSection>
        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-2">
            <div>
              <div className="text-3xl font-extrabold text-brand-blue">3</div>
              <div className="mt-2 text-sm text-foreground/70">مدن نخدمها</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-blue">+1,000</div>
              <div className="mt-2 text-sm text-foreground/70">عميل سعيد</div>
            </div>
          </div>
        </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}