import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";

const ITEMS = [
  { Icon: CalendarDays, label: "Freitag, 10. Juli 2026" },
  { Icon: Clock3,       label: "15:00 – 18:00 Uhr"      },
  { Icon: MapPin,       label: "An der Wachsfabrik 25 · 50996 Köln" },
  { Icon: Ticket,       label: "Eintritt frei"           },
] as const;

export function EventStrip() {
  return (
    <section
      id="event-strip"
      style={{ backgroundColor: "#758a2b" }}
      aria-label="Veranstaltungsdetails"
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {ITEMS.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-4 px-4 sm:px-6 first:pl-0 last:pr-0"
            >
              <Icon className="w-5 h-5 text-white/70 flex-shrink-0" aria-hidden="true" />
              <span className="text-white text-sm font-semibold leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
