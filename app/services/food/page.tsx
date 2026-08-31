import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeInSection } from "@/components/fade-in-section";
import { Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "توصيلة ايت | توصيل الطعام",
};

export default function FoodServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
          <section className="mx-auto max-w-4xl px-6 py-20 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue">
              <Utensils className="h-8 w-8 text-brand-yellow" />
            </div>
            <h1 className="text-4xl text-brand-yellow font-extrabold md:text-5xl">توصيلة ايت</h1>
            <p className="mt-6 text-lg text-foreground/90">
              اطلبوا من مطاعمكم المفضلة في طرابلس وسنوصل طلبكم ساخنًا وطازجًا
              في أسرع وقت ممكن.
            </p>
          </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}