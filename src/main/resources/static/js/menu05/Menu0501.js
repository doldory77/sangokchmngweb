const Menu0501 = {
    data() {
        return {
            admsts: [],
            admAuths: [],
            authMenus: [],
            tmpAdmsts: [],
        }
    },
    created() {
        this.selectAuthMenus()
        this.selectAdmsts()
    },
    mounted() {

    },
    methods: {
        async selectAuthMenus() {
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
        async saveAuth() {
            let id = this.admAuths[0].id
            try {
                const result = await this.$http.post("/auth/save", this.admAuths, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (result.data && result.data.result == 'success') {
                    this.getAuth(id)
                    // this.admAuths = result.data.data
                    
                    // console.log(this.admAuths)
                }
              } catch (err) {
                  console.error(err)
                  alert(err.response.data.msg)
              }
        },
        async selectAdmsts() {
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
        async saveAdmsts() {
            let admst = this.tmpAdmsts[0]
            try {
                const result = await this.$http.post("/admst/save", [admst], {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (result.data && result.data.result == 'success') {
                    this.selectAdmsts()
                    this.tmpAdmsts.pop()
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
                    this.admAuths = result.data.data
                    console.log('Auths', this.admAuths)
                }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }            
        },
        authChng(e) {
            let index = e.target.getAttribute('data-idx')
            if (e.target.checked) {
                this.admAuths[Number(index)].stt = 'D'
            } else {
                this.admAuths[Number(index)].stt = ''
            }
            console.log('this.authMenus[Number(index)].stt', this.admAuths[Number(index)].stt)
        },
        addAuth() {
            let selDom = this.$refs.authKind
            let authCd = selDom.options[selDom.selectedIndex].value
            let authNm = selDom.options[selDom.selectedIndex].text
            let idx = this.admAuths.findIndex(elem => elem.authority_cd === authCd)
            if (idx < 0) {
                let id = this.admAuths[0].id
                this.admAuths.push({
                    authority_cd:authCd,
                    authority_nm:authNm,
                    id:id,
                    stt:"I"
                })
            }
            console.log(this.admAuths.length)
        },
        idChng(e, idx) {
            this.tmpAdmsts[idx].id = e.target.value
            console.log(this.tmpAdmsts[idx].id)
        },
        nameChng(e, idx) {
            this.tmpAdmsts[idx].name = e.target.value
            console.log(this.tmpAdmsts[idx].name)
        },
        passwdChng(e, idx) {
            this.tmpAdmsts[idx].passwd = e.target.value
            console.log(this.tmpAdmsts[idx].passwd)
        },
        chkChng(e, idx, key) {
            if (this.tmpAdmsts[idx][key] === 'Y') {
                this.tmpAdmsts[idx][key] = 'N'
            } else {
                this.tmpAdmsts[idx][key] = 'Y'
            }
            console.log(this.tmpAdmsts[idx][key])
        },
        cancelAdmst() {
            if (this.tmpAdmsts.length > 0) {
                this.tmpAdmsts.pop()
            }
        },
        addAdmst() {
            if (this.tmpAdmsts.length > 0) {
                if (confirm('저장하지 않은 데이터가 있습니다.\n계속 진행하시겠습니까?')) {
                    this.tmpAdmsts.pop()               
                } else {
                    return
                }
            }
            this.tmpAdmsts.push({
                id:'',
                name:'',
                passwd:'',
                stt:'I',
                super_yn:'N',
                use_yn:'Y'
            })
        }, 
        modifyAdmst(idx) {
            if (this.tmpAdmsts.length > 0) {
                if (confirm('저장하지 않은 데이터가 있습니다.\n계속 진행하시겠습니까?')) {
                    this.tmpAdmsts.pop()               
                } else {
                    return
                }
            }
            
            this.tmpAdmsts.push({...this.admsts[idx], ...{stt:'U'}})            
        }       
    },
    template: `
        <main class="container">
            <md-header :title="'관리자 권한'"></md-header>
            <div class="row mb-1">
                <div class="col-lg-8 text-end">
                    <a href="#" @click.prevent="addAdmst" class="btn btn-sm btn-primary">추가</a>
                    <a href="#" @click.prevent="cancelAdmst" class="btn btn-sm btn-success ms-1">취소</a>
                </div>
                <div class="col-lg-4">

                </div>
            </div>
            <div class="row g-5">
                <div class="col-lg-8">
                    
                    <div class="row bg-light border-bottom text-center d-none d-md-flex">
                        
                        <div class="col-md-3">id</div>
                        <div class="col-md-3">name</div>
                        <div class="col-md-3">passwd</div>
                        <div class="col-md-1">super</div>
                        <div class="col-md-1">use</div>
                        <div class="col-md-1">fun</div>
                        
                    </div>

                    <div  v-for="(item, idx) in admsts" :key="idx" class="row border text-left py-1">
                        <!--<div class="col-md-1">
                            <span class="material-symbols-outlined">close</span>
                        </div>-->
                        <div class="col-md-3">
                            <div>
                                <label :for="'id' + idx" class="d-inline-block d-md-none">id</label>
                                <input @focus="getAuth" type="text" class="form-control form-control-sm" :id="'id' + idx" placeholder="id를 입력" :value="item.id">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <label for="'name' + idx" class="d-inline-block d-md-none">name</label>
                                <input type="text" class="form-control form-control-sm" :id="'name' + idx" placeholder="name을 입력" :value="item.name">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <label for="passwd" class="d-inline-block d-md-none">passwd</label>
                                <input type="text" class="form-control form-control-sm" id="passwd" placeholder="passwd를 입력">
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" :id="'super' + idx" :checked="item.super_yn == 'Y' ? true : false">
                                <label class="form-check-label d-inline-block d-md-none" for="'super' + idx">슈퍼관리자</label>
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" :id="'use' + idx" :checked="item.use_yn == 'Y' ? true : false">
                                <label class="form-check-label d-inline-block d-md-none" for="'use' + idx">사용여부</label>
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <a href="#" @click.prevent="modifyAdmst(idx)" class="btn btn-sm btn-primary ms-1 bg-warning">M</a>
                        </div>
                        
                    </div>

                    <div  v-for="(item, idx) in tmpAdmsts" :key="idx" class="row border border-danger text-left py-1">
                        <div class="col-md-3">
                            <div>
                                <label for="id" class="d-inline-block d-md-none">id</label>
                                <input @input="idChng($event, idx)" type="text" class="form-control form-control-sm" id="id" placeholder="id를 입력" :value="item.id">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <label for="name" class="d-inline-block d-md-none">name</label>
                                <input @input="nameChng($event, idx)" type="text" class="form-control form-control-sm" id="name" placeholder="name을 입력" :value="item.name">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div>
                                <label for="passwd" class="d-inline-block d-md-none">passwd</label>
                                <input @input="passwdChng($event, idx)" type="password" class="form-control form-control-sm" id="passwd" placeholder="passwd를 입력">
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input @click="chkChng($event, idx, 'super_yn')" class="form-check-input" type="checkbox" value="" :id="'super' + idx" :checked="item.super_yn == 'Y' ? true : false">
                                <label class="form-check-label d-inline-block d-md-none" for="'super' + idx">슈퍼관리자</label>
                            </div>                        
                        </div>
                        <div class="col-md-1">
                            <div class="form-check">
                                <input @click="chkChng($event, idx, 'use_yn')" class="form-check-input" type="checkbox" value="" :id="'use' + idx" :checked="item.use_yn == 'Y' ? true : false">
                                <label class="form-check-label d-inline-block d-md-none" for="'use' + idx">사용여부</label>
                            </div>                        
                        </div>
                        <div class="col-md-1 text-center">
                            <a href="#" @click.prevent="saveAdmsts" class="btn btn-sm btn-primary ms-1 bg-success">S</a>
                        </div>
                        
                    </div>


                </div>

                <div class="col-lg-4">
                    
                    <div class="row py-1">
                        <select ref="authKind" class="w-50 col-sm-8 form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>권한선택</option>
                            <option v-for="(item, idx) in authMenus" :key="idx" :value="item.menu_cd">{{ item.menu_nm }}</option>
                        </select>
                        <div class="col-sm-4 ms-auto text-end">
                            <a href="#" @click.prevent="addAuth" class="btn btn-sm btn-primary">추가</a>
                            <a href="#" @click.prevent="saveAuth" class="btn btn-sm btn-primary ms-1 bg-success">저장</a>
                        </div>
                    </div>

                    <div class="row bg-light border-bottom text-center">
                        <div class="col-sm-4">&nbsp;</div>
                        <div class="col-sm-8">권한</div>
                    </div>

                    <div v-for="(item, idx) in admAuths" :key="idx" class="row border text-center py-1">
                        <div class="col-sm-3">
                            <div class="form-check">
                                <input @click="authChng" class="form-check-input" type="checkbox" value="" :data-idx="idx" :id="'authIdx' + idx" :checked="item.stt === 'D' ? true : false">
                                <label class="form-check-label" :for="'authIdx' + idx">삭제</label>
                            </div>
                        </div>
                        <div class="col-sm-9 text-end">{{ item.authority_nm }} [{{ item.authority_cd }}]</div>
                    </div>
                    
                </div>

            </div>
        </main>
    `
}