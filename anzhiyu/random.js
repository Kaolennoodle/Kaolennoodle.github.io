var posts=["2024/11/10/使用systemctl后台运行特定的应用（以FRP为例）/","2025/03/10/安装Typecho的坎坷之旅/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };