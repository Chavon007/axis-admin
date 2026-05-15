import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface QRScannerProps {
  onScan: (decodedText: string) => void;
}
function QRScanner({ onScan }: QRScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    // create scanner instance targettingg the div with id "qr-reader"
    scannerRef.current = new Html5Qrcode("qr-reader");

    // start scanning

    scannerRef.current.start(
      {
        facingMode: "environment",
      },
      {
        fps: 10,
        qrbox: 250, //size of the scanner
      },
      (decodedText) => {
        onScan(decodedText);
        scannerRef.current?.stop();
      },
      () => {},
    );

    // stop camera when component unmounts

    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, []);

  return (
    <div>
      <div>
        <h3>Scan Guest QR Code</h3>
        <MMdQrCodeScanner />
      </div>
      {/* camera box */}
      <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/50 shadow-[0_0_20px_rgba(253,230,138,0.15)]">
        {/* corner decorations */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-md z-10" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-md z-10" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-md z-10" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-md z-10" />

        {/* camera feed */}
        <div id="qr-reader" style={{ width: "300px", height: "300px" }} />
      </div>

      <div className="flex items-center gap-2 text-gray-400">
        <FiCamera className="text-amber-400" />
        <small className="text-xs font-lato">
          Point camera at guest's QR code
        </small>
      </div>
    </div>
  );
}

export default QRScanner;
