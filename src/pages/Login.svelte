<script>
  import Footer from '../components/Footer.svelte';
</script>

<form id="login-form" action="/login" method="POST">
  <h1>어서오세요 선생님,</h1>
  <h1>로그인 해 주세요.</h1>
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

<Footer />
