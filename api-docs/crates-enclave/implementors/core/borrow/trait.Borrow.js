(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl Borrow&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl Borrow&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Borrow&lt;str&gt; for HeaderName","synthetic":false,"types":[]}];
implementors["sgx_alloc"] = [{"text":"impl&lt;T&gt; Borrow&lt;T&gt; for AlignBox&lt;T&gt;","synthetic":false,"types":[]}];
implementors["sgx_trts"] = [{"text":"impl Borrow&lt;CStr&gt; for CString","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Borrow&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()