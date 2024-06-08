import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BUSQUEDA_ESTADO_CLASS_MAP, BUSQUEDA_ESTADO_TEXT_MAP } from "@/constantes";
import TablaActualizaciones from "../Actualizacion/TablaActualizaciones";

export default function Show({ auth, success, busqueda, actualizaciones, queryParams }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {`Búsqueda de ${busqueda.nombre}`}
                    </h2>
                    <Link href={route("busqueda.edit", busqueda.id)} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">
                        Editar
                    </Link>
                </div>
            }>

            <Head title={`Búsqueda de ${busqueda.nombre}`}></Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <div>
                            <img src={busqueda.ruta_imagen} alt="" className="w-full h-auto max-h-96 object-cover mx-auto"></img>
                        </div>

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">

                                <div>

                                    <div>
                                        <label className="font-bold text-lg">ID de la búsqueda</label>
                                        <p className="mt-1">{busqueda.id}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Mascota</label>
                                        <p className="mt-1">{busqueda.nombre}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Estado</label>
                                        <p className="mt-1">
                                            <span className={
                                                "px-2 py-1 rounded text-white " + BUSQUEDA_ESTADO_CLASS_MAP[busqueda.estado]
                                            }>
                                                {BUSQUEDA_ESTADO_TEXT_MAP[busqueda.estado]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Subido por</label>
                                        <p className="mt-1">{busqueda.subidoPor.name}</p>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Fecha de desaparición</label>
                                        <p className="mt-1">{busqueda.fecha_desaparicion}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Contacto</label>
                                        <p className="mt-1">{busqueda.contacto}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Actualizado por</label>
                                        <p className="mt-1">{busqueda.actualizadoPor.name}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Descripción</label>
                                <p className="mt-1">{busqueda.descripcion}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TablaActualizaciones actualizaciones={actualizaciones} success={success} queryParams={queryParams} esconderNombreMascota={true}></TablaActualizaciones>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}