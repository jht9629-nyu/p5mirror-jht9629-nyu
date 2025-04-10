cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "p5moRelease videoKit 370 v1-xSrdePcOW"
rm -rf "./p5moRelease videoKit 370 v1-xSrdePcOW"
mkdir "./p5moRelease videoKit 370 v1-xSrdePcOW"
pushd "./p5moRelease videoKit 370 v1-xSrdePcOW" > /dev/null
unzip -q "../../downloads/zips/p5moRelease videoKit 370 v1-xSrdePcOW"
popd > /dev/null
#
echo unzip 2 "Working particle wave with full screen two hands official v1-MAT5wugoj"
rm -rf "./Working particle wave with full screen two hands official v1-MAT5wugoj"
mkdir "./Working particle wave with full screen two hands official v1-MAT5wugoj"
pushd "./Working particle wave with full screen two hands official v1-MAT5wugoj" > /dev/null
unzip -q "../../downloads/zips/Working particle wave with full screen two hands official v1-MAT5wugoj"
popd > /dev/null
#
echo unzip 3 "Living QR code - JaapM v0-m_O69wDFp"
rm -rf "./Living QR code - JaapM v0-m_O69wDFp"
mkdir "./Living QR code - JaapM v0-m_O69wDFp"
pushd "./Living QR code - JaapM v0-m_O69wDFp" > /dev/null
unzip -q "../../downloads/zips/Living QR code - JaapM v0-m_O69wDFp"
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