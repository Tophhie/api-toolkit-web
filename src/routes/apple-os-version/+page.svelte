<script lang="ts">
	import HomeButton from "$lib/HomeButton.svelte";
    import { getAppleOSVersionResponse } from "$lib/tcapifetch";
	import { cubicOut } from "svelte/easing";
	import { slide } from "svelte/transition";

    let deviceModel: string = "";
    let currentOSVersion: string = "";

    let isFetching: boolean = false;
    let showResult: boolean = false;
    let apiResponse: any = null;
    let copiedToClipboard: boolean = false;

    function handleSubmit() {
        isFetching = true;
        getAppleOSVersionResponse(deviceModel, currentOSVersion)
            .then((response) => {
                apiResponse = response;
                showResult = true;
            })
            .catch((error) => {
                console.error("Error fetching Apple OS version:", error);
                alert("There was an error fetching the Apple OS version. Please try again.");
            })
            .finally(() => {
                isFetching = false;
            });
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2));
        copiedToClipboard = true;
        setTimeout(() => {
            copiedToClipboard = false;
        }, 2000);
    }
</script>


<div class="min-h-screen flex items-center justify-center p-4 sm:0-6 md:p-8 lg:p-12">
    <div class="flex flex-col p-6 space-y-6">
        <div class="bg-white shadow-xl rounded-2xl max-w-lg w-full p-10 space-y-6 mx-auto items-center">
            <img
                src="https://blob.tophhie.cloud/tophhiecloud-resources/Logos/tophhiecloud-colour.png"
                height="50"
                alt="Tophhie Social Logo"
                id="Logo"
                class="h-6 sm:h-8 md:h-10 w-auto mb-4 sm:mb-6 mx-auto"
            />
            <h1 class="text-xl sm:text-1xl md:text-2xl font-bold text-center mb-6">Apple OS Version API</h1>     
            <p class="text-center mb-4">
                Fetches the latest Apple OS version for a specific Apple device model. (Can also check if your device is on the latest version).
            </p>
            <form
                class="space-y-4"
                onsubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    type="text"
                    bind:value={deviceModel}
                    placeholder="Enter Apple Device Model (e.g., iPhone14,2)"
                    class="w-full p-3 border-2 rounded-lg focus:ring focus:ring-blue-300"
                    required
                />
                <input
                    type="text"
                    bind:value={currentOSVersion}
                    placeholder="Enter Current OS Version to Check Against (e.g., 15.0)"
                    class="w-full p-3 border-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <button
                    type="submit"
                    class="w-full bg-[#100235] text-white p-3 rounded-lg transition"
                    style="cursor: {isFetching ? 'not-allowed' : 'pointer'};"
                    disabled={isFetching}
                >
                    {#if isFetching}
                        <i class="fa fa-spinner fa-spin text-gray-400"></i>
                    {:else}
                        Submit
                    {/if}
                </button>
            </form>
        </div>
        {#if showResult}
            <div class="bg-white shadow-xl rounded-2xl max-w-lg w-full p-10 space-y-6 mx-auto items-center" transition:slide={{ duration: 500, easing: cubicOut }}>
                <dl class="space-y-2 text-left">
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Device Model:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{apiResponse.appleDeviceModel}</dd>
                    </div>
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Operating System:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{apiResponse.os}</dd>
                    </div>
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Latest OS Version:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{apiResponse.latestVersion}</dd>
                    </div>
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Update Available Date:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{apiResponse.updatePosted}</dd>
                    </div>
                    {#if currentOSVersion}
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Your OS Version:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{currentOSVersion}</dd>
                    </div>
                    <div class="sm:flex sm:justify-between">
                        <dt class="font-bold">Is Up To Date:</dt>
                        <dd class="text-gray-900 break-all sm:text-right">{!apiResponse.updateRequired}</dd>
                    </div>
                    {/if}
                </dl>
                <button
                    type="submit"
                    class="w-full bg-[#100235] text-white p-3 rounded-lg transition"
                    style="cursor: pointer;"
                    onclick={copyToClipboard}
                    >
                    {#if copiedToClipboard}
                        <i class="fa fa-check text-gray-400"></i> Copied!
                    {:else}
                        <i class="fa fa-clipboard mr-2"></i> Copy Response
                    {/if}
                </button>
            </div>
        {/if}
    </div>
</div>

<HomeButton />