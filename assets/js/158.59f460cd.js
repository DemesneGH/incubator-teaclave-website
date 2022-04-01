(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{451:function(e,t,s){"use strict";s.r(t);var a=s(29),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("p",[e._v("In this directory, we implement some examples to illustrate how to register\ninput/output data for a function, create and invoke a task and get execution\nresults with the Teclave's client SDK in both single and multi-party setups.")]),e._v(" "),s("p",[e._v("Before trying these examples, please make sure all services in the Teaclave\nplatform has been properly launched. Also, for examples implemented in Python,\ndon't forget to set the "),s("code",[e._v("PYTHONPATH")]),e._v(" to the "),s("code",[e._v("sdk")]),e._v(" path so that the scripts can\nsuccessfully import the "),s("code",[e._v("teaclave")]),e._v(" module.")]),e._v(" "),s("p",[e._v("For instance, use the following command to invoke an echo function in Teaclave:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n")])])]),s("p",[e._v("Please checkout the sources of these examples to learn more about the process of\ninvoking a function in Teaclave.")]),e._v(" "),s("h2",{attrs:{id:"configuring-urls-of-input-output-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-urls-of-input-output-files"}},[e._v("#")]),e._v(" Configuring URLs of Input/Output Files")]),e._v(" "),s("p",[e._v("In some of the examples, you will see URLs of input and output files pointing to\nthe "),s("code",[e._v("localhost")]),e._v(" addresses. In real world, these URLs are addresses from file\nsystem service providers (i.e., AWS S3). If you are using the Docker compose\nfile to start Teaclave services, a simple file system service are also included.\nTo use it, just change the URLs in the examples to\n"),s("code",[e._v("http://teaclave-file-service:6789/path/to/the/file")]),e._v(".")]),e._v(" "),s("p",[e._v("Normally, the domain name is "),s("code",[e._v("teaclave-file-service")]),e._v(", and it can be found via\nthe "),s("code",[e._v("docker ps")]),e._v(' command under the "NAMES" column:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('CONTAINER ID || IMAGE    ||   COMMAND               || CREATED     || STATUS    || NAMES\nXXXXXXXX     || python:3 || "./scripts/simple_ht…"  || 1 days ago  || Up 1 days || teaclave-file-service\n')])])]),s("p",[e._v("Note that in a real-world case, URLs of input and output files should be\nprovided by the end-user. In the examples, we just embed these files for\ndemonstration and testing.")])])}),[],!1,null,null,null);t.default=n.exports}}]);