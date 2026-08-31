import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "خدماتنا | توصيلة",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-8">
        <Services />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}