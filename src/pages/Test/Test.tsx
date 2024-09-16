import React from "react";
import { SwarmCommentSystem } from "solarpunk-comment-system-ui";
import { ethers } from "ethers";
import { Signer, Utils } from "@ethersphere/bee-js";
import "./Test.scss";
import NavigationFooter from "../../components/NavigationFooter/NavigationFooter";

const Test: React.FC = () => {
    // Create Wallet - this will be created outside the component
    let wallet: ethers.Wallet | null;
    const savedKey = localStorage.getItem("walletPrivKey");
    //if (savedKey) {
    wallet = new ethers.Wallet("0x5a6d2217c2a202cb9ac1cb6781cc3423ec6a276f488634bb935495f77cd7aba9")
    //} else {
    //  const tempPriv = ethers.Wallet.createRandom().privateKey;
    //  wallet = new ethers.Wallet(tempPriv);
    //  localStorage.setItem("walletPrivKey", wallet.privateKey)
    //}

    const signer: Signer = {
        address: Utils.hexToBytes(wallet.address.slice(2)),
        sign: async (data: any) => {
          return await wallet.signMessage(data);
        },
      };

    return (
        <div>
            <div id="chatContainer">
                <SwarmCommentSystem
                    stamp={"e1081a232ebd7854838ee406e530acdfe355d4ded08b7865bad27a52a0bcaa87"} 
                    topic={"bagoytopic-5"} 
                    privateKey={wallet.privateKey}
                    signer={signer}
                    beeApiUrl={"https://nurnberg.zelmacorp.io"}
                />
            </div>
            <NavigationFooter />
        </div>
    );
};

export default Test;
