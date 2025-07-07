import './App.css';
import logo from './FieldTripLogo.png';
import Barcode from 'react-barcode';

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <h1>FIELD TRIP 3</h1>
      <button id="GetButton" onClick={() => {document.getElementById("Ticket").style.display = "flex"; document.getElementById("GetButton").style.display = "none";}}>Get Ticket</button>
      <div id="Ticket">
        <Barcode className="Barcode" value="2zNSuDra9" displayValue="false" height="150"/>
        <h1>TICKET</h1>
      </div>
    </div>
  );
}
