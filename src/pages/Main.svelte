<script>
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
</script>

<div class="media-info-msg">화면 사이즈를 조정해 주세요</div>

<header>
  <div class="nice-bar">
    <div class="nice-bar-icons">
      <img src="./assets/chevron-left.svg" alt="" />
      <img src="./assets/chevron-right.svg" alt="" />
    </div>
    <div class="nice-bar-nice">나이스 학생 관리 시스템</div>
    <div class="nice-bar-time">{hours}:{minutes}</div>
  </div>

  <div class="function-bar">
    <div class="function-bar-tab">
      <div class="function-bar-title">STUDENT RECORD</div>
      <img src="assets/x-circle.svg" alt="" />
    </div>

    <div class="function-bar-icons">
      <img src="./assets/print.svg" alt="" />
      <img src="./assets/share.svg" alt="" />
      <img src="./assets/save.svg" alt="" />
    </div>
  </div>
</header>

<main />

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
