export async function load({data, fetch, params}){
    const response = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=1830d99a&r=json`)
    const rawData = await response.json()
    
    return{
        rawData
    }
}