import { useState } from "react";

interface AboutCardsProps {
  title: string;
  subtitle: string;
  chip: string[];
  src: string;
  description: string;
  children?: React.ReactNode;
}

export const AboutCards = ({
  title,
  subtitle,
  chip,
  src,
  description,
  children,
}: AboutCardsProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <section
      className="
        relative 
        bg-softGray
        w-full 
        max-w-88
        sm:max-w-[24rem]
        md:max-w-120
        border 
        rounded-lg 
        overflow-hidden
        shadow-lg hover:shadow-xl 
        transition-shadow duration-300
        h-full              /* 👈 la card puede llenar la columna */
        flex flex-col       /* 👈 imagen arriba, contenido abajo */
      "
    >
      {/* Imagen full-width con overlay */}
      <div id="team" className="relative w-full">
        <div className="w-full aspect-square">
          <img src={src} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Overlay con degradé y título/subtítulo */}
        <div className="absolute inset-x-0 bottom-0 h-20">
          <div
            className="
              bg-gradient-to-t 
              from-softGray via-softGray/95 to-transparent
              w-full h-full
            "
          >
            <div className="px-4 pt-4 pb-3 text-left">
              <h3 className="font-bold text-lg text-navyDeep leading-tight">
                {title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-navyDeep leading-snug">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido debajo */}
      <div
        className="
          px-4 pt-2 pb-4
          text-shadow-blue-950 
          text-left
          flex-1            /* 👈 este bloque ocupa el resto, pero sin estirar raro internos */
          flex flex-col
          gap-2
        "
      >
        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {chip.map((chipText, index) => (
            <span
              key={index}
              className="
                inline-block 
                text-navyDeep
                px-3 py-1 
                border border-skyBlue
                rounded-full 
                text-xs sm:text-sm 
                whitespace-nowrap
              "
            >
              {chipText}
            </span>
          ))}
        </div>

        {/* Descripción + botón (debajo de los chips, no pegado al fondo de la card) */}
        <div className="pt-2 flex flex-col items-end gap-2">
          <div className={showDescription ? "block" : "hidden sm:block"}>
            <p className="text-xs sm:text-sm text-navyDeep leading-[1.2]">
              {description}
            </p>
          </div>

          <button
            className="
              relative sm:hidden
              text-amber-50
              rounded-full p-1 mt-1 w-24
              bg-gray-900
              text-xs sm:text-sm
            "
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Ocultar" : "Ver perfil"}
          </button>
        </div>

        {children && <div className="mt-2 text-navyDeep">{children}</div>}
      </div>
    </section>
  );
};
