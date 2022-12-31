const Menu0604 = {
    data() {
      return {
        boardItems:[],
        kindCd:'MENU0604',
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

      <md-header :title="'선교'">
        <router-link class="btn btn-outline-light" :to="{name: 'Board', query: {kind:'MENU0604', bno:'', title:'선교'}}">등록</router-link>
      </md-header>
    
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="d-none border-bottom pb-2 mb-0">Suggestions</h6>
        
        <bd-item v-for="item in boardItems" :key="item.bno" :kind="'MENU0604'" :bno="item.bno" :subject="item.subject" :content="item.content" :tagYn="item.tag_yn" :title="'선교'"></bd-item>

        <div v-if="nextYn == 'Y' ? true : false" class="d-flex mt-2 justify-content-center justify-content-lg-end">
          <router-link class="btn btn-outline-primary col-8 col-lg-3" role="button" :to="{name: 'MENU0604', query: {pageno:pageNextNo}}">더보기</router-link>
        </div>
      </div>
    </main>
    `
}