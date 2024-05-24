import React from "react";
import "./FootApp.css";
import qrcode from "C:/Users/Admin/Desktop/KLE/Web_dev/gullyguy/src/assets/download.png";
import playstore from "C:/Users/Admin/Desktop/KLE/Web_dev/gullyguy/src/assets/play_store.png";
import appstore from "C:/Users/Admin/Desktop/KLE/Web_dev/gullyguy/src/assets/app-store.png";

const FootApp = () => {
  return (
    <div className="FootMainCont">
      <div className="subCont">
        <div className="appINfo">Explore a bit more with our all new app</div>
        <div className="appdiv">
          <div className="andmain">
            <div className="android">
              <div className="qrcode">
                <img src={qrcode} alt="" className="qrimg" />
              </div>
              <div className="applinkhead">
                <div className="playStoreimg">
                  <img src={playstore} alt="" className="playMain" />
                </div>
                <div className="clickname">
                  <button className="playstoreBut">Download Now</button>
                </div>
              </div>
            </div>
            <div className="iolowline">
              Scan or click on the button to download the app on your android device
            </div>
          </div>

          <div className="ioMain">
            <div className="ios">
              <div className="qrcode">
                <img src={qrcode} alt="" className="qrimg" />
              </div>
              <div className="applinkhead">
                <div className="playStoreimg">
                  <img src={appstore} alt="" className="playMain" />
                </div>
                <div className="clickname">
                  <button className="playstoreBut">Download Now</button>
                </div>
              </div>
            </div>
            <div className="iolowline">
              Scan or click on the button to download the app on your ios device
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootApp;
