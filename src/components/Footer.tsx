import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{backgroundColor:"#2e3a0a"}} className="text-white" role="contentinfo">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <Image src="/images/logo.png" alt="fns:köln" width={160} height={55} className="h-14 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-sm text-white/55 leading-relaxed">Freie Naturschulen Köln<br/>Grundschule &amp; Gesamtschule<br/>Natur · Mensch · Umwelt</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-5">Sommerfest 2026</h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>📅 Freitag, 10. Juli 2026</li>
              <li>🕒 15:00 – 18:00 Uhr</li>
              <li>📍 An der Wachsfabrik 25 (Innenhof)</li>
              <li>🏙️ 50996 Köln</li>
              <li>🎫 Eintritt frei · Keine Anmeldung</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-5">Links</h3>
            <ul className="space-y-3">
              {[
                { href:"https://freie-naturschulen.de",         label:"Zur Schulwebsite" },
                { href:"https://freie-naturschulen.de/impressum/",label:"Impressum" },
                { href:"https://freie-naturschulen.de/impressum/#datenschutz", label:"Datenschutz" },
              ].map(({href,label})=>(
                <li key={href}>
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
                    {label}<ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl border border-white/10 text-xs text-white/45 leading-relaxed">
              <strong className="text-white/60">Veranstalter:</strong><br/>
              Vivimos ganzheitliche Lebensräume gUG (hb)<br/>
              Schlebuscher Weg 41 · 51061 Köln<br/>
              <a href="tel:+4922368846800" className="hover:text-white/70 transition-colors">02236 – 884 68 00</a>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} fns:köln — Freie Naturschulen Köln</p>
          <p className="flex items-center gap-1.5">Gemacht mit <Heart className="w-3 h-3 text-[#9aad3b]" aria-hidden="true" /> für unsere Schulgemeinschaft</p>
        </div>
      </div>
    </footer>
  );
}
