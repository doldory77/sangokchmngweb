const BoardRegView = {
    data() {
        return {
            title:'',
            boardKind: '',
            bno:0,
            subject: '',
            content: '', 
            attchFile1: '',
            attchFile1Name: '',
            attchFile2: '',
            attchFile2Name: '',
            linkUrl:'',
            write_dt:'',
            writer:'',
            use_yn:'Y',
            tag_yn:'N',
            savedFiles: [],
            ord:1,
            attr1:'',
            external_yn:'N',
        }
    },
    created() {
        this.boardKind = this.$route.query.kind
        this.bno = this.$route.query.bno
        this.title = this.$route.query.title
        console.log('this.boardKind: ', this.boardKind, 'this.bno: ', this.bno)
        if (this.bno) {
            (async function(that){
                try {
                    const result = await that.$http.post("/board/select", {bno:that.bno}, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    console.log(result)
                    if (result.data.result === 'success') {
                        that.subject = result.data.data[0].subject
                        that.content = result.data.data[0].content
                        that.tag_yn = result.data.data[0].tag_yn
                        that.linkUrl = result.data.data[0].link_url
                        that.write_dt = result.data.data[0].write_dt
                        that.writer = result.data.data[0].writer
                        that.use_yn = result.data.data[0].use_yn
                        that.savedFiles = result.data.data[0].attchFiles
                        that.ord = result.data.data[0].ord
                        that.attr1 = result.data.data[0].attr1
                        that.external_yn = result.data.data[0].external_yn
                    }
                } catch (err) {
                    console.error(err)
            
                }
            })(this)
        }
    },
    computed: {
        
    },
    methods: {
        setFile1(arr) {
            this.attchFile1 = arr[0]
            this.attchFile1Name = this.boardKind + '_' + arr[1]
        },
        setFile2(arr) {
            this.attchFile2 = arr[0]
            this.attchFile2Name = this.boardKind + '_' + arr[1]
        },
        async formSubmit() {
            let form = new FormData()
            form.append('kind_cd', this.boardKind)
            if (this.bno) {
                form.append("bno", this.bno);
            }
            if (!this.subject) {
                alert('????????? ?????????????????????.');
                return
            }
            form.append("subject", this.subject)
            if (!this.content) {
                alert('????????? ?????????????????????.')
                return
            }
            form.append("content", this.content)
            if (this.linkUrl) form.append("link_url", this.linkUrl)
            if (this.ord) form.append("ord", this.ord)
            if (this.attr1) form.append("attr1", this.attr1)
            if (this.attchFile1) {
                form.append("files", this.attchFile1)
                form.append("fileNames", this.attchFile1Name)
            }
            if (this.attchFile2) {
                form.append("files", this.attchFile2)
                form.append("fileNames", this.attchFile2Name)
            }
            form.append("attchFiles", [])
            form.append("use_yn", this.use_yn)
            form.append("tag_yn", this.tag_yn)
            form.append("external_yn", this.external_yn)
            try {
                const result = await this.$http.post("/board/save", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log(result)
                if (result.data && result.data.result == 'success') {
                    if (confirm('?????? ?????? ???????????????.')) {
                        this.$router.replace({name:this.boardKind, query: {pageno:'1'}})
                    }
                }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }
        },
        deleteFile(fileName) {
            if (confirm('?????????????????????????')) {
                (async function(that, file_nm){
                    try {
                        const result = await that.$http.post("/board/deleteAttch", {bno:that.bno, file_nm:file_nm}, {
                            headers: {
                                "Content-Type": "application/json",
                            }
                        })
                        console.log(result)
                        if (result.data && result.data.result == 'success') {
                            alert('?????????????????????.')
                            that.$router.go();
                        }
                        
                    } catch (err) {
                        console.error(err)
                        alert(err.response.data.msg)
                    }
                })(this, fileName)
            }
        },
        errorImg(e) {
            e.target.src = this.$comm.noImgURL
        }, 
    },
    template: `
    <div class="container">

        <md-header :title="title"></md-header>

        <form class="p-2" @submit.prevent="formSubmit">
            <fieldset>
                <legend></legend>
                <div class="row g-2 mb-3">
                    <label for="inputSubject" class="col-sm-2 col-form-label">??????</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="subject" id="inputSubject"> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputContent" class="col-sm-2 col-form-label">??????</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" v-model="content" id="inputContent" rows="8"></textarea>
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <span class="col-sm-2 col-form-label"></span>
                    <div class="col-sm-10">
                        <div class="form-check form-switch">
                            <input class="form-check-input" ref="tagyn" type="checkbox" role="switch" id="flexSwitchCheck1" :checked="tag_yn == 'Y' ? true : false" @change="tag_yn = ($refs.tagyn.checked == true ? 'Y' : 'N')">
                            <label class="form-check-label" for="flexSwitchCheck1">{{ tag_yn == 'Y' ? '????????? HTML ??????' : '????????? TEXT ??????' }}</label>
                        </div> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputLinkUrl" class="col-sm-2 col-form-label">Link</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="linkUrl" id="inputLinkUrl"> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <span class="col-sm-2 col-form-label"></span>
                    <div class="col-sm-10">
                        <div class="form-check form-switch">
                            <input class="form-check-input" ref="externalyn" type="checkbox" role="switch" id="flexSwitchCheck3" :checked="external_yn == 'Y' ? true : false" @change="external_yn = ($refs.externalyn.checked == true ? 'Y' : 'N')">
                            <label class="form-check-label" for="flexSwitchCheck3">{{ external_yn == 'Y' ? '????????????' : '????????????' }}</label>
                        </div> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputOrd" class="col-sm-2 col-form-label">????????????</label>
                    <div class="col-sm-2">
                        <input type="text" class="form-control" v-model="ord" id="inputOrd"> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputAttr1" class="col-sm-2 col-form-label">????????????</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" v-model="attr1" id="inputAttr1"> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <span class="col-sm-2 col-form-label"></span>
                    <div class="col-sm-10">
                        <div class="form-check form-switch">
                            <input class="form-check-input" ref="useyn" type="checkbox" role="switch" id="flexSwitchCheck2" :checked="use_yn == 'Y' ? true : false" @change="use_yn = ($refs.useyn.checked == true ? 'Y' : 'N')">
                            <label class="form-check-label" for="flexSwitchCheck2">{{ use_yn == 'Y' ? '????????? ??????' : '????????? ?????????' }}</label>
                        </div> 
                    </div>
                </div>
                <md-file title="????????????1" @setFile="setFile1">
                    <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile1Name }}</div>
                </md-file>
                <md-file title="????????????2" @setFile="setFile2">
                    <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile2Name }}</div>
                </md-file>
                <div class="d-grid col-md-6 mx-auto mt-5">
                    <button type="submit" class="btn btn-primary px-3">??????</button>
                </div>
            </fieldset>
        </form>
        <div class="d-flex justify-content-center flex-wrap mt-4" v-if="savedFiles.length > 0">
            <div class="position-relative rounded shadow-sm align-self-center m-2 p-1" style="max-width:200px;" v-for="(img, idx) in savedFiles" :key="idx">
                <img @error="errorImg" class="w-100" :src="'/mng/file/'+img.file_nm">
                <div style="font-size:0.8rem;">{{ img.file_nm }}</div>
                <button @click="deleteFile(img.file_nm)" type="button" class="btn-close position-absolute top-0 end-0 mt-2 me-2" aria-label="Close"></button>
            </div>
        </div>
    </div>
    `
}