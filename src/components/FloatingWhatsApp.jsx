import React from 'react';

export default function FloatingWhatsApp() {
  const phoneNumber = '919867781756';
  const defaultMessage = encodeURIComponent('Hi Saksham, I saw your website and would like to discuss a project.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#1A1C21]/95 hover:bg-[#24272e] border border-[#2A2D35] hover:border-emerald-500/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        title="Direct chat with Saksham"
      >
        {/* Status Indicator & WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <svg
            className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.942 3.123.942 3.181 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.769-5.768-5.769zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.553-1.899-.783-3.117-2.735-3.212-2.86-.095-.126-.774-1.03-.774-1.965 0-.935.489-1.393.663-1.583.175-.19.381-.238.508-.238.127 0 .254.001.365.006.118.006.277-.045.433.329.16.381.545 1.328.592 1.425.048.096.08.209.016.335-.064.127-.096.206-.191.317-.095.111-.2.249-.286.334-.095.096-.194.2-.084.389.111.189.493.813 1.058 1.316.726.647 1.338.847 1.528.942.19.096.302.08.414-.048.111-.127.476-.554.603-.744.127-.19.254-.159.428-.095.175.064 1.111.524 1.302.619.19.095.317.143.365.222.048.079.048.459-.096.864z"/>
          </svg>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono font-medium text-[#F0F1F3] group-hover:text-emerald-400 transition-colors">
              Chat with Saksham
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#8A919E]">
            Direct line · Replies fast
          </span>
        </div>
      </a>
    </aside>
  );
}
