import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from '../components/AndreasFooter'

import { AboutHero } from "../sections/Sobre/AboutHero";
import { OurHistory } from "../sections/Sobre/OurHistory";
import { Values } from "../sections/Sobre/Values";
import { Team } from "../sections/Sobre/Team";
import { Stats } from "../sections/Sobre/Stats";
import { Mission } from "../sections/Sobre/Mission";
import { AboutCallToAction } from "../sections/Sobre/AboutCallToAction";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <AndreasNavbar />

      <main>
        <AboutHero />
        <OurHistory />
        <Values />
        <Team />
        <Stats />
        <Mission />
        <AboutCallToAction />
      </main>

      <AndreasFooter />
    </div>
  );
}