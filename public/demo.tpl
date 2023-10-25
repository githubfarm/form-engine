<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=0,maximum-scale=0,user-scalable=yes,shrink-to-fit=no">
  <style>
    .pre-loader {
      position: absolute;
      top: calc(50% - 32px);
      left: calc(50% - 32px);
      width: 64px;
      height: 64px;
      border-radius: 50%;
      perspective: 800px;
    }
    .pre-loader .inner {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .pre-loader .inner.one {
      left: 0%;
      top: 0%;
      -webkit-animation: rotate-one 1s linear infinite;
      animation: rotate-one 1s linear infinite;
      border-bottom: 3px solid #bc9048;
    }
    .pre-loader .inner.two {
      right: 0%;
      top: 0%;
      -webkit-animation: rotate-two 1s linear infinite;
      animation: rotate-two 1s linear infinite;
      border-right: 3px solid #74aeff;
    }
    .pre-loader .inner.three {
      right: 0%;
      bottom: 0%;
      -webkit-animation: rotate-three 1s linear infinite;
      animation: rotate-three 1s linear infinite;
      border-top: 3px solid #caef74;
    }
    @keyframes rotate-one {
      0% {
        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }
    @keyframes rotate-two {
      0% {
        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }
    @keyframes rotate-three {
      0% {
        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }
  </style>
  <link href="https://lib.baomitu.com/monaco-editor/0.19.3/min/vs/editor/editor.main.css" rel="stylesheet">
</head>

<body>
  <div id="app"></div>
  <div class="pre-loader" id="pre-loader">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
  </div>
</body>
<% if (process.env.NODE_ENV === 'production') { %>
  <script src="//shadow.elemecdn.com/npm/vue@2.6.11/dist/vue.runtime.min.js"></script>
  <script src="//shadow.elemecdn.com/npm/vue-router@3.1.3/dist/vue-router.min.js"></script>
<% } %>

</html>
