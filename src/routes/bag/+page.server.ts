import { readBag } from '$lib/server';

export function load({ depends }) {
	depends('bag:all');
	const bag = readBag();
	console.log(bag);
	return {
		bag
	};
}
