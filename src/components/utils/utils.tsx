import { useEffect, useState } from "react"
export const goToProfile = () => {
	console.log("goToProfile")
	window.open("https://www.linkedin.com/in/cl%C3%A9ment-bouly-2720a3150/", "_blank")
}

export const useDebounce = (value: unknown, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}
