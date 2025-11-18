cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Unruly fat pixels v18-m483LSIQy"
rm -rf "./Unruly fat pixels v18-m483LSIQy"
mkdir "./Unruly fat pixels v18-m483LSIQy"
pushd "./Unruly fat pixels v18-m483LSIQy" > /dev/null
unzip -q "../../downloads/zips/Unruly fat pixels v18-m483LSIQy"
popd > /dev/null
#
echo unzip 2 "Unruly fat pixels v17 copy-_-U-TMjNe"
rm -rf "./Unruly fat pixels v17 copy-_-U-TMjNe"
mkdir "./Unruly fat pixels v17 copy-_-U-TMjNe"
pushd "./Unruly fat pixels v17 copy-_-U-TMjNe" > /dev/null
unzip -q "../../downloads/zips/Unruly fat pixels v17 copy-_-U-TMjNe"
popd > /dev/null
#
echo unzip 3 "Unruly fat pixels v17-Lx4gj-rT2"
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