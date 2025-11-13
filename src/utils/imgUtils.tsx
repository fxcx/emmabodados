import type{ ImageT } from "@/types/imgtype"

export const ImageUtils = ({ src, alt, className }: ImageT ) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />
}
