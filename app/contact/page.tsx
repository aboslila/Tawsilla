import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "اتصل بنا | توصيلة",
};

const CONTACT_INFO = [
  { icon: Phone, label: "الهاتف", value: "+218 91-6289000" },
  { icon: Mail, label: "البريد الإلكتروني", value: "info@tawsilla.ly" },
  { icon: MapPin, label: "العنوان", value: "ليبيا" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl text-brand-yellow">اتصل بنا</h1>
          <p className="mt-4 text-lg text-foreground/70">
            نحن هنا للإجابة على أي استفسار
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CONTACT_INFO.map((item) => {
              return (
                <div
                  key={item.label}
                  className="rounded-2xl bg-surface p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <item.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="mt-4 text-sm font-medium text-brand-yellow">
                    {item.label}
                  </div>
                  <div className="mt-1 font-semibold" dir="ltr">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}