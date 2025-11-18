import { useState } from "react"
import { ImageUtils } from "@/utils/imgUtils"
import { allImages } from "@/types/imgtype"

export const Form = () => {
    return (
        <section className="relative grid place-content-center pt-6 bg-zinc-400">
            <ImageUtils
                src="agregar imagen de fondo pendiente"
                alt="Formulario de contacto"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="bg-headerblue text-white p-4 rounded-t-lg ">Envianos tu consulta</div>
            <div className="bg-amber-50 p-4">
                <div className="flex flex-col pt-8 ">
                    <span className="font-semibold">Nombre y empresa</span>
                    <label className="p-1">
                        <input type="text" placeholder="Ej. julia - AYMA S.A." className="p-1 border rounded-full border-blue-400 text-center" />
                    </label>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">E-mail</span>
                    <label className="p-1">
                        <input type="email" placeholder="Ej. julia@ayma.com" className="p-1 border rounded-full border-blue-400 text-center" />
                    </label>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Telefono / Whatsapp</span>
                    <label className="p-1">
                        <input type="tel" placeholder="Ej. +54 9 11 1234 5678" className="p-1 border rounded-full border-blue-400 text-center" />
                    </label>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Motivo / Area</span>
                    <label className="p-1">
                        <input type="text" placeholder=" Compliance, panel Economico" className="p-1 border rounded-full border-blue-400 text-center" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <span className="mb-2 font-semibold">Urgencia</span>

                    <div className="flex gap-6 p-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="urgencia"
                                value="baja"
                                className="p-2 text-center border rounded-full border-blue-400"
                            />
                            Baja
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="urgencia"
                                value="media"
                                className="p-2 text-center border rounded-full border-blue-400"
                            />
                            Media
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="urgencia"
                                value="alta"
                                className="p-2 text-center border rounded-full border-blue-400"
                            />
                            Alta
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Juridiscions</span>
                    <label className="p-1">
                        <input type="text" placeholder=" Compliance, panel Economico" className="p-1 border rounded-full border-blue-400 text-center" />
                    </label>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold"> ¿Tuviste notificaciones / sumario ?</span>
                    <div className="flex gap-6 p-2|">

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="notificaciones"
                                value="si"
                                className="p-2 text-center border rounded-full border-blue-400"
                            />
                            si
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="notificaciones"
                                value="no"
                                className="p-2 text-center border rounded-full border-blue-400"
                            />
                            no
                        </label>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <button className="bg-headerblue text-white p-2 rounded-full mt-4 hover:bg-blue-700 transition-colors">
                        Enviar consulta
                    </button>
                </div>

            </div>
        </section>
    )
}