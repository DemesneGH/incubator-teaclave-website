initSidebarItems({"enum":[["CompressionType",""],["StatusCode","StatusCode describes various failure modes of database operations."]],"fn":[["in_memory","Returns Options that will cause a database to exist purely in-memory instead of being stored on disk. This is useful for testing or ephemeral databases."]],"macro":[["log",""]],"struct":[["BloomPolicy","A filter policy using a bloom filter internally."],["DB","DB contains the actual database implemenation. As opposed to the original, this implementation is not concurrent (yet)."],["DBIterator","DBIterator is an iterator over the contents of a database."],["DefaultCmp","The default byte-wise comparator."],["MemEnv","MemEnv is an in-memory environment that can be used for testing or ephemeral databases. The performance will be better than what a disk environment delivers."],["Options","Options contains general parameters for a LevelDB instance. Most of the names are self-explanatory; the defaults are defined in the `Default` implementation."],["PosixDiskEnv",""],["SkipMap",""],["Status","Status encapsulates a `StatusCode` and an error message. It can be displayed, and also implements `Error`."],["WriteBatch","A WriteBatch contains entries to be written to a MemTable (for example) in a compact form."]],"trait":[["Cmp","Comparator trait, supporting types that can be nested (i.e., add additional functionality on top of an inner comparator)"],["Env",""],["FilterPolicy","Encapsulates a filter algorithm allowing to search for keys more efficiently. Usually, policies are used as a BoxedFilterPolicy (see below), so they can be easily cloned and nested."],["LdbIterator","An extension of the standard `Iterator` trait that supports some methods necessary for LevelDB. This works because the iterators used are stateful and keep the last returned element."]],"type":[["Result","LevelDB's result type"]]});