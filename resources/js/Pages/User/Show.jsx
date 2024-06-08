/*import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { USER_ESTADO_CLASS_MAP, USER_ESTADO_TEXT_MAP } from "@/constantes";
import TablaActualizaciones from "../Actualizacion/TablaActualizaciones";

export default function Show({ auth, user, actualizaciones, queryParams }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`User de ${user.nombre}`}
            </h2>}>

            <Head title={`User de ${user.nombre}`}></Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <div>
                            <img src={user.ruta_imagen} alt="" className="w-full h-auto max-h-96 object-cover mx-auto"></img>
                        </div>

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">

                                <div>

                                    <div>
                                        <label className="font-bold text-lg">ID de la user</label>
                                        <p className="mt-1">{user.id}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Mascota</label>
                                        <p className="mt-1">{user.nombre}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Estado</label>
                                        <p className="mt-1">
                                            <span className={
                                                "px-2 py-1 rounded text-white " + USER_ESTADO_CLASS_MAP[user.estado]
                                            }>
                                                {USER_ESTADO_TEXT_MAP[user.estado]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Subido por</label>
                                        <p className="mt-1">{user.subidoPor.name}</p>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Fecha de desaparición</label>
                                        <p className="mt-1">{user.fecha_desaparicion}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Contacto</label>
                                        <p className="mt-1">{user.contacto}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Actualizado por</label>
                                        <p className="mt-1">{user.actualizadoPor.name}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Descripción</label>
                                <p className="mt-1">{user.descripcion}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TablaActualizaciones actualizaciones={actualizaciones} queryParams={queryParams} esconderNombreMascota={true}></TablaActualizaciones>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}*/