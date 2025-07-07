import './App.css';
import logo from './FieldTripLogo.png';
import Barcode from 'react-barcode';

import {PulseLoader} from 'react-spinners';

export default function App() {
  async function GetTicket() {
    document.getElementById("GetButton").style.display = "none";
    document.getElementById("Loader").style.display = "flex";
    setTimeout(() => {
      document.getElementById("Loader").style.display = "none";
      document.getElementById("Ticket").style.display = "flex";
    }, 2000)
  }

  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <h1>FIELD TRIP 3</h1>
      <button id="GetButton" onClick={GetTicket}>Get Ticket</button>
      <div id="Loader"><button id="GetButton"><PulseLoader  color="#004000" size={15} thickness={10}/></button></div>
      <div id="Ticket">
        <Barcode className="Barcode" value="2zNSuDra9" displayValue="false" height="150"/>
        <h1>TICKET</h1>
      </div>
    </div>
  );
}
