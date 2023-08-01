import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env;

export async function searchCity(query) {
  const API_ROUTE = "/search.json";
  const url = `${REACT_APP_API_URL}${API_ROUTE}`;

  try {
    const response = await axios.get(url, {
      params: {
        key: REACT_APP_API_TOKEN,
        q: query
      }
    })
    return response.data;

  } catch (error) {
    console.log(error)
    return false;
  }
}

export async function getCurrent(city) {
  const API_ROUTE = "/current.json";
  let url = `${REACT_APP_API_URL}${API_ROUTE}`;

  try {
    const response = await axios.get(url, {
      params: {
        key: REACT_APP_API_TOKEN,
        q: city
      }
    })
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}