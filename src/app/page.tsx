"use client";
import Image from "next/image";
import {
  FaWhatsapp,
  FaWifi,
  FaShoppingCart,
  FaGoogle,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdPix } from "react-icons/md";
import { useState } from "react";
import QuadradosFundo from "./components/QuadradosFundo";
import WifiModal from "./components/WifiModal";
import PixModal from "./components/PixModal";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  const [showWifiModal, setShowWifiModal] = useState(false);
  const [showPixModal, setShowPixModal] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/fundoimg.jpg"
          alt="Fundo EcoClean"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      {/* Fundo elegante com gradiente e ornamentos */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#183263]/90 via-[#183263]/80 to-[#7EC13D]/70 animate-gradient-move" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EDF3F9] rounded-full blur-3xl opacity-40 animate-pulse-slow" />
      <QuadradosFundo />
      <div className="relative z-10 w-full max-w-sm sm:max-w-sm max-w-xs bg-white/90 rounded-2xl shadow-2xl p-0 flex flex-col items-center border border-[#EDF3F9] backdrop-blur-md overflow-hidden mx-2 my-8">
        {/* Carrossel de Imagens */}
        <div className="w-full mt-4 -mx-6">
          <ImageCarousel />
        </div>

        {/* botão para cadastro de clientes */}
        <div className="w-full flex justify-center mt-4">
          <a
            href="https://ecocleanmatinhos.com.br/cadastro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center w-full max-w-xs"
          >
            Cadastre-se no Programa de Fidelidade
          </a>
        </div>

        {/* Informações de endereço e contato */}
        <div className="w-full text-center text-[#183263] mb-2 px-6 mt-4 flex flex-col gap-5">
          <div>
            <div className="font-semibold text-base">
              Av. Juscelino Kubitscheck de Oliveira, 3220 - Centro, Matinhos -
              PR, 83260-000
            </div>
            <div className="flex justify-center mt-3">
              <a
                href="tel:+5541997943219"
                className="bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center w-full max-w-xs"
              >
                <FaPhoneAlt className="text-xl" /> (41) 99794-3219
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-base">
              R. Paranaguá, 3243, Matinhos - PR, 83260-000
            </div>
            <div className="flex justify-center mt-3">
              <a
                href="tel:+5541999880508"
                className="bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center w-full max-w-xs"
              >
                <FaPhoneAlt className="text-xl" /> (41) 99988-0508
              </a>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="w-full flex flex-col gap-4 justify-center mt-6 mb-10 px-6">
          <a
            href="https://api.whatsapp.com/send?phone=5541997943219"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaWhatsapp className="text-xl" /> Adicionar WhatsApp
          </a>
          <button
            onClick={() => setShowWifiModal(true)}
            className="w-full bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaWifi className="text-xl" /> Adicionar Wifi
          </button>
          <button
            onClick={() => setShowPixModal(true)}
            className="w-full bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <MdPix className="text-xl" /> Chave Pix
          </button>
          <a
            href="https://www.ecocleanmatinhos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7EC13D] hover:bg-[#5ea32a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaShoppingCart className="text-xl" /> Compre Online
          </a>
          <a
            href="https://g.page/r/CT91MzwCa1_ZEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#183263] hover:bg-[#14244a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#183263]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaGoogle className="text-xl" /> Avalie no Google
          </a>
          <a
            href="https://www.instagram.com/ecocleanmatinhos/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#183263] hover:bg-[#14244a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#183263]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaInstagram className="text-xl" /> Siga no Instagram
          </a>
          <a
            href="https://www.facebook.com/EcoCleanmatinhos/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#183263] hover:bg-[#14244a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#183263]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaFacebook className="text-xl" /> Facebook
          </a>
          <a
            href="mailto:ecocleanmatinhos@gmail.com"
            className="w-full bg-[#183263] hover:bg-[#14244a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#183263]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center"
          >
            <FaEnvelope className="text-xl" /> Email para Contato
          </a>
        </div>
        {/* Cabeçalho com logo */}
        <div className="w-full flex items-center justify-center bg-[#183263] p-6 sm:p-8">
          <Image
            src="/logotransp.png"
            alt="Logo EcoClean"
            width={256}
            height={128}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Modais */}
      <WifiModal
        isOpen={showWifiModal}
        onClose={() => setShowWifiModal(false)}
      />
      <PixModal isOpen={showPixModal} onClose={() => setShowPixModal(false)} />
    </div>
  );
}
