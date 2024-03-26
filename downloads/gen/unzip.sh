cd "/Users/jht2/Documents/projects/2024/p5mo/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims black-n white-1 bounce-Mpgun-Kti"
rm -rf "./ims black-n white-1 bounce-Mpgun-Kti"
mkdir "./ims black-n white-1 bounce-Mpgun-Kti"
pushd "./ims black-n white-1 bounce-Mpgun-Kti" > /dev/null
unzip -q "../../downloads/zips/ims black-n white-1 bounce-Mpgun-Kti"
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