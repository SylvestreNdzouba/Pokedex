import type { PokemonInBag } from '$lib/types';
import { readFileSync, writeFileSync } from 'fs';

let bag: PokemonInBag[] = readBag();

export function addPokemonToBag(pokemon: PokemonInBag) {
	bag = [...bag, pokemon];
	saveBag();
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

export function saveBag() {
	writeFileSync('generated/bag.json', JSON.stringify(bag));
}
