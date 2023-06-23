import React from "react"
import Image from "next/image"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"

const Footer = () => {
	return (
		<footer className="min-h-[500px] bg-Dark-Blue-footer-background pt-96 px-10 pb-20">
			<Image src={"/images/logo.svg"} alt="logo" width={200} height={100} />
			<section className="company-essentials grid grid-cols-1 lg:grid-cols-5 mt-5">
				<div className="location mt-5 flex items-center gap-8">
					<Image
						src={"images/icon-location.svg"}
						alt="location"
						width={20}
						height={20}
					/>
					<p className="text-white/80 font-semibold text-sm">Lorem ipsum</p>
				</div>
				<div className="location mt-5 flex items-center gap-8">
					<Image
						src={"images/icon-phone.svg"}
						alt="location"
						width={20}
						height={20}
					/>
					<p className="text-white/80 font-semibold text-sm">
						+1-1532-123-34567
					</p>
				</div>
				<div className="location mt-5 flex items-center gap-8">
					<Image
						src={"images/icon-email.svg"}
						alt="location"
						width={20}
						height={20}
					/>
					<p className="text-white/80 font-semibold text-sm">
						example@fylo.com
					</p>
				</div>
			</section>
			<nav className="mt-20 text-white/80 ">
				<div className="first-navs flex flex-col gap-2">
					<a href="">About us</a>
					<a href="">Jobs</a>
					<a href="">Press</a>
					<a href="">Blog</a>
				</div>

				<div className="first-navs flex flex-col gap-2 mt-10">
					<a href="">Contact us</a>
					<a href="">Terms</a>
					<a href="">Privacy</a>
				</div>
			</nav>

			<div className="socials  items-center mt-20 w-full flex justify-center gap-2 ">
				<a href="">
					<BiLogoFacebook className="border-2 border-white rounded-full text-white h-10 w-10 px-1" />
				</a>
				<a href="">
					{" "}
					<AiOutlineTwitter className="border-2 border-white rounded-full text-white h-10 w-10 px-1" />
				</a>
				<a href="">
					{" "}
					<AiOutlineInstagram className="border-2 border-white rounded-full text-white h-10 w-10 px-1" />
				</a>
			</div>
		</footer>
	)
}

export default Footer
