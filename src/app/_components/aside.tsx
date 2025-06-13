// app/_components/aside.tsx

import { Dropdown } from "flowbite-react";

interface AsideProps {
  isVisible: boolean;
}

export default function Aside({ isVisible }: AsideProps) {
  return (
    <>
      <aside
        id="default-sidebar"
        className={`
          absolute left-0 bottom-14 h-[calc(100vh-250px)] 
          z-40 w-75
          transition-transform duration-300 ease-in-out 
          ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          } // Efeito de deslize
          win95-panel // Sua classe de estilo que não deve afetar o posicionamento
          ${
            isVisible ? "block" : "hidden"
          } // Controle de visibilidade/ocupação de espaço
          sm:translate-x-0 // Para manter visível em telas sm e maiores
        `}
        aria-label="Sidenav"
      >
        <div className="absolute left-0 h-full w-8 bg-gray-500 flex items-end justify-center">
          <h1 className="text-gray-300 text-2xl p-2 font-bold rotate-[270deg] origin-center mb-13 whitespace-nowrap">
            PORTFOLIO
            <span className="font-light"> 2025</span>
          </h1>
        </div>

        <div className="overflow-y-auto py-5 px-3 h-full flex flex-col justify-between">
          <ul className="flex-grow flex flex-col ml-10 text-2xl space-y-4 border-b-2 border-gray-400">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/home.png"
                  className="h-5 w-5 mr-3"
                  alt="Home icon"
                ></img>
                <span>Home</span>
              </a>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/cases.png"
                  className="h-5 w-5 mr-3"
                  alt="Projects icon"
                ></img>
                <span>Projects</span>
              </a>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/about.png"
                  className="h-5 w-5 mr-3"
                  alt="About icon"
                ></img>
                <span>About</span>
              </a>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/hire.png"
                  className="h-5 w-5 mr-3"
                  alt="Hire icon"
                ></img>
                <span>Hire</span>
              </a>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/certificate.png"
                  className="h-5 w-5 mr-3"
                  alt="Certificates icon"
                ></img>
                <span>Certificates</span>
              </a>
            </li>
          </ul>
          <ul className="flex-grow flex flex-col ml-10 text-2xl space-y-4 border-t-2 border-gray-50">
            <li className="inline-flex items-center mt-5">
              <a href="#" className="inline-flex items-center">
                <img
                  src="/shutdown.png"
                  className="h-5 w-5 mr-3"
                  alt="Shut down icon"
                ></img>
                <span>Shut Down...</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
