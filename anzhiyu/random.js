var posts=["2025/03/17/7zip在命令行的基础使用（p7zip）/","2025/03/17/MySQL的常见语法/","2025/03/17/NFS简易设置指南/","2025/03/17/TAR-的常见用法/","2025/03/17/使用Nginx反向代理内网服务的基础步骤/","2024/11/10/使用systemctl后台运行特定的应用（以FRP为例）/","2025/03/17/在PVE中直通磁盘/","2025/03/17/在-PVE-中直通磁盘给指定虚拟机/","2025/03/10/安装Typecho的坎坷之旅/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };