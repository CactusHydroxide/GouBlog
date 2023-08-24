import { IconCards, IconHome, IconMoodSad, IconUser } from '@tabler/icons-svelte';

export const navArray = [
	{
		title: 'Home',
		route: '/',
		Icon: IconHome
	},
	{
		title: 'Characters',
		route: '/characters',
		Icon: IconUser
	},
	{
		title: 'Light Cones',
		route: '/lightcones',
		Icon: IconCards
	},
	{
		title: 'Relics',
		route: '/relics',
		Icon: IconMoodSad
	}
];
