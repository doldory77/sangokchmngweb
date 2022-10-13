const BoardItemView = {
    props:[
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
        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
            <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">{{ subject }}</strong>
                <router-link :to="{name: 'Board', query: {kind:this.kind, bno:this.bno}}">상세보기</router-link>
                <!--<a href="/board" class="">상세보기</a>-->
            </div>
             <span class="d-block">{{ content }}</span>
        </div>
    </div>    
    `
}