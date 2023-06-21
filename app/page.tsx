import Image from "next/image"
import Header from "./components/Header/Header"
import IntroBanner from "./components/IntroBanner/IntroBanner"
import Benefits from "./components/Benefits/Benefits"
import ProductiveBanner from "./components/productiveBanner/productiveBanner"

export default function App() {
	return (
		<>
			<Header />
			<main>
				<IntroBanner />
				<Benefits />
				<ProductiveBanner />
			</main>
		</>
	)
}
