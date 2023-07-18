import './search.style.scss';
import { getCurrent, searchCity } from '../../module/weather';
import { useEffect, useState } from 'react';
import { AutoComplete, Input } from 'antd';

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
        <AutoComplete
            className='searchbox'
            options={options}
            onSearch={handleSearch}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    </>
}

export default Search; 