import "./temperature.component.scss";

function Temperature() {
    return <>
        <ul className="info">
            <li className="temp">
                16°
            </li>
            <li>
                <ul>
                    <li className="city">London</li>
                    <li>06:09 - Mon, 9 Sep '19</li>
                </ul>
            </li>
        </ul>
    </>;
}

export default Temperature;