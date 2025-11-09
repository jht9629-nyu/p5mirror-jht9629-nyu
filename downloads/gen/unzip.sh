cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Emoji Physics Launcher - p5.js-fZXlgta_H"
rm -rf "./Emoji Physics Launcher - p5.js-fZXlgta_H"
mkdir "./Emoji Physics Launcher - p5.js-fZXlgta_H"
pushd "./Emoji Physics Launcher - p5.js-fZXlgta_H" > /dev/null
unzip -q "../../downloads/zips/Emoji Physics Launcher - p5.js-fZXlgta_H"
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