<script lang="ts">
  import { auth } from '$lib/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { onMount } from 'svelte';
  import logo from '../../assets/logo.svg';
  import { goto } from '$app/navigation';

  let userType: 'organization' | 'school' = 'organization';
  let orgName = '';
  let schoolName = '';
  let name = '';
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
      goto('/');
    } catch (e: any) {
      error = e.message;
    }
  }
</script>

<style>
.signup-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
}
.signup-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-bottom: 1.2rem;
}
.logo img {
  height: 48px;
}
.signup-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  text-align: center;
}
.toggle-group {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}
.toggle-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  border: 1.5px solid #4caf50;
  background: #fff;
  color: #4caf50;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
}
.toggle-btn.selected, .toggle-btn:active {
  background: #4caf50;
  color: #fff;
}
.input-group {
  width: 100%;
  margin-bottom: 1.2rem;
}
.input-label {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.3rem;
  display: block;
}
.input-field {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 1.5px solid #bdbdbd;
  font-size: 1rem;
  background: #f7f7f7;
  margin-bottom: 0.2rem;
  outline: none;
  transition: border 0.2s;
}
.input-field:focus {
  border: 1.5px solid #4caf50;
}
.btn {
  width: 100%;
  padding: 0.9rem 0;
  font-size: 1.1rem;
  border-radius: 2rem;
  border: none;
  background: #4caf50;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  transition: background 0.2s;
}
.btn:hover {
  background: #388e3c;
}
.login-link {
  color: #4caf50;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 0.3rem;
}
.login-link:hover {
  text-decoration: underline;
}
</style>

<div class="signup-container">
  <form class="signup-card" on:submit|preventDefault={signup} autocomplete="off">
    <div class="logo"><img src={logo} alt="Unite Logo" /></div>
    <div class="signup-title">Create your Unite account</div>
    <div class="toggle-group">
      <button type="button" class="toggle-btn {userType === 'organization' ? 'selected' : ''}" on:click={() => userType = 'organization'}>Organization</button>
      <button type="button" class="toggle-btn {userType === 'school' ? 'selected' : ''}" on:click={() => userType = 'school'}>School</button>
    </div>
    {#if userType === 'organization'}
      <div class="input-group">
        <label class="input-label" for="orgName">Organization Name</label>
        <input class="input-field" id="orgName" type="text" bind:value={orgName} placeholder="Enter organization name" required={userType === 'organization'} />
      </div>
    {:else}
      <div class="input-group">
        <label class="input-label" for="schoolName">School Name</label>
        <input class="input-field" id="schoolName" type="text" bind:value={schoolName} placeholder="Enter school name" required={userType === 'school'} />
      </div>
    {/if}
    <div class="input-group">
      <label class="input-label" for="name">Name</label>
      <input class="input-field" id="name" type="text" bind:value={name} placeholder="Enter your name" required />
    </div>
    <div class="input-group">
      <label class="input-label" for="email">Email</label>
      <input class="input-field" id="email" type="email" bind:value={email} placeholder="Enter your email" required />
    </div>
    <div class="input-group">
      <label class="input-label" for="password">Password</label>
      <input class="input-field" id="password" type="password" bind:value={password} placeholder="Create a password" required />
    </div>
    <button class="btn" type="submit">Sign up</button>
    <div style="margin-top: 0.5rem;">
      Already have an account?
      <a class="login-link" href="/login">Sign in</a>
    </div>
  </form>
</div>

{#if error}
  <p style="color: red">{error}</p>
{/if}
{#if success}
  <p style="color: green">{success}</p>
{/if} 