<script>
  import Footer from '../components/Footer.svelte';

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

<Footer location="main" />
