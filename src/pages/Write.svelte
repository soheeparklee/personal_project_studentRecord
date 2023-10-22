<script>
  import { getDatabase, ref, push } from 'firebase/database';
  import Footer from '../components/Footer.svelte';
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from 'firebase/storage';

  let name;
  let grade;
  let classroom;
  // 'file' comes from the Blob or File API
  let files;

  const db = getDatabase();
  //get data
  function writeUserData(imgUrl) {
    push(ref(db, 'students/'), {
      name: name,
      grade: grade,
      classroom: classroom,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    window.location.hash = '/';
  }
  //get image
  const storage = getStorage();

  const uploadFile = async () => {
    //upload file
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    const res = await uploadBytes(imgRef, file);

    //get file and show on frontend
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };
</script>

<h1>학생 기록</h1>
<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <div>
    <!-- img -->
    <label for="image">Upload picture of student</label>
    <input type="file" id="image" name="image" bind:files />
  </div>
  <div>
    <!-- name -->
    <label for="name">What is the name of this student?</label>
    <input type="text" id="name" name="name" bind:value={name} />
  </div>

  <div>
    <!-- grade -->
    <label for="grade">What grade is this student in? </label>
    <input type="number" id="grade" name="grade" bind:value={grade} />
  </div>
  <div>
    <!-- class -->
    <label for="classroom">What classroom is this student in?</label>
    <input type="text" id="classroom" name="classroom" bind:value={classroom} />
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

<Footer location="write" />
