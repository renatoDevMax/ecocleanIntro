import { QRCodeSVG } from "qrcode.react";
import { FaTimes, FaCopy } from "react-icons/fa";
import { useState } from "react";

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PixModal({ isOpen, onClose }: PixModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pixString =
    "00020101021126360014br.gov.bcb.pix0114241421240001705204000053039865802BR5925Lica Produtos De Limpeza 6008BRASILIA62070503***63047DA6";
  const pixKey = "24.142.124/0001-70";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

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
            Escaneie o QR Code ou copie nossa chave PIX
          </h2>

          <div className="bg-white p-4 rounded-xl shadow-lg">
            <QRCodeSVG value={pixString} size={200} />
          </div>

          <div className="w-full">
            <p className="text-[#183263] font-medium mb-2">
              Copiar nossa chave PIX:
            </p>
            <div className="flex items-center gap-2 bg-[#183263] p-4 rounded-xl">
              <p className="text-white font-mono text-lg tracking-wider flex-1">
                {pixKey}
              </p>
              <button
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  copied
                    ? "bg-[#7EC13D] text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                title={copied ? "Copiado!" : "Copiar chave"}
              >
                <FaCopy className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
