(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{398:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-kubernetes","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker && Kubernetes")]),t._v(" "),a("h2",{attrs:{id:"docker镜像与容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像与容器","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker镜像与容器")]),t._v(" "),a("p",[t._v("Docker 中有两个重要概念。")]),t._v(" "),a("p",[t._v("一个是容器（Container）：容器特别像一个虚拟机，容器中运行着一个完整的操作系统。可以在容器中装 Nodejs，可以执行npm install，可以做一切你当前操作系统能做的事情")]),t._v(" "),a("p",[t._v("另一个是镜像（Image）：镜像是一个文件，它是用来创建容器的。如果你有装过 Windows 操作系统，那么 Docker 镜像特别像“Win7纯净版.rar”文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181108181808777.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NsZXZlckNvZGU=,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"docker流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker流程","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker流程")]),t._v(" "),a("p",[t._v("容器运行程序,容器是镜像创建出来,镜像是通过一个 Dockerfile 打包来的，它非常像我们前端的package.json文件.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Dockerfile: 类似于“package.json”\n |\n V\nImage: 类似于“Win7纯净版.rar”\n |\n V\nContainer: 一个完整操作系统(实例)\n")])])]),a("ol",[a("li",[t._v("配置Dockerfile文件")])]),t._v(" "),a("p",[t._v("EXPOSE 指令是声明运行时容器提供服务端口，"),a("strong",[t._v("这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务")]),t._v("。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx\n"),a("span",{attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./index.html /usr/share/nginx/html/index.html\n"),a("span",{attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("打包镜像Image")])]),t._v(" "),a("p",[t._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 基于路径./（当前路径）打包一个镜像，镜像的名字是hello-docker，版本号是1.0.0。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 该命令会自动寻找Dockerfile来打包出一个镜像，在本地")]),t._v("\ndocker image build ./ "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t hello"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.0.0\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# docker pull ubunttu # 下载官方已经做好的镜像源到本地")]),t._v("\ndocker image ls "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看本机打包的镜像列表")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("运行容器（基于镜像上）")])]),t._v(" "),a("p",[t._v("镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样。")]),t._v(" "),a("p",[t._v("创建基于hello-docker:1.0.0镜像的一个容器。使用-p来指定端口绑定——将容器80端口绑定在宿主机的2333端口。执行完该命令，会返回一个容器ID")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("docker container create "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 2333"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80 hello"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.0.0\ndocker container start xxx "),a("span",{attrs:{class:"token comment"}},[t._v("# xxx 为上一条命令运行得到的结果")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 以上等价于以下一条命令")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# docker run -d -p 2333:80 hello-docker:1.0.0")]),t._v("\n\ndocker containers ls "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看当前运行的容器")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用docker命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用docker命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用Docker命令")]),t._v(" "),a("p",[t._v("docker image/container命令可以简写，比如docker pull/build命令简写image，docker run简写container")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("docker "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("image"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" build "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t IMAGE_NAME "),a("span",{attrs:{class:"token comment"}},[t._v("# 打包本地dockerfile")]),t._v("\ndocker "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("image"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pull IMAGE_NAME "),a("span",{attrs:{class:"token comment"}},[t._v("# 拉取远程docker到本地")]),t._v("\ndocker image ls "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看image列表")]),t._v("\ndocker image rm IMAGE_ID "),a("span",{attrs:{class:"token comment"}},[t._v("# 删除指定image,等价于docker rmi IMAGE_ID")]),t._v("\n\ndocker "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("container"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" run "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("d "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 映射端口"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("容器端口 IMAGE "),a("span",{attrs:{class:"token comment"}},[t._v("# 实例化化容器")]),t._v("\ndocker "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("container"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" stop CONTAINER_ID "),a("span",{attrs:{class:"token comment"}},[t._v("# 停止容器运行")]),t._v("\ndocker exec "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("it CONTAINER_ID bash "),a("span",{attrs:{class:"token comment"}},[t._v("# 进入指定容器里面，bash是进入命令界面")]),t._v("\ndocker container ls "),a("span",{attrs:{class:"token comment"}},[t._v("# 列出正在跑的container,等价docker ps")]),t._v("\ndocker container ls "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a "),a("span",{attrs:{class:"token comment"}},[t._v("# 列出所有实例化的container， -a表示列出所有all")]),t._v("\ndocker container rm CONTAINER_ID "),a("span",{attrs:{class:"token comment"}},[t._v("# 删除实例化容器（正在运行的容器需要先停止才能删除成功）")]),t._v("\n\n\ndocker login\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 上传到远程仓库，类似github上传。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 远程仓库带上你的namespace，如果不带就表示官方仓库，你没有这权限push")]),t._v("\ndocker tag LOCAL_IMAGE"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("VERSION YOUR_NAMESPACE/LOCAL_IMAGE"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("VERSION\ndocker push YOUR_NAMESPACE/LOCAL_IMAGE"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("VERSION\n")])])]),a("h2",{attrs:{id:"dockerfile命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile命令","aria-hidden":"true"}},[t._v("#")]),t._v(" Dockerfile命令")]),t._v(" "),a("p",[t._v("给个实例解释吧：")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 第一阶段：build")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8.9.1 as build"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage "),a("span",{attrs:{class:"token comment"}},[t._v("# FROM：基础镜像")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app "),a("span",{attrs:{class:"token comment"}},[t._v("# WORKDIR：指定docker工作空间，后面可以把.代指/app")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./package.json /app/ "),a("span",{attrs:{class:"token comment"}},[t._v("# COPY：把本机文件拷贝进docker中/app")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),a("span",{attrs:{class:"token comment"}},[t._v("# RUN: 执行命令")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . /app/\n"),a("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 第二阶段：部署  # 多阶段构建")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=build"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stage /app/dist /usr/share/nginx/html "),a("span",{attrs:{class:"token comment"}},[t._v("# --from参数，从前一步的dist目录，拷贝到nginx目录下")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8088\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# CMD [")]),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./app-server"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# CMD：指定默认的容器主进程的启动命令")]),t._v("\n")])])]),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[t._v("#")]),t._v(" Kubernetes")]),t._v(" "),a("p",[t._v("K8S，就是基于容器的集群管理平台，它的全称，是kubernetes。简单说就是容器也要管理，因为docker container多了也要进行管理。")]),t._v(" "),a("p",[t._v("pod是最基本资源，把docker container放在里面运行；rc监控pod；service是个中介者，对外提供服务，对内连接pod。")]),t._v(" "),a("ul",[a("li",[t._v("pod: 最基本单元，存放container容器")]),t._v(" "),a("li",[t._v("Replication Controllers：pod监控者，因为pod可以设置有多个（挂了一个,另外一个补上）")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.feisky.xyz/introduction/101",target:"_blank",rel:"noopener noreferrer"}},[t._v("service"),a("OutboundLink")],1),t._v(": 对外窗口，以及内部处理pod\n"),a("ul",[a("li",[t._v("前面虽然创建了 Pod，但是在 kubernetes 中，Pod 的 IP 地址会随着 Pod 的重启而变化，并不建议直接拿 Pod 的 IP 来交互。那如何来访问这些 Pod 提供的服务呢？使用 Service。Service 为一组 Pod（通过 labels 来选择）提供一个统一的入口，并为它们提供负载均衡和自动服务发现。")])])])]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("kubectl run k8s"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image=docker"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("port 8080 "),a("span",{attrs:{class:"token comment"}},[t._v("# 使用k8s建立pod，pod包含指定docker image")]),t._v("\nkubectl get pods\nkubectl get rc\nkubectl scale rc k8s"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("replicas=3 "),a("span",{attrs:{class:"token comment"}},[t._v("# 扩充pod到3个，3个服务支持（负载均衡）")]),t._v("\n\nkubectl expose rc k8s"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{attrs:{class:"token comment"}},[t._v("# 为前面创建的rc，对外提供service")]),t._v("\nkubectl get services\n")])])]),a("blockquote",[a("p",[t._v("一句话总结：k8s是container管理和监控者")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[t._v("https://docs.docker.com/get-started/part2/")]),t._v(" "),a("li",[t._v("https://zhuanlan.zhihu.com/p/83309276?utm_medium=social&utm_source=wechat_session")]),t._v(" "),a("li",[t._v("https://www.youtube.com/watch?v=wnKyJKqKiVE k8s入门视频，推荐")]),t._v(" "),a("li",[t._v("https://kubernetes.io/docs/setup/learning-environment/minikube/")])])])},[],!1,null,null,null);e.options.__file="docker.md";s.default=e.exports}}]);