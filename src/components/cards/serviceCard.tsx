

type ServiceCardProps = {
  title: string;
  description: string;
  titleClassName?: string; // 👈 opcional para ajustar el h1 en casos especiales
};

export const ServiceCard = ({ title, description, titleClassName }: ServiceCardProps) => {
  return (
    <div
      className="
        w-full
        bg-navyDeep 
        text-white 
        px-8 py-10
        flex flex-col
        items-center
        text-center
      "
    >
      <h1
        className={`
          font-semibold
          mb-5
          text-3xl md:text-2xl   /* tamaño por defecto */
          ${titleClassName ?? ""} /* override opcional */
        `}
      >
        {title}
      </h1>

      <div className="mt-2 mb-5 h-px w-full bg-skyBlue" />

      <p
        className="
          text-2xl
          md:text-2xl
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
};
