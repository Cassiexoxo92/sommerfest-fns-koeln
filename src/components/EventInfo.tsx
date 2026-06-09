"use client";

import { useRef, useEffect } from "react";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INFO_ITEMS = [
  {
    icon: CalendarDays,
    label: "Datum",
    value: "Freitag, 10. Juli 2026",
    color: "#6ec1e4",
  },
  {
    icon: Clock,
    label: "Uhrzeit",
    value: "15:00 – 18:00 Uhr",
    color: "#61ce70",
  },
  {
    icon: MapPin,
    label: "Ort",
    value: "An der Wachsfabrik 25 (Innenhof) · 50996 Köln",
    color: "#758a2b",
  },
  {
    icon: Ticket,
    label: "Eintritt",
    value: "Kostenlos & ohne Anmeldung",
    color: "#f5c842",
  },
] as const;

export function EventInfo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".info-item");
    if (!items?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="event-info"
      ref={ref}
      className="relative z-10 -mt-6 mx-4 md:mx-8 lg:mx-auto lg:max-w-5xl"
      aria-label="Veranstaltungsdetails"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-100">
          {INFO_ITEMS.map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="info-item flex items-start gap-4 lg:px-6 first:pl-0 last:pr-0"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                style={{ backgroundColor: `${color}20` }}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7a7a7a] mb-1">
                  {label}
                </p>
                <p className="text-sm font-semibold text-[#54595f] leading-snug">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
