const Menu0501 = {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

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

                    <div class="row border text-left py-1">
                        <div class="col-md-1">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <label for="id" class="d-inline-block d-md-none">id</label>
                                <input type="text" class="form-control form-control-sm" id="id" placeholder="id를 입력">
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
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <a href="#" class="col-sm-2 ms-auto btn btn-sm btn-primary">추가</a>
                        <a href="#" class="col-sm-2 btn btn-sm btn-primary ms-1 bg-success">저장</a>
                    </div>

                    <div class="row bg-light border-bottom text-center">
                        <div class="col-sm-4">&nbsp;</div>
                        <div class="col-sm-8">권한</div>
                    </div>
                    <div class="row border text-center py-1">
                        <div class="col-sm-4"><span class="material-symbols-outlined">close</span></div>
                        <div class="col-sm-8">MENU0101</div>
                    </div>
                    <div class="row border text-center py-1">
                        <div class="col-sm-4"><span class="material-symbols-outlined">close</span></div>
                        <div class="col-sm-8">MENU0102</div>
                    </div>
                    <div class="row border text-center py-1">
                        <div class="col-sm-4"><span class="material-symbols-outlined">close</span></div>
                        <div class="col-sm-8">MENU0103</div>
                    </div>
                </div>

            </div>
        </main>
    `
}