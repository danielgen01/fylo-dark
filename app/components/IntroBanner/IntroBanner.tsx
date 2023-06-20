import React from "react"
import Image from "next/image"

const IntroBanner = () => {
	return (
		<section className="min-h-[500px] bg-Dark-Blue-intro-and-email-sign-up-background px-20 flex flex-col items-center gap-5 py-2">
			<Image
				src={"/images/illustration-intro.png"}
				alt="Illustration-intro"
				height={100}
				width={450}
			/>
			<h1 className="text-white font-bold text-center text-2xl whitespace-pre-wrap ">
				All your files in one secure location, accessible anywhere.
			</h1>
			<p className="text-white/70 font-semibold text-sm text-center ">
				Fylo stores all your most important files in one secure location. Acces
				them wherever you need, share and collaborate with friends familie, and
				co-workers.
			</p>
			<button
				className="rounded-full px-10 py-3 bg-gradient-to-r from-custom-cyan to-custom-blue w-72 text-white font-bold 
            hover:opacity-70 duration-150"
			>
				Get Started
			</button>
		</section>
	)
}

export default IntroBanner
