<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/button";
  import { Input } from "$lib/components/input";
  import { Label } from "$lib/components/label";
  import Eye from "$lib/icons/Eye.svelte";
  import EyeClosed from "$lib/icons/EyeClosed.svelte";
  import Loader from "$lib/icons/Loader.svelte";
  import axios from "$lib/services/axios";
  import { AxiosError } from "axios";

  let showPassword = false;
  let loading = false;
  let errors: Partial<typeof payload> | null = null;
  let genericErrorMessage = "";
  let payload = {
    name: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  async function register() {
    genericErrorMessage = "";
    errors = null;
    loading = true;

    try {
      await axios.post("/auth/register", {
        ...payload,
        displayName: payload.displayName || null,
      });

      goto("/auth/login", {
        state: {
          registerSuccess: true,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        errors = error?.response?.data.errors;
        if (error.response?.status !== 400) {
          genericErrorMessage = error?.response?.data.message;
        }
      }
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Register | Chat App</title>
  <meta name="description" content="Register for an account." />
</svelte:head>

<div class="mx-auto grid w-[350px] gap-6">
  <div class="grid gap-2 text-center">
    <h1 class="text-3xl font-bold">Register</h1>
    <p class="text-muted-foreground text-balance">Fill in the form below to create an account</p>
  </div>
  <form class="grid gap-4" on:submit|preventDefault={register}>
    <div class="grid gap-2">
      <Label for="username">Username</Label>
      <Input id="username" autocomplete="off" required bind:value={payload.name} />
      {#if errors?.name}
        <p class="text-destructive text-sm">{errors.name}</p>
      {/if}
    </div>

    <div class="grid gap-2">
      <Label for="displayName">
        Display name
        <span class="text-muted-foreground">(optional)</span>
      </Label>
      <Input id="displayName" autocomplete="off" bind:value={payload.displayName} />
      {#if errors?.displayName}
        <p class="text-destructive text-sm">{errors.displayName}</p>
      {/if}
    </div>

    <div class="grid gap-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" autocomplete="off" required bind:value={payload.email} />
      {#if errors?.email}
        <p class="text-destructive text-sm">{errors.email}</p>
      {/if}
    </div>

    <div class="grid gap-2">
      <Label for="password">Password</Label>
      <div class="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          required
          bind:value={payload.password}
        />
        <button
          type="button"
          class="absolute inset-y-0 right-0 px-2"
          on:click={() => (showPassword = !showPassword)}
        >
          {#if showPassword}
            <EyeClosed class="size-5" />
          {:else}
            <Eye class="size-5" />
          {/if}
        </button>
      </div>
      {#if errors?.password}
        <p class="text-destructive text-sm">{errors.password}</p>
      {/if}
    </div>

    <div class="grid gap-2">
      <Label for="confirmPassword">Confirm password</Label>
      <Input id="confirmPassword" type="password" required bind:value={payload.confirmPassword} />
      {#if errors?.confirmPassword}
        <p class="text-destructive text-sm">{errors.confirmPassword}</p>
      {/if}
    </div>

    {#if genericErrorMessage}
      <p class="text-destructive text-sm">{genericErrorMessage}</p>
    {/if}

    <Button variant="secondary" type="submit" class="w-full" disabled={loading}>
      {#if loading}
        <Loader class="size-5 animate-spin" />
      {:else}
        Register
      {/if}
    </Button>
  </form>
  <div class="mt-4 text-center text-sm">
    Already have an account?
    <a href="/auth/login" class="underline">Login</a>
  </div>
</div>
