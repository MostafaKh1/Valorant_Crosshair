import React from "react";
import Cross from "../imgaes/tenz.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Box () {

    const [copied, setCopied] = React.useState(false)

    return (
        <div className="box">
                                        <img src={Cross} />
                                        <h5></h5>
                                        <span className="code"></span>
                                        <CopyToClipboard
                                        onCopy={() => setCopied(true)}    
                                        >
                                            <button>Get Code</button>
                                 </CopyToClipboard>
         </div>
    )
}