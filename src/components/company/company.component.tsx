import styles from "./company.module.css"
import profileImage from "/src/assets/profileImage.png"
import waalaxyBackGround from "/src/assets/waalaxyBackGround.png"
import waalaxyImage from "/src/assets/waalaxyImage.png"

export const Company = () => {
	return (
		<section className={styles.company}>
			<div className={styles.imgContainer}>
				<img className={styles.bg} src={waalaxyBackGround} alt="Waalaxy Bg" />
				<img className={styles.logo} src={waalaxyImage} alt="Waalaxy Image" />
			</div>
			<div className={styles.details}>
				<h1>Waalaxy</h1>
				<h4>Outil n°1 de Propspection LinkedIn</h4>
				<p>Développement de logiciels Montpellier, Hérault 21 K abonnés 11-50 employés + Clément Bouly ?</p>
				<div className={styles.network}>
					<img src={profileImage} alt="Profile Picture" />
					<div>
						<a href="https://www.linkedin.com/in/chloedalger/">Chloé,</a>
						<a href="https://www.linkedin.com/in/fabien-turgut/">Fabien</a> et 13 autres ont été formé à
						Polytech, comme Clément.
					</div>
				</div>
			</div>
			<div className={styles.nav}>
				<ul>
					<li>Accueil</li>
					<li>À propos</li>
					<li>Posts</li>
					<li className={styles.selected}>Emplois</li>
					<li>Personnes</li>
				</ul>
			</div>
		</section>
	)
}
