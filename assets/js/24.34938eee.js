(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{333:function(a,e,t){a.exports=t.p+"assets/img/teaclave-client-sdks.27efa590.png"},543:function(a,e,t){"use strict";t.r(e);var s=t(29),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("RouterLink",{attrs:{to:"/blog/2021-03-01-announcing-teaclave-0-2-0/"}},[a._v("English")]),a._v(" | "),s("RouterLink",{attrs:{to:"/blog/2021-03-01-announcing-teaclave-0-2-0-cn/"}},[a._v("中文")])],1),a._v(" "),s("p",[a._v("Apache Teaclave (incubating) 是一个隐私安全计算平台，为隐私数据计算赋能。基于硬\n件安全能力，Teaclave 确保敏感数据在可信域外和离岸场景下安全可控的流通和处理，无\n需担心隐私数据泄露和滥用。 Teaclave 同时支持多方参与的联合计算，打破企业和组织中\n的数据孤岛。Teaclave 于 2019 年由百度捐赠进入 Apache 基金会孵化器。在 2020 年 10\n月发布第一个开源社区版本。")]),a._v(" "),s("p",[a._v("Teaclave 使用 Intel SGX， 提供基于硬件隔离、内存加密、远程证实等安全技术保护数据\n隐私计算任务。 Teaclave 平台提供了函数即服务（function-as-a-service）接口，降低\n了使用门槛。平台中也实现了众多内置函数，例如机器学习算法，多方联 合求交，加解密\n计算等等常用功能。更重要的是，开发者还可以使用 Python 自由编写函数来操作隐私数据，\n在中平台执行。最后，为了避免内存安全漏洞带来的安全风险，Teaclave 还使用内存安全\n编程语言 Rust 编写。")]),a._v(" "),s("p",[a._v("2021 年 3 月 2 日，我们迎来了 Teaclave 第二个社区版本的发布 0.2.0。在这一版本中，\n我们重点放在提供更多的内建函数，不同语言的客户端 SDK，更方便的 docker 部署环境，\n命令行接口，文档等等。")]),a._v(" "),s("h2",{attrs:{id:"teaclave-0-2-0-亮点介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-0-2-0-亮点介绍"}},[a._v("#")]),a._v(" Teaclave 0.2.0 亮点介绍")]),a._v(" "),s("p",[a._v("在 0.2.0 中，我们添加了多种语言的客户端 SDK，现在我们提供了 Python、Rust、C、\nSwift 四种语言的接口，在 Teaclave Meetup #2 中，我们已经介绍了不同语言 SDK 的组\n织结构和框架。简单来说，我们使用 JSON 序列化/反序列化的方式作为多语言的边界。下\n图描述了这几种语言 SDK 的关系，以及一些事例的接口。")]),a._v(" "),s("p",[s("img",{attrs:{src:t(333),alt:"Teaclave Client SDKs"}})]),a._v(" "),s("h2",{attrs:{id:"teaclave-0-2-0-版本详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-0-2-0-版本详情"}},[a._v("#")]),a._v(" Teaclave 0.2.0 版本详情")]),a._v(" "),s("p",[a._v("详细来讲 0.2.0 包括一下修改以及新功能：")]),a._v(" "),s("h3",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[a._v("#")]),a._v(" Functions")]),a._v(" "),s("ul",[s("li",[a._v("增加内置的 PCA (Principal Component Analysis) 函数")]),a._v(" "),s("li",[a._v("添加泄漏密码查询内置函数 (#447)")])]),a._v(" "),s("h3",{attrs:{id:"sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[a._v("#")]),a._v(" SDK")]),a._v(" "),s("ul",[s("li",[a._v("增加 Rust 客户端 SDK (#455)")]),a._v(" "),s("li",[a._v("增加 C 客户端 SDK (#470)")]),a._v(" "),s("li",[a._v("增加 Swift 客户端 SDK，也就是 iOS framework")]),a._v(" "),s("li",[a._v("修改 SDK 中接口的 CMAC 格式为 byte array")])]),a._v(" "),s("h3",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("ul",[s("li",[a._v("增加 "),s("code",[a._v("teaclave-file-service")]),a._v(" 容器作为示例程序的远程文件系统 (#446)")]),a._v(" "),s("li",[a._v("修复在仿真模式下的 docker compose 文件 (#462)")])]),a._v(" "),s("h3",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),s("ul",[s("li",[a._v("增加 "),s("code",[a._v("attesation")]),a._v(" 的子命令，可以展示当前 SGX 平台的远程认证报告")])]),a._v(" "),s("h3",{attrs:{id:"文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[a._v("#")]),a._v(" 文档")]),a._v(" "),s("ul",[s("li",[a._v("增加 codebase 中的文档")]),a._v(" "),s("li",[a._v("增加在 Azure Confidential Compute VM 中部署 Teaclave 的文档介绍")])]),a._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("ul",[s("li",[a._v("在 binder 模块中增加 input/output buffer 的检查以及测试")]),a._v(" "),s("li",[a._v("使用 Github Action 进行 PR 的编译、测试以及格式检查")]),a._v(" "),s("li",[a._v("文档的打磨")])]),a._v(" "),s("h2",{attrs:{id:"如何下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何下载"}},[a._v("#")]),a._v(" 如何下载")]),a._v(" "),s("p",[a._v("Teaclave 0.2.0 版本可以在官网下载页面找到（注意验证 PGP 签名和 hash）。")]),a._v(" "),s("h2",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[a._v("#")]),a._v(" 快速入门")]),a._v(" "),s("p",[a._v("如果您想尝试使用 Teaclave，我们提供了一个简单的上手文档（"),s("a",{attrs:{href:"https://teaclave.apache.org/docs/my-first-function/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://teaclave.apache.org/docs/my-first-function/")]),a._v("）来执行一个打印 hello world 的函数。")]),a._v(" "),s("p",[a._v("简单来说，你可以通过以下命令使用 docker 编译 Teaclave：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ cd incubator-teaclave\n$ docker run --rm -v $(pwd):/teaclave -w /teaclave \\\n  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.9.1:latest \\\n   bash -c ". /root/.cargo/env && \\\n     . /opt/sgxsdk/environment && \\\n     mkdir -p build && cd build && \\\n     cmake -DTEST_MODE=ON .. && \\\n     make"\n')])])]),s("p",[a._v("然后使用 "),s("code",[a._v("docker-compose")]),a._v(" 在仿真模式下执行 Teaclave 的所有服务：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ (cd docker && docker-compose -f docker-compose-ubuntu-1804-sgx-sim-mode.yml up --build)\n")])])]),s("p",[a._v('最后，就可以在 examples 目录下使用 Python 调用 echo 函数打印 "Hello, Teaclave!"：')]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cd examples/python\n$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] approving task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])]),s("p",[a._v("如果你想深入的了解 Teaclave 的内部设计和实现，我们还有更多设计文档、API 文档、代码库文档等你发现。")])])}),[],!1,null,null,null);e.default=v.exports}}]);