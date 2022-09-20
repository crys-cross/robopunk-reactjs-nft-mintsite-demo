const { network, deployments, ethers } = require("hardhat")
const developmentChains = ["hardhat", "localhost"]

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RoboPunksNFT Unit Test", () => {
          let roboPunksNft, deployer, otherWallet

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              otherWallet = accounts[0]
              await deployments.fixture(["RoboPunksNFT"])
              roboPunksNft = await ethers.getContract("RoboPunksNFT")
          })
          describe("constructor", async () => {
              it("sets starting values correctly", async () => {})
          })
          describe("setIsPublicMintEnabled", async () => {
              it("sets", async () => {})
          })
          describe("setBaseTokenUri", async () => {
              it("sets", async () => {})
          })
          describe("tokenURI", async () => {
              it("sets", async () => {})
          })
          describe("withdraw", async () => {
              it("only withdraw wallet may withdraw", async () => {
                  //roboPunkawait
              })
          })
          describe("mint", async () => {
              it("sets", async () => {})
          })
      })
