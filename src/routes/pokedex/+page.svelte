<script lang="ts">
    import Pokemon from '$lib/pokemon.svelte'
    export let data
</script>

<h1>Pokedex</h1>

{#each data.pokemon as pokemon}
    <Pokemon pokemon={pokemon} />
{/each}






    