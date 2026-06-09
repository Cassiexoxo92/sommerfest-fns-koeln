import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart, CalendarDays, Clock3, MapPin, Building2, Ticket } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2e3a0a" }} className="text-white" role="contentinfo">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="fns:köln"
              width={160} height={55}
              className="h-14 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-sm text-white/55 leading-relaxed">
              Freie Naturschulen Köln<br />
              Grundschule &amp; Gesamtschule<br />
              Natur · Mensch · Umwelt
            </p>
          </div>

          {/* Event details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Sommerfest 2026
            </h3>
            <ul className="space-y-3">
              {[
                { Icon: CalendarDays, text: "Freitag, 10. Juli 2026" },
                { Icon: Clock3,       text: "15:00 – 18:00 Uhr" },
                { Icon: MapPin,       text: "An der Wachsfabrik 25 (Innenhof)" },
                { Icon: Building2,    text: "50996 Köln" },
                { Icon: Ticket,       text: "Eintritt frei · Keine Anmeldung" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-white/65">
                  <Icon className="w-4 h-4 text-white/35 flex-shrink-0" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "https://freie-naturschulen.de",                           label: "Zur Schulwebsite" },
                { href: "https://freie-naturschulen.de/impressum/",               label: "Impressum" },
                { href: "https://freie-naturschulen.de/impressum/#datenschutz",   label: "Datenschutz" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl border border-white/10 text-xs text-white/45 leading-relaxed">
              <strong className="text-white/65">Veranstalter:</strong><br />
              Vivimos ganzheitliche Lebensräume gUG (hb)<br />
              Schlebuscher Weg 41 · 51061 Köln<br />
              <a href="tel:+4922368846800" className="hover:text-white/70 transition-colors mt-1 inline-block">
                02236 – 884 68 00
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} fns:köln — Freie Naturschulen Köln</p>
          <p className="flex items-center gap-2">
            Gemacht mit
            <Heart className="w-3.5 h-3.5 text-[#9aad3b]" aria-hidden="true" />
            für unsere Schulgemeinschaft
          </p>
        </div>
      </div>
    </footer>
  );
}
