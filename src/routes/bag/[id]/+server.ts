import { readBag } from '$lib/server';
import { json } from '@sveltejs/kit';
import { addPokemonToBag } from '$lib/server';
import { randomUUID } from 'crypto';
import pokemon from '../../../lib/file.json';

export function GET() {
	return json(readBag());
}

export async function POST({ params }) {
	const newBag = addPokemonToBag({
		id: parseInt(params.id),
		uuid: randomUUID(),
		name: pokemon[parseInt(params.id) - 1].name
	});
	return json(newBag);
}
