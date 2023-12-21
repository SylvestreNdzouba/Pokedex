import type data from '$lib/file.json';

export type Pokemon = (typeof data)[number];

export type PokemonInBag = {
	id: number;
	uuid: string;
};
