export async function load({data, fetch, params}){
    const value = params.query;
    const response = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=1830d99a&r=json`)
    const rawData = await response.json()
    const movieData = rawData.Search
    return {
        movieData
    } 
}