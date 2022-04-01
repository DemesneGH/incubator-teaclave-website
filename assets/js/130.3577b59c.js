(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{470:function(e,t,a){"use strict";a.r(t);var n=a(29),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"attestation-in-teaclave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attestation-in-teaclave"}},[e._v("#")]),e._v(" Attestation in Teaclave")]),e._v(" "),a("p",[e._v("This directory contains the implementation of the attestation in Apache\nTeaclave.")]),e._v(" "),a("p",[e._v("Attestation is the process of demonstrating that a software component is running\nproperly on a Trusted Execution Environment (e.g., Intel SGX).")]),e._v(" "),a("p",[e._v("Teaclave combines the remote attestation with a TLS connection to improve the\ntrustworthiness of two endpoints. Once established, it has attested that the\nrunning parties are inside trusted enclaves and provided trusted channels with\nend-to-end encryption, the enclave code's identity, and other information.")]),e._v(" "),a("p",[e._v("The platform includes several services, and each service is running inside an\nenclave. Those services communicate with mutual-attested TLS channels.")]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it Works")]),e._v(" "),a("p",[e._v("We integrate the attestation process in the TLS handshake. The attested-TLS\nhandshake is similar to a normal TLS handshake, except the extension of the\ncertificate includes an SGX attestation report. We make the certificate\ncryptographically bound to a specific enclave instance by adding the public key\nof the certificate in the attestation report.")]),e._v(" "),a("p",[e._v("During the build time, the public keys of the auditor enclaves are hard-coded in\nTeaclave services enclave, and enclave measurements and signatures are loaded\nfrom outside during the runtime. Auditor enclaves verify and sign the identity\nof each service enclave. After each service receives the attestation report, it\nwill verify whether the "),a("code",[e._v("MR_SIGNER")]),e._v(" and "),a("code",[e._v("MR_ENCLAVE")]),e._v(" from the attestation report\nmatch the identity information signed by auditor enclaves. After that, it will\nverify the TLS certificate. If all the verifications pass, a secure attested\nchannel is established between two enclaves.")]),e._v(" "),a("p",[e._v("Please note the trusted channel can also have one-way (client -> server)\nattestation. Under the circumstances, only the server needs to run inside TEEs.")]),e._v(" "),a("h2",{attrs:{id:"attestation-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attestation-report"}},[e._v("#")]),e._v(" Attestation Report")]),e._v(" "),a("p",[e._v("After one party obtains an attestation report from the received certificate.\nTeaclave first verifies the attestation report with the "),a("code",[e._v("report_ca_cert")]),e._v(" from the\nattestation service provider (e.g., IAS report root CA certificate for EPID,\nor DCAP attestation server end-entity certificate for DCAP).")]),e._v(" "),a("h3",{attrs:{id:"verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),a("p",[e._v("There is much information included in an attestation report such as CPU\nversion, ISV version, product ID, etc. By default, Teaclave will check\n"),a("code",[e._v("MR_ENCLAVE")]),e._v(" and "),a("code",[e._v("MR_SIGNER")]),e._v(". Users can also define a customized\nverification function to check more information in attestation reports by\nimplementing the "),a("code",[e._v("AttestationReportVerificationFn")]),e._v(" function.")]),e._v(" "),a("h3",{attrs:{id:"freshness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freshness"}},[e._v("#")]),e._v(" Freshness")]),e._v(" "),a("p",[e._v("To make sure the platform is always up-to-date and trusted, Teaclave will update\nattestation report periodically. By default, the validity time of an attestation\nreport is 3600 seconds. It can be changed in the\n"),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave/blob/master/config/build.config.toml",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("build.config.toml")])]),e._v("\nfile.")])])}),[],!1,null,null,null);t.default=i.exports}}]);