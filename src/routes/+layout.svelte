<script lang="ts">
  import "@fontsource/roboto";
  import "../app.css";
  import { page } from "$app/stores";
  import axios from "$lib/services/axios";
  import { goto, replaceState } from "$app/navigation";
  import { auth } from "$lib/stores/auth";
  import { onMount } from "svelte";
  import { Toaster } from "$lib/components/toast";

  let loading = true;

  async function check() {
    try {
      const res = await axios.get("/users/me");
      auth.set(res.data);
      if ($auth && $page.url.pathname.startsWith("/auth")) {
        goto("/");
      }
    } catch (error) {
      auth.set(null);
      if (!$auth && !$page.url.pathname.startsWith("/auth")) {
        goto("/auth/login");
      }
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    check();
  });
</script>

<svelte:head>
  <title>Chat App</title>
</svelte:head>

{#if loading}
  <div class="grid h-dvh place-items-center">
    <div class="loader"></div>
  </div>
{:else}
  <slot />
{/if}

<Toaster />

<style>
  .loader {
    width: 40px;
    height: 20px;
    --c: no-repeat radial-gradient(farthest-side, hsl(var(--foreground)) 93%, #0000);
    background:
      var(--c) 0 0,
      var(--c) 50% 0,
      var(--c) 100% 0;
    background-size: 8px 8px;
    position: relative;
    animation: l4-0 1s linear infinite alternate;
  }
  .loader:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 12px;
    background: hsl(var(--foreground));
    left: 0;
    top: 0;
    animation:
      l4-1 1s linear infinite alternate,
      l4-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
  }
  @keyframes l4-0 {
    0% {
      background-position:
        0 100%,
        50% 0,
        100% 0;
    }
    8%,
    42% {
      background-position:
        0 0,
        50% 0,
        100% 0;
    }
    50% {
      background-position:
        0 0,
        50% 100%,
        100% 0;
    }
    58%,
    92% {
      background-position:
        0 0,
        50% 0,
        100% 0;
    }
    100% {
      background-position:
        0 0,
        50% 0,
        100% 100%;
    }
  }
  @keyframes l4-1 {
    100% {
      left: calc(100% - 8px);
    }
  }
  @keyframes l4-2 {
    100% {
      top: -0.1px;
    }
  }
</style>
