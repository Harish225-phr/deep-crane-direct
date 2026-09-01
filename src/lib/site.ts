export const BUSINESS = {
  name: "Deep Crane Service",
  established: 2016,
  experience: "10+ Years",
  rating: 4.9,
  reviews: 135,
  phone: "+91 98175 20650",
  phoneAlt: "+91 94181 20650",
  tel: "tel:+919817520650",
  telAlt: "tel:+919418120650",
  address: {
    street: "Tourism Workshop, Near Petrol Pump Barrier, Old Barrier, Kachi Ghati, Chailly",
    city: "Shimla",
    state: "Himachal Pradesh",
    postalCode: "171004",
    country: "IN",
  },
  hours: "Open 24 Hours · 7 Days a Week",
} as const;

export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.postalCode}`;

export type ServiceKey =
  | "car-towing"
  | "vehicle-recovery"
  | "heavy-vehicle-recovery"
  | "truck-recovery"
  | "bus-recovery"
  | "roadside-assistance"
  | "crane-rental";

export type Service = {
  key: ServiceKey;
  name: string;
  short: string;
  urlName: string;
  bullets: string[];
};

export const SERVICES: Record<ServiceKey, Service> = {
  "car-towing": {
    key: "car-towing",
    name: "Car Towing",
    urlName: "Car Towing",
    short:
      "Safe and reliable towing for cars stranded due to breakdowns, accidents or mechanical problems.",
    bullets: [
      "Breakdown towing for hatchbacks, sedans and SUVs",
      "Under-lift and flatbed style towing as the road allows",
      "Careful handling of low-clearance and premium cars",
      "Drop to your preferred workshop or service centre",
    ],
  },
  "vehicle-recovery": {
    key: "vehicle-recovery",
    name: "Vehicle Recovery",
    urlName: "Vehicle Recovery",
    short:
      "Recovery of vehicles stuck off-road, on slopes, in ditches or in tight mountain locations.",
    bullets: [
      "Winching from slopes, ditches and khud-side positions",
      "Accident-damaged vehicle recovery and transport",
      "Recovery from landslide, snow and slush affected roads",
      "Coordination with police and insurance paperwork needs",
    ],
  },
  "heavy-vehicle-recovery": {
    key: "heavy-vehicle-recovery",
    name: "Heavy Vehicle Recovery",
    urlName: "Heavy Vehicle Recovery",
    short:
      "Recovery services for trucks, buses and commercial vehicles on difficult mountain roads.",
    bullets: [
      "Crane-assisted lifting for loaded commercial vehicles",
      "Blocked-road clearance support on hill highways",
      "Recovery of tippers, trailers and construction vehicles",
      "Trained crew for high-risk gradient operations",
    ],
  },
  "truck-recovery": {
    key: "truck-recovery",
    name: "Truck Recovery",
    urlName: "Truck Recovery",
    short: "Heavy-duty recovery solutions for commercial trucks and transport vehicles.",
    bullets: [
      "On-highway truck breakdown and jack-knife recovery",
      "Load stabilisation before lifting or towing",
      "Support for fleet operators and transport companies",
      "Night-time recovery with safety lighting and signage",
    ],
  },
  "bus-recovery": {
    key: "bus-recovery",
    name: "Bus Recovery",
    urlName: "Bus Recovery",
    short: "Professional recovery support for buses and large passenger vehicles.",
    bullets: [
      "HRTC, private and tourist bus recovery",
      "Passenger-safety-first approach at the incident site",
      "Recovery from narrow bends and unstable shoulders",
      "Transport to the nearest depot or workshop",
    ],
  },
  "roadside-assistance": {
    key: "roadside-assistance",
    name: "Roadside Assistance",
    urlName: "Roadside Assistance",
    short: "Emergency roadside support for vehicles that become stranded during travel.",
    bullets: [
      "On-spot help for stalled and immobile vehicles",
      "Assistance for tourists unfamiliar with hill roads",
      "Support during rain, snow and low-visibility conditions",
      "Towing arranged immediately when on-spot help is not enough",
    ],
  },
  "crane-rental": {
    key: "crane-rental",
    name: "Hydra Crane Rental",
    urlName: "Crane Rental",
    short:
      "10-ton Hydra crane services for construction, lifting, machinery shifting and industrial work.",
    bullets: [
      "10 ton Hydra crane on hourly or daily deployment",
      "Machinery shifting, lifting and positioning",
      "Loading, unloading and heavy material handling",
      "Rock breaker and scaffolding rental on request",
    ],
  },
};

export const SERVICE_LIST = Object.values(SERVICES);

export type Loc = {
  slug: string;
  name: string;
  district: "Shimla" | "Solan";
  intro: string;
  terrain: string[];
  nearby: string[];
  services: ServiceKey[];
};

export const LOCATIONS: Loc[] = [
  {
    slug: "shimla",
    name: "Shimla",
    district: "Shimla",
    intro:
      "Shimla's road network mixes steep town lanes, the busy Cart Road corridor and the NH-5 approach through Kachi Ghati. Our recovery base sits at the Old Barrier in Kachi Ghati, so a crane can be moving towards most parts of the town within minutes of your call.",
    terrain: [
      "Cart Road and Circular Road congestion",
      "Steep town link roads with limited turning space",
      "Winter ice on shaded stretches near Sanjauli and Dhalli",
    ],
    nearby: ["sanjauli", "dhalli", "kachi-ghati", "shoghi", "kufri", "tutikandi"],
    services: [
      "car-towing",
      "vehicle-recovery",
      "heavy-vehicle-recovery",
      "truck-recovery",
      "bus-recovery",
      "roadside-assistance",
      "crane-rental",
    ],
  },
  {
    slug: "solan",
    name: "Solan",
    district: "Solan",
    intro:
      "Solan sits on the Kalka–Shimla highway with constant truck, bus and tourist traffic. Breakdowns here usually happen on the four-lane climbs, the Chambaghat bypass or the older town roads, and each needs a different recovery approach.",
    terrain: [
      "Four-lane highway breakdowns with fast-moving traffic",
      "Loaded commercial vehicles failing on long climbs",
      "Narrow town roads around Saproon and the mall area",
    ],
    nearby: ["chambaghat", "salogra", "kandaghat", "kumarhatti", "barog", "dharampur"],
    services: [
      "car-towing",
      "vehicle-recovery",
      "heavy-vehicle-recovery",
      "truck-recovery",
      "bus-recovery",
      "roadside-assistance",
      "crane-rental",
    ],
  },
  {
    slug: "kufri",
    name: "Kufri",
    district: "Shimla",
    intro:
      "Kufri is one of the toughest recovery zones near Shimla. Snow, black ice and heavy tourist traffic on the Hindustan–Tibet road regularly leave cars sliding off the carriageway or stuck on gradients they cannot climb.",
    terrain: [
      "Winter snow and black ice on the Kufri climb",
      "Tourist vehicles without chains losing traction",
      "Parking-area breakdowns with very limited access",
    ],
    nearby: ["mashobra", "dhalli", "shimla", "chail"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "mashobra",
    name: "Mashobra",
    district: "Shimla",
    intro:
      "Mashobra's resort roads are narrow, tree-lined and steeply banked. Recovery here needs a compact approach and careful winching so that neither the stranded vehicle nor the road edge is damaged.",
    terrain: [
      "Narrow single-lane resort approach roads",
      "Soft shoulders that give way after rain",
      "Blind hairpins requiring traffic management",
    ],
    nearby: ["kufri", "dhalli", "shimla"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "shoghi",
    name: "Shoghi",
    district: "Shimla",
    intro:
      "Shoghi is the first major stop on NH-5 before Shimla and a common breakdown point for vehicles that have just finished the long climb from Solan. Overheating, brake failure and clutch problems are the usual calls we receive here.",
    terrain: [
      "Long continuous climb causing overheating",
      "Highway shoulder breakdowns with heavy traffic",
      "Roadside dhaba parking areas with poor access",
    ],
    nearby: ["tara-devi", "kachi-ghati", "shimla", "kandaghat"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "kandaghat",
    name: "Kandaghat",
    district: "Solan",
    intro:
      "Kandaghat is the junction for the Chail route and a frequent accident stretch on the Shimla–Solan highway. Vehicles often end up below road level here, which makes crane-assisted recovery essential.",
    terrain: [
      "Sharp curves on the Chail diversion",
      "Vehicles going below road level after skids",
      "Mixed truck and tourist traffic through the day",
    ],
    nearby: ["chail", "solan", "salogra", "shoghi"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "kumarhatti",
    name: "Kumarhatti",
    district: "Solan",
    intro:
      "Kumarhatti sits at the junction of the Kalka–Shimla highway and the Nahan road, with cantonment traffic added in. Truck breakdowns on the junction approach are common and need quick clearance.",
    terrain: [
      "Busy highway junction with limited lay-by space",
      "Loaded trucks stalling on the Nahan road climb",
      "Frequent monsoon water flow across the carriageway",
    ],
    nearby: ["dharampur", "barog", "solan", "parwanoo"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "truck-recovery", "roadside-assistance"],
  },
  {
    slug: "dharampur",
    name: "Dharampur",
    district: "Solan",
    intro:
      "Dharampur is a high-volume highway stretch where commercial vehicles stop, restart and often break down. Recovery here is usually about clearing the lane safely before traffic backs up towards Parwanoo.",
    terrain: [
      "Continuous heavy commercial vehicle movement",
      "Steep merge points on and off the four-lane",
      "Night-time visibility issues on the shoulder",
    ],
    nearby: ["kumarhatti", "parwanoo", "solan", "barog"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "truck-recovery", "roadside-assistance"],
  },
  {
    slug: "parwanoo",
    name: "Parwanoo",
    district: "Solan",
    intro:
      "Parwanoo is the industrial gateway to Himachal. Along with vehicle recovery, we regularly deploy the Hydra crane here for factory machinery shifting, loading and unloading work.",
    terrain: [
      "Industrial estate access roads and factory yards",
      "Trailer and container vehicle breakdowns",
      "Start of the hill climb where overheating begins",
    ],
    nearby: ["dharampur", "kumarhatti", "baddi", "solan"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "truck-recovery", "crane-rental"],
  },
  {
    slug: "barog",
    name: "Barog",
    district: "Solan",
    intro:
      "The Barog bypass and the old Barog road both see regular incidents, especially in fog. Tourist cars unfamiliar with the curves are our most frequent recovery calls in this belt.",
    terrain: [
      "Dense winter fog on the bypass",
      "Old road with tight, poorly lit curves",
      "Hotel driveways with steep entry gradients",
    ],
    nearby: ["solan", "kumarhatti", "dharampur"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "chail",
    name: "Chail",
    district: "Solan",
    intro:
      "Chail is reached by long, forested single-lane roads with very few turning points. Recovery vehicles must reach the spot, work in limited width and bring the vehicle out without blocking the route for hours.",
    terrain: [
      "Long single-lane forest roads",
      "Very few safe turning or staging points",
      "Winter frost on shaded sections",
    ],
    nearby: ["kandaghat", "kufri", "junga", "solan"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "sanjauli",
    name: "Sanjauli",
    district: "Shimla",
    intro:
      "Sanjauli's dense housing lanes and the tunnel approach mean a stalled car can block an entire locality. We use compact towing techniques here to clear vehicles quickly with minimum disruption.",
    terrain: [
      "Narrow residential lanes with parked vehicles",
      "Tunnel approach congestion",
      "Steep gradients into internal colonies",
    ],
    nearby: ["dhalli", "shimla", "panthaghati"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "dhalli",
    name: "Dhalli",
    district: "Shimla",
    intro:
      "Dhalli handles the traffic heading towards Kufri, Naldehra and the apple belt, including loaded trucks during the harvest season. Both car towing and heavy vehicle recovery calls peak here in autumn.",
    terrain: [
      "Apple season truck movement and overloading",
      "Tunnel and bypass merge congestion",
      "Snowfall affecting the upper approach",
    ],
    nearby: ["sanjauli", "kufri", "mashobra", "shimla"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "roadside-assistance"],
  },
  {
    slug: "kachi-ghati",
    name: "Kachi Ghati",
    district: "Shimla",
    intro:
      "Kachi Ghati is where our workshop and crane base is located, next to the Old Barrier. Response time here is the fastest of any area we serve, often within a few minutes of your call.",
    terrain: [
      "Barrier checkpoint queues and truck parking",
      "Steep highway entry into Shimla town",
      "Heavy mixed traffic through the day and night",
    ],
    nearby: ["tutikandi", "boileauganj", "shoghi", "shimla"],
    services: [
      "car-towing",
      "vehicle-recovery",
      "heavy-vehicle-recovery",
      "truck-recovery",
      "roadside-assistance",
      "crane-rental",
    ],
  },
  {
    slug: "chambaghat",
    name: "Chambaghat",
    district: "Solan",
    intro:
      "Chambaghat's industrial units and highway junction generate a steady mix of commercial vehicle recovery and crane deployment work for material handling inside plant premises.",
    terrain: [
      "Factory gates with tight turning radii",
      "Highway junction with fast merging traffic",
      "Loaded goods vehicles requiring crane support",
    ],
    nearby: ["solan", "salogra", "kandaghat"],
    services: ["car-towing", "vehicle-recovery", "heavy-vehicle-recovery", "crane-rental"],
  },
  {
    slug: "baddi",
    name: "Baddi",
    district: "Solan",
    intro:
      "Baddi's pharmaceutical and manufacturing belt needs both breakdown recovery for goods vehicles and regular Hydra crane deployment for machinery shifting inside industrial premises.",
    terrain: [
      "Industrial corridor with continuous truck traffic",
      "In-plant machinery lifting and shifting jobs",
      "Container and trailer handling requirements",
    ],
    nearby: ["nalagarh", "parwanoo", "solan"],
    services: ["vehicle-recovery", "heavy-vehicle-recovery", "truck-recovery", "crane-rental"],
  },
  {
    slug: "nalagarh",
    name: "Nalagarh",
    district: "Solan",
    intro:
      "Nalagarh combines plain-land industrial roads with the approach to the hills. Heavy vehicle recovery and crane rental for construction sites are the main requirements in this belt.",
    terrain: [
      "Industrial estate and construction site access",
      "Overloaded goods vehicle breakdowns",
      "Site lifting and equipment positioning work",
    ],
    nearby: ["baddi", "solan", "parwanoo"],
    services: ["vehicle-recovery", "heavy-vehicle-recovery", "truck-recovery", "crane-rental"],
  },
  {
    slug: "boileauganj",
    name: "Boileauganj",
    district: "Shimla",
    intro:
      "Boileauganj carries the traffic between Shimla town, Tutu and Summer Hill. Recovery here is usually quick because it is close to our Kachi Ghati base, but the roads are tight and need careful handling.",
    terrain: [
      "Congested market road with constant bus traffic",
      "Steep link roads towards Summer Hill",
      "Limited space for staging a recovery vehicle",
    ],
    nearby: ["kachi-ghati", "summer-hill", "tutu", "shimla"],
    services: ["car-towing", "vehicle-recovery", "roadside-assistance"],
  },
];

export const LOCATION_BY_SLUG: Record<string, Loc> = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l]),
);

/** Extra areas listed in coverage but without dedicated pages. */
export const EXTRA_AREAS = [
  "Chotta Shimla",
  "Tutikandi",
  "ISBT Shimla",
  "Chakkar",
  "Panthaghati",
  "Khalini",
  "Vikasnagar",
  "Summer Hill",
  "Tara Devi",
  "Tutu",
  "Junga",
  "Saproon",
  "Salogra",
  "Arki",
];

export function pagePath(service: ServiceKey, loc: string) {
  return `/${service}-in-${loc}`;
}

export type ComboPage = { slug: string; service: Service; loc: Loc };

export const COMBO_PAGES: ComboPage[] = LOCATIONS.flatMap((loc) =>
  loc.services.map((key) => ({
    slug: `${key}-in-${loc.slug}`,
    service: SERVICES[key],
    loc,
  })),
);

export const COMBO_BY_SLUG: Record<string, ComboPage> = Object.fromEntries(
  COMBO_PAGES.map((p) => [p.slug, p]),
);

export function parseCombo(slug: string): ComboPage | undefined {
  return COMBO_BY_SLUG[slug];
}
