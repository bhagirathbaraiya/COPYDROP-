import React, { useEffect, useState } from "react";
import Send from "./Send";
import Receive from "./Receive";

import { getDatabase, ref, set, onValue } from "firebase/database";
import app from "./Firebase";

const db = getDatabase(app);

export default function Content() {
  const [sendCode, setSendCode] = useState("");
  const [receiveCode, setReceiveCode] = useState("");
  const [sendData, setSendData] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const [Copy, setCopy] = useState(false);
  const [receivedCopy, setReceivedCopy] = useState(false);
  const [liveshare, setLiveshare] = useState(false);
  const [receiveCounter,setReceiveCounter] = useState(0);
  const [isNoData,setNoData]=useState(false);

  const DataCopied = (id) => {
    if (id === 0) {
      setCopy(true);
      navigator.clipboard.writeText(sendCode);
      let test = navigator.clipboard.readText();
      console.log(test);
    } else if (id === 1) {
      setReceivedCopy(true);
      setReceiveCounter(receiveCounter+1);
      navigator.clipboard.writeText(receivedData);
    }
  };
  const SendData = (data) => {
    setSendData(data);
  };
  const generateCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setSendCode(code);
    setCopy(false);
  };

  const sendButton = () => {
    if(sendData === ""){
      alert("Empty Data cannot be sent");
    }else{
      const Put = () => {
        set(ref(db, `CopyDrop/TextTransfer/${sendCode}`), {
          data: sendData,
        });
      };
      Put();
    }
  };


  const getData = async () => {
    try {
        const test = ref(db, `CopyDrop/TextTransfer/${receiveCode}`);
        onValue(test, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setReceivedData(data.data); 
                setNoData(false)
            } else {
                setNoData(true);
                setReceivedData("")
            }
        }, (error) => {
            console.log('The read failed: ', error); 
        });
    } catch (error) {
        console.error("Error getting data: ", error); 
    }
};

  const liveShare = (ischecked) => {
    setLiveshare(ischecked);
  };
  const receiveDataHandler = () => {
    getData();
  };

  useEffect(()=>{
      setReceivedCopy(false)
  },[receivedData])

  useEffect(() => {
    generateCode();
  }, []);

  useEffect(() => {
    if (sendData !== "") {
      if (liveshare) {
        const share = setInterval(() => {
          sendButton();
        }, 1000);
        return () => clearInterval(share);
      }
    }
  }, [sendData, liveshare]);

  return (
    <div className="main">
      <main>
        <div className="main-box">
          <Send
            sendCode={sendCode}
            sendData={sendData}
            SendData={SendData}
            generateCode={generateCode}
            DataCopied={DataCopied}
            copy={Copy}
            sendButton={sendButton}
            liveshare={liveshare}
            liveShare={liveShare}
          />
          <Receive
            receiveCode={receiveCode}
            receivedData={receivedData}
            receiveDataHandler={receiveDataHandler}
            setReceiveCode={setReceiveCode}
            DataCopied={DataCopied}
            receivedCopy={receivedCopy}
            isNoData={isNoData}
          />
        </div>
      </main>
    </div>
  );
}
