initSidebarItems({"enum":[["BulkAlgorithm","Bulk symmetric encryption scheme used by a cipher suite."],["CipherSuite","The `CipherSuite` TLS protocol enum.  Values in this enum are taken from the various RFCs covering TLS, and are listed by IANA. The `Unknown` item is used when processing unrecognised ordinals."],["ProtocolVersion","The `ProtocolVersion` TLS protocol enum.  Values in this enum are taken from the various RFCs covering TLS, and are listed by IANA. The `Unknown` item is used when processing unrecognised ordinals."],["SignatureScheme","The `SignatureScheme` TLS protocol enum.  Values in this enum are taken from the various RFCs covering TLS, and are listed by IANA. The `Unknown` item is used when processing unrecognised ordinals."],["TLSError","rustls reports protocol errors using this type."]],"mod":[["internal","Internal classes which may be useful outside the library. The contents of this section DO NOT form part of the stable interface."],["sign","Message signing interfaces and implementations."]],"static":[["ALL_CIPHERSUITES","A list of all the cipher suites supported by rustls."]],"struct":[["AllowAnyAnonymousOrAuthenticatedClient","A `ClientCertVerifier` that will allow both anonymous and authenticated clients, without any name checking."],["AllowAnyAuthenticatedClient","A `ClientCertVerifier` that will ensure that every client provides a trusted certificate, without any name checking."],["Certificate","This type contains a single certificate by value."],["ClientCertVerified","Zero-sized marker type representing verification of a client cert chain."],["ClientConfig","Common configuration for (typically) all connections made by a program."],["ClientSession","This represents a single TLS client session."],["ClientSessionMemoryCache","An implementor of `StoresClientSessions` that stores everything in memory.  It enforces a limit on the number of entries to bound memory usage."],["DangerousClientConfig","Accessor for dangerous configuration options."],["KeyLogFile","`KeyLog` implementation that opens a file whose name is given by the `SSLKEYLOGFILE` environment variable, and writes keys into it."],["NoClientAuth","Turns off client authentication."],["NoClientSessionStorage","An implementor of `StoresClientSessions` which does nothing."],["NoKeyLog","KeyLog that does exactly nothing."],["NoServerSessionStorage","Something which never stores sessions."],["PrivateKey","This type contains a private key by value."],["ResolvesServerCertUsingSNI","Something that resolves do different cert chains/keys based on client-supplied server name (via SNI)."],["RootCertStore","A container for root certificates able to provide a root-of-trust for connection authentication."],["ServerCertVerified","Zero-sized marker type representing verification of a server cert chain."],["ServerConfig","Common configuration for a set of server sessions."],["ServerSession","This represents a single TLS server session."],["ServerSessionMemoryCache","An implementor of `StoresServerSessions` that stores everything in memory.  If enforces a limit on the number of stored sessions to bound memory usage."],["Stream","This type implements `io::Read` and `io::Write`, encapsulating a Session `S` and an underlying transport `T`, such as a socket."],["StreamOwned","This type implements `io::Read` and `io::Write`, encapsulating and owning a Session `S` and an underlying blocking transport `T`, such as a socket."],["SupportedCipherSuite","A cipher suite supported by rustls."],["Ticketer","A concrete, safe ticket creation mechanism."],["WriteEarlyData","Stub that implements io::Write and dispatches to `write_early_data`."]],"trait":[["ClientCertVerifier","Something that can verify a client certificate chain"],["KeyLog","This trait represents the ability to do something useful with key material, such as logging it to a file for debugging."],["ProducesTickets","A trait for the ability to encrypt and decrypt tickets."],["ResolvesClientCert","A trait for the ability to choose a certificate chain and private key for the purposes of client authentication."],["ResolvesServerCert","How to choose a certificate chain and signing key for use in server authentication."],["ServerCertVerifier","Something that can verify a server certificate chain"],["Session","Generalises `ClientSession` and `ServerSession`"],["StoresClientSessions","A trait for the ability to store client session data. The keys and values are opaque."],["StoresServerSessions","A trait for the ability to store server session data."],["WriteV","This trait specifies rustls's precise requirements doing writes with vectored IO."]],"type":[["DistinguishedNames",""]]});