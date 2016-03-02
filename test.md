# File System Support

### Additional Architecture:
- add file handle struct {mode, offset, vnode, ref count, lock}
- add file table (file handle array) to proc struct
- add a lock for file table to proc struct
- add a lock for cwd

### open()
- allocate a file handle and make sure room in curproc file table
- copyin the pathname from userspace to kernel space
- call vfs_open() handles most error codes
- set the offset of the file handle

### close()
