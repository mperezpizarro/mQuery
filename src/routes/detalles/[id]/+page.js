export async function load({data, fetch, params}){
    const response = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=1830d99a&r=json`)
    const rawData = await response.json()
    
    return{
        rawData
    }
}