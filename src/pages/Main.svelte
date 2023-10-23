<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from 'firebase/database';

  //authe

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  $: students = [];

  //get data and post on main page
  const db = getDatabase();
  const studentsRef = ref(db, 'students/');
  //onmount 는 화면이 보여질 떄마다 아래에 있는 함수 호출되어 보이도록
  onMount(() => {
    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      students = Object.values(data).reverse();
    });
  });

  const calcTime = (timestamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const sec = time.getSeconds();

    if (hour > 0) return `${hour}시간`;
    else if (minutes > 0) return `${minutes}분`;
    else if (sec >= 0) return `${sec}초`;
    else return '방금';
  };
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
        <div class="student-gender">
          {calcTime(student.insertAt)}전에 등교하였습니다.
        </div>
      </div>
      <div class="main-box-student-img">
        <img src={student.imgUrl} alt={student.name} />
      </div>
    </div>
  {/each}
</main>

<Footer location="main" />
