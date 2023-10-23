<script>
  import Footer from '../components/Footer.svelte';

  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { user$ } from '../store';

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      user$.set(user);
      localStorage.setItem('token', token);
    } catch (error) {
      // Handle Errors here.
      console.error(error);
    }
  };
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
</script>

<div>
  {#if $user$}
    <h1>{$user$?.displayName} 선생님, 어서오세요</h1>
    <h1>이미 로그인 되어 있습니다.</h1>
  {:else}
    <h1>선생님, 어서오세요</h1>
    <h1>로그인 해 주세요.</h1>
    <button class="google-login-btn" on:click={loginWithGoogle}>
      <img
        src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
        alt=""
      />
      <div>Google로 로그인하기</div>
    </button>

    <form id="login-form" action="/login" method="POST">
      <div>
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
    </form>
  {/if}
</div>

<Footer location="login" />

<style>
  .google-login-btn {
    border: solid gray 1px;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  .login-btn img {
    display: flex;
    margin: 0 5px;
  }
</style>
