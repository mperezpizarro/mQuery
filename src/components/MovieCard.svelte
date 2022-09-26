<script>
    export let props={
        title: 'Título',
        id: '',
        img: 'https://via.placeholder.com/300x450',
        year: '',
    }
</script>

<div class="movie-card">
    <h3>{props.title}</h3>
    <a href={`/detalles/${props.id}`}>
        {#if props.img != 'N/A'}
            <img src={props.img} alt={`Póster de ${props.title}`} />
        {:else}
            <img src='https://via.placeholder.com/300x450?text=NO%20IMG' alt={`Póster de ${props.title}`} />
        {/if}
    </a>
    <p>Año de estreno: <strong>{props.year}</strong></p>
</div>

<style>
    .movie-card{
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: .5rem;
    }
</style>