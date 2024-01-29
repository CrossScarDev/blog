---
title: My experience with osxcross
description: The experience I had when installing and using osxcross.
date: 2024-01-28
---

In this blog post I will be explaining what I had to do to install and use osxcross on Debian 12.

First I downloaded osxcross using the following command:

```bash
git clone https://github.com/tpoechtrager/osxcross.git
```

Then I used the first method of packaging the sdk on linux. To do so I downloaded the Xcode 15.2 and ran the following command in the osxcross directory:

```bash
./tools/gen_sdk_package_pbzx.sh /path/to/xcode.xip
```

After running the command I got an error about missing `libcui.so.73`. I had already installed the latest available version of `libcui` on Debian (version 72). To fix this issue I created sim-links for all the `libcui.so.73` files from the `libcui.so.72` files; and it worked! I then had the generated sdks in the osxcross root so I moved them into the tarballs directory.

Then I had to build osxcross. To do this all I had to do is run the following command to generate a `clang` toolchain:

```bash
./build.sh
```

If you get an error about multiple sdk versions then pass your preferred sdk to the `build.sh` file:

```bash
SDK_VERSION=xx.xx ./build.sh
# Replacing xx.xx with your preferred sdk version.
```

If you want to use `gcc` instead of `clang` use `./build_gcc.sh` instead of `./build.sh`.

Now you can use `o64-clang` for x64 builds and `oa64-clang` for arm64 builds.

For more information please check out [the osxcross GitHub repository.](https://github.com/tpoechtrager/osxcross)
