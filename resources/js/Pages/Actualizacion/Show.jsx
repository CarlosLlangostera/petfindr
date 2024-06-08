import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { ACTUALIZACION_ESTADO_CLASS_MAP, ACTUALIZACION_ESTADO_TEXT_MAP, ACTUALIZACION_PRIORIDAD_CLASS_MAP, ACTUALIZACION_PRIORIDAD_TEXT_MAP } from "@/constantes";

export default function Show({ auth, actualizacion }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {`Actualización de ${actualizacion.nombre}`}
                    </h2>
                    <Link href={route("actualizacion.edit", actualizacion.id)} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">
                        Editar
                    </Link>
                </div>
            }>

            <Head title={`Actualización de ${actualizacion.nombre}`}></Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <div>
                            <img src={actualizacion.ruta_imagen} alt="" className="w-full h-auto max-h-96 object-cover mx-auto"></img>
                        </div>

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">

                                <div>

                                    <div>
                                        <label className="font-bold text-lg">ID de la actualización</label>
                                        <p className="mt-1">{actualizacion.id}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Nombre de la actualización</label>
                                        <p className="mt-1">{actualizacion.nombre}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Estado de la actualización</label>
                                        <p className="mt-1">
                                            <span className={
                                                "px-2 py-1 rounded text-white " + ACTUALIZACION_ESTADO_CLASS_MAP[actualizacion.estado]
                                            }>
                                                {ACTUALIZACION_ESTADO_TEXT_MAP[actualizacion.estado]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Prioridad de la actualización</label>
                                        <p className="mt-1">
                                            <span className={
                                                "px-2 py-1 rounded text-white " + ACTUALIZACION_PRIORIDAD_CLASS_MAP[actualizacion.prioridad]
                                            }>
                                                {ACTUALIZACION_PRIORIDAD_TEXT_MAP[actualizacion.prioridad]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Subido por</label>
                                        <p className="mt-1">{actualizacion.subidoPor.name}</p>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Fecha estimada</label>
                                        <p className="mt-1">{actualizacion.fecha_estimada}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Actualizado por</label>
                                        <p className="mt-1">{actualizacion.actualizadoPor.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Búsqueda</label>
                                        <p className="mt-1">
                                            <Link href={route('busqueda.show', actualizacion.busqueda.id)} className="hover:underline">
                                                {actualizacion.busqueda.nombre}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Usuario asignado</label>
                                        <p className="mt-1">{actualizacion.usuarioAsignado.name}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Descripción</label>
                                <p className="mt-1">{actualizacion.descripcion}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}