import React from "react"
import { Testimonial } from "./Testimonial"
import Image from "next/image"

const Testimonials = () => {
	return (
		<section className="bg-Dark-Blue-main-background min-h-[500px] px-10 py-52 ">
			<Image
				src={"/images/bg-quotes.png"}
				alt="quotes"
				width={30}
				height={100}
			/>
			<div className="testimonials-list grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Testimonial
					name="Satish Patel"
					text="Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collobaration
					machine."
					image="/images/profile-1.jpg"
					status="Founder & CEO, Huddle"
				/>
				<Testimonial
					name="Bruce McKenzie"
					text="Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collobaration
					machine."
					image="/images/profile-2.jpg"
					status="Founder & CEO, Huddle"
				/>
				<Testimonial
					name="Iva Boyd"
					text="Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collobaration
					machine."
					image="/images/profile-3.jpg"
					status="Founder & CEO, Huddle"
				/>
			</div>
		</section>
	)
}

export default Testimonials
