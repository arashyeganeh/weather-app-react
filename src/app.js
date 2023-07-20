import './styles/global.scss';
import { searchCity } from './module/weather';
import { useState } from 'react';
import { AutoComplete, Input } from 'antd';

import rain from './assets/svg/rainy-7.svg'

function normalizeResult(result) {
    if (!result.length) {
        return [];
    }

    return result.map((item) => {
        return {
            value: item.name,
            label: (<>
                {item.name}
                <span>{item.country}</span>
            </>)
        }
    })
}

function Search() {
    const [options, setOptions] = useState('');

    const handleSearch = (value) => {
        searchCity(value).then((result) => {
            setOptions(normalizeResult(result));
        })
    };

    return <>
        <div className='wrapper'>
            <div className='info'>
                <div className='icon'>
                    <img src={rain} alt='' />
                </div>
                <div className='detail'>
                    <div className='temperature'>
                        16°
                    </div>
                    <div className='location'>
                        <h1>London</h1>
                        <span>United State</span>
                    </div>
                </div>
                <AutoComplete
                    options={options}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="input here" enterButton />
                </AutoComplete>
            </div>
        </div>
    </>
}

/* https://www.amcharts.com/free-animated-svg-weather-icons/ */

export default Search; 