import React from "react"
import Image from "next/image"

type props = {
	name: string
	text: string
	status: string
	image: string
}

export const Testimonial: React.FC<props> = ({ name, text, image, status }) => {
	return (
		<article className="testimonial bg-Dark-Blue-testimonials-background h-52 rounded-md mt-1">
			<div className="testi-content px-5 py-5">
				<p className="text-sm text-white/80 leading-6">
					{text}
				</p>
				<div className="profile flex items-center gap-3">
					<Image
						src={image}
						alt="profile-img"
						width={50}
						height={20}
						className="mt-5 rounded-full"
					/>
					<div className="text">
						<span className="text-white font-bold tracking-wide text-md ">
							{name}
						</span>
						<p className="text-sm text-white/80 tracking-wider ">{status}</p>
					</div>
				</div>
			</div>
		</article>
	)
}
