    import React from "react";
  
    import {CopyToClipboard} from 'react-copy-to-clipboard';




    export default function Crosshair (props) {

        const [copied, setCopied] = React.useState(false)


      

        return (
            
                        
                                
                                    <div className="box">
                                        <img src={require(`../imgaes/${props.img}`)} alt={props.name} />
                                        <h5>{props.name}</h5>
                                        <CopyToClipboard text={props.code}
                                        onCopy={() => setCopied(true)}    
                                        >
                                            <button>Get Code</button>
                                        </CopyToClipboard>
                                    </div>
                              
           
        )
    }
        

       