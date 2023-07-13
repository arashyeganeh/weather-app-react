import "./Home.style.scss"
import TemperatureComponent from "../../components/temperature/temperature.component"

function Home() {
    return <>
        <div className="wrapper">
            <div className="general">
                <TemperatureComponent />
            </div>
        </div>
    </>
}

export default Home;