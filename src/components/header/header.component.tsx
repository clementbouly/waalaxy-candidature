import { useState } from "react"
import { goToProfile } from "../utils/utils"
import styles from "./header.module.css"
import home from "/src/assets/home.svg"
import jobLogo from "/src/assets/jobLogo.svg"
import linkedinLogo from "/src/assets/linkedinLogo.svg"
import messagesLogo from "/src/assets/messagesLogo.svg"
import networkLogo from "/src/assets/networkLogo.svg"
import notificationsLogo from "/src/assets/notificationsLogo.svg"
import profileImage from "/src/assets/profileImage.png"

export const Header = () => {
	const [searchInput, setSearchInput] = useState("")
	const fakeClick = () => {
		alert("Tu as cru que j'allais recoder Linkedin ? 20% d'effort, 80% de résultat !")
	}

	const replaceSearchInput = () => {
		setSearchInput("Clément Bouly")
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.headerLeft}>
					<div className={styles.logo}>
						<img src={linkedinLogo} alt="LinkedIn Logo" />
					</div>
					<div className={styles.searchBar}>
						<input type="text" placeholder="Recherche" onChange={replaceSearchInput} value={searchInput} />
					</div>
				</div>
				<nav onClick={fakeClick} className={styles.headerNav}>
					<ul>
						<li>
							<img src={home} alt="Home" />
							<a href="#">Accueil</a>
						</li>
						<li>
							<img src={networkLogo} alt="Network" />
							<a href="#">Réseau</a>
						</li>
						<li>
							<img src={jobLogo} alt="Jobs" />
							<a href="#">Offres d'emploi</a>
						</li>
						<li>
							<img src={messagesLogo} alt="Messages" />
							<a href="#">Messagerie</a>
						</li>
						<li>
							<img src={notificationsLogo} alt="Notifications" />
							<a href="#">Notifications</a>
						</li>

						<li className={styles.profile} onClick={goToProfile}>
							<img src={profileImage} alt="Profile Picture" />
							<a href="#">Clément B</a>
						</li>
						<li className={styles.premium}>
							<a href="#">Recrutez Clément Premium pour min 45K</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
