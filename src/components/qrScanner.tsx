import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { FiCamera } from "react-icons/fi";

interface QRScannerProps {
  onScan: (decodedText: string) => void;
}

function QRScanner({ onScan }: QRScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    let mounted = true;

    const startScanner = async () => {
      if (!isScanning) return;

      try {
        // prevent duplicate scanner
        if (!scannerRef.current) {
          scannerRef.current = new Html5Qrcode("qr-reader");
        }

        await scannerRef.current.start(
          {
            facingMode: "environment",
          },
          {
            fps: 10,
            qrbox: {
              width: 250,
              height: 250,
            },
            aspectRatio: 1,
          },
          async (decodedText) => {
            onScan(decodedText);

            if (scannerRef.current) {
              await scannerRef.current.stop();
            }

            if (mounted) {
              setIsScanning(false);
            }
          },
          () => {},
        );
      } catch (error) {
        console.error("Scanner failed to start:", error);
      }
    };

    startScanner();

    return () => {
      mounted = false;

      if (scannerRef.current?.isScanning) {
        scannerRef.current
          .stop()
          .then(() => {
            scannerRef.current?.clear();
          })
          .catch(() => {});
      }
    };
  }, [isScanning, onScan]);

  const handleToggleScanner = async () => {
    if (isScanning) {
      try {
        await scannerRef.current?.stop();
        await scannerRef.current?.clear();
      } catch (error) {
        console.error(error);
      }

      setIsScanning(false);
    } else {
      setIsScanning(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h3 className="text-sm font-lato font-bold p-2 border-b border-amber-100 text-amber-50">
        Scan Guest QR Code
      </h3>

      {isScanning && (
        <div className="relative self-center rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-[0_0_20px_rgba(253,230,138,0.15)]">
          {/* scanner corners */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-md z-10" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-md z-10" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-md z-10" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-md z-10" />

          {/* scanner */}
          <div id="qr-reader" className="w-75 h-75" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center gap-3">
        <button
          onClick={handleToggleScanner}
          className="flex flex-col items-center justify-center gap-2 w-32 h-32 rounded-2xl bg-amber-400 hover:bg-amber-500 transition-all duration-300 text-black font-bold shadow-lg"
        >
          <FiCamera className="text-5xl" />

          <span className="text-sm font-lato">
            {isScanning ? "Stop Camera" : "Start Camera"}
          </span>
        </button>

        <small className="text-xs font-lato text-gray-400">
          Point camera at guest&apos;s QR code
        </small>
      </div>
    </div>
  );
}

export default QRScanner;
