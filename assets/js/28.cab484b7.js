(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{440:function(e,a,t){e.exports=t.p+"assets/img/2021-10-15-qemu-world-execution-windows.48165c83.png"},465:function(e,a,t){"use strict";t.r(a);var s=t(29),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("nav",{staticClass:"table-of-contents"},[s("ol",[s("li",[s("a",{attrs:{href:"#teaclave-trustzone-sdk-%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"}},[e._v(" Teaclave TrustZone SDK 应用开发环境搭建")]),s("ol",[s("li",[s("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E6%9D%A1%E4%BB%B6"}},[e._v(" 准备条件")])]),s("li",[s("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE-teaclave-trustzone-sdk-%E7%BC%96%E8%AF%91%E7%8E%AF%E5%A2%83"}},[e._v(" 配置 Teaclave TrustZone SDK 编译环境")])]),s("li",[s("a",{attrs:{href:"#%E5%9C%A8-qemu-armv8-%E4%B8%8A%E8%BF%90%E8%A1%8C-teaclave-trustzone-sdk-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F"}},[e._v(" 在 QEMU ARMv8 上运行 Teaclave TrustZone SDK 应用程序")])]),s("li",[s("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE-teaclave-trustzone-sdk-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%9A%84-debug-%E7%8E%AF%E5%A2%83"}},[e._v(" 配置 Teaclave TrustZone SDK 应用程序的 debug 环境")])])])]),s("li",[s("a",{attrs:{href:"#teaclave-trustzone-sdk-%E7%A4%BA%E4%BE%8B-hello_world-rs-%E5%89%96%E6%9E%90"}},[e._v(" Teaclave TrustZone SDK 示例 hello_world-rs 剖析")]),s("ol",[s("li",[s("a",{attrs:{href:"#hello_world-rs-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"}},[e._v(" hello_world-rs 目录结构")])]),s("li",[s("a",{attrs:{href:"#hello_world-rs-%E9%87%8D%E8%A6%81%E4%BB%A3%E7%A0%81%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90"}},[e._v(" hello_world-rs 重要代码文件解析")])]),s("li",[s("a",{attrs:{href:"#%E7%BC%96%E8%AF%91%E4%B9%8B%E5%90%8E%E7%9A%84-hello_world-rs-%E4%BB%A3%E7%A0%81%E7%9B%AE%E5%BD%95"}},[e._v(" 编译之后的 hello_world-rs 代码目录")])])])]),s("li",[s("a",{attrs:{href:"#%E5%BC%80%E5%8F%91%E8%80%85%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E8%87%AA%E5%B7%B1%E7%9A%84-teaclave-trustzone-sdk-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F"}},[e._v(" 开发者如何开发自己的 Teaclave TrustZone SDK 应用程序")])]),s("li",[s("a",{attrs:{href:"#%E6%80%BB%E7%BB%93"}},[e._v(" 总结")])]),s("li",[s("a",{attrs:{href:"#%E5%BB%B6%E4%BC%B8%E9%98%85%E8%AF%BB"}},[e._v(" 延伸阅读")])])])]),s("p",[e._v("在 "),s("a",{attrs:{href:"https://teaclave.apache.org/blog/2021-03-15-welcome-rust-optee-trustzone-sdk-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("欢迎 RUST OP-TEE TRUSTZONE SDK 成为 TEACLAVE 子项目")]),e._v(" 一文中已经对Teaclave TrustZone SDK 项目进行了简单的介绍。在本文中，将会介绍使用 Teaclave TrustZone SDK 开发 TrustZone 应用程序。")]),e._v(" "),s("h2",{attrs:{id:"teaclave-trustzone-sdk-应用开发环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-trustzone-sdk-应用开发环境搭建"}},[e._v("#")]),e._v(" Teaclave TrustZone SDK 应用开发环境搭建")]),e._v(" "),s("h3",{attrs:{id:"准备条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备条件"}},[e._v("#")]),e._v(" 准备条件")]),e._v(" "),s("ul",[s("li",[e._v("Ubuntu 系列")])]),e._v(" "),s("p",[s("em",[e._v("本文基于的 Teaclave TrustZone SDK 提交哈希值：8520a2018705edcebfb7e729bd2ced12414fc052")])]),e._v(" "),s("h3",{attrs:{id:"配置-teaclave-trustzone-sdk-编译环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-teaclave-trustzone-sdk-编译环境"}},[e._v("#")]),e._v(" 配置 Teaclave TrustZone SDK 编译环境")]),e._v(" "),s("p",[e._v("下载 Teaclave TrustZone SDK 项目，初始化相关的子模块并安装 Rust 工具链以及交叉编译工具 Xargo。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git clone https://github.com/apache/incubator-teaclave-trustzone-sdk\n$ cd incubator-teaclave-trustzone-sdk\n$ ./setup.sh\n")])])]),s("p",[e._v("初始化 OP-TEE 子模块。初始化完毕之后，在 "),s("code",[e._v("optee")]),e._v(" 根目录下需要有 "),s("code",[e._v("build/")]),e._v(", "),s("code",[e._v("optee_os/")]),e._v(" 和 "),s("code",[e._v("optee_client")]),e._v(" 子目录。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git submodule update --init -- optee\n")])])]),s("p",[e._v("在编译样例之前，需要设置环境变量。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ source environment\n")])])]),s("p",[e._v("默认情况下，目标平台是 "),s("code",[e._v("aarch64")]),e._v("，如果希望为 "),s("code",[e._v("arm")]),e._v(" 平台编译，需要在 "),s("code",[e._v("source environment")]),e._v(" 之前设置 "),s("code",[e._v("ARCH")]),e._v(" 变量。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ export ARCH=arm\n$ source environment\n")])])]),s("p",[e._v("接着，下载 ARM 工具链并编译 OP-TEE 库。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make optee\n")])])]),s("p",[e._v("最后，编译 Teaclave TrustZone SDK 官方提供的例子。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make examples\n")])])]),s("h3",{attrs:{id:"在-qemu-armv8-上运行-teaclave-trustzone-sdk-应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-qemu-armv8-上运行-teaclave-trustzone-sdk-应用程序"}},[e._v("#")]),e._v(" 在 QEMU ARMv8 上运行 Teaclave TrustZone SDK 应用程序")]),e._v(" "),s("p",[e._v("现在，Teaclave TrustZone SDK 官方提供的示例已经编译好了，但如果需要在 QEMU ARMv8 模拟器上运行这些示例，还需要准备一个支持 OP-TEE 的 QEMU 环境，从而在该环境上运行已经编译好的 SDK 中的示例。\n首先，需要安装 QEMU 环境需要的依赖。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ sudo apt-get install android-tools-adb android-tools-fastboot autoconf \\\n        automake bc bison build-essential ccache cscope curl device-tree-compiler \\\n        expect flex ftp-upload gdisk iasl libattr1-dev libc6:i386 libcap-dev \\\n        libfdt-dev libftdi-dev libglib2.0-dev libhidapi-dev libncurses5-dev \\\n        libpixman-1-dev libssl-dev libstdc++6:i386 libtool libz1:i386 make \\\n        mtools netcat python-crypto python3-crypto python-pyelftools \\\n        python3-pycryptodome python3-pyelftools python-serial python3-serial \\\n        rsync unzip uuid-dev xdg-utils xterm xz-utils zlib1g-dev\n")])])]),s("p",[e._v("也可以选择使用 Teaclave TrustZone SDK 官方提供的 docker，在 docker 中开发就无需下载上述依赖。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker pull teaclave/teaclave-trustzone-sdk-build:0.2.1\n# start docker\n$ docker run -ti teaclave/teaclave-trustzone-sdk-build:0.2.1\n")])])]),s("p",[e._v("下载 QEMU ARMv8 对应的 OP-TEE 的源代码。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mkdir -p ~/bin\n$ curl https://storage.googleapis.com/git-repo-downloads/repo-1 > ~/bin/repo && chmod a+x ~/bin/repo\n$ export PATH=~/bin:$PATH\n$ mkdir optee-qemuv8-3.14.0 && cd optee-qemuv8-3.14.0 && \\\n  repo init -u https://github.com/OP-TEE/manifest.git -m qemu_v8.xml -b 3.14.0 && \\\n  repo sync -j4 --no-clone-bundle\n")])])]),s("p",[e._v("编译 QEMU ARMv8 OP-TEE。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd build\n$ make -j2 toolchains && \\\n  make QEMU_VIRTFS_ENABLE=y CFG_TEE_RAM_VA_SIZE=0x00300000\n")])])]),s("p",[e._v("在漫长的编译过程之后，还需要新建一个共享文件夹，用于和 QEMU 子系统共享示例的 host apps 和 TAs。")]),e._v(" "),s("p",[e._v("首先要将 "),s("code",[e._v("path/to/example/host/target/aarch64-unknown-linux-gnu/release/example")]),e._v(" 和 "),s("code",[e._v("path/to/example/ta/target/aarch64-unknown-optee-trustzone/release/*.ta")]),e._v(" 分别复制到 "),s("code",[e._v("incubator-teaclave-trustzone-sdk/out/host")]),e._v(" 和 "),s("code",[e._v("incubator-teaclave-trustzone-sdk/out/ta/")]),e._v("。接着还需要将 "),s("code",[e._v("incubator-teaclave-trustzone-sdk/out/*")]),e._v(" 中的文件复制到 QEMU 共享文件夹 "),s("code",[e._v("shared_folder/")]),e._v(" 中。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mkdir shared_folder\n$ (cd /project/root/dir/ && make examples-install)\n$ cp -r /project/root/dir/out/* shared_folder/\n")])])]),s("p",[e._v("如果处于一个没有 GUI 的运行环境，在启动 QEMU 之前，还需要修改 "),s("code",[e._v("qemu_v8.mk")]),e._v(" 中的代码。以 OP-TEE QEMU 3.14.0 版本为例，注释掉 "),s("code",[e._v("optee-qemuv8-3.14.0/build/qemu_v8.mk")]),e._v(" 中的 386-388 行。")]),e._v(" "),s("div",{staticClass:"language-makefile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('.PHONY: run-only\nrun-only:\n        ln -sf $(ROOT)/out-br/images/rootfs.cpio.gz $(BINARIES_PATH)/\n        $(call check-terminal)\n        $(call run-help)\n        # $(call launch-terminal,54320,"Normal World")\n        # $(call launch-terminal,54321,"Secure World")\n        # $(call wait-for-ports,54320,54321)\n        cd $(BINARIES_PATH) && $(QEMU_BUILD)/aarch64-softmmu/qemu-system-aarch64 \\\n')])])]),s("p",[e._v("在启动 QEMU 之前前，需要运行 "),s("code",[e._v("nc")]),e._v(" 来监听端口 "),s("code",[e._v("54320")]),e._v(" 和 "),s("code",[e._v("54321")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ nc -l 127.0.0.1 -p 54320\n$ nc -l 127.0.0.1 -p 54321\n")])])]),s("p",[e._v("进入 "),s("code",[e._v("qemu_v8.mk")]),e._v(" 所在的目录启动 QEMU。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make run-only QEMU_VIRTFS_ENABLE=y QEMU_VIRTFS_HOST_DIR=$(pwd)/shared_folder\n")])])]),s("p",[e._v("当 QEMU 启动之后，端口 "),s("code",[e._v("54320")]),e._v(" 窗口中运行的是普通世界，端口 "),s("code",[e._v("54321")]),e._v(" 窗口中运行的是安全世界。在普通世界中，根据提示输入 "),s("code",[e._v("root")]),e._v(" 登录后，需要将共享文件夹挂载到 QEMU 子系统中，用于在 QEMU 中访问编译好的 CA/TA 可执行文件。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mkdir shared && mount -t 9p -o trans=virtio host shared\n")])])]),s("p",[e._v("接着，需要将 TA 复制到 "),s("code",[e._v("/lib/optee_armtz")]),e._v(" 目录下，提供给安全世界调用。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd shared && cp ta/*.ta /lib/optee_armtz/\n")])])]),s("p",[e._v("进入 "),s("code",[e._v("host")]),e._v(" 文件夹中并执行 host apps。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd host\n$ ./hello_world\noriginal value is 29\ninc value is 129\ndec value is 29\nSuccess\n")])])]),s("p",[e._v("至此，我们成功地在 QEMU 环境中运行了 Teaclave TrustZone SDK 的 "),s("code",[e._v("hello_world-rs")]),e._v(" 示例。")]),e._v(" "),s("h3",{attrs:{id:"配置-teaclave-trustzone-sdk-应用程序的-debug-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-teaclave-trustzone-sdk-应用程序的-debug-环境"}},[e._v("#")]),e._v(" 配置 Teaclave TrustZone SDK 应用程序的 debug 环境")]),e._v(" "),s("p",[e._v("在开发应用程序的时候，难免会有 debug 的需求，在这不一部分，将会简单介绍如何在 Teaclave TrustZone SDK 中配置 debug 环境。")]),e._v(" "),s("p",[e._v("在编译 QEMU ARMv8 OPTEE 时需要关闭 ASLR，可以通过直接修改 "),s("code",[e._v("OP-TEE/optee_os/mk/config.mk")]),e._v(" 文件中的 "),s("code",[e._v("CFG_CORE_ASLR")]),e._v(" 为 "),s("code",[e._v("n")]),e._v("，注意修改之后还需要重新编译 "),s("code",[e._v("make run")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-makefile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# CFG_CORE_ASLR ?= y\nCFG_CORE_ASLR ?= n\n")])])]),s("p",[e._v("也可以直接在编译时添加编译信息： "),s("code",[e._v("make run CFG_CORE_ASLR=n")]),e._v("。")]),e._v(" "),s("p",[e._v("由于程序是在远程系统上 (QEMU) 上被 debugged，所以在编译时还需要加上 "),s("code",[e._v("GDBSERVER=y")]),e._v("。")]),e._v(" "),s("p",[e._v("在启动 gdb 之后，执行 "),s("code",[e._v("target remote :1234")]),e._v(" 命令连接上 QEMU GDB 服务器端口。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$ ./path/to/qemu-v8-project/out-br/host/bin/aarch64-buildroot-linux-gnu-gdb\n(gdb) target remote :1234\nRemote debugging using :1234\nwarning: No executable has been specified and target does not support\ndetermining executable automatically.  Try using the "file" command.\n0xffffb30b00ea12b4 in ?? ()\n')])])]),s("p",[e._v("接下来，加载 TEE 内核符号表。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(gdb) symbol-file /path/to/qemu-v8-project/optee_os/out/arm/core/tee.elf\n")])])]),s("p",[e._v("以 "),s("code",[e._v("hello_world-rs")]),e._v(" 为例，根据安全世界窗口提示，可知 "),s("code",[e._v("hello_world-rs")]),e._v(" 的 TA text 部分的起始地址为 0x40014000。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("D/LD:  ldelf:168 ELF (133af0ca-bdab-11eb-9130-43bf7873bf67) at 0x40014000\n")])])]),s("p",[e._v("根据该地址提示，从该地址开始加载 "),s("code",[e._v("hello_world-rs")]),e._v(" 的 ta 符号表。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(gdb) add-symbol-file /path/to/examples/hello_world-rs/ta/target/aarch64-unknown-optee-trustzone/debug/ta 0x40014000\n")])])]),s("p",[e._v("然后，可以根据自己的需求在相应的函数或地址上打断点。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(gdb) b open_session\n")])])]),s("p",[s("img",{attrs:{src:t(440),alt:"QEMU 执行示意图"}})]),e._v(" "),s("h2",{attrs:{id:"teaclave-trustzone-sdk-示例-hello-world-rs-剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-trustzone-sdk-示例-hello-world-rs-剖析"}},[e._v("#")]),e._v(" Teaclave TrustZone SDK 示例 hello_world-rs 剖析")]),e._v(" "),s("h3",{attrs:{id:"hello-world-rs-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-rs-目录结构"}},[e._v("#")]),e._v(" "),s("code",[e._v("hello_world-rs")]),e._v(" 目录结构")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── Makefile\n├── host\n│   ├── Cargo.lock\n│   ├── Cargo.toml\n│   ├── Makefile\n│   └── src\n│       └── main.rs\n├── proto\n│   ├── Cargo.toml\n│   ├── build.rs\n│   └── src\n│       └── lib.rs\n├── ta\n│   ├── Cargo.lock\n│   ├── Cargo.toml\n│   ├── Makefile\n│   ├── Xargo.toml\n│   ├── build.rs\n│   ├── src\n│   │   └── main.rs\n│   ├── ta_aarch64.lds\n│   ├── ta_arm.lds\n│   └── ta_static.rs\n└── uuid.txt\n\n")])])]),s("ul",[s("li",[s("code",[e._v("host")]),e._v(" 文件夹中存放的是普通世界的 "),s("code",[e._v("untrusted code")]),e._v("。\n"),s("ul",[s("li",[s("code",[e._v("host/src/main.rs")]),e._v(" 是 "),s("code",[e._v("hello_world-rs")]),e._v(" 应用程序执行的入口，"),s("code",[e._v("Cargo.toml")]),e._v(" 描述了 "),s("code",[e._v("host")]),e._v(" 部分的依赖， "),s("code",[e._v("Cargo.lock")]),e._v(" 中包含了依赖项的完整信息，"),s("code",[e._v("Makefile")]),e._v(" 定义了 "),s("code",[e._v("host")]),e._v(" 部分的编译信息。")])])]),e._v(" "),s("li",[s("code",[e._v("ta")]),e._v(" 文件夹中存放的是安全世界中的 "),s("code",[e._v("trusted code")]),e._v("。\n"),s("ul",[s("li",[e._v("相比较 "),s("code",[e._v("host")]),e._v("，"),s("code",[e._v("ta")]),e._v(" 文件夹中多了以下文件："),s("code",[e._v("Xargo.toml")]),e._v(" 是 TA 的交叉编译文件 ，"),s("code",[e._v("ta_aarch64.lds")]),e._v(" 和 "),s("code",[e._v("ta_arm.lds")]),e._v(" 分别定义了在 64 位架构和 32 位架构下 teaclave trustzone sdk 应用程序各部分在程序地址空间内的布局；"),s("code",[e._v("ta_static.rs")]),e._v(" 定义了 TA 中的静态数据信息。")])])]),e._v(" "),s("li",[s("code",[e._v("proto")]),e._v(" 文件夹中存放的是 CA (Client Application) 和 TA (Trusted Application) 共享的数据结构，并承担着解析 "),s("code",[e._v("uuid.txt")]),e._v(" 提取 UUID 的任务。")]),e._v(" "),s("li",[s("code",[e._v("uuid.txt")]),e._v(" 文件中记录的是 TA 的 UUID，是每个 TA 独一无二的身份标识。")])]),e._v(" "),s("h3",{attrs:{id:"hello-world-rs-重要代码文件解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-rs-重要代码文件解析"}},[e._v("#")]),e._v(" "),s("code",[e._v("hello_world-rs")]),e._v(" 重要代码文件解析")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("host/src/main.rs")])])]),e._v(" "),s("p",[e._v("进入 "),s("code",[e._v("main")]),e._v(" 函数，首先调用 "),s("code",[e._v("Context::new")]),e._v(" 函数建立起 "),s("code",[e._v("hello_world-rs")]),e._v(" CA 和 TA 的逻辑联系，"),s("code",[e._v("ctx")]),e._v(" 指向类型为 "),s("code",[e._v("Context")]),e._v(" 的变量的地址，用于 CA 和 TA 的连接和通信。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let mut ctx = Context::new()?;\n")])])]),s("p",[e._v("调用 "),s("code",[e._v("open_session")]),e._v(" 在 CA 和对应的 TA 中打开一个 "),s("code",[e._v("session")]),e._v("，并将 "),s("code",[e._v("hello_world-rs")]),e._v(" 的 UUID 作为参数传入，用于指引 CA 连接对应 UUID 值的 TA。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let uuid = Uuid::parse_str(UUID).unwrap();\nlet mut session = ctx.open_session(uuid)?;\n")])])]),s("p",[e._v("将 "),s("code",[e._v("&mut session")]),e._v(" 作为参数传入 "),s("code",[e._v("hello_world")]),e._v(" 函数中。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hello_world(&mut session)?;\n")])])]),s("p",[e._v("进入到 "),s("code",[e._v("hello_world")]),e._v(" 函数中，首先将要进行运算的 "),s("code",[e._v("u32")]),e._v(" 操作数用 "),s("code",[e._v("ParamValue")]),e._v(" 类型包装为操作数 "),s("code",[e._v("p0")]),e._v("，设置其值为29，类型为 "),s("code",[e._v("ValueInout")]),e._v("，表示同时作为输入参数和返回值。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let p0 = ParamValue::new(29, 0, ParamType::ValueInout);\n")])])]),s("p",[s("code",[e._v("operation")]),e._v(" 用于保存 CA 要传递给 TA 的参数信息，第一个参数一般保留为 0，由于这里只有一个要传递的参数 "),s("code",[e._v("p0")]),e._v("，其他参数都保留为 "),s("code",[e._v("ParamNone")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let mut operation = Operation::new(0, p0, ParamNone, ParamNone, ParamNone);\n")])])]),s("p",[e._v("CA 端使用获取到的 "),s("code",[e._v("session")]),e._v(", "),s("code",[e._v("command_id")]),e._v(" 和要传递的参数 "),s("code",[e._v("operation")]),e._v(" 调用 "),s("code",[e._v("invoke_command")]),e._v(" 执行特定的 "),s("code",[e._v("command")]),e._v("，该操作将会切换到安全世界。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("session.invoke_command(Command::IncValue as u32, &mut operation)?;\n")])])]),s("ul",[s("li",[s("code",[e._v("ta/src/main.rs")])])]),e._v(" "),s("p",[s("code",[e._v("ta/src/main.rs")]),e._v(" 中的 "),s("code",[e._v("invoke_command")]),e._v(" 函数参数与 host 中调用的 "),s("code",[e._v("invoke_command")]),e._v(" 略有不同，第二个参数是 "),s("code",[e._v("Paramters")]),e._v(" 类型。当数据从 CA 传递到 TA 时，实际上执行的是按 bit 的复制操作，所以 "),s("code",[e._v("params")]),e._v(" 中的数据就是从 "),s("code",[e._v("operation")]),e._v(" 中传递过来的数据.")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("fn invoke_command(cmd_id: u32, params: &mut Parameters) -> Result<()> {\n")])])]),s("p",[s("code",[e._v("values")]),e._v(" 从 "),s("code",[e._v("params")]),e._v(" 取出要操作的 "),s("code",[e._v("u32")]),e._v(" 值，"),s("code",[e._v("match")]),e._v(" 表达式根据传入的参数 "),s("code",[e._v("cmd_id")]),e._v(" 匹配对应的操作。在下面的代码中，如果匹配到 "),s("code",[e._v("Command::IncValue")]),e._v("，就对 "),s("code",[e._v("values")]),e._v(" 中的 "),s("code",[e._v("u32")]),e._v(" 值执行 +100 的操作；如果匹配到 "),s("code",[e._v("Command::DecValue")]),e._v("，就执行 -100 的操作；如果匹配到其他值，就直接返回错误参数的错误类型。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('fn invoke_command(cmd_id: u32, params: &mut Parameters) -> Result<()> {\n    trace_println!("[+] TA invoke command");\n    let mut values = unsafe { params.0.as_value().unwrap() };\n    match Command::from(cmd_id) {\n        Command::IncValue => {\n            values.set_a(values.a() + 100);\n            Ok(())\n        }\n        Command::DecValue => {\n            values.set_a(values.a() - 100);\n            Ok(())\n        }\n        _ => Err(Error::new(ErrorKind::BadParameters)),\n    }\n}\n')])])]),s("ul",[s("li",[s("code",[e._v("proto/src/lib.rs")])])]),e._v(" "),s("p",[s("code",[e._v("lib.rs")]),e._v(" 中的枚举变量 "),s("code",[e._v("Command")]),e._v(" 声明是开发者要实现的命令。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pub enum Command {\n    IncValue,\n    DecValue,\n    Unknown,\n}\n")])])]),s("h3",{attrs:{id:"编译之后的-hello-world-rs-代码目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译之后的-hello-world-rs-代码目录"}},[e._v("#")]),e._v(" 编译之后的 "),s("code",[e._v("hello_world-rs")]),e._v(" 代码目录")]),e._v(" "),s("p",[e._v("编译之后的代码目录如下所示，这里省略了 "),s("code",[e._v("release")]),e._v(" 文件夹下的内容。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── Makefile\n├── host\n│   ├── Cargo.lock\n│   ├── Cargo.toml\n│   ├── Makefile\n│   ├── src\n│   │   └── main.rs\n│   └── target                               #[generate] \n│       ├── aarch64-unknown-linux-gnu        #[generate] \n│       │   └── release                      #[generate]\n│       └── release                          #[generate]\n├── proto\n│   ├── Cargo.lock\n│   ├── Cargo.toml\n│   ├── build.rs\n│   ├── src\n│   │   └── lib.rs\n│   └── target                               #[generate]\n│       └── rls                              #[generate]\n│           └── debug                        #[generate]\n├── ta\n│   ├── Cargo.lock\n│   ├── Cargo.toml\n│   ├── Makefile\n│   ├── Xargo.toml\n│   ├── build.rs\n│   ├── src\n│   │   └── main.rs\n│   ├── ta_aarch64.lds\n│   ├── ta_arm.lds\n│   ├── ta_static.rs\n│   └── target                               #[generate]\n│       ├── aarch64-unknown-optee-trustzone  #[generate]\n│       │   └── release                      #[generate]\n│       └── release                          #[generate]\n└── uuid.txt\n")])])]),s("p",[s("code",[e._v("hello_world-rs")]),e._v(" 编译过程更类似于 Rust 程序编译。")]),e._v(" "),s("ul",[s("li",[e._v("编译不可信部分 host 文件夹，生成 "),s("code",[e._v("hello_world-rs")]),e._v(" 可执行文件；")]),e._v(" "),s("li",[e._v("交叉编译可信部分 ta 文件夹，再用 UUID 和密钥进行签名，生成 "),s("code",[e._v("UUID.ta")]),e._v(" 可执行文件。")]),e._v(" "),s("li",[e._v("在执行时，"),s("code",[e._v("hello_world-rs")]),e._v(" 对 "),s("code",[e._v("UUID.ta")]),e._v(" 验证通过后调用执行。")])]),e._v(" "),s("h2",{attrs:{id:"开发者如何开发自己的-teaclave-trustzone-sdk-应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发者如何开发自己的-teaclave-trustzone-sdk-应用程序"}},[e._v("#")]),e._v(" 开发者如何开发自己的 Teaclave TrustZone SDK 应用程序")]),e._v(" "),s("p",[e._v("和前面介绍过的 "),s("a",{attrs:{href:"https://teaclave.apache.org/blog/2021-08-25-developing-sgx-application-with-teaclave-sgx-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 TEACLAVE SGX SDK 开发 SGX 应用")]),e._v(" 相似，这里也同样通过对 Teaclave TrustZone SDK 示例程序 "),s("code",[e._v("hello_world-rs")]),e._v(" 进行改写来介绍如何构造自己的 Teaclave TrustZone SDK。")]),e._v(" "),s("p",[e._v("需要注意的是，Teaclave TrustZone SDK 是通过 UUID 唯一标识系统中的 TA，UUID 值不能重复，所以我们首先需要通过 "),s("a",{attrs:{href:"https://www.itu.int/en/ITU-T/asn1/Pages/UUID/uuids.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ITU-T UUID generator")]),e._v(" 网站申请属于自己的唯一的 UUID，并将 "),s("code",[e._v("uuid.rs")]),e._v(" 文件中的内容修改为新得到的 UUID 值。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1487a406-160d-4641-957e-66292f8d1309\n")])])]),s("p",[e._v("假设开发目标是为两个 "),s("code",[e._v("u8")]),e._v(" 数组求得交集和并集，也就是要实现交集函数 "),s("code",[e._v("Intersection")]),e._v(" 和并集函数 "),s("code",[e._v("Union")]),e._v(" 两个功能函数。")]),e._v(" "),s("p",[e._v("对 "),s("code",[e._v("proto/lib.rs")]),e._v(" 进行修改，将 "),s("code",[e._v("Command")]),e._v(" 中的成员替换为待实现的 "),s("code",[e._v("Intersection")]),e._v(" 和 "),s("code",[e._v("Union")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pub enum Command {\n    Intersection,\n    Union,\n    Unknown,\n}\n\nimpl From<u32> for Command {\n    #[inline]\n    fn from(value: u32) -> Command {\n        match value {\n            0 => Command::Intersection,\n            1 => Command::Union,\n            _ => Command::Unknown,\n        }\n    }\n}\n")])])]),s("p",[e._v("接着，进入 "),s("code",[e._v("host/src/main.rs")]),e._v(" 中的 "),s("code",[e._v("main")]),e._v(" 函数，添加进行数据计算的函数，将用于与 TA 通信的 session 内存地址作为参数传递到 "),s("code",[e._v("data_compute")]),e._v(" 中。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("data_compute(&mut session)?;\n")])])]),s("p",[e._v("在 "),s("code",[e._v("data_compute")]),e._v(" 中，首先声明要进行数据处理的两个 "),s("code",[e._v("u8")]),e._v(" 数组 "),s("code",[e._v("nums1")]),e._v(" 和 "),s("code",[e._v("nums2")]),e._v("，以及用于存储数据处理结果的 "),s("code",[e._v("resu")]),e._v("。在示例代码 "),s("code",[e._v("hello_world")]),e._v(" 中的变量声明使用的是 "),s("code",[e._v("ParamValue")]),e._v("，但这里我们需要访问数组，一段连续的内存变量而非变量。通过阅读 Teaclave TrustZone SDK client 端的 Rust 仓库 "),s("a",{attrs:{href:"https://teaclave.apache.org/api-docs/trustzone-sdk/optee-teec/optee_teec/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crate optee_teec")]),e._v("，可知 "),s("code",[e._v("ParamTmpRef")]),e._v(" 用于定义临时内存访问。于是将这三个数组地址作为参数新建 "),s("code",[e._v("ParamTmpRef")]),e._v(" 类型，并将 "),s("code",[e._v("ParamTmpRef")]),e._v(" 类型变量传递到 "),s("code",[e._v("operation")]),e._v(" 中，用于传递给 TA 交互信息。")]),e._v(" "),s("p",[e._v("在准备好与 TA 交互的信息后，调用 "),s("code",[e._v("invoke_command")]),e._v(" 通知对应的 TA 执行 "),s("code",[e._v("Command::Intersection")]),e._v(" 指定的操作。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// in host/src/main.rs\nfn data_compute(session: &mut Session) -> optee_teec::Result<()> {\n    let nums1:[u8; 5] = [1, 2, 3, 4, 5];\n    let nums2:[u8; 5] = [4, 5, 6, 7, 8];\n    let mut resu = vec![0; 10];\n\n    let p1 = ParamTmpRef::new_input(&nums1);\n    let p2 = ParamTmpRef::new_input(&nums2);\n    let p3 = ParamTmpRef::new_output(&mut resu);\n    let mut operation = Operation::new(0, p1, p2, p3, ParamNone);\n\n    println!("intersection invoke");\n    session.invoke_command(Command::Intersection as u32, &mut operation)?;\n}\n')])])]),s("p",[s("code",[e._v("invoke_command")]),e._v(" 函数的具体实现在 "),s("code",[e._v("ta/sec/main.rs")]),e._v(" 文件中的 "),s("code",[e._v("invoke_command")]),e._v("。共享的参数通过 "),s("code",[e._v("params")]),e._v(" 从 CA 传递到 TA 中，\n同样，可以根据 TA 端的 Rust 仓库 "),s("a",{attrs:{href:"https://teaclave.apache.org/api-docs/trustzone-sdk/optee-utee/optee_utee/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("optee_utee")]),e._v(" 提供的接口函数抽丝剥茧般地提取出来 "),s("code",[e._v("ParamMemref")]),e._v(" 类型的 "),s("code",[e._v("nums1")]),e._v(", "),s("code",[e._v("nums2")]),e._v(" 和 "),s("code",[e._v("vec_resu")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    let nums1 = unsafe { params.0.as_memref().unwrap().raw() };\n    let nums2 = unsafe { params.1.as_memref().unwrap().raw() };\n    let mut vec_resu = unsafe { params.2.as_memref().unwrap().raw() };\n\n    let nums1_size = unsafe { (*nums1).size };\n    let nums2_size = unsafe { (*nums2).size };\n")])])]),s("p",[e._v("现在，进入 "),s("code",[e._v("match")]),e._v(" 表达式中，将 "),s("code",[e._v("Command::from")]),e._v(" 的枚举修改为 "),s("code",[e._v("Command::Intersection")]),e._v(" 和 "),s("code",[e._v("Command::Union")]),e._v("。要实现的函数就填充到对应的分支括号中。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  match Command::from(cmd_id) {\n    Command::Intersection => {\n      Ok(())\n    }\n    Command::Union => {\n      Ok(())\n    }\n")])])]),s("p",[e._v("下面的示例代码实现的是求两个数组之间的交集元素。具体的实现是通过一个额外的散列集 "),s("code",[e._v("set")]),e._v("，记录 "),s("code",[e._v("nums1")]),e._v(" 中的所有元素，然后对 "),s("code",[e._v("nums2")]),e._v(" 中的元素进行遍历，如果 "),s("code",[e._v("nums2")]),e._v(" 中的元素也出现在了 "),s("code",[e._v("set")]),e._v(" 中，那么该元素为 "),s("code",[e._v("nums1")]),e._v(" 和 "),s("code",[e._v("nums2")]),e._v(" 共有，是交集元素，写入结果向量 "),s("code",[e._v("vec_resu")]),e._v(" 中，并移除掉 "),s("code",[e._v("set")]),e._v(" 中的该元素。最后，将结果向量的 "),s("code",[e._v("size")]),e._v(" 修改为共有的交集元素的个数。其中，要读取 "),s("code",[e._v("nums1")]),e._v(" 和 "),s("code",[e._v("nums2")]),e._v(" 数组中的元素，还需要解引用 "),s("code",[e._v("ParamMemref")]),e._v(" 类型的指针读取出指向元素值的 "),s("code",[e._v("buffer")]),e._v(" 指针地址，再使用 "),s("code",[e._v("offset")]),e._v(" 偏移指针从而读出 "),s("code",[e._v("nums1")]),e._v(" 和 "),s("code",[e._v("nums2")]),e._v(" 的值。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("      let mut set: HashSet<u8> = HashSet::new();\n      let mut vec_count = 0;\n      for i in 0..nums1_size {\n        let mut val_nums1 = 0;\n        unsafe {\n          val_nums1 = *((*nums1).buffer as *mut u8).offset(i as isize);\n        };\n        set.insert(val_nums1);\n      }\n\n      for i in 0..nums2_size {\n        let mut val_nums2 = 0;\n        unsafe {\n          val_nums2 = *((*nums2).buffer as *mut u8).offset(i as isize);\n        };\n\n        if set.contains(&val_nums2) {\n          unsafe { *((*vec_resu).buffer as *mut u8).offset(vec_count as isize) = val_nums2; }\n          vec_count += 1;\n          set.remove(&val_nums2);\n        }\n      }\n      unsafe{ (*vec_resu).size = vec_count; }\n")])])]),s("p",[e._v("对于 "),s("code",[e._v("Union")]),e._v(" 函数的实现，同样是利用一个额外的散列集 "),s("code",[e._v("set")]),e._v("，记录 "),s("code",[e._v("nums1")]),e._v(" 中的所有元素，并直接将 "),s("code",[e._v("nums1")]),e._v(" 中的元素写入结果向量 "),s("code",[e._v("vec_resu")]),e._v(" 中，而后再依次读取 "),s("code",[e._v("nums2")]),e._v(" 中的元素，如果该元素没有在 "),s("code",[e._v("set")]),e._v(" 中出现，则写入结果向量 "),s("code",[e._v("vec_resu")]),e._v(" 和散列集 "),s("code",[e._v("set")]),e._v(" 中。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("      let mut set: HashSet<u8> = HashSet::new();\n      let mut vec_count = 0;\n      for i in 0..nums1_size {\n        let mut val_nums1 = 0;\n        unsafe {\n          val_nums1 = *((*nums1).buffer as *mut u8).offset(i as isize);\n          *((*vec_resu).buffer as *mut u8).offset(vec_count as isize) = val_nums1;\n        }\n        vec_count += 1;\n        set.insert(val_nums1);\n      }\n\n      for i in 0..nums2_size {\n        let mut val_nums2 = 0;\n        unsafe {\n          val_nums2 = *((*nums2).buffer as *mut u8).offset(i as isize);\n        };\n\n        if !set.contains(&val_nums2) {\n          unsafe { *((*vec_resu).buffer as *mut u8).offset(vec_count as isize) = val_nums2; }\n          vec_count += 1;\n          set.insert(val_nums2);\n        }\n      }\n      unsafe{ (*vec_resu).size = vec_count; }\n\n")])])]),s("p",[e._v("回到 "),s("code",[e._v("host/src/main.rs")]),e._v("，通过 "),s("code",[e._v("updated_size")]),e._v(" 函数读取到在 "),s("code",[e._v("ta/src/main.rs")]),e._v(" 中对 "),s("code",[e._v("vec_resu")]),e._v(" 新设置的 "),s("code",[e._v("size")]),e._v(" 值，也就是 "),s("code",[e._v("nums1")]),e._v(" 和 "),s("code",[e._v("nums2")]),e._v(" 共有的元素的个数，最后打印出结果向量 "),s("code",[e._v("resu")]),e._v(" 的值。")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    // in data_compute function\n    let updated_size = operation.parameters().2.updated_size();\n    println!("Intersection resu = {:?}", &resu[..updated_size]);\n')])])]),s("p",[e._v("这样，我们就基于 Teaclave TrustZone SDK 提供的示例代码实现了自己的求交集和并集函数。")]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("本文首先介绍 Teaclave TrustZone SDK 项目的环境配置过程，然后介绍了简单示例 "),s("code",[e._v("hello_world-rs")]),e._v(" 的组织结构和编译过程 ，最后，通过修改 "),s("code",[e._v("hello_world-rs")]),e._v(" 实现 "),s("code",[e._v("intersection")]),e._v(" 和 "),s("code",[e._v("union")]),e._v(" 函数为例，介绍如何基于提供的 SampleCode 进行 Teaclave TrustZone SDK 应用程序的开发。")]),e._v(" "),s("h2",{attrs:{id:"延伸阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延伸阅读"}},[e._v("#")]),e._v(" 延伸阅读")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://teaclave.apache.org/trustzone-sdk-docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Teaclave TrustZone SDK 文档")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://dl.acm.org/doi/10.1145/3427228.3427262",target:"_blank",rel:"noopener noreferrer"}},[e._v("Teaclave TrustZone SDK 项目论文：《RusTEE: Developing Memory-Safe ARM TrustZone Applications》")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);