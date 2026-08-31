"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, UserPlus, Search, ShoppingCart, MapPin } from "lucide-react";

const STEPS = [
  {
    icon: Download,
    title: "حمّل التطبيق",
    desc: "ابدأوا بتنزيل تطبيق توصيلة من متجر التطبيقات الخاص بكم",
  },
  {
    icon: UserPlus,
    title: "سجّلوا حسابكم",
    desc: "سجلوا للاستمتاع بجميع المميزات والعروض الكاملة",
  },
  {
    icon: Search,
    title: "تصفحوا القائمة",
    desc: "اختاروا من المطاعم أو المتاجر أو خدمة توصيل الطرود",
  },
  {
    icon: ShoppingCart,
    title: "أضيفوا واطلبوا",
    desc: "حددوا ما تحتاجونه وأتموا الطلب بسهولة",
  },
  {
    icon: MapPin,
    title: "تتبعوا واستلموا",
    desc: "راقبوا طلبكم في الوقت الحقيقي حتى وصوله",
  },
];

export function AppSteps() {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative mx-auto h-[520px] w-72">
          <div className="absolute inset-0 -z-10 scale-90 rounded-[3rem] bg-brand-blue/20 blur-2xl" />
          <div className="animate-float relative h-full w-full">
            <Image
              src="/images/app-screenshot.png"
              alt="واجهة تطبيق توصيلة"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              priority
              className="object-cover  rounded-3xl drop-shadow-2xl"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-10 text-3xl text-brand-yellow font-bold md:text-4xl">
            حمّلوا التطبيق الآن وابدأوا التوصيل
          </h2>

          <div className="space-y-3">
            {STEPS.map((step, i) => {
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-2xl p-4 transition hover:bg-background hover:shadow-md"
                >
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue transition group-hover:scale-110 group-hover:bg-brand-yellow">
                    <step.icon className="h-6 w-6 text-white transition group-hover:text-brand-blue" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold text-brand-blue ring-2 ring-surface group-hover:bg-brand-blue group-hover:text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
