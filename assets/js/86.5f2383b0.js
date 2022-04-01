(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{564:function(e,t,a){"use strict";a.r(t);var s=a(29),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"untrusted-enclave-remote-attestation-code-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#untrusted-enclave-remote-attestation-code-sample"}},[e._v("#")]),e._v(" Untrusted-Enclave Remote Attestation code sample")]),e._v(" "),a("p",[e._v("This code sample contains an implementation of "),a("a",{attrs:{href:"https://github.com/cloud-security-research/sgx-ra-tls/blob/master/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrating Remote Attestation with Transport Layer Security")]),e._v(", with the modification of the untrusted side.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("To use this code sample, one needs to register at "),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel website")]),e._v(" for dev IAS service access. Once the registration is finished, the following stuff should be ready:")]),e._v(" "),a("ol",[a("li",[e._v("An SPID assigned by Intel")]),e._v(" "),a("li",[e._v("IAS API Key assigned by Intel")])]),e._v(" "),a("p",[e._v("Both of these information could be found in the new "),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/developer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Trusted Services API Management Portal")]),e._v('. Please log into this portal and switch to "Manage subscriptions" page on the top right corner to see your SPID and API keys. Either primary key or secondary key works.')]),e._v(" "),a("p",[e._v("Save them to ue-ra-server's "),a("code",[e._v("bin/spid.txt")]),e._v(" and "),a("code",[e._v("bin/key.txt")]),e._v(" respectively. Size of these two files should be 32 or 33.")]),e._v(" "),a("h2",{attrs:{id:"custom-ca-client-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-ca-client-setup"}},[e._v("#")]),e._v(" Custom CA/client setup")]),e._v(" "),a("p",[e._v("To establish a TLS channel, we need a CA and generates a client cert for mutual authentication. We store them at "),a("code",[e._v("cert")]),e._v(".")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Generate CA private key\nopenssl ecparam -genkey -name prime256v1 -out ca.key")])]),e._v(" "),a("li",[a("p",[e._v("Generate CA cert\nopenssl req -x509 -new -SHA256 -nodes -key ca.key -days 3650 -out ca.crt")])]),e._v(" "),a("li",[a("p",[e._v("Generate Client private key\nopenssl ecparam -genkey -name prime256v1 -out client.key")])]),e._v(" "),a("li",[a("p",[e._v("Export the keys to pkcs8 unencrypted format\nopenssl pkcs8 -topk8 -nocrypt -in client.key -out client.pkcs8")])]),e._v(" "),a("li",[a("p",[e._v("Generate Client CSR\nopenssl req -new -SHA256 -key client.key -nodes -out client.csr")])]),e._v(" "),a("li",[a("p",[e._v('Generate Client Cert\nopenssl x509 -req -extfile <(printf "subjectAltName=DNS:localhost,DNS:www.example.com") -days 3650 -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt')])]),e._v(" "),a("li",[a("p",[e._v("Intel CA report signing pem. Download and uncompress:\nhttps://software.intel.com/sites/default/files/managed/7b/de/RK_PUB.zip")])])]),e._v(" "),a("h2",{attrs:{id:"embedding-ias-credentials-to-ue-ra-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedding-ias-credentials-to-ue-ra-server"}},[e._v("#")]),e._v(" Embedding IAS credentials to ue-ra-server")]),e._v(" "),a("p",[a("code",[e._v("enclave/src/lib.rs")]),e._v(" contains two funcs "),a("code",[e._v("load_spid")]),e._v(" and "),a("code",[e._v("get_ias_api_key")]),e._v(". These two functions are configured to load spid/api key from "),a("code",[e._v("spid.txt")]),e._v(" and "),a("code",[e._v("key.txt")]),e._v(" from "),a("code",[e._v("bin")]),e._v(" directory respectively. One can either adjust the file paths/names or copy the spid/key to "),a("code",[e._v("bin")]),e._v(". "),a("code",[e._v("spid.txt")]),e._v(" and "),a("code",[e._v("key.txt")]),e._v(" should only contain one line of 32 chars such as "),a("code",[e._v("DEADBEAFDEADBEAFDEADBEAFDEADBEAF")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),a("p",[e._v("Start server")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ue-ra-server\nmake\ncd bin\n./app (add --unlink if your spid's type is unlinkable)\n")])])]),a("p",[e._v("Start client")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ue-ra-client\ncargo run\n")])])]),a("p",[e._v("Start client-go (golang should be installed)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ue-ra-client-go\nmake\ncd bin\n./app\n")])])]),a("p",[e._v("Start client-java (Java:1.8+, mvn)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ue-ra-client-java\nmvn install\njava -jar target/ue-ra-client-java-0.0.1-SNAPSHOT.jar\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);