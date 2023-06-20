import React from "react"
import { Benefit } from "./Benefit"

const Benefits = () => {
	return (
		<section className="min-h-[500px] bg-Dark-Blue-testimonials-background py-20 px-10 flex flex-col gap-20">
			<Benefit
				imgSrc={"/images/icon-access-anywhere.svg"}
				headlineText={"Access your files, anywhere"}
				paragraphText={
					"The ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere."
				}
			/>
			<Benefit
				imgSrc={"/images/icon-security.svg"}
				headlineText={"Security you can trust"}
				paragraphText={
					"2-factor authentication and user controlled encryption are just a couple of the security features we allow to help secure your files"
				}
			/>
			<Benefit
				imgSrc={"/images/icon-collaboration.svg"}
				headlineText={"Real-time collaboration"}
				paragraphText={
					"Securely share files and folders with friends, familiy and colleagues for live collaboration. No email attachments required."
				}
			/>
			<Benefit
				imgSrc={"/images/icon-any-file.svg"}
				headlineText={"Store any type of file"}
				paragraphText={
					"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
				}
			/>
		</section>
	)
}

export default Benefits
