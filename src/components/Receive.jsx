import React from "react";
import Button from "./Button";

function Receive(props) {
  return (
    <>
      <div className="receive-box">
        <h2 className="sub-heading">Receive Data</h2>
        <div className="receive-nav">
          <input
            type="text"
            placeholder="Enter receive code"
            value={props.receiveCode}
            onChange={(e) => props.setReceiveCode(e.target.value)}
            id="receive-code"
          />
          <Button onClick={props.receiveDataHandler} primary>
            Receive Data
          </Button>
          {props.isNoData ? <p>No Data Found On That Code </p>:<></>}
        </div>
        <textarea
          placeholder="Received Data Will be Showd Here ..."
          value={props.receivedData}
          readOnly
        />
        {props.receivedData === "" ? 
          <></>
         : 
          <>{props.receivedCopy ? <> All Data Copied Nothing Changed </>:<Button onClick={()=>{props.DataCopied(1)}}>
          Copy Data
        </Button>}</>
        }
      </div>
    </>
  );
}

export default Receive;
