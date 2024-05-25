<script lang="ts">
  import "@fontsource/roboto";
  import "../app.css";
  import { page } from "$app/stores";
  import axios from "$lib/services/axios";
  import { goto, replaceState } from "$app/navigation";
  import { auth } from "$lib/stores/auth";
  import Loader from "$lib/icons/Loader.svelte";
  import { onMount } from "svelte";

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

{#if loading}
  <div class="grid h-dvh place-items-center">
    <Loader class="size-20 animate-spin" />
  </div>
{:else}
  <slot />
{/if}
