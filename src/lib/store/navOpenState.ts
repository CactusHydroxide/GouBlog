import { writable, type Writable } from 'svelte/store';

interface NavStoreInterface {
	subscribe: Writable<boolean>['subscribe'];
	toggle: () => void;
	set: (navState: boolean) => void;
}

function createNavStore(): NavStoreInterface {
	const { subscribe, update, set } = writable<boolean>(true);

	return {
		subscribe,
		toggle: () => {
			update((current) => !current);
		},
		set
	};
}

export const navOpenState = createNavStore();
