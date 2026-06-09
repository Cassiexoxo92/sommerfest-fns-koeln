import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#54595f] text-white"
      role="contentinfo"
      aria-label="Seitenfuß"
    >
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Column 1: Logo + tagline */}
          <div>
            <Image
              src="/images/logo.png"
              alt="fns:Köln — Freie Naturschulen Köln"
              width={130}
              height={45}
              className="h-11 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Freie Naturschulen Köln — Grundschule &amp; Gesamtschule.
              <br />
              Gegründet 2022 in Köln-Rodenkirchen.
            </p>
          </div>

          {/* Column 2: Event info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
              Das Sommerfest
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>🗓️ Freitag, 10. Juli 2026</li>
              <li>🕒 15:00 – 18:00 Uhr</li>
              <li>📍 An der Wachsfabrik 25 (Innenhof)</li>
              <li>🏙️ 50996 Köln</li>
              <li>🎫 Eintritt frei</li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://freie-naturschulen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                  aria-label="Zur Schulwebsite freie-naturschulen.de (öffnet in neuem Tab)"
                >
                  Zur Schulwebsite
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://freie-naturschulen.de/impressum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                  aria-label="Impressum auf freie-naturschulen.de (öffnet in neuem Tab)"
                >
                  Impressum
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://freie-naturschulen.de/impressum/#datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                  aria-label="Datenschutzerklärung auf freie-naturschulen.de (öffnet in neuem Tab)"
                >
                  Datenschutzerklärung
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-white/50 leading-relaxed">
                <strong className="text-white/70">Veranstalter:</strong>
                <br />
                Vivimos ganzheitliche Lebensräume gUG (hb)
                <br />
                Schlebuscher Weg 41 · 51061 Köln
                <br />
                <a
                  href="tel:+4922368846800"
                  className="hover:text-white/80 transition-colors"
                >
                  02236 – 884 68 00
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {year} fns:Köln — Freie Naturschulen Köln. Alle Rechte
            vorbehalten.
          </p>
          <p className="flex items-center gap-1.5">
            Gemacht mit
            <Heart className="w-3 h-3 text-[#61ce70]" aria-hidden="true" />
            für unsere Schulgemeinschaft
          </p>
        </div>
      </div>
    </footer>
  );
}
