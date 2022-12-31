<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page import="org.sangokch.model.Admst" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>관리자</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/mng/css/style.css">
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/vue-router@4"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/mng/js/util/Comm.js"></script>
    <script src="/mng/js/comp/FileX.js"></script>
    <script src="/mng/js/comp/HeaderX.js"></script>
    <script src="/mng/js/board/BoardItemView.js"></script>
    <script src="/mng/js/board/BoardRegView.js"></script>
    <script src="/mng/js/home/Home.js"></script>
    <script src="/mng/js/menu00/Menu0001.js"></script>
    <script src="/mng/js/menu01/Menu0101.js"></script>
    <script src="/mng/js/menu01/Menu0102.js"></script>
    <script src="/mng/js/menu01/Menu0103.js"></script>
    <script src="/mng/js/menu01/Menu0104.js"></script>
    <script src="/mng/js/menu01/Menu0105.js"></script>
    <script src="/mng/js/menu02/Menu0203.js"></script>
    <script src="/mng/js/menu02/Menu0204.js"></script>
    <script src="/mng/js/menu02/Menu0205.js"></script>
    <script src="/mng/js/menu02/Menu0206.js"></script>
    <script src="/mng/js/menu03/Menu0301.js"></script>
    <script src="/mng/js/menu03/Menu0302.js"></script>
    <script src="/mng/js/menu03/Menu0303.js"></script>
    <script src="/mng/js/menu03/Menu0304.js"></script>
    <script src="/mng/js/menu06/Menu0601.js"></script>
    <script src="/mng/js/menu06/Menu0602.js"></script>
    <script src="/mng/js/menu06/Menu0603.js"></script>
    <script src="/mng/js/menu06/Menu0604.js"></script>
    <script src="/mng/js/menu04/Menu0401.js"></script>
    <script src="/mng/js/menu04/Menu0402.js"></script>
    <script src="/mng/js/menu04/Menu0403.js"></script>
    <script src="/mng/js/menu05/Menu0501.js"></script>
    <!--<script src="/js/etc/Temp.js"></script>
    -->
</head>
<body class="bg-light bg-opacity-50">
    <div id="app" style="padding-top: 56px;">
        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalScrollableTitle">{{ searchText }}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p v-for="(item, idx) in searchItems" :key="idx">
                    <template v-if="item.title">{{ item.verse + ' ' + item.content }}</template>
                    <template v-else>
                        <p v-if="idx === 0">{{ item.subject }}</p>
                        <pre>{{ item.lyrics }}</pre>
                    </template> 
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
              </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sg-navbar">
            <div class="container-lg">
                <a class="navbar-brand" href="#">
                    <img src="/mng/img/logo_100.png" alt="Logo" width="32" height="32" class="d-inline-block align-text-top">
                    <div style="display: inline-block; position: relative; width: 120px; padding-left: 3px;">
                        <div style="position: absolute; top: -20px;">산곡성결교회</div>
                    </div>
                </a>
                <button id="navBarTogglerBtn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <!-- 상단 내비게이션 -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <!-- 메뉴 -->
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'MENU0001',query: {pageno:'1'}}" disabled>홈</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              교회소개
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                <c:if test="${authMenu.contains('MENU0101')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0101',query: {pageno:'1'}}">산곡교회비전</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0104')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0104',query: {pageno:'1'}}">산곡교회연혁</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0102')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0102',query: {pageno:'1'}}">섬기는 분</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0105')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0105',query: {pageno:'1'}}">예배시간</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0103')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0103',query: {pageno:'1'}}">오시는 길</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              예배찬양
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                <c:if test="${authMenu.contains('MENU0203')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0203',query: {pageno:'1'}}">설교</router-link></li>  
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0204')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0204',query: {pageno:'1'}}">찬양</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0205')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0205',query: {pageno:'1'}}">행사</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0206')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0206',query: {pageno:'1'}}">특강</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              다음세대
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink5">
                                <c:if test="${authMenu.contains('MENU0301')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0301',query: {pageno:'1'}}">유치부</router-link></li>  
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0302')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0302',query: {pageno:'1'}}">유초등부</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0303')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0303',query: {pageno:'1'}}">학생부</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0304')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0304',query: {pageno:'1'}}">청년부</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item dropdown disabled">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              훈련사역
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                <c:if test="${authMenu.contains('MENU0601')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0601',query: {pageno:'1'}}">새가족</router-link></li>  
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0602')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0602',query: {pageno:'1'}}">제자훈련</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0603')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0603',query: {pageno:'1'}}">젊은부부</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0604')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0604',query: {pageno:'1'}}">선교</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item dropdown disabled">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              교회소식
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink6">
                                <c:if test="${authMenu.contains('MENU0401')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0401',query: {pageno:'1'}}">교회소식</router-link></li>  
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0402')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0402',query: {pageno:'1'}}">새가족</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0403')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0403',query: {pageno:'1'}}">갤러리</router-link></li>
                                </c:if>
                            </ul>
                        </li>                        
                        <li class="nav-item dropdown disabled">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              시스템
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink4">
                                <c:if test="${authMenu.contains('MENU0501')}">
                                <li><router-link class="dropdown-item" to="/menu0501">권한</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex ms-auto" role="search" v-on:submit.prevent="parseBibleHymn">
                        <input v-model="searchText" class="form-control me-2" type="search" placeholder="성경구절 또는 찬송가" aria-label="성경구절 또는 찬송가">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <c:if test="${null ne admst}"><button class="btn btn-outline-light m-1" @click="logout">Logout</button></c:if>
                </div>
            </div>
        </nav>
        
        <router-view></router-view>
        
    </div>

    <!-- <div class="sg-divider my-5"></div> -->
    <hr class="sg-line-divider">

    <footer class="py-5 text-dark">
        <div class="container">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="text-center fs-5 mb-1 ps-5">403020 인천광역시 부평구 길주로 326번길 13</p>
            <p class="text-center fs-5 mb-0 pe-5">032) 513-3434 (Fax 겸용)</p>
        </div>
    </footer>    

