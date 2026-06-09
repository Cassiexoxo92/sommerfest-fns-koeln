import { Navigation }      from "@/components/Navigation";
import { Hero }             from "@/components/Hero";
import { EventStrip }       from "@/components/EventStrip";
import { Welcome }          from "@/components/Welcome";
import { Stats }            from "@/components/Stats";
import { Programm }         from "@/components/Programm";
import { Gallery }          from "@/components/Gallery";
import { UeberDieSchule }   from "@/components/UeberDieSchule";
import { Anfahrt }          from "@/components/Anfahrt";
import { Praktisches }      from "@/components/Praktisches";
import { Footer }           from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <EventStrip />
      <Welcome />
      <Stats />
      <Programm />
      <Gallery />
      <UeberDieSchule />
      <Anfahrt />
      <Praktisches />
      <Footer />
    </main>
  );
}
