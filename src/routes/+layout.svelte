<script lang="ts">
	import { goto } from '$app/navigation';
	import { navOpenState, mobileNavOpenState } from '../lib/store/navStore';
	import { IconArrowBadgeLeft, IconHome, IconMenu2, IconUser, IconX } from '@tabler/icons-svelte';
	import NavButton from '$lib/componentes/NavButton.svelte';

	const toggleMobileNav = () => {
		mobileNavOpenState.toggle();
		navOpenState.set(true);
	};

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
	<div
		id="hamburgerIconContainer"
		on:click={toggleMobileNav}
		on:keyup={toggleMobileNav}
		role="button"
		aria-pressed="false"
		tabindex={0}
	>
		<IconMenu2 class={`hamburgerIcon ${!$mobileNavOpenState && 'visible'}`} size={32} />
		<IconX class={`hamburgerIcon ${$mobileNavOpenState && 'visible'}`} size={32} />
	</div>
</header>
<div class="bodyContainer">
	<nav class:navOpen={$navOpenState} class:mobileOpen={$mobileNavOpenState}>
		<ul>
			{#each pageArr as { title, route, Icon }, index}
				<NavButton
					{route}
					{navOpenState}
					on:click={() => {
						goto(route);
						$mobileNavOpenState && mobileNavOpenState.set(false);
					}}
				>
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
	/* navbar */
	header {
		height: var(--header-height);
		padding: var(--header-padding);
		background-color: var(--color-500);
		display: flex;
		align-items: center;
	}

	header #hamburgerIconContainer {
		all: none;
		display: none;
	}

	.bodyContainer {
		display: flex;
		height: var(--page-container-height);
		width: 100vw;
	}

	.bodyContainer > * {
		box-sizing: border-box;
	}

	nav {
		width: auto;
		padding: 1rem;
		transition: var(--default-transition);
		height: 100%;
	}

	nav ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		height: 100%;
	}

	nav :global(.minimisedIcon) {
		transition: var(--default-transition);
	}

	nav :global(.minimisedIconFlipped) {
		transform: rotate(180deg);
	}

	/* mobile nav */
	@media screen and (max-width: 768px) {
		header #hamburgerIconContainer {
			display: block;
			margin-left: auto;
			position: relative;
			cursor: pointer;
		}

		header :global(.hamburgerIcon) {
			position: absolute;
			font-size: 2rem;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			opacity: 0;
			transition: var(--default-transition);
		}

		header :global(.hamburgerIcon.visible) {
			opacity: 1;
		}

		.bodyContainer {
			flex-wrap: wrap;
			overflow-y: hidden;
		}

		.pageContainer {
			height: var(--page-container-height);
		}

		nav {
			height: 0;
			padding: 0 1rem;
			overflow-y: hidden;
			width: 100%;
		}

		nav.mobileOpen {
			height: var(--page-container-height);
			padding: 1rem;
		}
	}

	/* page */
	.pageContainer {
		overflow-y: scroll;
		padding: 1rem;
	}
</style>
