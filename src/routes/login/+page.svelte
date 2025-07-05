<script lang="ts">
  import { auth } from '$lib/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { onMount } from 'svelte';

  let userType: 'organization' | 'school' = 'organization';
  let email = '';
  let password = '';
  let error = '';
  let success = '';

  async function login() {
    error = '';
    success = '';
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      success = `Logged in as ${userType}`;
    } catch (e: any) {
      error = e.message;
    }
  }
</script>

<main>
  <h1>Sign In</h1>
  <form on:submit|preventDefault={login}>
    <label>
      <input type="radio" bind:group={userType} value="organization" /> Organization
    </label>
    <label>
      <input type="radio" bind:group={userType} value="school" /> School
    </label>
    <br />
    <input type="email" placeholder="Email" bind:value={email} required />
    <br />
    <input type="password" placeholder="Password" bind:value={password} required />
    <br />
    <button type="submit">Sign In</button>
  </form>
  {#if error}
    <p style="color: red">{error}</p>
  {/if}
  {#if success}
    <p style="color: green">{success}</p>
  {/if}
  <a href="/signup">Don't have an account? Sign up</a>
</main> 