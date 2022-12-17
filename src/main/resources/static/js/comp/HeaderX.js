const HeaderX = {
    props:[
        'title',
    ],
    template:`
    <div class="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style="background-color: #6f42c1;">
        <!--<img class="me-3" src="https://getbootstrap.kr/docs/5.2/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38">-->
        <img class="me-3" src="/mng/img/sangokch-logo-white50p.png" alt="" width="48" height="38">
        <div class="lh-1">
            <h1 class="h6 mb-0 text-white lh-1">SanGok</h1>
            <small>Since 1959.7</small>
        </div>
        <div class="ms-5 fs-3">{{ title }}</div>
        <div class="ms-auto">
            <slot></slot>
        </div>
    </div>    
    `
}