import styles from "./button.module.css"

export const SecondaryButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
	return (
		<button className={styles.secondaryButton} onClick={onClick}>
			{children}
		</button>
	)
}
