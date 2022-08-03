const fs = require("fs")
const { ethers, network } = require("hardhat")

const frontEndContractsFile = "./src/constants/contractAddresses.json"
const frontEndAbiFile = "./src/constants/abi.json"

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating Front End")
        updateContractAddresses()
        updateAbi()
    }
}
const updateContractAddresses = async () => {
    const roboPunksNft = await ethers.getContract("RoboPunksNFT")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(roboPunksNft.address)) {
            contractAddresses[network.config.chainId.toString()].push(roboPunksNft.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [roboPunksNft.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
const updateAbi = async () => {
    const roboPunksNft = await ethers.getContract("RoboPunksNFT")
    fs.writeFileSync(frontEndAbiFile, roboPunksNft.interface.format(ethers.utils.FormatTypes.json))
}
module.exports.tags = ["all", "frontend"]
