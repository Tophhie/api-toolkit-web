<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script lang="ts">
    import { onMount } from 'svelte';
</script>

<div class="min-h-screen flex items-center justify-center p-4 sm:0-6 md:p-8 lg:p-12">
    <div class="bg-white shadow-xl rounded-2xl max-w-lg w-full p-10 space-y-6 mx-auto items-center">
        <img
            src="https://blob.tophhie.cloud/tophhiecloud-resources/Logos/tophhiecloud-colour.png"
            height="50"
            alt="Tophhie Social Logo"
            id="Logo"
            class="h-8 sm:h-10 md:h-12 w-auto mb-4 sm:mb-6 mx-auto"
        />
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Welcome to the Tophhie Cloud API Toolkit</h1>
        <p class="text-center mb-4">
            This toolkit provides an interactive way of playing around with the Tophhie Cloud API. Select an API below to get started...
        </p>
        <div class="flex justify-center space-x-4">
            <a
                href="/docs"
                class="bg-[#100235] text-white px-4 py-2 rounded-lg hover:bg-[#0d0228] transition"
                >View Documentation</a
            >
            <a
                href="/examples"
                class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >See Examples</a
            >
        </div>
    </div>
</div>
