import { EnquiryProvider } from '@/context/enquiry.jsx';
import SiteNav from '@/components/SiteNav.jsx';
import Hero from '@/components/Hero.jsx';
import TrustStrip from '@/components/TrustStrip.jsx';
import Intro from '@/components/Intro.jsx';
import Experiences from '@/components/Experiences.jsx';
import FeaturedJourney from '@/components/FeaturedJourney.jsx';
import WhyKariba from '@/components/WhyKariba.jsx';
import Hospitality from '@/components/Hospitality.jsx';
import GuestStories from '@/components/GuestStories.jsx';
import Gallery from '@/components/Gallery.jsx';
import Journal from '@/components/Journal.jsx';
import FinalCta from '@/components/FinalCta.jsx';
import SiteFooter from '@/components/SiteFooter.jsx';
import EnquiryPanel from '@/components/EnquiryPanel.jsx';
import MobileActionBar from '@/components/MobileActionBar.jsx';

/**
 * Section order follows the intended arc: desire (hero, experiences), then
 * proof (trust strip, stories), then the specifics that justify the price
 * (featured journey, hospitality), then the ask.
 */
export default function App() {
  return (
    <EnquiryProvider>
      <a className="skip-link label" href="#main">
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Intro />
        <Experiences />
        <FeaturedJourney />
        <WhyKariba />
        <Hospitality />
        <GuestStories />
        <Gallery />
        <Journal />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileActionBar />
      <EnquiryPanel />
    </EnquiryProvider>
  );
}
