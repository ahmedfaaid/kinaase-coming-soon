<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section
	class="h-screen bg-cover relative bg-center"
	style="background-image: url('https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
>
	<div class="absolute inset-0 bg-black opacity-70" />
	<div class="flex h-full w-full items-center justify-center container mx-auto px-8">
		<div class="max-w-2xl text-center z-10">
			<img src="/kinaase logo-01.svg" alt="Kinaase Logo" class="w-80 mx-auto" />
			<h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
				Coming Soon
			</h1>
			<p class="mt-6 lg:text-lg text-white">
				You can subscribe to our newsletter, and we will let you know when we are back
			</p>

			<form method="post" use:enhance>
				<div
					class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
				>
					<input
						id="email"
						type="email"
						name="email"
						class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-kinaase-green-400 focus:outline-none focus:ring focus:ring-kinaase-green-300 focus:ring-opacity-40 sm:mx-2"
						placeholder="Email Address"
					/>
					<button
						class="transform rounded-md bg-kinaase-green-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-kinaase-green-600 focus:bg-kinaase-green-600 focus:outline-none sm:mx-2"
						>Notify Me</button
					>
				</div>
				{#if form?.error}
					<p class="text-red-500">{form?.message}</p>
				{/if}
			</form>
		</div>
	</div>
</section>

<svelte:head>
	<title>Kinaase - Coming Soon</title>
	<meta name="description" content="Kinaase is coming soon" />
	<meta name="image" content="/kinaase logo-02.svg" />
</svelte:head>
