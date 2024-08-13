import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCodeGenerator = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="input-div">
        <input
          className="qr-input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter text to generate QR code"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCodeGenerator}
        >
          Generate QR Code
        </button>
      </div>
      <div>
        <QRCode id="qr-code" value={qrCode} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
