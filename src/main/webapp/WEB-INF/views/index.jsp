<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>관리자</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/mng/css/style.css">
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/vue-router@4"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/mng/js/util/Comm.js"></script>
    <script src="/mng/js/comp/FileX.js"></script>
    <script src="/mng/js/board/BoardItemView.js"></script>
    <script src="/mng/js/board/BoardRegView.js"></script>
    <script src="/mng/js/home/Home.js"></script>
    <script src="/mng/js/menu02/Menu0202.js"></script>
    <!--<script src="/js/etc/Temp.js"></script>
    <script src="/js/menu01/Menu0101.js"></script>
    <script src="/js/menu01/Menu0102.js"></script>
    <script src="/js/menu01/Menu0103.js"></script>
    <script src="/js/menu02/Menu0201.js"></script>
    <script src="/js/menu02/Menu0203.js"></script>
    <script src="/js/menu04/Menu0401.js"></script>-->
</head>
<body>
    <div id="app" style="padding-top: 56px;">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sg-navbar">
            <div class="container-lg">
                <a class="navbar-brand" href="#">산곡성결교회</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              교회소개
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                <li><router-link class="dropdown-item" to="/menu0101">우리교회는?</router-link></li>
                                <li><router-link class="dropdown-item" to="/menu0102">교회섬김이</router-link></li>
                                <li><router-link class="dropdown-item" to="/menu0102">오시는 길</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              예배
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                <li><router-link class="dropdown-item" to="/menu0201">예배안내</router-link></li>
                                <li><router-link class="dropdown-item" to="/menu0202">교회주보</router-link></li>
                                <li><router-link class="dropdown-item" to="/menu0202">주일설교</router-link></li>  
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
                                <li><router-link class="dropdown-item" to="/menu0401">교회소식</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <router-view></router-view>
        
    </div>

    <!-- <div class="sg-divider my-5"></div> -->
    <hr class="sg-line-divider">

    <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
            <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.1/getting-started/introduction/">getting started guide</a>.</p>
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
            // {name:'Menu0101', path:'/menu0101', component:Menu0101},
            // {name:'Menu0102', path:'/menu0102', component:Menu0102},
            // {name:'Menu0103', path:'/menu0103', component:Menu0103},
            // {name:'Menu0201', path:'/menu0201', component:Menu0201},
            {name:'Menu0202', path:'/menu0202', component:Menu0202},
            // {name:'Menu0203', path:'/menu0203', component:Menu0203},
            // {name:'Menu03', path:'/menu03', component:Temp},
            // {name:'Menu0401', path:'/menu0401', component:Menu0401},
            
        ]
    })
    const http = axios.create({
        baseURL: "http://localhost:8080/mng",
    })

    const app = createApp({
        data() {
            return {
                message: 'Hello Vue!',
            }
        },
        methods: {
            change() {
                this.message = 'Hello Vue Method!'
            },
            getMenu() {
                axios.get('http://localhost:8080/index/menu')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                }) 
            }
        },
        mounted() {
            // this.getMenu()
        }
    })
    app.config.globalProperties.$http = http
    app.config.globalProperties.$comm = Comm
    app.component('md-file', FileX)
    app.component('bd-item', BoardItemView)
    app.use(router)
    app.mount('#app')
</script>
</html>