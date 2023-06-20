import Image from "next/image"
import Header from "./components/Header/Header"
import IntroBanner from "./components/IntroBanner/IntroBanner"
import Benefits from "./components/Benefits/Benefits"

export default function App() {
	return (
		<>
			<Header />
			<main>
				<IntroBanner />
				<Benefits />
			</main>
		</>
	)
}
