<script>
    import SearchIcon from "../components/SearchIcon.svelte";
    import { goto } from "$app/navigation"

    const handleSubmit = (event) => {
        event.preventDefault()
        const searchValue=document.querySelector('.search-container input').value
        goto(`/buscar/${searchValue}`)
    }
</script>

<head>
    <title>mQuery - Busca tus series y películas favoritas</title>
    <meta name="description" content="App creada con Sveltekit y la API de omdb">
    <meta name="author" content="Dráfty">
</head>

<body>
    <nav>
        <div class="title">
            <a href="/">
                <h2>mQuery</h2>
            </a>
        </div>
        <div class="search-bar">
            <form class="search-container" on:submit={handleSubmit}>
                <input type="text" name="search" id="search" placeholder="Título de la película/serie..." />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    </nav>

    <slot />

    <footer>
        <p>Página creada por <strong><a href="https://github.com/mperezpizarro">Dráfty</a></strong></p>
        <small>Con la API de <strong><a href="https://www.omdbapi.com">OMDB</a></strong></small>
    </footer>
</body>

<style>
    :global(*){
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :global(body){
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        max-width: 1200px;
        background-color: #fefefe;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    :global(.app){
        width: 100%;
        min-height: 100vh;
    }

    nav{
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background-color: #c0c0c0;
        box-shadow: 0 0 6px rgba(0, 0, 0, .6);
        margin-bottom: 18px;
    }

    @media screen and (max-width: 600px){
        nav{
            width: 90%;
            flex-direction: column;
            row-gap: .5rem;
        }

        .search-bar{
            width: 80%;
        }
    }

    nav a{
        font-weight: 900;
        color: black;
        text-decoration: none;
    }

    nav a h2{
        background: -webkit-linear-gradient(#5675ff, #155f9c);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2rem;
    }

    nav a h2:hover{
        background: -webkit-linear-gradient(#5c76e9, #2a91e6);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .search-bar{
        flex-grow: .5;
    }

    .search-container{
        width: 100%;
        border: 2px solid black;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .2rem .5rem;
        column-gap: 1rem;
    }

    .search-container input{
        background: none;
        border: none;
        outline: none;
        height: 100%;
        flex-grow: 1;
    }

    .search-container button{
        cursor: pointer;
        background: none;
        border: none;
    }

    footer{
        position: fixed;
        bottom: 0;
        height: 60px;
        padding: .5rem;
        text-align: center;
        background-color: #c0c0c0;
        width: 100%;
        max-width: 1200px;
        box-shadow: 0 0 6px rgba(0, 0, 0, .6);
    }

    footer a{
        color: black;
        text-decoration: none;
    }

    footer a:hover{
        text-decoration: underline;
    }
</style>