const Home = {
    data() {
        return {
            dashBoardItems: [],
        }
    },
    created() {
        this.selectDashBoard()
    },
    methods: {
        async selectDashBoard() {
            try {
                const result = await this.$http.post("/home/select", {}, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (result.data && result.data.result == 'success') {
                    this.dashBoardItems = result.data.data
                    
                    console.log(this.dashBoardItems)
                }
            } catch (err) {
                  console.error(err)
                  alert(err.response.data.msg)
            }            
        }
    },
    template: `
        <div class="container px-4 py-1" id="hanging-icons">
            <md-header :title="'관리자 홈'"></md-header>
            <!--<h2 class="pb-2 border-bottom">관리자 홈</h2>-->
            <div class="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">

                <div v-for="item in dashBoardItems" class="col d-flex align-items-start pb-4">
                    <div class="d-flex p-1">
                        <span class="material-symbols-outlined">spa</span>
                    </div>
                    <div>
                        <h3 class="fs-3">{{ item.name }}</h3>
                        <ul>
                            <li>전체 {{ item.cnt }}건</li>
                            <li>최근 {{ item.last_updt }} 업데이트</li>
                        </ul>
                        <a v-if="item.menu == 'MENU0501'" href="/mng/#/menu0501" class="btn btn-primary">올리기</a>
                        <a v-else :href="'/mng/#/board?kind='+item.menu+'&bno=&title='+item.name" class="btn btn-primary">올리기</a>
                    </div>
                </div>

            </div>
        </div>                
`}