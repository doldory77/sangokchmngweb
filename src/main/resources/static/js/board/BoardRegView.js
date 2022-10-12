const BoardRegView = {
    data() {
        return {
            boardKind: '',
            subject: '',
            content: '', 
            attchFile1: null,
            attchFile1Name: '',
            attchFile2: null,
            attchFile2Name: '',
        }
    },
    created() {
        this.boardKind = this.$route.query.boardKind
    },
    methods: {
        setFile1(arr) {
            this.attchFile1 = arr[0]
            this.attchFile1Name = this.boardKind + arr[1]
        },
        setFile2(arr) {
            this.attchFile2 = arr[0]
            this.attchFile2Name = this.boardKind + arr[1]
        },
        async formSubmit() {
            let form = new FormData()
            form.append('kind_cd', this.boardKind)
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
            if (this.attchFile1) {
                form.append("files", this.attchFile1)
                form.append("fileNames", this.attchFile1Name)
            }
            if (this.attchFile2) {
                form.append("files", this.attchFile2)
                form.append("fileNames", this.attchFile2Name)
            }
            try {
                const result = await this.$http.post("/upload", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log(result)
            } catch (err) {
                console.error(err)
                alert(err.response.data.msg)
            }
        }
    },
    template: `
    <form class="p-2" @submit.prevent="formSubmit">
        <fieldset>
            <legend>About 게시판!</legend>
            <div class="row g-3 mb-3">
                <label for="inputSubject" class="col-sm-2 col-form-label">제목</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="subject" id="inputSubject"> 
                </div>
            </div>
            <div class="row g-3 mb-3">
                <label for="inputContent" class="col-sm-2 col-form-label">내용</label>
                <div class="col-sm-10">
                    <textarea class="form-control" v-model="content" id="inputContent" rows="3"></textarea>
                </div>
            </div>
            <md-file title="첨부파일1" @setFile="setFile1">
                <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile1Name }}</div>
            </md-file>
            <md-file title="첨부파일2" @setFile="setFile2">
                <div class="position-absolute top-0 start-50 translate-middle-x">{{ this.attchFile2Name }}</div>
            </md-file>
            <button type="submit" class="btn btn-primary">저장</button>
        </fieldset>
    </form>
    `
}