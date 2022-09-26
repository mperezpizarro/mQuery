<script>

    import MovieCard from '../../../components/MovieCard.svelte';

    export let data
    
</script>

<div class="grid-container">
    {#each data.movieData as movie }
        <MovieCard props={{
            title: movie.Title,
            id: movie.imdbID,
            img: movie.Poster,
            year: movie.Year,
        }} />
    {/each}
</div>

<style>
    .grid-container{
        width: 100%;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        row-gap: 2.5rem;
        column-gap: 1rem;
    }
</style>