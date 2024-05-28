<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/button";
  import { Input } from "$lib/components/input";
  import { Label } from "$lib/components/label";
  import Eye from "$lib/icons/Eye.svelte";
  import EyeClosed from "$lib/icons/EyeClosed.svelte";
  import Loader from "$lib/icons/Loader.svelte";
  import axios from "$lib/services/axios";
  import { auth } from "$lib/stores/auth";
  import { AxiosError } from "axios";

  let showPassword = false;
  let loading = false;
  let errorMessage = "";

  let payload = {
    emailOrUsername: "",
    password: "",
  };

  async function login() {
    loading = true;
    errorMessage = "";

    try {
      const res = await axios.post("/auth/login", payload);
      auth.set(res.data);
      goto("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data.message;
      }
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Login | Chat App</title>
  <meta name="description" content="Login to your account." />
</svelte:head>

<div class="mx-auto grid w-[350px] gap-6">
  <div class="grid gap-2 text-center">
    <h1 class="text-3xl font-bold">Login</h1>
    <p class="text-balance text-muted-foreground">
      Enter your email below to login to your account
    </p>
  </div>
  {#if $page.state.registerSuccess}
    <div class="rounded-md bg-secondary p-2 text-center text-sm">
      Account created successfully. You can now login.
    </div>
  {/if}
  <form class="grid gap-4" on:submit|preventDefault={login}>
    <div class="grid gap-2">
      <Label for="email">Email or username</Label>
      <Input id="emailOrUsername" type="text" required bind:value={payload.emailOrUsername} />
    </div>
    <div class="grid gap-2">
      <Label for="password">Password</Label>
      <div class="relative">
        <Input id="password" type="password" required bind:value={payload.password} />
        <button
          type="button"
          class="absolute inset-y-0 right-0 px-2"
          tabindex="-1"
          aria-hidden="true"
          on:click={() => (showPassword = !showPassword)}
        >
          {#if showPassword}
            <EyeClosed class="size-5" />
          {:else}
            <Eye class="size-5" />
          {/if}
        </button>
      </div>
    </div>
    {#if errorMessage}
      <p class="text-sm text-destructive">{errorMessage}</p>
    {/if}
    <Button type="submit" class="w-full" disabled={loading}>
      {#if loading}
        <Loader class="size-5 animate-spin" />
      {:else}
        Login
      {/if}
    </Button>
  </form>
  <div class="mt-4 text-center text-sm">
    Don&apos;t have an account?
    <a href="/auth/register" class="underline">Register</a>
  </div>
</div>