</body>
<script>
    const {createApp} = Vue
    const {createRouter, createWebHashHistory} = VueRouter
    
    const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {name:'Home', path:'/', component:Home},
            {name:'Board', path:'/board', component:BoardRegView},
            // {name:'Temp', path:'/temp', component:Temp},
            {name:'MENU0001', path:'/menu0001', component:Menu0001},

            {name:'MENU0101', path:'/menu0101', component:Menu0101},    // 산곡교회 비전
            {name:'MENU0104', path:'/menu0104', component:Menu0104},    // 산곡교회 연혁
            {name:'MENU0102', path:'/menu0102', component:Menu0102},    // 섬기는 분
            {name:'MENU0105', path:'/menu0105', component:Menu0105},    // 예배시간
            {name:'MENU0103', path:'/menu0103', component:Menu0103},    // 오시는 길

            {name:'MENU0203', path:'/menu0203', component:Menu0203},    // 설교
            {name:'MENU0204', path:'/menu0204', component:Menu0204},    // 찬양
            {name:'MENU0205', path:'/menu0205', component:Menu0205},    // 행사
            {name:'MENU0206', path:'/menu0206', component:Menu0206},    // 특강

            {name:'MENU0301', path:'/menu0301', component:Menu0301},    // 유치부
            {name:'MENU0302', path:'/menu0302', component:Menu0302},    // 유초등부
            {name:'MENU0303', path:'/menu0303', component:Menu0303},    // 학생부
            {name:'MENU0304', path:'/menu0304', component:Menu0304},    // 청년부

            {name:'MENU0601', path:'/menu0601', component:Menu0601},    // 새가족
            {name:'MENU0602', path:'/menu0602', component:Menu0602},    // 제자훈련
            {name:'MENU0603', path:'/menu0603', component:Menu0603},    // 젊은부부
            {name:'MENU0604', path:'/menu0604', component:Menu0604},    // 선교
            
            {name:'MENU0401', path:'/menu0401', component:Menu0401},    // 교회소식
            {name:'MENU0402', path:'/menu0402', component:Menu0402},    // 새가족
            {name:'MENU0403', path:'/menu0403', component:Menu0403},    // 갤러리

            {name:'MENU0501', path:'/menu0501', component:Menu0501},
            // {name:'Menu03', path:'/menu03', component:Temp},
            
        ]
    })
    router.beforeEach((to, from, next) => {
        let wd = window.innerWidth || document.body.clientWidth
        if (wd <= 991) {
            if (document.getElementById("navBarTogglerBtn").getAttribute("aria-expanded") === 'true') document.getElementById("navBarTogglerBtn").click()
        }
        next()
    })
    const http = axios.create({
        // baseURL: "http://localhost:8081/mng",
        baseURL: Comm.baseURL,
    })

    const app = createApp({
        data() {
            return {
                searchText: '',
                searchItems: [],
            }
        },
        methods: {
            parseBibleHymn() {
                // console.log(this.searchText)
                if (this.searchText) {
                    let params = this.$comm.parseBibleHymn(this.searchText)
                    if (params.kind) {
                        this.search(params)
                    }
                }
            },   
            async search(params) {
                try {
                    const result = await this.$http.post("/search/bibleHymn", params, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    // console.log(result)
                    if (result.data && result.data.result == 'success') {
                        // console.log(result.data.data)
                        this.searchItems = result.data.data
                        this.showModal()
                    } else {
                        this.searchItems = []
                    }
                } catch (err) {
                    console.error(err)
                    alert(err.response.data.msg)
                }
            },
            async logout() {
                try {
                    const result = await this.$http.post("/doLogout", {}, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    // console.log(result)
                    if (result.data && result.data.result == 'success') {
                        window.location = "/mng"
                    }
                } catch (err) {
                    console.error(err)
                    alert(err.response.data.msg)
                }                
            },
            showModal() {
                if (this.searchItems && this.searchItems.length > 0) {
                    let myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'))
                    myModal.show()
                }
            }
        },
        mounted() {
            // this.getMenu()
        }
    })
    app.config.globalProperties.$http = http
    app.config.globalProperties.$comm = Comm
    app.component('md-file', FileX)
    app.component('md-header', HeaderX)
    app.component('bd-item', BoardItemView)
    app.use(router)
    app.mount('#app')
</script>
</html>