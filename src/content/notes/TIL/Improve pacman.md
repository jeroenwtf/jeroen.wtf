---
modified: 2025-10-14T12:37:28+02:00
created: 2025-02-13T11:27:55+01:00
tags:
  - linux
  - arch
  - pacman
status: draft
---

Edit `/etc/pacman.conf` and uncomment or add the following lines:

```
Color
ILoveCandy
VerbosePkgLists
ParallelDownloads = 5
```

- `Color` enables colored output.
- `ILoveCandy` is an Easter egg without functional impact.
- `VerbosePkgLists` makes the package list more detailed.
- `ParallelDownloads` allows `pacman` to download multiple packaged simultaneously and it makes it fly. Use it only if your connection doesn't sucks.
