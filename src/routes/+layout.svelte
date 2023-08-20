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

<div class="viewport">
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
</div>

<style>
	.viewport {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		height: var(--header-height);
		padding: var(--header-padding);
		background-color: var(--color-500);
		display: flex;
		align-items: center;
	}

	.bodyContainer {
		flex-grow: 1;
		display: flex;
	}

	nav {
		width: auto;
		margin: 0.75em;
		transition: width 200ms;
	}

	nav ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		height: var(--page-container-height);
	}

	nav :global(.minimisedIcon) {
		transition: all 250ms ease-out;
	}

	nav :global(.minimisedIconFlipped) {
		transform: rotate(180deg);
	}

	.pageContainer {
		display: inline-block;
		flex-grow: 1;
	}
</style>
