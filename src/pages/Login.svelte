<script>
  import Footer from '../components/Footer.svelte';

  import { browserPopupRedirectResolver } from 'firebase/auth';
  //get google popup
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { user$ } from '../store';
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      user$.set(user);
    } catch (error) {
      // Handle Errors here.
      console.error(error);
    }
  };
</script>

<div>
  {#if $user$?.displayName}
    <h1>{$user$} 선생님, 어서오세요</h1>
  {:else}
    <h1>선생님, 어서오세요</h1>
  {/if}
  <h1>로그인 해 주세요.</h1>

  <button class="login-btn" on:click={loginWithGoogle}>
    <img
      src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
      alt=""
    />
    <div>Google로 로그인하기</div>
  </button>
</div>

<!-- <form id="login-form" action="/login" method="POST"></form> -->
<!-- <div>
    <label for="id">Log in ID</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">Log in PASSWORD</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <button type="submit">log-in</button>
  </div>
  <div id="info" />
</form> -->

<Footer location="login" />

<style>
  .login-btn {
    border: solid gray 1px;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .login-btn img {
    display: flex;
    margin: 0 5px;
  }
</style>
