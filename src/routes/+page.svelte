<script lang="ts">
    import Proie from "$lib/proie.svelte";
    import { onMount } from "svelte";
    import {randomNumber} from '$lib/helpers'

    export let data;
    $: pokemons = data.pokemon;
    
    
    let ids:number[] = []

    onMount(()=>{
        const interval = setInterval(() => {
            ids = [...ids, randomNumber(pokemons.length)]
            console.log(ids)
        }, 1000);

        return () => {
            clearInterval(interval)
        };
    });

    function remove(bouclePosition: number){
        ids = ids.filter((_, idPosition) => {
            return bouclePosition !== idPosition
        });
    }
</script>

{#each ids as id, bouclePosition}
    <Proie on:disapear ={() => {
        remove(bouclePosition)
    }}
    pokemon = {pokemons[id]}
    />
{/each}