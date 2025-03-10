var posts=["2025/03/10/hello-world/","2025/03/10/安装Typecho的坎坷之旅/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };