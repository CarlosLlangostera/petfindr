import Paginacion from "@/Components/Paginacion";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import EncabezadoTabla from "@/Components/EncabezadoTabla";
import { ACTUALIZACION_ESTADO_CLASS_MAP, ACTUALIZACION_ESTADO_TEXT_MAP, ACTUALIZACION_PRIORIDAD_CLASS_MAP, ACTUALIZACION_PRIORIDAD_TEXT_MAP } from "@/constantes";
import { Link, router } from "@inertiajs/react";

export default function TablaActualizaciones({ actualizaciones, success, queryParams = null, esconderNombreMascota = false }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (nombre, value) => {
        if (value) {
            queryParams[nombre] = value;
        } else {
            delete queryParams[nombre];
        }

        router.get(route('actualizacion.index'), queryParams);
    };

    const onKeyPress = (nombre, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(nombre, e.target.value);
    };

    const sortChanged = (nombre) => {
        if (nombre === queryParams.sort_field) {
            queryParams.sort_direction = queryParams.sort_direction === 'asc' ? 'desc' : 'asc';
        } else {
            queryParams.sort_field = nombre;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('actualizacion.index'), queryParams);
    };

    const borrarActualizacion = (actualizacion) => {
        if (!window.confirm('¿Estás seguro de que deseas borrar la actualización?')) {
            return;
        }

        router.delete(route('actualizacion.destroy', actualizacion.id));
    };

    return (
        <div className="py-4">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {success && (
                    <div className="bg-emerald-500 py-2 px-4 text-white rounded-full mb-4 shadow-lg">
                        {success}
                    </div>
                )}
                        <div className="overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <EncabezadoTabla nombre="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>ID</EncabezadoTabla>
                                        <th className="px-3 py-3">Imagen</th>
                                        {!esconderNombreMascota && <th className="px-3 py-3">Mascota</th>}
                                        <EncabezadoTabla nombre="nombre" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Nombre</EncabezadoTabla>
                                        <EncabezadoTabla nombre="estado" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Estado</EncabezadoTabla>
                                        <EncabezadoTabla nombre="fecha_estimada" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Fecha estimada</EncabezadoTabla>
                                        <EncabezadoTabla nombre="prioridad" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Prioridad</EncabezadoTabla>
                                        <th className="px-3 py-3">Subido por</th>
                                        <th className="px-3 py-3 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        {!esconderNombreMascota && <th className="px-3 py-3"></th>}
                                        <th className="px-3 py-3">
                                            <TextInput className="w-full" defaultValue={queryParams.nombre} placeholder="Nombre de la actualización"
                                                onBlur={e => searchFieldChanged('nombre', e.target.value)} onKeyPress={e => onKeyPress('nombre', e)} />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput className="w-full" defaultValue={queryParams.estado} onChange={e => searchFieldChanged('estado', e.target.value)}>
                                                <option value="">Seleccionar estado</option>
                                                <option value="pendiente">Pendiente</option>
                                                <option value="en_progreso">En progreso</option>
                                                <option value="completado">Completado</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <SelectInput className="w-full" defaultValue={queryParams.prioridad} onChange={e => searchFieldChanged('prioridad', e.target.value)}>
                                                <option value="">Seleccionar prioridad</option>
                                                <option value="baja">Baja</option>
                                                <option value="media">Media</option>
                                                <option value="alta">Alta</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {actualizaciones.data.map(actualizacion => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={actualizacion.id}>
                                            <td className="px-3 py-2">{actualizacion.id}</td>
                                            <td className="px-3 py-2"><img src={actualizacion.ruta_imagen} className="rounded-full w-16 h-16 object-cover" alt={`Imagen de ${actualizacion.nombre}`} /></td>
                                            {!esconderNombreMascota && <td className="px-3 py-2">{actualizacion.busqueda.nombre}</td>}
                                            <th className="px-3 py-2 text-gray-100 hover:underline">
                                                <Link href={route('actualizacion.show', actualizacion.id)}>{actualizacion.nombre}</Link>
                                            </th>
                                            <td className="px-3 py-2">
                                                <span className={"px-2 py-1 rounded-full text-white " + ACTUALIZACION_ESTADO_CLASS_MAP[actualizacion.estado]}>
                                                    {ACTUALIZACION_ESTADO_TEXT_MAP[actualizacion.estado]}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2 text-nowrap">{actualizacion.fecha_estimada}</td>
                                            <td className="px-3 py-2">
                                                <span className={"px-2 py-1 rounded-full text-white " + ACTUALIZACION_PRIORIDAD_CLASS_MAP[actualizacion.prioridad]}>
                                                    {ACTUALIZACION_PRIORIDAD_TEXT_MAP[actualizacion.prioridad]}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2">{actualizacion.subidoPor.name}</td>
                                            <td className="px-3 py-2 text-right flex space-x-2 justify-end">
                                                <Link href={route('actualizacion.edit', actualizacion.id)} className="text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                                                <button onClick={e => borrarActualizacion(actualizacion)} className="text-red-600 dark:text-red-500 hover:underline">Borrar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Paginacion links={actualizaciones.meta.links} />
                    </div>
                </div>
    );
}
