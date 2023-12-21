import type { PokemonInBag } from '$lib/types';
import { readFileSync, writeFileSync } from 'fs';

let bag: PokemonInBag[] = readBag();

export function addPokemonToBag(pokemon: PokemonInBag) {
	bag = [...bag, pokemon];
	const s = JSON.stringify(bag);
	writeFileSync('generated/bag.json', s);
	return bag;
}

export function readBag() {
	try {
		const data = readFileSync('generated/bag.json', 'utf-8');
		return JSON.parse(data) as PokemonInBag[];
	} catch (e) {
		console.log('No file');
		return [];
	}
}
