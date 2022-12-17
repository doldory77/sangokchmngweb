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
    <script src="/mng/js/menu02/Menu0201.js"></script>
    <script src="/mng/js/menu02/Menu0202.js"></script>
    <script src="/mng/js/menu02/Menu0203.js"></script>
    <script src="/mng/js/menu04/Menu0401.js"></script>
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
                    산곡성결교회
                </a>
                <button id="navBarTogglerBtn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'MENU0001',query: {pageno:'1'}}" disabled>홈</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              교회소개
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                <c:if test="${authMenu.contains('MENU0101')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0101',query: {pageno:'1'}}">우리교회는?</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0102')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0102',query: {pageno:'1'}}">교회섬김이</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0103')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0103',query: {pageno:'1'}}">오시는 길</router-link></li>
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              예배
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                <c:if test="${authMenu.contains('MENU0201')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0201',query: {pageno:'1'}}">예배안내</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0202')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0202',query: {pageno:'1'}}">교회주보</router-link></li>
                                </c:if>
                                <c:if test="${authMenu.contains('MENU0203')}">
                                <li><router-link class="dropdown-item" :to="{name:'MENU0203',query: {pageno:'1'}}">주일설교</router-link></li>  
                                </c:if>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/temp" disabled>교회학교</router-link>
                        </li>
                        <li class="nav-item dropdown disabled">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              교제와나눔
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                <c:if test="${authMenu.contains('MENU0401')}">
                                <li><router-link class="dropdown-item" to="/menu0401">교회소식</router-link></li>
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
            {name:'MENU0101', path:'/menu0101', component:Menu0101},
            {name:'MENU0102', path:'/menu0102', component:Menu0102},
            {name:'MENU0103', path:'/menu0103', component:Menu0103},
            {name:'MENU0201', path:'/menu0201', component:Menu0201},
            {name:'MENU0202', path:'/menu0202', component:Menu0202},
            {name:'MENU0203', path:'/menu0203', component:Menu0203},
            {name:'MENU0401', path:'/menu0401', component:Menu0401},
            {name:'MENU0501', path:'/menu0501', component:Menu0501},
            // {name:'Menu03', path:'/menu03', component:Temp},
            
        ]
    })
    router.beforeEach((to, from, next) => {
        let wd = window.innerWidth || document.body.clientWidth
        if (wd <= 991) document.getElementById("navBarTogglerBtn").click()
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