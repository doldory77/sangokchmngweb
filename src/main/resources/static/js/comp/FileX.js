const FileX = {
    props: ['title'],
    data() {
        return {
            selectFile: null,
            previewImgUrl: null,
        }
    },
    methods: {
        previewFile() {
            if (0 < this.$refs.selectFile.files.length) {
                this.selectFile = this.$refs.selectFile.files[0]
                let fileExt = this.selectFile.name.substring(this.selectFile.name.lastIndexOf(".") + 1)
                fileExt = fileExt.toLowerCase()
                if (["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExt)) {
                    if (this.selectFile.size <= (1024*1000*2)) {
                        var reader = new FileReader()
                        reader.onload = e => {
                            this.previewImgUrl = e.target.result
                        }
                        reader.readAsDataURL(this.selectFile)
                        this.$emit("setFile", [this.selectFile, this.$comm.millisecond()+'.'+fileExt])
                    } else {
                        alert('2Mb 이하로만 파일 업로드가 가능합니다.')
                        return
                    }
                } else {
                    alert('이미지 파일만 업로드 가능합니다.')
                    return
                }
            }
        }
    },
    template: `
    <div class="row g-2 mb-3">
        <label for="inputFile" class="col-md-2 col-form-label">{{ title }}</label>
        <div class="col-md-5">
            <input type="file" class="form-control" id="inputFile" ref="selectFile" @change="previewFile" />
        </div>
        <div class="col-md-5 mt-md-1 mt-sm-3 position-relative">
            <img class="rounded mx-auto d-block shadow-sm" style="max-width:200px;" v-if="previewImgUrl" :src="previewImgUrl" />
            <slot></slot>
        </div>
    </div>
    `
}