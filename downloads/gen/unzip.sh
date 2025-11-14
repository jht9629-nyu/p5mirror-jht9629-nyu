cd "/Users/jht2/Documents/projects/_2025/p5-mirrors/p5mirror-jht9629-nyu/downloads/../p5projects"
#
echo unzip 1 "Conditionals - Bouncing Ball with Gravity v15-MxSKByJA0"
rm -rf "./Conditionals - Bouncing Ball with Gravity v15-MxSKByJA0"
mkdir "./Conditionals - Bouncing Ball with Gravity v15-MxSKByJA0"
pushd "./Conditionals - Bouncing Ball with Gravity v15-MxSKByJA0" > /dev/null
unzip -q "../../downloads/zips/Conditionals - Bouncing Ball with Gravity v15-MxSKByJA0"
popd > /dev/null
#
echo unzip 2 "Conditionals - Bouncing Ball with Gravity v14-5sLlOgTDg"
rm -rf "./Conditionals - Bouncing Ball with Gravity v14-5sLlOgTDg"
mkdir "./Conditionals - Bouncing Ball with Gravity v14-5sLlOgTDg"
pushd "./Conditionals - Bouncing Ball with Gravity v14-5sLlOgTDg" > /dev/null
unzip -q "../../downloads/zips/Conditionals - Bouncing Ball with Gravity v14-5sLlOgTDg"
popd > /dev/null
#
echo unzip 3 "Conditionals - Bouncing Ball with Gravity v13-HILRsnSsG"
rm -rf "./Conditionals - Bouncing Ball with Gravity v13-HILRsnSsG"
mkdir "./Conditionals - Bouncing Ball with Gravity v13-HILRsnSsG"
pushd "./Conditionals - Bouncing Ball with Gravity v13-HILRsnSsG" > /dev/null
unzip -q "../../downloads/zips/Conditionals - Bouncing Ball with Gravity v13-HILRsnSsG"
popd > /dev/null
#
echo unzip 4 "video pixel scan-HRjZBETUA"
rm -rf "./video pixel scan-HRjZBETUA"
mkdir "./video pixel scan-HRjZBETUA"
pushd "./video pixel scan-HRjZBETUA" > /dev/null
unzip -q "../../downloads/zips/video pixel scan-HRjZBETUA"
popd > /dev/null
#
echo unzip 5 "createCapture VIDEO flipped-Ddt4PnnER"
rm -rf "./createCapture VIDEO flipped-Ddt4PnnER"
mkdir "./createCapture VIDEO flipped-Ddt4PnnER"
pushd "./createCapture VIDEO flipped-Ddt4PnnER" > /dev/null
unzip -q "../../downloads/zips/createCapture VIDEO flipped-Ddt4PnnER"
popd > /dev/null
#
echo unzip 6 "Conditionals - Bouncing Ball with Gravity v12-Iob8cJo2b"
rm -rf "./Conditionals - Bouncing Ball with Gravity v12-Iob8cJo2b"
mkdir "./Conditionals - Bouncing Ball with Gravity v12-Iob8cJo2b"
pushd "./Conditionals - Bouncing Ball with Gravity v12-Iob8cJo2b" > /dev/null
unzip -q "../../downloads/zips/Conditionals - Bouncing Ball with Gravity v12-Iob8cJo2b"
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