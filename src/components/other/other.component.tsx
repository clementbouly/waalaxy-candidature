import { useState } from "react"
import { SecondaryButton } from "../UI/button/secondaryButton.component"
import styles from "./other.module.css"
import jobLogo from "/src/assets/jobLogo.svg"
import profileImage from "/src/assets/profileImage.png"

export const Other = () => {
	const [showContact, setShowContact] = useState(false)
	const [animate, setAnimate] = useState(false)

	return (
		<section className={styles.other}>
			<div className={styles.candidates}>
				<h1>Candidats motivés </h1>
				<div className={`${styles.profileCard} ${animate ? styles.pulsation : ""}`} id="clement">
					<div>
						<img src={profileImage} alt="Profile Picture" />
						<h2>Clément Bouly</h2>
						<p>Fullstack Developer</p>
					</div>
					{showContact && (
						<div className={styles.contact}>
							<p>0643789426</p>
							<p>clementbouly@hotmail.fr</p>
						</div>
					)}
					<SecondaryButton
						onClick={() => {
							setShowContact(!showContact)
						}}
					>
						Contacter
					</SecondaryButton>
				</div>
				<div className={styles.noOtherCandidates}>
					<img
						src={jobLogo}
						alt="job"
						onClick={() => {
							setAnimate(!animate)
						}}
					/>
					Aucun autres candidats aussi motivé actuellement
				</div>
			</div>
		</section>
	)
}
