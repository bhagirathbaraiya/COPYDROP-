import React from "react";
import Button from "./Button";

function Send(props) {
  const test = () => {
    let liveshare = document.getElementById("liveshare");
    console.log(liveshare.checked);
  };
  return (
    <>
      <div className="send-box">
        <h2 className="sub-heading">Send Data</h2>
        <textarea
          placeholder="Enter data to send ..."
          value={props.sendData}
          onChange={(e) => props.SendData(e.target.value)}
        />
        <div className="send-nav">
          {props.sendCode === "" ? (
            <></>
          ) : (
            <p id="send-code">Your Data Recive Code Is : {props.sendCode}</p>
          )}
          {props.sendCode === "" ? (
            <></>
          ) : (
            <div>
              {props.copy ? (
                <></>
              ) : (
                <Button
                  onClick={() => {
                    props.DataCopied(0);
                  }}
                >
                  Copy Code
                </Button>
              )}
              <Button onClick={props.generateCode}>Generate New Code</Button>
            </div>
          )}
        </div>

        {props.liveshare 
        ?
        <> <input type="checkbox" id="liveshare" value={props.liveshare} onChange={(e)=>{props.liveShare(e.target.checked)}}/>
        <label htmlFor=""> You Are Transfering Live</label></>
        :
    
            <>
            <Button
            onClick={() => {
              props.sendButton()
            }}
            primary
          >
            Send Data
          </Button>
              <input type="checkbox" id="liveshare" value={props.liveshare} onChange={(e)=>{props.liveShare(e.target.checked)}}/>
        <label htmlFor=""> Do you Want To Transfer Live</label></>
        }
      </div>
    </>
  );
}

export default Send;
