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

<footer>
  <a class="footer-element" href="/">
    <div class="footer-ele-icon">
      <img src="assets/main.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">홈</div>
  </a>
  <a class="footer-element" href="/#/signup">
    <div class="footer-ele-icon">
      <img src="assets/login.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">교사 인증</div>
  </a>

  <a class="footer-element" href="/#/write">
    <div class="footer-ele-icon">
      <img src="assets/write.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">기록하기</div>
  </a>

  <a class="footer-element" href="/#/login">
    <div class="footer-ele-icon">
      <img src="assets/user.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">선생님 로그인</div>
  </a>
</footer>
