cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "ims02 Unexpected-cut-mask-v_diZAkZQ"
rm -rf "./ims02 Unexpected-cut-mask-v_diZAkZQ"
mkdir "./ims02 Unexpected-cut-mask-v_diZAkZQ"
pushd "./ims02 Unexpected-cut-mask-v_diZAkZQ" > /dev/null
unzip -q "../../downloads/zips/ims02 Unexpected-cut-mask-v_diZAkZQ"
popd > /dev/null
#
echo unzip 2 "blendMode-h47LHGYre"
rm -rf "./blendMode-h47LHGYre"
mkdir "./blendMode-h47LHGYre"
pushd "./blendMode-h47LHGYre" > /dev/null
unzip -q "../../downloads/zips/blendMode-h47LHGYre"
popd > /dev/null
#
echo unzip 3 "bodySegmentation-mask-body-parts v0-J4z_gwHVu"
rm -rf "./bodySegmentation-mask-body-parts v0-J4z_gwHVu"
mkdir "./bodySegmentation-mask-body-parts v0-J4z_gwHVu"
pushd "./bodySegmentation-mask-body-parts v0-J4z_gwHVu" > /dev/null
unzip -q "../../downloads/zips/bodySegmentation-mask-body-parts v0-J4z_gwHVu"
popd > /dev/null
#
echo unzip 4 "portals by oliviaemlee v0-1nLfUa1PU"
rm -rf "./portals by oliviaemlee v0-1nLfUa1PU"
mkdir "./portals by oliviaemlee v0-1nLfUa1PU"
pushd "./portals by oliviaemlee v0-1nLfUa1PU" > /dev/null
unzip -q "../../downloads/zips/portals by oliviaemlee v0-1nLfUa1PU"
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