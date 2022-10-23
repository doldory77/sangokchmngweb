const Menu0202 = {
    data() {
      return {
        boardItems:[],
        kindCd:'MENU0202',
        nextYn:'N',
        pageNo:'0',
        pageNextNo:'1',
      }
    },
    created() {
      this.pageNo = this.$route.query.pageno
    },
    beforeRouteUpdate(to, from, next) {
      this.pageNo = to.query.pageno
      next()
    },
    watch: {
      pageNo(newPageNo) {
        this.getBoard()
      }
    },
    methods: {
      async getBoard() {
        try {
          const result = await this.$http.post("/board/select", {kind_cd:this.kindCd, pageno:this.pageNo}, {
              headers: {
                  "Content-Type": "application/json",
              }
          })
          console.log(result)
          if (result.data && result.data.result == 'success') {
            this.boardItems = result.data.data
            this.nextYn = result.data.nextYn
            this.pageNextNo = result.data.pageno
          }
        } catch (err) {
            console.error(err)
            alert(err.response.data.msg)
        }
      }
    },
    mounted() {

    },
    template: `
    <main class="container">
      <!--<div class="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style="background-color: #6f42c1;">
        <img class="me-3" src="https://getbootstrap.kr/docs/5.2/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38">
        <div class="lh-1">
          <h1 class="h6 mb-0 text-white lh-1">Bootstrap</h1>
          <small>Since 2011</small>
        </div>
        <div class="ms-5">교회주보</div>
        <div class="ms-auto">
          <router-link class="btn btn-outline-light" :to="{name: 'Board', query: {kind:'MENU0202', bno:''}}">등록</router-link>
        </div>
      </div>-->
      <md-header :title="'교회주보'">
        <router-link class="btn btn-outline-light" :to="{name: 'Board', query: {kind:'MENU0202', bno:''}}">등록</router-link>
      </md-header>
    
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="d-none border-bottom pb-2 mb-0">Suggestions</h6>
        
        <bd-item v-for="item in boardItems" :key="item.bno" :kind="'MENU0202'" :bno="item.bno" :subject="item.subject" :content="item.content"></bd-item>

        <div v-if="nextYn == 'Y' ? true : false" class="d-flex mt-2 justify-content-center justify-content-lg-end">
          <router-link class="btn btn-outline-primary col-8 col-lg-3" role="button" :to="{name: 'Menu0202', query: {pageno:pageNextNo}}">더보기</router-link>
        </div>
      </div>
    </main>
    `
}