import { readBag } from '$lib/server';
import { json } from '@sveltejs/kit';
import { addPokemonToBag } from '$lib/server';
import { randomUUID } from 'crypto';

export function GET() {
	return json(readBag());
}

export async function POST({ params }) {
	const newBag = addPokemonToBag({ id: parseInt(params.id), uuid: randomUUID() });
	return json(newBag);
}
