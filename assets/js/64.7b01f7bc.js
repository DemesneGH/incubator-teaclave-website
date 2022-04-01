(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{600:function(e,t,s){"use strict";s.r(t);var a=s(29),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("This instruction is provided by @akoskinas. Thanks!\nThis is an updated version of the process, which contains bug fixes and additional comments.")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Before start: In our setup, the debugging works only when building in simulation mode, i.e")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd rust-sgx-sdk/samplecode/hello-rust-vscode-debug/\nSGX_MODE=SW SGX_DEBUG=1 make\ncd bin\nsgx-gdb ./app\n")])])]),s("p",[e._v("A short description of the process needed in order to use GDB to remotely debug a Rust SGX enclave with sgx gdb in Ubuntu 18.04:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Make sure that the package libsgx-enclave-common-dbgsym_${version}-${revision}_amd64.ddeb is installed, as described here: https://github.com/intel/linux-sgx#build-the-intelr-sgx-psw-installer . The  package can also be found here: https://download.01.org/intel-sgx/linux-2.5/ubuntu18.04-server/")])]),e._v(" "),s("li",[s("p",[e._v("Make sure to set up the needed environment variables before compiling your code. To do so, run:")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  $ source ${sgx-sdk-install-path}/environment  \n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("As documented "),s("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/documents/debugging-a-local-rust-sgx-enclave-in-docker-with-sgx-gdb.html"}},[e._v("here")]),e._v(" , an older version of GDB debugger has to be utilized for debugging.  The steps to use gdb-7.11.1 are")],1)]),e._v(" "),s("ul",[s("li",[e._v("get the source code of version 7.11.1 :")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('wget "http://ftp.gnu.org/gnu/gdb/gdb-7.11.1.tar.gz"\n')])])]),s("ul",[s("li",[e._v("extract")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tar -xvzf gdb-7.11.1.tar.gz\n")])])]),s("ul",[s("li",[e._v("install the python development headers, needed to configure the GDB python interpreter:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install python3-dev\n")])])]),s("ul",[s("li",[e._v('configure the build: because python scripts will be given as input to the GDB, a python interpreter has to be configured at this step. To do so the option "with-python" shall be used, followed by the path to the desired python version')])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd gdb-7.11.1\n./configure --with-python=/usr/bin/python3\n")])])]),s("ul",[s("li",[e._v("build: in order for building to complete the following changes are required to solve a type conflict - building takes ~3mins :")])]),e._v(" "),s("p",[e._v('In file: gdb/amd64-linux-nat.c:248 --\x3e delete word "const"\nin file: gdb/gdbserver/linux-x86-low.c:239:1 --\x3e delete word "const"')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make\n")])])]),s("ul",[s("li",[e._v("Two options are available to complete installation:")])]),e._v(" "),s("p",[e._v("If GDB 7.11.1 is desired to be located in /usr/bin/gdb then execute:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo make install\n")])])]),s("p",[e._v("If GDB 7.11.1 is desired to be located in a different location, two symbolic links are needed. In our case,  we chose to place gdb-7.11.1 folder under /opt directory. In that case the respective commands will look like the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" sudo ln -sf /opt/gdb-7.11.1/gdb/gdb /usr/bin/gdb\n cd /usr/local/share\n # if gdb dir doesn't exist, create it : mkdir -p gdb\n cd gdb\n # if python dir doesn't exist, create it: mkdir -p python\n cd python\n sudo ln -s /opt/gdb-7.11.1/gdb/data-directory/python/gdb/ /usr/local/share/gdb/python/\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Up until this point, local debugging should be successful. The final step is to use VS Code, by following the steps described [here](use-vscode---rls---rust-analysis---sgx-gdb-for-graphic-developing-(not-in-docker).")])])])}),[],!1,null,null,null);t.default=n.exports}}]);