import React from "react"

const CTABannerBottom = () => {
	return (
		<section className="w-screen flex justify-center">
			<div
				className="mx-5 bg-Dark-Blue-testimonials-background h-96 absolute -mt-32 rounded-xl shadow-md
		 shadow-black py-10 px-10 flex flex-col items-center gap-5 justify-center w-96 lg:w-[50%]"
			>
				<span className="font-bold text-xl text-white shadow-black">
					Get early access today
				</span>
				<p className="text-white/80 font-medium text-center">
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our suppor team would
					be happy to help you.
				</p>
				<input
					type="text"
					placeholder="email@example.com"
					className="rounded-full w-full px-5 py-5 border-none outline-none"
				></input>
				<button className="w-full bg-gradient-to-r from-custom-cyan to-custom-blue py-4 rounded-full font-semibold text-white hover:opacity-70 duration-150">
					Get Started For Free
				</button>
			</div>
		</section>
	)
}

export default CTABannerBottom
