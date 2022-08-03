import React from "react"
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react"
import Facebook from "./assets/social-media-icons/facebook_32x32.png"
import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Email from "./assets/social-media-icons/email_32x32.png"
//59:24

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0])

    const connectAccount = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }
    return (
        <div>
            {/* Left Side Social Media Icons */}
            <div>FaceBook</div>
            <div>Twitter</div>
            <div>Email</div>
            {/* Right Side Social Media Icons */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>
            {/* Connect */}
            {isConnected ? <p>Connected</p> : <button onClick={connectAccount}>Connect</button>}
        </div>
    )
}
export default NavBar
