import { BlogSection } from "@/components/features/home/BlogSection";
import { CTASection } from "@/components/features/home/CTASection";
import { ContactSection } from "@/components/features/home/ContactSection";
import { FAQSection } from "@/components/features/home/FAQSection";
import { FeatureSection } from "@/components/features/home/FeatureSection";
import { HeroSection } from "@/components/features/home/HeroSection";
import { SponsorSection } from "@/components/features/home/SponsorSection";
import { StatsSection } from "@/components/features/home/StatsSection";
import { TestimonialSection } from "@/components/features/home/TestimonialSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<SponsorSection />
			<FeatureSection />
			<StatsSection />
			<TestimonialSection />
			<CTASection />
			<FAQSection />
			<BlogSection />
			<ContactSection />
			<Footer />
		</>
	);
}
