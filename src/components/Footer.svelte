<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = '/';
  };
</script>

<footer>
  <div class="footer-element">
    <button class="footer-ele-icon" on:click={moveToHome}>
      {#if location === 'main'}
        <img src="assets/main-solid.svg" alt="home-icon" />
      {:else}
        <img src="assets/main.svg" alt="home-icon" />
      {/if}
    </button>
    <div class="footer-ele-name">홈</div>
  </div>

  <a class="footer-element" href="/#/signup">
    <div class="footer-ele-icon">
      <img src="assets/key.svg" alt="home-icon" />
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
      <img src="assets/login.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">선생님 로그인</div>
  </a>

  <a class="footer-element" href="/#/my">
    <div class="footer-ele-icon">
      <img src="assets/user.svg" alt="home-icon" />
    </div>
    <div class="footer-ele-name">나의 기록</div>
  </a>
</footer>
