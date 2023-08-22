import { IconCards, IconHome, IconMoodSad, IconUser } from '@tabler/icons-svelte';

export const pageArr = [
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
		route: '/light_cones',
		Icon: IconCards
	},
	{
		title: 'Relics',
		route: '/relics',
		Icon: IconMoodSad
	}
];
