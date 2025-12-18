<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
    import '../../app.css'
</script>

<svelte:head>
	<title>Tophhie Cloud API Toolkit: Apple OS Version API</title>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#100235" >
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</svelte:head>

{@render children()}
