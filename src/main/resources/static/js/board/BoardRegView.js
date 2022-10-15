const BoardRegView = {
    data() {
        return {
            boardKind: '',
            bno:0,
            subject: '',
            content: '', 
            attchFile1: null,
            attchFile1Name: '',
            attchFile2: null,
            attchFile2Name: '',
            linkUrl:'',
            write_dt:'',
            writer:'',
            use_yn:'',
            savedFiles: [],
        }
    },
    created() {
        this.boardKind = this.$route.query.kind
        this.bno = this.$route.query.bno;
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
                        that.linkUrl = result.data.data[0].link_url
                        that.write_dt = result.data.data[0].write_dt
                        that.writer = result.data.data[0].writer
                        that.use_yn = result.data.data[0].use_yn
                        that.savedFiles = result.data.data[0].files
                    }
                } catch (err) {
                    console.error(err)
            
                }
            })(this)
        }
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
            if (!this.bno) {
                form.append("bno", this.bno);
            }
            if (!this.subject) {
                alert('제목은 필수항목입니다.');
                return
            }
            form.append("subject", this.subject)
            if (!this.content) {
                alert('내용은 필수항목입니다.')
                return
            }
            form.append("content", this.content)
            if (this.linkUrl) form.append("link_url", this.linkUrl)
            if (this.attchFile1) {
                form.append("files", this.attchFile1)
                form.append("fileNames", this.attchFile1Name)
            }
            if (this.attchFile2) {
                form.append("files", this.attchFile2)
                form.append("fileNames", this.attchFile2Name)
            }
            try {
                const result = await this.$http.post("/board/save", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log(result)
                if (result.data && result.data.result == 'success') {
                    if (confirm('정상 완료 되었습니다.')) {
                        this.$router.replace('Menu0202')
                    }
                }
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }
        },
        deleteFile(fileName) {
            alert(fileName);
        } 
    },
    template: `
    <div class="container">
        <div class="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style="background-color: rgb(111, 66, 193);">
            <img class="me-3" src="https://getbootstrap.kr/docs/5.2/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38">
            <div class="lh-1">
                <h1 class="h6 mb-0 text-white lh-1">Bootstrap</h1>
                <small>Since 2011</small>
            </div>
        </div>

        <form class="p-2" @submit.prevent="formSubmit">
            <fieldset>
                <legend></legend>
                <div class="row g-2 mb-3">
                    <label for="inputSubject" class="col-sm-2 col-form-label">제목</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="subject" id="inputSubject"> 
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputContent" class="col-sm-2 col-form-label">내용</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" v-model="content" id="inputContent" rows="3"></textarea>
                    </div>
                </div>
                <div class="row g-2 mb-3">
                    <label for="inputLinkUrl" class="col-sm-2 col-form-label">Link</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="linkUrl" id="inputLinkUrl"> 
                    </div>
                </div>
                <md-file title="첨부파일1" @setFile="setFile1">
                    <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile1Name }}</div>
                </md-file>
                <md-file title="첨부파일2" @setFile="setFile2">
                    <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile2Name }}</div>
                </md-file>
                <div class="d-grid col-6 mx-auto mt-5">
                    <button type="submit" class="btn btn-primary px-3">저장</button>
                </div>
            </fieldset>
        </form>
        <div class="d-flex" v-if="savedFiles.length > 0">
            <div class="position-relative rounded shadow-sm align-self-center m-2 p-1" style="min-width:100px; max-width:200px;" v-for="(img, idx) in savedFiles" :key="idx">
                <img class="w-100" :src="'/mng/file/'+img.file_nm">
                <button @click="deleteFile(img.file_nm)" type="button" class="btn-close position-absolute top-0 end-0 mt-2 me-2" aria-label="Close"></button>
            </div>
        </div>
    </div>
    `
}