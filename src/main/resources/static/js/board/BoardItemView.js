const BoardItemView = {
    props:[
        "title",
        "kind",
        "bno",
        "subject",
        "content",
        "writer",
        "write_dt",
    ],
    data() {
        return {
            
        }
    },
    template: `
    <div class="d-flex text-muted pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
        </svg>
        <div class="d-flex pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="flex-fill">
                <div class="d-flex justify-content-between">
                    <strong class="text-gray-dark">{{ subject }}</strong>
                    <!--<router-link :to="{name: 'Board', query: {kind:this.kind, bno:this.bno}}">{{bno}}</router-link>-->
                </div>
                <span class="d-block">{{ content }}</span>
            </div>
            <div class="ms-3">
                <router-link :to="{name: 'Board', query: {kind:this.kind, bno:this.bno, title:this.title}}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>    
    `
}