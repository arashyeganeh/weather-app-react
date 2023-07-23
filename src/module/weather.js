const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env;

export async function searchCity(query) {
  const API_ROUTE = "/search.json";
  const url = `${REACT_APP_API_URL}${API_ROUTE}?key=${REACT_APP_API_TOKEN}&q=${query}`;

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
  const API_ROUTE = "/current.json";
  let url = `${REACT_APP_API_URL}${API_ROUTE}?key=${REACT_APP_API_TOKEN}&q=${city}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}