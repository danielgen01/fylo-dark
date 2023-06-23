import React from "react"
import Image from "next/image"

const ProductiveBanner = () => {
	return (
		<section className="bg-Dark-Blue-main-background min-h-[500px] py-20 px-10 grid grid-cols-1 lg:grid-cols-2  gap-5 w-screen">
			<div className="image-ctn flex w-full justify-center">
				<Image
					src={"/images/illustration-stay-productive.png"}
					alt="stay-productive-img"
					width={550}
					height={200}
				/>
			</div>
			<div className="description flex flex-col gap-4">
			<h3 className="font-bold text-white text-xl lg:text-3xl">
				Stay productive, wherever you are
			</h3>
			<p className="text-white/70 lg:text-xl">
				Never let location be an issue when accessing your files. Fylo has you
				covered for all of your file storage needs.
				<br />
				<br />
				Securely share files and folders with friends, familiy and colleagues
				for live collaboration. No email attachments required.
			</p>
			<button className="see-how-works-link flex items-center gap-2 underline underline-offset-8 ">
				<a href="" className="text-custom-cyan ">
					See how Fylo works
				</a>
				<img src="/images/icon-arrow.svg" alt="arrow" />
			</button>
			</div>
		</section>
	)
}

export default ProductiveBanner
