import { writable, type Writable } from 'svelte/store';

interface NavStoreInterface {
	subscribe: Writable<boolean>['subscribe'];
	toggle: () => void;
	set: (navState: boolean) => void;
}

function createNavStore(initVal: boolean): NavStoreInterface {
	const { subscribe, update, set } = writable<boolean>(initVal);

	return {
		subscribe,
		toggle: () => {
			update((current) => !current);
		},
		set
	};
}

export const navOpenState = createNavStore(true);
export const mobileNavOpenState = createNavStore(false);
