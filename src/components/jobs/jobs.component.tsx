import styles from "./jobs.module.css"
import target from "/src/assets/target.svg"
import waalaxyImage from "/src/assets/waalaxyImage.png"

export const Jobs = () => {
	const jobs = [
		{
			title: "Fullstack Developer (Node.JS/React) - CDI 👽",
		},
		{
			title: "Fullstack Growth Developer (Node.JS/React) - CDI 👽",
		},
		{
			title: "Growth Engineer (Node.JS/React) - CDI 👽",
		},
	]
	return (
		<section className={styles.jobs}>
			<h1>Offres d’emploi correspondant au profil de Clément Bouly</h1>
			<ul>
				{jobs.map((job, index) => (
					<li key={index} className={styles.jobCard}>
						<img className={styles.companyLogo} src={waalaxyImage} alt="Waalaxy Image" />
						<h1>{job.title}</h1>
						<h3>Waalaxy</h3>
						<p className={styles.city}>Montpellier</p>
						<div className={styles.infos}>
							<img src={target} alt="target" />
							<p>Recrutement Actif</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
