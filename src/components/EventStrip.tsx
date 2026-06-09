import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";

const ITEMS = [
  { Icon: CalendarDays, label: "Freitag, 10. Juli 2026", sub: "Sommerfest" },
  { Icon: Clock3,       label: "15:00 – 18:00 Uhr",      sub: "3 Stunden Fest" },
  { Icon: MapPin,       label: "An der Wachsfabrik 25",   sub: "50996 Köln" },
  { Icon: Ticket,       label: "Eintritt frei",           sub: "Keine Anmeldung" },
] as const;

export function EventStrip() {
  return (
    <section
      id="event-strip"
      style={{ backgroundColor: "#758a2b" }}
      aria-label="Veranstaltungsdetails"
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ Icon, label, sub }, i) => (
            <div
              key={label}
              className={`flex items-center gap-4 py-8 sm:py-10 px-4 sm:px-7 ${
                i < ITEMS.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm sm:text-base font-bold leading-tight">{label}</p>
                <p className="text-white/65 text-xs sm:text-sm mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
