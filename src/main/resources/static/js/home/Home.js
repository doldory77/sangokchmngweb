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
        <div class="container px-4 py-5" id="hanging-icons">
            <h2 class="pb-2 border-bottom">관리자 홈</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start">
                    <div class="d-flex p-1">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                    <div>
                        <h3 class="fs-3">교회주보</h3>
                        <ul>
                            <li>전체 3건</li>
                            <li>최근 2022.11.23 업데이트</li>
                        </ul>
                        <a href="http://localhost:8081/mng/#/board?kind=MENU0203&bno=&title=주일설교" class="btn btn-primary">올리기</a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="d-flex p-1">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                    <div>
                        <h3 class="fs-3">교회주보</h3>
                        <ul>
                            <li>전체 3건</li>
                            <li>최근 2022.11.23 업데이트</li>
                        </ul>
                        <a href="http://localhost:8081/mng/#/board?kind=MENU0203&bno=&title=주일설교" class="btn btn-primary">올리기</a>
                    </div>
                </div>
                <div class="col d-flex align-items-start">
                    <div class="d-flex p-1">
                        <span class="material-symbols-outlined">close</span>
                    </div>
                    <div>
                        <h3 class="fs-3">교회주보</h3>
                        <ul>
                            <li>전체 3건</li>
                            <li>최근 2022.11.23 업데이트</li>
                        </ul>
                        <a href="http://localhost:8081/mng/#/board?kind=MENU0203&bno=&title=주일설교" class="btn btn-primary">올리기</a>
                    </div>
                </div>
            </div>
        </div>                
`}