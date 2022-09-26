<script>
    export let data
    let {rawData} = data
</script>

<div class="details">
    <h2>{rawData.Title}</h2>
    <img src={rawData.Poster} alt={rawData.Title}>
    <div class="data">
        <p><strong>Fecha de estreno: </strong>{rawData.Released}</p>
        <p><strong>Sinopsis (Inglés): </strong>{rawData.Plot}</p>
        <p><strong>Calificación en iMDB: </strong>{rawData.imdbRating}</p>
    </div>
</div>

<style>
    .details{
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding: 1rem;
    }

    img{
        max-width: 400px;
    }

    .data{
        display: flex;
        flex-direction: column;
        row-gap: 1.2rem;
        max-width: 450px;
    }
</style>