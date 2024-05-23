import styles from "./button.module.css"

export const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
