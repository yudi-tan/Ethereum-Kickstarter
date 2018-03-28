const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); //remove build folder

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //create the build folder

for (let contract in output) {
  //iterate over keys in the list
  fs.outputJsonSync(
    // creates JSON file in a specified directory
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract] //actual contents of the json file
  );
}
