cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Unruly fat pixels v17-Lx4gj-rT2"
rm -rf "./Unruly fat pixels v17-Lx4gj-rT2"
mkdir "./Unruly fat pixels v17-Lx4gj-rT2"
pushd "./Unruly fat pixels v17-Lx4gj-rT2" > /dev/null
unzip -q "../../downloads/zips/Unruly fat pixels v17-Lx4gj-rT2"
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