import React from "react"
import Image from "next/image"

const Header = () => {
	return (
		<header
			className="h-20 w-screen bg-Dark-Blue-intro-and-email-sign-up-background px-5 
    flex items-center justify-between"
		>
			<div className="logo">
				<a href="/">
					<Image src={"/images/logo.svg"} alt="logo" width={100} height={50} />
				</a>
			</div>

			<div className="navs flex items-center gap-5">
				<a href="#" className="text-white  font-light">
					Features
				</a>
				<a href="#" className="text-white  font-light">
					Team
				</a>
				<a href="#" className="text-white  font-light">
					Sign in
				</a>
			</div>
		</header>
	)
}

export default Header
