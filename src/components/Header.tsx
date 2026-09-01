import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Truck } from "lucide-react";
import { useState } from "react";
import { BUSINESS } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/vehicle-recovery", label: "Vehicle Recovery" },
  { to: "/crane-rental", label: "Crane Rental" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hazard-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
            <Truck className="h-6 w-6" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none font-bold tracking-wide uppercase sm:text-xl">
              Deep Crane Service
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Towing · Recovery · Crane Rental
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden text-right xl:block">
            <span className="block text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              24/7 Emergency
            </span>
            <a href={BUSINESS.tel} className="block font-display text-lg font-bold">
              {BUSINESS.phone}
            </a>
          </div>
          <a
            href={BUSINESS.tel}
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-2.5 font-display text-sm font-bold tracking-wider text-accent-foreground uppercase transition-transform hover:scale-[1.03] sm:px-5"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav className="mx-auto hidden max-w-7xl gap-6 px-6 pb-3 lg:flex">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "text-primary" }}
            className="font-display text-sm font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2.5 font-display text-base font-semibold tracking-wide uppercase hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={BUSINESS.tel}
            className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 font-display font-bold tracking-wider text-primary-foreground uppercase"
          >
            <Phone className="h-4 w-4" /> Emergency · {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
