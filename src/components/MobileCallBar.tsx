import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold tracking-wide uppercase">
            🚨 24/7 Emergency Recovery
          </p>
          <p className="truncate text-xs text-muted-foreground">{BUSINESS.phone}</p>
        </div>
        <a
          href={BUSINESS.tel}
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-4 py-2.5 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </div>
  );
}
