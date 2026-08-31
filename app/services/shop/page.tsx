import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeInSection } from "@/components/fade-in-section";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "توصيلة شوب | توصيل الطرود",
};

export default function ShopServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue">
            <Package className="h-8 w-8 text-brand-yellow" />
          </div>
          <h1 className="text-4xl text-brand-yellow font-extrabold md:text-5xl">توصيلة شوب</h1>
          <p className="mt-6 text-lg text-foreground/90">
            نوصل طرودكم ومشترياتكم من المتاجر الإلكترونية بسرية وسرعة
            تامة إلى باب منزلكم.
          </p>
        </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}