<script lang="ts">
  import { auth } from '$lib/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { onMount } from 'svelte';

  let userType: 'organization' | 'school' = 'organization';
  let email = '';
  let password = '';
  let error = '';
  let success = '';

  async function signup() {
    error = '';
    success = '';
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // You can store userType in Firestore or Realtime Database if needed
      success = `Signed up as ${userType}`;
    } catch (e: any) {
      error = e.message;
    }
  }
</script>

<main>
  <h1>Sign Up</h1>
  <form on:submit|preventDefault={signup}>
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
    <button type="submit">Sign Up</button>
  </form>
  {#if error}
    <p style="color: red">{error}</p>
  {/if}
  {#if success}
    <p style="color: green">{success}</p>
  {/if}
  <a href="/login">Already have an account? Sign in</a>
</main> 