<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from 'firebase/database';

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  $: students = [];

  //get data and post on main page
  const db = getDatabase();
  const studentsRef = ref(db, 'students/');

  onMount(() => {
    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      students = Object.values(data);
    });
  });
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

<main>
  {#each students as student}
    <div class="main-box">
      <div class="main-box-student-meta">
        <div class="student-name">{student.name}</div>
        <div class="student-grade">{student.grade}학년</div>
        <div class="student-class">{student.classroom}반</div>
      </div>
      <div class="main-box-student-img">
        <img src="" alt="" />
      </div>
    </div>
  {/each}
</main>

<Footer location="main" />
