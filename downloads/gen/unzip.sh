cd "/Users/jht2/Documents/projects/_2026/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
rm -rf "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
mkdir "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
pushd "./p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN" > /dev/null
unzip -q "../../downloads/zips/p5LiveMedia Test Video - p5@2.2.2-w4tbUyhAN"
popd > /dev/null
#
echo unzip 2 "p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
rm -rf "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
mkdir "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
pushd "./p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3" > /dev/null
unzip -q "../../downloads/zips/p5LiveMedia Test Video - p5@1.11.13-y8LVIMEn3"
popd > /dev/null
#
echo unzip 3 "p5LiveMedia Test Video - p5.js1.1.9-7bEgwEtLF"
rm -rf "./p5LiveMedia Test Video - p5.js1.1.9-7bEgwEtLF"
mkdir "./p5LiveMedia Test Video - p5.js1.1.9-7bEgwEtLF"
pushd "./p5LiveMedia Test Video - p5.js1.1.9-7bEgwEtLF" > /dev/null
unzip -q "../../downloads/zips/p5LiveMedia Test Video - p5.js1.1.9-7bEgwEtLF"
popd > /dev/null
#
echo unzip 4 "Profuse othnielia-GvOgKqBR8"
rm -rf "./Profuse othnielia-GvOgKqBR8"
mkdir "./Profuse othnielia-GvOgKqBR8"
pushd "./Profuse othnielia-GvOgKqBR8" > /dev/null
unzip -q "../../downloads/zips/Profuse othnielia-GvOgKqBR8"
popd > /dev/null
#
echo unzip 5 "Metal straw-yr5vFpXlt"
rm -rf "./Metal straw-yr5vFpXlt"
mkdir "./Metal straw-yr5vFpXlt"
pushd "./Metal straw-yr5vFpXlt" > /dev/null
unzip -q "../../downloads/zips/Metal straw-yr5vFpXlt"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js ml5.min.js
rm -f p5projects/*/p5.* p5projects/*/ml5.min.js
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi