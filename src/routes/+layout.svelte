<script lang="ts">
	import { goto } from '$app/navigation';
	import { navOpenState } from '../lib/store/navOpenState';
	import { IconArrowBadgeLeft, IconHome, IconUser } from '@tabler/icons-svelte';
	import NavButton from '$lib/componentes/navButton/NavButton.svelte';

	const pageArr = [
		{
			title: 'Home',
			route: '/',
			Icon: IconHome
		},
		{
			title: 'Characters',
			route: '/characters',
			Icon: IconUser
		}
	];
</script>

<header>
	<p>Gouba Blog Website Thingy</p>
</header>
<div class="bodyContainer">
	<nav class:navOpen={$navOpenState}>
		<ul>
			{#each pageArr as { title, route, Icon }, index}
				<NavButton {route} {navOpenState} on:click={() => goto(route)}>
					<Icon />
					<span class:visible={$navOpenState}>{title}</span>
				</NavButton>
			{/each}
			<NavButton {navOpenState} on:click={() => navOpenState.toggle()} bottom>
				<IconArrowBadgeLeft class={`minimisedIcon ${!$navOpenState && 'minimisedIconFlipped'}`} />
				<span class:visible={$navOpenState}>Minimise</span>
			</NavButton>
		</ul>
	</nav>
	<div class="pageContainer">
		<slot />
	</div>
</div>

<style>
	header {
		height: var(--header-height);
		padding: var(--header-padding);
		background-color: var(--color-500);
		display: flex;
		align-items: center;
	}

	.bodyContainer {
		display: flex;
		height: var(--page-container-height);
	}

	nav {
		width: auto;
		padding: 0.75em;
		transition: width 200ms;
		height: 100%;
		box-sizing: border-box;
	}

	nav ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		height: 100%;
	}

	nav :global(.minimisedIcon) {
		transition: all 250ms ease-out;
	}

	nav :global(.minimisedIconFlipped) {
		transform: rotate(180deg);
	}

	.pageContainer {
		overflow-y: scroll;
		padding: 1em;
	}
</style>
