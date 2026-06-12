import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from '../components/AndreasFooter'

import { ContactHero } from "../sections/Contacts/ContactHero";
import { ContactFormSection } from "../sections/Contacts/ContactFormSection";
import { FAQSection } from "../sections/Contacts/FAQSection";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <AndreasNavbar />

      <main>
        <ContactHero />
        <ContactFormSection />
        <FAQSection />
      </main>

      <AndreasFooter />
    </div>
  );
}