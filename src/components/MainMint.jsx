import { useState } from "react"
import { ethers, BigNumber } from "ethers"
import { abi, contractAddresses } from "../constants/index"

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])

    const handleMint = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getsigner()
            const contract = new ethers.Contract(contractAddresses, abi, signer)
            try {
                const response = await contract.mint(BigNumber.from(mintAmount))
                console.log("response:", response)
            } catch (err) {
                console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return
        setMintAmount(mintAmount - 1)
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return
        setMintAmount(mintAmount + 1)
    }

    return (
        <div>
            <h1>RoboPunks</h1>
            <p>
                It's 2078. Can the RoboPunks NFT save humans from destructive rampant NFT
                speculations? Mint RoboPunks to find out.
            </p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must connect Metamask to Mint.</p>
            )}
        </div>
    )
}
export default MainMint
