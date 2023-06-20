import React from "react"
import Image from "next/image"

type props = {
	imgSrc: string
	headlineText: string
	paragraphText: string
}

export const Benefit: React.FC<props> = ({
	imgSrc,
	headlineText,
	paragraphText,
}) => {

	
	return (
		<div className="testimonial flex flex-col gap-4 items-center">
			<Image src={imgSrc} alt="icon" width={80} height={100} />
			<span className="text-white font-bold text-xl">{headlineText}</span>
			<p className="text-center text-white/70 text-md">{paragraphText}</p>
		</div>
	)
}
