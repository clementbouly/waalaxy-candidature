import "./App.css"
import { Alert } from "./components/alert/alert.component"
import { Company } from "./components/company/company.component"
import { FakeAd } from "./components/fakeAd/fakeAd.component"
import { Header } from "./components/header/header.component"
import { Jobs } from "./components/jobs/jobs.component"
import { Other } from "./components/other/other.component"

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Company />
				<Alert />
				<Jobs />
				<FakeAd />
				<Other />
			</main>
		</>
	)
}

export default App
