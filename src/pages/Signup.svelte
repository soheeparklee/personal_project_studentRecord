<script>
  import Footer from '../components/Footer.svelte';
</script>

<form id="signup-form" action="/signup" method="POST">
  <h1>회원가입을 해 주세요</h1>
  <h2>교사 인증이 필요합니다</h2>
  <div>
    <label for="id">Sign in ID</label>
    <input type="text" id="id" name="id" required />
  </div>
  <div>
    <label for="password">Sign in PASSWORD</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <label for="password2">PASSWORD check</label>
    <input type="password" id="password2" name="password2" required />
  </div>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <button type="submit">sign-up</button>
  </div>
  <div id="passwordCheck" />
</form>

<Footer location="signup" />
