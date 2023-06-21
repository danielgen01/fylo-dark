import Image from "next/image"
import Header from "./components/Header/Header"
import IntroBanner from "./components/IntroBanner/IntroBanner"
import Benefits from "./components/Benefits/Benefits"
import ProductiveBanner from "./components/productiveBanner/productiveBanner"
import Testimonials from "./components/Testimonials/Testimonials"
import CTABannerBottom from "./components/CTABannerBottom/CTABannerBottom"

export default function App() {
	return (
		<>
			<Header />
			<main>
				<IntroBanner />
				<Benefits />
				<ProductiveBanner />
				<Testimonials />
				<CTABannerBottom />
			</main>
		</>
	)
}
