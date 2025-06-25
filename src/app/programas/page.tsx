"use client";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function Programas() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Container do fundo dividido */}
      <div className="absolute inset-0 -z-10 flex flex-col">
        {/* Metade superior com a imagem */}
        <div className="h-1/2 relative">
          <Image
            src="/fundoimg.jpg"
            alt="Fundo EcoClean"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#183263]/30 via-[#183263]/70 to-[#183263] backdrop-blur-[1px]" />
        </div>
        {/* Metade inferior com o gradiente */}
        <div className="h-1/2 bg-gradient-to-br from-[#183263] via-[#183263] to-[#7EC13D] animate-gradient-move" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-md bg-white/20 rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-white/30 backdrop-blur-xl overflow-hidden mx-4">
        {/* Logo */}
        <div className="w-full flex items-center justify-center mb-8">
          <Image
            src="/logotransp.png"
            alt="Logo EcoClean"
            width={200}
            height={100}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg">
          Programas EcoClean
        </h1>

        {/* Botões de Download */}
        <div className="w-full flex flex-col gap-4">
          <a
            href="https://drive.google.com/file/d/1VhbGfxrTLsJx5Zl2StdjNwckTPld8xEj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7EC13D]/90 hover:bg-[#5ea32a] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center backdrop-blur-sm"
          >
            <FaDownload className="text-xl" />
            Baixar Software Fidelidade
          </a>

          <a
            href="https://drive.usercontent.google.com/download?id=1yJJdlA4lnLTJ6OA13jOwNJtjald98IDN&export=download&authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7EC13D]/90 hover:bg-[#5ea32a] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center backdrop-blur-sm"
          >
            <FaDownload className="text-xl" />
            Baixar Aplicativo Fidelidade
          </a>

          <a
            href="https://drive.google.com/file/d/1mRve6Lwgxe5BriL2Pn2LtwySguoPbCsL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7EC13D]/90 hover:bg-[#5ea32a] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[#7EC13D]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center backdrop-blur-sm"
          >
            <FaDownload className="text-xl" />
            Baixar Software Fidelidade Caixa
          </a>
        </div>

        {/* Botão Voltar */}
        <a
          href="/"
          className="mt-8 w-full bg-[#183263]/90 hover:bg-[#14244a] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-[#183263]/30 transition-all duration-200 text-base flex items-center gap-3 justify-center backdrop-blur-sm"
        >
          Voltar para Página Inicial
        </a>
      </div>
    </div>
  );
}
