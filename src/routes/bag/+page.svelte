<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Pokemon from '$lib/pokemon.svelte';

	export let data;
	$: bag = data.bag;
	const pokemons = data.pokemon;
	async function deletePokemon(uuid: string) {
		const res = await fetch(`/bag/${uuid}`, { method: 'DELETE' });
		await invalidate('bag:all');
		// const newBagSize = await res.json();
		// console.log(newBagSize);
	}
</script>

<div>
	<h1>Mon sac</h1>
	{#each bag as pokemon}
		<div>
			<img src={pokemons[pokemon.id].sprites.front_default} alt={pokemon.name} />
			<p>{pokemon.id}</p>
			<p>{pokemon.name}</p>
			<button
				on:click={() => {
					deletePokemon(pokemon.uuid);
				}}>Supprimer</button
			>
		</div>
	{/each}
</div>
