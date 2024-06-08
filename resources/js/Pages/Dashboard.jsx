import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { ACTUALIZACION_ESTADO_CLASS_MAP, ACTUALIZACION_ESTADO_TEXT_MAP } from '@/constantes';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, actualizacionesPendientesPersonales, actualizacionesPendientesTotales, actualizacionesProgresoTotales, actualizacionesProgresoPersonales, actualizacionesCompletadasTotales, actualizacionesCompletadasPersonales, actualizacionesActivas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Panel de control de PetFindr</h2>
                    <Link href={route("busqueda.create")} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">Crear búsqueda</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    {/* Tarjeta de Actualizaciones Pendientes */}
                    <div className="bg-yellow-100 p-8 rounded-lg shadow-lg mb-3">
                        <h3 className='text-yellow-800 text-2xl font-semibold'>¡No pierdas la esperanza!</h3>
                        <p className='text-lg mt-4'>Tienes <span className='text-yellow-800 font-semibold'>{actualizacionesPendientesPersonales}</span> actualizaciones pendientes de un total de <span className='text-yellow-800 font-semibold'>{actualizacionesPendientesTotales}</span>.</p>
                        <p className="text-sm text-gray-700 mt-4">Cada actualización nos acerca más a la posibilidad de encontrar a un ser querido.</p>
                    </div>
                    {/* Tarjeta de Actualizaciones en Progreso */}
                    <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-3">
                        <h3 className='text-blue-800 text-2xl font-semibold'>Juntos, más cerca del objetivo</h3>
                        <p className='text-lg mt-4'>Tienes <span className='text-blue-800 font-semibold'>{actualizacionesProgresoPersonales}</span> actualizaciones en progreso de un total de <span className='text-blue-800 font-semibold'>{actualizacionesProgresoTotales}</span>.</p>
                        <p className="text-sm text-gray-700 mt-4">Cada pequeño avance nos acerca más al reencuentro contigo y tu mascota.</p>
                    </div>
                    {/* Tarjeta de Actualizaciones Completadas */}
                    <div className="bg-green-100 p-8 rounded-lg shadow-lg mb-3">
                        <h3 className='text-green-800 text-2xl font-semibold'>¡Celebramos cada pequeño logro!</h3>
                        <p className='text-lg mt-4'>Has completado <span className='text-green-800 font-semibold'>{actualizacionesCompletadasPersonales}</span> actualizaciones de un total de <span className='text-green-800 font-semibold'>{actualizacionesCompletadasTotales}</span>.</p>
                        <p className="text-sm text-gray-700 mt-4">Cada actualización completada es un paso más cerca del objetivo.</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className='text-gray-200 text-xl font-semibold'>Mis actualizaciones activas</h3>
                            <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-3">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr>
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Mascota</th>
                                        <th className="px-3 py-3">Nombre</th>
                                        <th className="px-3 py-3">Estado</th>
                                        <th className="px-3 py-3">Fecha estimada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {actualizacionesActivas.data.map(actualizacion => (
                                        <tr key={actualizacion.id}>
                                            <td className="px-3 py-2">{actualizacion.id}</td>
                                            <td className="px-3 py-2 text-white hover:underline">
                                                <Link href={route('busqueda.show', actualizacion.busqueda.id)}>{actualizacion.busqueda.nombre}</Link>
                                            </td>
                                            <td className="px-3 py-2 text-white hover:underline">
                                                <Link href={route('actualizacion.show', actualizacion.id)}>{actualizacion.nombre}</Link>
                                            </td>
                                            <td className="px-3 py-2">
                                                <span className={
                                                    "px-2 py-1 rounded text-nowrap text-white " + ACTUALIZACION_ESTADO_CLASS_MAP[actualizacion.estado]
                                                }>
                                                    {ACTUALIZACION_ESTADO_TEXT_MAP[actualizacion.estado]}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2">{actualizacion.fecha_estimada}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
