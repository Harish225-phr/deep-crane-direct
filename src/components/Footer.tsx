import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/site";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/vehicle-recovery", label: "Vehicle Recovery" },
  { to: "/crane-rental", label: "Crane Rental" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS = [
  { to: "car-towing-in-shimla", label: "Car Towing in Shimla" },
  { to: "vehicle-recovery-in-shimla", label: "Vehicle Recovery in Shimla" },
  { to: "heavy-vehicle-recovery-in-shimla", label: "Heavy Vehicle Recovery in Shimla" },
  { to: "truck-recovery-in-shimla", label: "Truck Recovery in Shimla" },
  { to: "roadside-assistance-in-shimla", label: "Roadside Assistance in Shimla" },
  { to: "crane-rental-in-shimla", label: "Hydra Crane Rental in Shimla" },
] as const;

const LOCATION_LINKS = [
  { to: "car-towing-in-shimla", label: "Shimla" },
  { to: "car-towing-in-solan", label: "Solan" },
  { to: "car-towing-in-kufri", label: "Kufri" },
  { to: "car-towing-in-mashobra", label: "Mashobra" },
  { to: "car-towing-in-shoghi", label: "Shoghi" },
  { to: "car-towing-in-kandaghat", label: "Kandaghat" },
  { to: "car-towing-in-kumarhatti", label: "Kumarhatti" },
  { to: "car-towing-in-dharampur", label: "Dharampur" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/60 pb-24 lg:pb-10">
      <div className="hazard-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <h2 className="font-display text-xl font-bold tracking-wide uppercase">
            Deep Crane Service
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            24/7 vehicle towing, heavy vehicle recovery, roadside assistance and crane rental
            services across Shimla, Solan and nearby Himachal Pradesh locations.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Serving Himachal since {BUSINESS.established} · {BUSINESS.rating}★ from{" "}
            {BUSINESS.reviews}+ reviews
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="text-muted-foreground hover:text-foreground">
                  {p.label}
                </Link>

              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LINKS.map((p) => (
              <li key={p.to}>
                <Link
                  to="/$slug"
                  params={{ slug: p.to }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Locations
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {LOCATION_LINKS.map((p) => (
              <li key={p.to}>
                <Link
                  to="/$slug"
                  params={{ slug: p.to }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm">
            <a href={BUSINESS.tel} className="flex items-center gap-2 font-semibold">
              <Phone className="h-4 w-4 text-primary" /> {BUSINESS.phone}
            </a>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Open 24 Hours
            </p>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {FULL_ADDRESS}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Deep Crane Service, Kachi Ghati, Shimla. All rights reserved.
      </div>
    </footer>
  );
}
