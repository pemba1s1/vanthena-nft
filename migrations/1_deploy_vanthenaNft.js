var VanthenaNft = artifacts.require("./vanthenaNft.sol");

module.exports = function (deployer) {
  deployer.deploy(VanthenaNft,"Vanthena","VA");
};