// app/_components/footer.tsx
'use client';

interface FooterProps {
  onToggleAside: () => void;
  isButtonActive: boolean;
}

export default function Footer({ onToggleAside, isButtonActive }: FooterProps) {
  return (
    <footer>
      <div className="win95-panel w-full h-14 bottom-0 fixed">
        <button 
          onClick={onToggleAside}
          className={`
            inline-flex items-center 
            h-9/10 w-20 mx-1 my-1
            
            // Aplica a classe base do painel
            win95-panel
            
            // Aplica a classe 'win95-panel-active' APENAS se o botão estiver ativo
            ${isButtonActive ? 'win95-panel-active' : ''}
          `}
        >
          <img src="/photo.png" className="h-5 w-5 mx-2" alt="Start icon"></img>
          <a>Start</a>
        </button>
      </div> 
    </footer>
  );
}