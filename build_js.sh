#!/bin/bash

echo "If you have compiled QT or SDL, you need to run clean.sh first!"
cd libgambatte
scons CC=$EMSCRIPTEN/emcc CXX=$EMSCRIPTEN/em++ AR=$EMSCRIPTEN/emar CFLAGS="-Wall -Wextra -O2 -fomit-frame-pointer -Wno-warn-absolute-paths"
#emcc -O0 libgambatte.a -o libgambatte.js
#emcc -O2 libgambatte.a -o libgambatte.o2.js
cd ..
cd gambatte_js
cp ../libgambatte/libgambatte.a .
emmake make
