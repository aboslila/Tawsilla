import { Navbar } from "@/components/navbar";
import { DeliveryAnimation } from "@/components/delivery-animation";
import { StoreBadges } from "@/components/store-badges";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
          <div className="flex-1 text-center animate-fade-up md:text-start">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              اللي فات حاجة
              <br />
              <span className="text-brand-blue">واللي جاي توصيلة</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 md:text-xl">
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

        <Services />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}