cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims04-jht scroll color rate-2pxhnehBV"
rm -rf "./ims04-jht scroll color rate-2pxhnehBV"
mkdir "./ims04-jht scroll color rate-2pxhnehBV"
pushd "./ims04-jht scroll color rate-2pxhnehBV" > /dev/null
unzip -q "../../downloads/zips/ims04-jht scroll color rate-2pxhnehBV"
popd > /dev/null
#
echo unzip 2 "ims04-jht scroll color bars-ZpoPuHXRo"
rm -rf "./ims04-jht scroll color bars-ZpoPuHXRo"
mkdir "./ims04-jht scroll color bars-ZpoPuHXRo"
pushd "./ims04-jht scroll color bars-ZpoPuHXRo" > /dev/null
unzip -q "../../downloads/zips/ims04-jht scroll color bars-ZpoPuHXRo"
popd > /dev/null
#
echo unzip 3 "ims03-jht scrolling color bars-3VKJ-q8ar"
rm -rf "./ims03-jht scrolling color bars-3VKJ-q8ar"
mkdir "./ims03-jht scrolling color bars-3VKJ-q8ar"
pushd "./ims03-jht scrolling color bars-3VKJ-q8ar" > /dev/null
unzip -q "../../downloads/zips/ims03-jht scrolling color bars-3VKJ-q8ar"
popd > /dev/null
#
echo unzip 4 "ims black-n white-1 bounce-Mpgun-Kti"
rm -rf "./ims black-n white-1 bounce-Mpgun-Kti"
mkdir "./ims black-n white-1 bounce-Mpgun-Kti"
pushd "./ims black-n white-1 bounce-Mpgun-Kti" > /dev/null
unzip -q "../../downloads/zips/ims black-n white-1 bounce-Mpgun-Kti"
popd > /dev/null
#
echo unzip 5 "Stupendous tellurium copy-6FRgWWxc_"
rm -rf "./Stupendous tellurium copy-6FRgWWxc_"
mkdir "./Stupendous tellurium copy-6FRgWWxc_"
pushd "./Stupendous tellurium copy-6FRgWWxc_" > /dev/null
unzip -q "../../downloads/zips/Stupendous tellurium copy-6FRgWWxc_"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi