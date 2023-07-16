import "./Result.style.scss"
import TemperatureComponent from "../../components/temperature/temperature.component"

function Result() {
    return <>
        <div className="wrapper">
            <div className="general">
                <TemperatureComponent />
            </div>
        </div>
    </>
}

export default Result;