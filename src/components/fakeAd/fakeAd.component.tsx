import styles from "./fakeAd.module.css"
import fakeAdImage from "/src/assets/fakeAdImage.png"

export const FakeAd = () => {
	const goTo = () => {
		window.open("http://evidemment.fr/", "_blank")
	}

	return (
		<section className={styles.fakeAd} onClick={goTo}>
			<img src={fakeAdImage} alt="Fake Add AI" />
			<h2>Il vaut mieux parce que les IA ne savent toujours pas écrire...</h2>
			<p>Sponsorisé</p>
		</section>
	)
}
