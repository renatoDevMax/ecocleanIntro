import { QRCodeSVG } from "qrcode.react";
import { FaTimes } from "react-icons/fa";

interface WifiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WifiModal({ isOpen, onClose }: WifiModalProps) {
  if (!isOpen) return null;

  const wifiConfig = {
    ssid: "EcoClean_5G",
    password: "loja2016",
    type: "WPA",
  };

  const wifiString = `WIFI:S:${wifiConfig.ssid};T:${wifiConfig.type};P:${wifiConfig.password};;`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay com blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 w-[90%] max-w-sm shadow-2xl transform transition-all duration-300 ease-out animate-modal-in">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Conteúdo */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#183263] text-xl font-semibold text-center">
            Conecte à nossa rede wifi ou escaneie o QR Code
          </h2>

          <div className="bg-white p-4 rounded-xl shadow-lg">
            <QRCodeSVG value={wifiString} size={200} />
          </div>

          <div className="w-full space-y-3">
            <div className="bg-[#EDF3F9] p-4 rounded-xl">
              <p className="text-[#183263] font-medium">
                Nome da Rede:{" "}
                <span className="font-normal">{wifiConfig.ssid}</span>
              </p>
            </div>
            <div className="bg-[#EDF3F9] p-4 rounded-xl">
              <p className="text-[#183263] font-medium">
                Senha da rede:{" "}
                <span className="font-normal">{wifiConfig.password}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
