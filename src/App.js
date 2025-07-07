import './App.css';
import logo from './FieldTripLogo.png';
import Barcode from 'react-barcode';

import {PulseLoader} from 'react-spinners';
export default function App() {
  async function GetTicket() {
    document.getElementById("GetButton").style.display = "none";
    document.getElementById("Loader").style.display = "flex";
    const waitTime = Math.floor((Math.random() * 9000 + 1000)/5);
    setTimeout(() => {
      document.getElementById("m1").style.display = "none";
      document.getElementById("m2").style.display = "flex";
      setTimeout(() => {
        document.getElementById("m2").style.display = "none";
        document.getElementById("m3").style.display = "flex";
        setTimeout(() => {
          document.getElementById("m3").style.display = "none";
          document.getElementById("m4").style.display = "flex";
          setTimeout(() => {
            document.getElementById("m4").style.display = "none";
            document.getElementById("m5").style.display = "flex";
            setTimeout(() => {
              document.getElementById("Loader").style.display = "none";
              document.getElementById("Ticket").style.display = "flex";
            }, waitTime)
          }, waitTime)
        }, waitTime)
      }, waitTime)
    }, waitTime)
  }

  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <h1>FIELD TRIP 3</h1>
      <button id="GetButton" onClick={GetTicket}>Get Ticket</button>
      <div id="Loader">
        <button id="GetButton"><PulseLoader  color="#004000" size={15} thickness={10}/></button>
        <p id="m1">Connecting to Ticketmaster...</p>
        <p id="m2">Requesting ticket...</p>
        <p id="m3">Sending auth...</p>
        <p id="m4">Receiving ticket details...</p>
        <p id="m5">Generating barcode...</p>
      </div>
      <div id="Ticket">
        <Barcode className="Barcode" value="2zNSuDra9" displayValue="false" height="150"/>
        <h1>TICKET</h1>
      </div>
    </div>
  );
}
