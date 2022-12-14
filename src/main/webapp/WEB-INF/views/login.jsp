<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>관리자</title>
    <style>
        html, body { height: 100%; }
        body {
            display: flex;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
        }
        .form-signin { max-width: 330px; padding: 15px; }
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/vue-router@4"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/mng/js/util/Comm.js"></script>
    
</head>
<body class="text-center">
    
    <main class="form-signin w-100 m-auto" id="app">
      <form @submit.prevent="formSubmit">
        <!-- <img class="mb-4" src="https://getbootstrap.kr/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
        <img class="mb-4" src="/mng/img/logo_with_title.jpg" alt="">
        <h1 class="h3 mb-3 fw-normal">로그인 하세요!</h1>
    
        <div class="form-floating">
          <input type="email" v-model="id" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" v-model="pw" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> ID 기억하기
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <!-- <p class="mt-5 mb-3 text-muted">© 2017–2022</p> -->
      </form>
    </main>

</body>
<script>
    const {createApp} = Vue
    const http = axios.create({
        // baseURL: "http://localhost:8080/mng",
        baseURL: Comm.baseURL,
    })

    const app = createApp({
        data() {
            return {
                id:'',
                pw:''
            }
        },
        methods: {
            async formSubmit() {
                try {
                    let data = {id:this.id, passwd:this.pw}
                    const result = await this.$http.post("/doLogin", data, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    console.log(result)
                    window.location = "/mng"
                } catch (err) {
                    console.error(err)
                    alert(err.response.data.msg)
                }
            }
        },
        mounted() {

        }
    })
    app.config.globalProperties.$http = http
    app.mount('#app')
</script>    