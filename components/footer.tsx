import { StoreBadges } from "@/components/store-badges";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-12 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-start">
            <span className="text-xl font-bold text-brand-blue">توصيلة</span>
            <p className="mt-2 text-sm text-brand-yellow font-bold">
              اللي فات حاجة واللي جاي توصيلة
            </p>
          </div>
          <StoreBadges />
        </div>

        <div className="mt-8 border-t border-black/5 pt-6 text-center text-xs text-foreground/50 dark:border-white/10">
          © {new Date().getFullYear()} توصيلة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}