const Menu0501 = {
    data() {
        return {
            admsts: [],
            amdAuths: [],
            authMenus: [],
        }
    },
    created() {
        this.getAuthMenus()
        this.getAdmsts()
    },
    mounted() {

    },
    methods: {
        async getAuthMenus() {
            try {
              const result = await this.$http.post("/menu/authMenu", {auth_only:"Y"}, {
                  headers: {
                      "Content-Type": "application/json",
                  }
              })
              if (result.data && result.data.result == 'success') {
                  this.authMenus = result.data.data
                  
                  console.log(this.authMenus)
              }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }
        },
        async authSave() {
            let id = this.amdAuths[0].id
            try {
                const result = await this.$http.post("/auth/save", this.amdAuths, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (result.data && result.data.result == 'success') {
                    this.getAuth(id)
                    // this.amdAuths = result.data.data
                    
                    // console.log(this.amdAuths)
                }
              } catch (err) {
                  console.error(err)
                  alert(err.response.data.msg)
              }
        },
        async getAdmsts() {
            try {
              const result = await this.$http.post("/admst/select", {}, {
                  headers: {
                      "Content-Type": "application/json",
                  }
              })
              if (result.data && result.data.result == 'success') {
                  this.admsts = result.data.data
                  console.log(this.admsts)
              }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }
        },
        async getAuth(e) {
            let id = null
            if (e.target && e.target.value) {
                id = e.target.value
            } else {
                id = e
            }
            try {
                const result = await this.$http.post("/auth/select", {id}, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (result.data && result.data.result == 'success') {
                    this.amdAuths = result.data.data
                    console.log('Auths', this.amdAuths)
                }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }            
        },
        authChng(e) {
            let index = e.target.getAttribute('data-idx')
            if (e.target.checked) {
                this.amdAuths[Number(index)].stt = 'D'
            } else {
                this.amdAuths[Number(index)].stt = ''
            }
            console.log('this.authMenus[Number(index)].stt', this.amdAuths[Number(index)].stt)
        }
    },
    template: `
        <main class="container">
            <md-header :title="'관리자 권한'"></md-header>
            <div class="row mb-1">
                <div class="col-lg-9 text-end">
                    <a href="#" class="btn btn-sm btn-primary">추가</a>
                    <a href="#" class="btn btn-sm btn-primary ms-1 bg-success">저장</a>
                </div>
                <div class="col-lg-3">

                </div>
            </div>
            <div class="row g-5">
                <div class="col-lg-9">
                    
                    <div class="row bg-light border-bottom text-center d-none d-md-flex">
                        <div class="col-md-1">&nbsp;</div>
                        <div class="col-md-2">id</div>
                        <div class="col-md-2">name</div>
                        <div class="col-md-2">passwd</div>
                        <div class="col-md-1">super</div>
                        <div class="col-md-1">use</div>
                        <div class="col-md-3">비고</div>
                    </div>

                    <div  v-for="(item, idx) in admsts" :key="idx" class="row border text-left py-1">
                        <div class="col-md-1">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <label :for="'id' + idx" class="d-inline-block d-md-none">id</label>
                                <input @focus="getAuth" type="text" class="form-control form-control-sm" :id="'id' + idx" placeholder="id를 입력" :value="item.id">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <label for="name" class="d-inline-block d-md-none">name</label>
                                <input type="text" class="form-control form-control-sm" id="name" placeholder="name을 입력">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <label for="passwd" class="d-inline-block d-md-none">passwd</label>
                                <input type="text" class="form-control form-control-sm" id="passwd" placeholder="passwd를 입력">
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="super">
                                <label class="form-check-label d-inline-block d-md-none" for="super">슈퍼관리자</label>
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="use">
                                <label class="form-check-label d-inline-block d-md-none" for="use">사용여부</label>
                            </div>                        
                        </div>
                        <div class="col-md-3">
                            <div>
                                <label for="rmrk" class="d-inline-block d-md-none">비고</label>
                                <input type="text" class="form-control form-control-sm" id="rmrk" placeholder="기타 비고">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
                    
                    <div class="row py-1">
                        <select class="w-50 col-sm-8 form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>권한선택</option>
                            <option v-for="(item, idx) in authMenus" :key="idx" :value="item.menu_cd">{{ item.menu_nm }}</option>
                        </select>

                        <a href="#" class="col-sm-2 ms-auto btn btn-sm btn-primary">추가</a>
                        <a href="#" @click.prevent="authSave" class="col-sm-2 btn btn-sm btn-primary ms-1 bg-success">저장</a>
                    </div>

                    <div class="row bg-light border-bottom text-center">
                        <div class="col-sm-4">&nbsp;</div>
                        <div class="col-sm-8">권한</div>
                    </div>

                    <div v-for="(item, idx) in amdAuths" :key="idx" class="row border text-center py-1">
                        <div class="col-sm-4">
                            <div class="form-check">
                                <input @click="authChng" class="form-check-input" type="checkbox" value="" :data-idx="idx" :id="'authIdx' + idx" :checked="item.stt === 'D' ? true : false">
                                <label class="form-check-label" :for="'authIdx' + idx">삭제</label>
                            </div>
                        </div>
                        <div class="col-sm-8">{{ item.authority_cd }}<br>{{ item. }}</div>
                    </div>
                    
                </div>

            </div>
        </main>
    `
}