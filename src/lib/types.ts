import type data from '$lib/file.json';

export type Pokemon = (typeof data)[number];
