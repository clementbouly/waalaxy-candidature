import { Button } from "../UI/button/button.component"
import { goToProfile } from "../utils/utils"
import styles from "./alert.module.css"
import notificationsLogo from "/src/assets/notificationsLogo.svg"

export const Alert = () => {
	return (
		<section className={styles.alert}>
			<img src={notificationsLogo} alt="alert" />
			Alerte : Un candidat intéressant est disponible actuellement !
			<a href="#clement">
				<Button onClick={goToProfile}>Voir le candidat</Button>
			</a>
		</section>
	)
}
