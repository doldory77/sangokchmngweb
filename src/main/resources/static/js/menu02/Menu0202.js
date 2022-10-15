const Menu0202 = {
    data() {
      return {
        boardItems:[]
      }
    },
    mounted() {
      for(i=0; i<10; i++) {
        this.boardItems.push({bno:i+1, subject:i+'제목', content:i+'내용'})
      }
    },
    template: `
    <main class="container">
    <div class="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style="background-color: #6f42c1;">
      <img class="me-3" src="https://getbootstrap.kr/docs/5.2/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38">
      <div class="lh-1">
        <h1 class="h6 mb-0 text-white lh-1">Bootstrap</h1>
        <small>Since 2011</small>
      </div>
      <div class="ms-auto">
        <router-link class="btn btn-outline-light" :to="{name: 'Board', query: {kind:'MENU0202', bno:''}}">등록</router-link>
      </div>
    </div>
  
    <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Suggestions</h6>
      
      <bd-item v-for="item in boardItems" :key="item.bno" :kind="'MENU0202'" :bno="19" :subject="item.subject" :content="item.content"></bd-item>

      <small class="d-block text-end mt-3">
        <a href="#">All suggestions</a>
      </small>
    </div>
  </main>
    `
}

/*
    <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>
      <div class="d-flex text-muted pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
  
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
        </p>
      </div>
      <div class="d-flex text-muted pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
  
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          Some more representative placeholder content, related to this other user. Another status update, perhaps.
        </p>
      </div>
      <div class="d-flex text-muted pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
  
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">@username</strong>
          This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
        </p>
      </div>
      <small class="d-block text-end mt-3">
        <a href="#">All updates</a>
      </small>
    </div>
*/