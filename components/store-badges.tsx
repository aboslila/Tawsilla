import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
      <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        <Image
          src="/badges/app-store.svg"
          alt="حمّل من App Store"
          width={160}
          height={48}
          className="h-12 w-auto"
          style={{ width: "auto" }}
        />
      </Link>
      <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
        <Image
          src="/badges/google-play.svg"
          alt="حمّل من Google Play"
          width={160}
          height={48}
          className="h-12 w-auto"
          style={{ width: "auto" }}
        />
      </Link>
    </div>
  );
}