import { useState } from 'react';
import useScanDetection from 'use-scan-detection';
import './App.css'

function App() {
const [barcodeScan, setBarcodeScan] = useState("No Barcode Scanned");

  return (
    <>
      <div className="App" style={{ padding : "5rem 10rem"}}>
          <p>Barcode : {barcodeScan}</p>
      </div>
    </>
  )
}

export default App
