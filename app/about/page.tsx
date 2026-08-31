import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "من نحن | توصيلة",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl text-brand-yellow">من نحن</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            توصيلة شركة توصيل ليبية تهدف إلى تسهيل حياتك اليومية من خلال توصيل
            كل ما تحتاجه بسرعة وأمان. سواء كان طعامًا، مشتريات، أو طرودًا،
            فريقنا جاهز دائمًا لخدمتك أينما كنت.
          </p>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-2">
            <div>
              <div className="text-3xl font-extrabold text-brand-yellow">3</div>
              <div className="mt-2 text-sm text-brand-blue font-bold">مدينة نخدمها</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-yellow">+1000</div>
              <div className="mt-2 text-sm text-brand-blue font-bold">عميل سعيد</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}