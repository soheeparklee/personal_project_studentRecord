<h1>학생 기록</h1>
<form id="write-form">
  <div>
    <!-- image -->
    <label for="image">Upload student picture</label>
    <input type="file" id="image" name="image" />
  </div>

  <div>
    <!-- name -->
    <label for="name">What is the name of this student?</label>
    <input type="text" id="name" name="name" />
  </div>

  <div>
    <!-- grade -->
    <label for="grade">What grade is this student in? </label>
    <input type="number" id="grade" name="grade" />
  </div>
  <div>
    <!-- class -->
    <label for="classroom">What classroom is this student in?</label>
    <input type="text" id="classroom" name="classroom" />
  </div>

  <div>
    <!-- gender -->
    <label for="gender">Is this student boy or a girl?</label>
    <div>
      <input type="radio" id="gender" name="gender" value="boy" />
      boy
    </div>

    <div>
      <input type="radio" id="gender" name="gender" value="girl" />
      girl
    </div>
  </div>

  <!-- submit btn -->
  <div>
    <button type="submit">submit student record</button>
  </div>
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
