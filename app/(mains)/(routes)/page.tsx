import CalltoAction from "@/components/call-to-action";
import ExclusiveComp from "@/components/exclusive-comp";
import Exclusive from "@/components/exclusive-originals";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import LeagueAds from "@/components/section-league";
import WhyShowMax from "@/components/why-showmax";


export default function Home() {
  return (
    <main>
      <Hero />
      <CalltoAction />
      <Exclusive />
      <LeagueAds />
      <ExclusiveComp />
      <WhyShowMax />
      <Faq />
    </main>
  );
}
