(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{508:function(t,e,a){"use strict";a.r(e);var i=a(29),_=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hashbrown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashbrown"}},[t._v("#")]),t._v(" hashbrown")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.com/rust-lang/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.com/rust-lang/hashbrown.svg?branch=master",alt:"Build Status"}})]),t._v(" "),a("a",{attrs:{href:"https://crates.io/crates/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/crates/v/hashbrown.svg",alt:"Crates.io"}})]),t._v(" "),a("a",{attrs:{href:"https://docs.rs/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://docs.rs/hashbrown/badge.svg",alt:"Documentation"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/rust-lang/hashbrown",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/rust-1.49.0%2B-blue.svg?maxAge=3600",alt:"Rust"}})])]),t._v(" "),a("p",[t._v("This crate is a Rust port of Google's high-performance "),a("a",{attrs:{href:"https://abseil.io/blog/20180927-swisstables",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwissTable")]),t._v(" hash\nmap, adapted to make it a drop-in replacement for Rust's standard "),a("code",[t._v("HashMap")]),t._v("\nand "),a("code",[t._v("HashSet")]),t._v(" types.")]),t._v(" "),a("p",[t._v("The original C++ version of SwissTable can be found "),a("a",{attrs:{href:"https://github.com/abseil/abseil-cpp/blob/master/absl/container/internal/raw_hash_set.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("here")]),t._v(", and this\n"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=ncHmEUmJZf4",target:"_blank",rel:"noopener noreferrer"}},[t._v("CppCon talk")]),t._v(" gives an overview of how the algorithm works.")]),t._v(" "),a("p",[t._v("Since Rust 1.36, this is now the "),a("code",[t._v("HashMap")]),t._v(" implementation for the Rust standard\nlibrary. However you may still want to use this crate instead since it works\nin environments without "),a("code",[t._v("std")]),t._v(", such as embedded systems and kernels.")]),t._v(" "),a("h2",{attrs:{id:"change-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/sgx_tstd/hashbrown/CHANGELOG.html"}},[t._v("Change log")])],1),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("Drop-in replacement for the standard library "),a("code",[t._v("HashMap")]),t._v(" and "),a("code",[t._v("HashSet")]),t._v(" types.")]),t._v(" "),a("li",[t._v("Uses "),a("a",{attrs:{href:"https://github.com/tkaitchuck/aHash",target:"_blank",rel:"noopener noreferrer"}},[t._v("AHash")]),t._v(" as the default hasher, which is much faster than SipHash.\nHowever, AHash does "),a("em",[t._v("not provide the same level of HashDoS resistance")]),t._v(" as SipHash, so if that is important to you, you might want to consider using a different hasher.")]),t._v(" "),a("li",[t._v("Around 2x faster than the previous standard library "),a("code",[t._v("HashMap")]),t._v(".")]),t._v(" "),a("li",[t._v("Lower memory usage: only 1 byte of overhead per entry instead of 8.")]),t._v(" "),a("li",[t._v("Compatible with "),a("code",[t._v("#[no_std]")]),t._v(" (but requires a global allocator with the "),a("code",[t._v("alloc")]),t._v(" crate).")]),t._v(" "),a("li",[t._v("Empty hash maps do not allocate any memory.")]),t._v(" "),a("li",[t._v("SIMD lookups to scan multiple hash entries in parallel.")])]),t._v(" "),a("h2",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),a("p",[t._v("Compared to the previous implementation of "),a("code",[t._v("std::collections::HashMap")]),t._v(" (Rust 1.35).")]),t._v(" "),a("p",[t._v("With the hashbrown default AHash hasher:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("oldstdhash ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("hashbrown ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("diff ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("diff %")]),t._v(" "),a("th",[t._v("speedup")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_ahash_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("18,865")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("8,020")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-10,845")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-57.49%")]),t._v(" "),a("td",[t._v("x 2.35")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_ahash_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,711")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("8,019")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-11,692")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-59.32%")]),t._v(" "),a("td",[t._v("x 2.46")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_ahash_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,365")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("6,463")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-12,902")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-66.63%")]),t._v(" "),a("td",[t._v("x 3.00")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_ahash_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("51,136")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("17,916")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-33,220")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-64.96%")]),t._v(" "),a("td",[t._v("x 2.85")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_ahash_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("51,157")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("17,688")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-33,469")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-65.42%")]),t._v(" "),a("td",[t._v("x 2.89")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_ahash_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("45,479")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("14,895")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-30,584")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-67.25%")]),t._v(" "),a("td",[t._v("x 3.05")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_ahash_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,399")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,092")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-307")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-21.94%")]),t._v(" "),a("td",[t._v("x 1.28")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_ahash_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,586")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,059")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-527")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-33.23%")]),t._v(" "),a("td",[t._v("x 1.50")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_ahash_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3,168")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,079")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-2,089")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-65.94%")]),t._v(" "),a("td",[t._v("x 2.94")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_ahash_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32,351")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4,792")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-27,559")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-85.19%")]),t._v(" "),a("td",[t._v("x 6.75")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_ahash_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("17,419")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4,817")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-12,602")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-72.35%")]),t._v(" "),a("td",[t._v("x 3.62")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_ahash_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15,254")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("3,606")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-11,648")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-76.36%")]),t._v(" "),a("td",[t._v("x 4.23")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_ahash_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("21,187")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4,369")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-16,818")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-79.38%")]),t._v(" "),a("td",[t._v("x 4.85")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_ahash_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("21,550")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4,395")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-17,155")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-79.61%")]),t._v(" "),a("td",[t._v("x 4.90")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_ahash_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,450")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("3,176")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-16,274")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-83.67%")]),t._v(" "),a("td",[t._v("x 6.12")])])])]),t._v(" "),a("p",[t._v("With the libstd default SipHash hasher:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("oldstdhash ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("hashbrown ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("diff ns/iter")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("diff %")]),t._v(" "),a("th",[t._v("speedup")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_std_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,216")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("16,885")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-2,331")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-12.13%")]),t._v(" "),a("td",[t._v("x 1.14")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_std_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,179")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("17,034")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-2,145")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-11.18%")]),t._v(" "),a("td",[t._v("x 1.13")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_std_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,462")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("17,493")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-1,969")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-10.12%")]),t._v(" "),a("td",[t._v("x 1.11")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_std_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("50,825")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("35,847")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-14,978")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-29.47%")]),t._v(" "),a("td",[t._v("x 1.42")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_std_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("51,448")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("35,392")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-16,056")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-31.21%")]),t._v(" "),a("td",[t._v("x 1.45")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("insert_erase_std_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("87,711")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("38,091")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-49,620")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-56.57%")]),t._v(" "),a("td",[t._v("x 2.30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_std_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,378")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,159")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-219")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-15.89%")]),t._v(" "),a("td",[t._v("x 1.19")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_std_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,395")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,132")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-263")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-18.85%")]),t._v(" "),a("td",[t._v("x 1.23")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iter_std_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1,704")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1,105")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-599")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-35.15%")]),t._v(" "),a("td",[t._v("x 1.54")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_std_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("17,195")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,642")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-3,553")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-20.66%")]),t._v(" "),a("td",[t._v("x 1.26")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_std_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("17,181")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,773")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-3,408")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-19.84%")]),t._v(" "),a("td",[t._v("x 1.25")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_std_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15,483")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,651")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-1,832")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-11.83%")]),t._v(" "),a("td",[t._v("x 1.13")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_std_highbits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20,926")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,474")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-7,452")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-35.61%")]),t._v(" "),a("td",[t._v("x 1.55")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_std_random")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("21,766")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,505")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-8,261")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-37.95%")]),t._v(" "),a("td",[t._v("x 1.61")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lookup_fail_std_serial")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19,336")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13,519")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-5,817")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("-30.08%")]),t._v(" "),a("td",[t._v("x 1.43")])])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Add this to your "),a("code",[t._v("Cargo.toml")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[dependencies]\nhashbrown = "0.11"\n')])])]),a("p",[t._v("Then:")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('use hashbrown::HashMap;\n\nlet mut map = HashMap::new();\nmap.insert(1, "one");\n')])])]),a("h2",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),a("p",[t._v("This crate has the following Cargo features:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("nightly")]),t._v(": Enables nightly-only features including: "),a("code",[t._v("#[may_dangle]")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("serde")]),t._v(": Enables serde serialization support.")]),t._v(" "),a("li",[a("code",[t._v("rayon")]),t._v(": Enables rayon parallel iterator support.")]),t._v(" "),a("li",[a("code",[t._v("raw")]),t._v(": Enables access to the experimental and unsafe "),a("code",[t._v("RawTable")]),t._v(" API.")]),t._v(" "),a("li",[a("code",[t._v("inline-more")]),t._v(": Adds inline hints to most functions, improving run-time performance at the cost\nof compilation time. (enabled by default)")]),t._v(" "),a("li",[a("code",[t._v("bumpalo")]),t._v(": Provides a "),a("code",[t._v("BumpWrapper")]),t._v(" type which allows "),a("code",[t._v("bumpalo")]),t._v(" to be used for memory allocation.")]),t._v(" "),a("li",[a("code",[t._v("ahash")]),t._v(": Compiles with ahash as default hasher. (enabled by default)")]),t._v(" "),a("li",[a("code",[t._v("ahash-compile-time-rng")]),t._v(": Activates the "),a("code",[t._v("compile-time-rng")]),t._v(" feature of ahash. For targets with no random number generator\nthis pre-generates seeds at compile time and embeds them as constants. See "),a("a",{attrs:{href:"https://github.com/tkaitchuck/aHash#flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("aHash's documentation")]),t._v(" (disabled by default)")])]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("Licensed under either of:")]),t._v(" "),a("ul",[a("li",[t._v("Apache License, Version 2.0, ("),a("a",{attrs:{href:"LICENSE-APACHE"}},[t._v("LICENSE-APACHE")]),t._v(" or http://www.apache.org/licenses/LICENSE-2.0)")]),t._v(" "),a("li",[t._v("MIT license ("),a("a",{attrs:{href:"LICENSE-MIT"}},[t._v("LICENSE-MIT")]),t._v(" or http://opensource.org/licenses/MIT)")])]),t._v(" "),a("p",[t._v("at your option.")]),t._v(" "),a("h3",{attrs:{id:"contribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[t._v("#")]),t._v(" Contribution")]),t._v(" "),a("p",[t._v("Unless you explicitly state otherwise, any contribution intentionally submitted\nfor inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any\nadditional terms or conditions.")])])}),[],!1,null,null,null);e.default=_.exports}}]);