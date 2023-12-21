<script lang="ts">
    import Proie from "$lib/proie.svelte";
    import { onMount } from "svelte";
    import {randomNumber} from '$lib/helpers'
    import type { PokemonInBag } from "$lib/types";

    export let data;
    $: pokemons = data.pokemon;
    type  PreyType = {
        id:number;
        key:number;
    }

    let preys:PreyType[] = []

    onMount(()=>{
        const interval = setInterval(() => {
            const id = randomNumber(pokemons.length) +1 ;
            preys = [...preys, {id, key:Date.now()}]
            // console.log(preys)
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    });

    function remove(key :number){
        preys = preys.filter((prey) =>{
            return prey.key !== key
        });
    }

    function catchPokemon (prey : PreyType){
       fetch("/bag/"+prey.id, {method:"POST"})
       remove(prey.key)
    }
</script>

{#each preys as prey (prey.key)}
    <Proie on:disapear ={() => {
        remove(prey.key)
    }}
    on:click ={() => {
       catchPokemon(prey)
        }}
    pokemon = {pokemons[prey.id]}
    />
{/each}