import "./styles/style.scss";
import { searchCity, getCurrent } from "./module/weather";
import { useState } from "react";
import { AutoComplete, Input } from "antd";

function normalizeResult(result) {
  if (!result.length) {
    return [];
  }

  return result.map((item) => {
    return {
      value: `${item.name}, ${item.country}`,
      label: (
        <>
          {item.name}
          <br />
          <span style={{ color: "#6e6e6e" }}>{item.country}</span>
        </>
      ),
    };
  });
}

function App() {
  const [options, setOptions] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const autoCompleteOnSearch = (value) => {
    searchCity(value).then((result) => {
      setOptions(normalizeResult(result));
    });
  };

  const autoCompleteOnSelect = (value) => {
    getCurrent(value).then((result) => {
      setCountry(result.location.country);
      setCity(result.location.name);
      setDegree(result.current.temp_c);
      setIsLoaded(true);
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="info">
          <h1>React weather app</h1>
          {isLoaded && (
            <>
              <div className="detail">
                <div className="temperature">{degree}°</div>
                <div className="location">
                  {city}
                  <span>{country}</span>
                </div>
              </div>
            </>
          )}
          <AutoComplete
            options={options}
            onSearch={autoCompleteOnSearch}
            onSelect={autoCompleteOnSelect}
          >
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
        </div>
      </div>
    </>
  );
}

export default App;
