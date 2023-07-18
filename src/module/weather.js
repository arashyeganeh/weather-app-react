import { API_TOKEN, API_URL } from '../config';

export async function searchCity(query) {
    const API_ROUTE = '/search.json';
    const url = `${API_URL}${API_ROUTE}?key=${API_TOKEN}&q=${query}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCurrent(city) {
    const API_ROUTE = '/current.json'
    let url = `${API_URL}${API_ROUTE}?key=${API_TOKEN}&q=${city}`;

    function success(result) {
        console.log(result)
    }

    function error(err) {
        console.log(err)
    }

    await fetch(url)
        .then(result => result.json())
        .then(success, error);


    return 'd'
}