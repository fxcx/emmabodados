import { ImageUtils } from "@/utils/imgUtils";
import { allImages } from "@/types/imgtype";

export const Footer = () => {
  return (
    <footer className="bg-navyDeep text-softGray py-2 px-6">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="shrink-0 -ml-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32">
              <ImageUtils
                src={allImages.logoFooter}
                alt="Logo Emm abogados"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-0 flex-1 flex justify-center">
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left md:items-start">
              <div className="p-0 md:p-4">
                <h3 className="text-xl font-bold mb-4 text-softGray">Contacto</h3>
                <div className="space-y-1 text-softGray text-sm">
                  <p className="flex flex-col md:flex-row md:items-center gap-1 ">
                    <span className="font-medium">Dirección:</span>
                    <span>Reconquista 336, piso 6, oficina P6</span>
                  </p>
                  <p>Buenos Aires - (CP000)</p>
                  <p>
                    <span className="font-medium">Teléfono:</span> 54 9 0000
                    0000
                  </p>
                  <p>
                    <span className="font-medium">Mail:</span>{" "}
                    contacto@emmabogados.com
                  </p>
                </div>
              </div>

              <div className="p-0 md:p-4">
                <h3 className="text-xl font-bold mb-4 text-softGray">
                  Áreas de Práctica
                </h3>
                <div className="space-y-1 text-cloudGray text-sm">
                  <p>Compliance</p>
                  <p>Derecho penal empresario</p>
                  <p>Sumarios y procedimientos administrativos</p>
                  <p>Derecho penal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-end">
          <p className="text-[10px] sm:text-xs text-softGray text-right">
            &copy; {new Date().getFullYear()} EMM Abogados. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
