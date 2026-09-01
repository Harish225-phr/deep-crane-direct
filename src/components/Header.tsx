import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Truck } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md"
          : "border-border/40 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="hazard-stripe h-1 w-full" />
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 transition-all duration-300 lg:px-6 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-10 w-10"
            }`}
          >
            <Truck className={`transition-all duration-300 ${scrolled ? "h-5 w-5" : "h-6 w-6"}`} />
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display leading-none font-bold tracking-wide uppercase transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg sm:text-xl"
              }`}
            >
              Deep Crane Service
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Towing · Recovery · Crane Rental
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div
            className={`hidden text-right transition-all duration-300 xl:block ${
              scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
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

      <nav
        className={`mx-auto hidden max-w-7xl gap-6 px-6 transition-all duration-300 lg:flex ${
          scrolled ? "max-h-0 overflow-hidden pb-0 opacity-0" : "pb-3 opacity-100"
        }`}
      >
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
