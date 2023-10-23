<script>
  import Login from './pages/Login.svelte';
  import Main from './pages/Main.svelte';
  import Write from './pages/Write.svelte';
  import Signup from './pages/Signup.svelte';
  import Router from 'svelte-spa-router';
  import NotFound from './pages/NotFound.svelte';
  import { GoogleAuthProvider } from 'firebase/auth';

  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  import './css/style.css';

  let login = false;

  const routes = {
    '/': Main,
    '/signup': Signup,
    '/write': Write,
    '*': NotFound,
  };
</script>

{#if !login}
  <Login />
{:else}
  <Router {routes} />
{/if}

<style>
</style>
