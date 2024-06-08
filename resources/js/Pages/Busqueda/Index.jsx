import Paginacion from "@/Components/Paginacion";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BUSQUEDA_ESTADO_CLASS_MAP, BUSQUEDA_ESTADO_TEXT_MAP } from "@/constantes";
import { Head, Link, router } from "@inertiajs/react";
import EncabezadoTabla from "@/Components/EncabezadoTabla";

export default function Index({ auth, busquedas, queryParams = null, success }) {
    queryParams = queryParams || {};
    
    const searchFieldChanged = (nombre, value) => {
        if (value) {
            queryParams[nombre] = value;
        } else {
            delete queryParams[nombre];
        }

        router.get(route('busqueda.index'), queryParams)
    }

    const onKeyPress = (nombre, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(nombre, e.target.value);
    }

    const sortChanged = (nombre) => {
        if (nombre === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = nombre;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('busqueda.index'), queryParams)
    }

    const borrarBusqueda = (busqueda) => {
        if (!window.confirm('¿Estás seguro de que deseas borrar la búsqueda?')) {
            return;
        }

        router.delete(route('busqueda.destroy', busqueda.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Búsquedas</h2>
                    <Link href={route("busqueda.create")} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">Crear búsqueda</Link>
                </div>
            }
        >
            <Head title="Busquedas" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded-full mb-4 shadow-lg">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr>
                                            <EncabezadoTabla nombre="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>ID</EncabezadoTabla>
                                            <th className="px-3 py-3">Imagen</th>
                                            <EncabezadoTabla nombre="nombre" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Nombre</EncabezadoTabla>
                                            <EncabezadoTabla nombre="estado" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Estado</EncabezadoTabla>
                                            <EncabezadoTabla nombre="fecha_desaparicion" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Fecha de desaparición</EncabezadoTabla>
                                            <th className="px-3 py-3">Contacto</th>
                                            <th className="px-3 py-3">Subido por</th>
                                            <th className="px-3 py-3 text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput 
                                                    className="w-full" 
                                                    defaultValue={queryParams.nombre} 
                                                    placeholder="Nombre de la mascota"
                                                    onBlur={e => searchFieldChanged('nombre', e.target.value)} 
                                                    onKeyPress={e => onKeyPress('nombre', e)}
                                                />
                                            </th>
                                            <th className="px-3 py-3">
                                                <SelectInput 
                                                    className="w-full" 
                                                    defaultValue={queryParams.estado} 
                                                    onChange={e => searchFieldChanged('estado', e.target.value)}
                                                >
                                                    <option value="">Seleccionar estado</option>
                                                    <option value="perdido">Perdido</option>
                                                    <option value="visto">Visto</option>
                                                    <option value="recuperado">Recuperado</option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {busquedas.data.map(busqueda => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={busqueda.id}>
                                                <td className="px-3 py-2">{busqueda.id}</td>
                                                <td className="px-3 py-2">
                                                    <img src={busqueda.ruta_imagen} className="rounded-full w-16 h-16 object-cover" alt={`Imagen de ${busqueda.nombre}`} />
                                                </td>
                                                <th className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
                                                    <Link href={route('busqueda.show', busqueda.id)}>{busqueda.nombre}</Link>
                                                </th>
                                                <td className="px-3 py-2">
                                                    <span className={
                                                        "px-2 py-1 rounded-full text-white " + BUSQUEDA_ESTADO_CLASS_MAP[busqueda.estado]
                                                    }>
                                                        {BUSQUEDA_ESTADO_TEXT_MAP[busqueda.estado]}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">{busqueda.fecha_desaparicion}</td>
                                                <td className="px-3 py-2">{busqueda.contacto}</td>
                                                <td className="px-3 py-2">{busqueda.subidoPor.name}</td>
                                                <td className="px-3 py-2 text-right flex space-x-2 justify-end">
                                                    <Link href={route('busqueda.edit', busqueda.id)} className="text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                                                    <button onClick={e => borrarBusqueda(busqueda)} className="text-red-600 dark:text-red-500 hover:underline">Borrar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Paginacion links={busquedas.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
