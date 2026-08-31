import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { StoreBadges } from "@/components/store-badges";
import { ServiceCards } from "@/components/service-cards";
import { AppSteps } from "@/components/app-steps";
import { SectionLink } from "@/components/section-link";
import { FadeInSection } from "@/components/fade-in-section";
import { Footer } from "@/components/footer";
import { DeliveryAnimation } from "@/components/delivery-animation";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
          <div className="flex-1 text-center animate-fade-up md:text-start">
            <h1 className="text-4xl text-brand-yellow font-extrabold leading-tight md:text-6xl">
              اللي فات حاجة
              <br />
              <span className="text-brand-blue">واللي جاي توصيلة</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/90 md:text-xl">
              اطلب أي حاجة تحتاجها وهي توصلك أينما كنت
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>
          <div className="flex-1 animate-fade-up [animation-delay:150ms]">
            <DeliveryAnimation />
          </div>

        </section>

        <FadeInSection>
          <ServiceCards />
        </FadeInSection>

        <FadeInSection>
          <AppSteps />
        </FadeInSection>

        <FadeInSection>
          <section className="bg-surface py-20 text-center dark:bg-black">
            <h2 className="text-3xl text-brand-yellow font-bold md:text-4xl">من نحن</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/90">
              توصيلة شركة توصيل ليبية مقرها مصراته، هدفنا تسهيل حياتكم اليومية
              من خلال توصيل كل ما تحتاجونه بسرعة وأمان.
            </p>
            <SectionLink href="/about" label="اعرف المزيد عنا" />
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-20 text-center">
            <h2 className="text-3xl text-brand-yellow font-bold md:text-4xl">كونوا شركاء معنا</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/90">
              سواء كنتم سائقين تبحثون عن دخل مرن، أو أصحاب أعمال تريدون الوصول
              لعملاء أكثر، توصيلة هي فرصتكم.
            </p>
            <SectionLink href="/partners/driver" label="انضموا كسائقين" />
          </section>
        </FadeInSection>
      </main>

      <Footer />
    </>
  );
}