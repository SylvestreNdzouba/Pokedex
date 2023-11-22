import pokemon from '$lib/file.json';

export function load() {
	return {
		pokemon: pokemon[0]
	};
}
