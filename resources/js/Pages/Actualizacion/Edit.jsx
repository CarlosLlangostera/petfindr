import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, actualizacion, busquedas, users }) {

    const { data, setData, post, errors, reset } = useForm({
        imagen: '',
        nombre: actualizacion.nombre || "",
        estado: actualizacion.estado || "",
        descripcion: actualizacion.descripcion || "",
        fecha_estimada: actualizacion.fecha_estimada || "",
        busqueda_id: actualizacion.busqueda_id || "",
        prioridad: actualizacion.prioridad || "",
        usuario_asignado_id: actualizacion.usuario_asignado_id || "",
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('actualizacion.update', actualizacion.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Editar actualización de "{actualizacion.nombre}"</h2>
                </div>
            }
        >

            <Head title="Actualizacions" />

            <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg space-y-6">

                            {actualizacion.ruta_imagen && (
                                <div className="mb-4">
                                    <img src={actualizacion.ruta_imagen} className="w-full rounded-lg" />
                                </div>
                            )}

                            <div>
                                <InputLabel htmlFor="actualizacion_busqueda_id" value="Búsqueda *" />
                                <SelectInput name="busqueda_id" id="actualizacion_busqueda_id" value={data.busqueda_id} className="mt-1 block w-full" onChange={(e) => setData("busqueda_id", e.target.value)}>
                                    <option value="">Seleccionar búsqueda</option>
                                    {busquedas.data.map(busqueda => (
                                        <option value={busqueda.id} key={busqueda.id}>{busqueda.nombre}</option>
                                    ))}
                                </SelectInput>
                                <InputError message={errors.busqueda_id} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_ruta_imagen" value="Imagen"></InputLabel>
                                <TextInput id="actualizacion_ruta_imagen" type="file" name="imagen" className="mt-1 block w-full" onChange={e => setData('imagen', e.target.files[0])}></TextInput>
                                <InputError message={errors.imagen} className="mt-2"></InputError>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_nombre" value="Nombre de la actualización *"></InputLabel>
                                <TextInput id="actualizacion_nombre" type="text" name="nombre" value={data.nombre} className="mt-1 block w-full" isFocused={true} onChange={(e) => setData("nombre", e.target.value)}></TextInput>
                                <InputError message={errors.nombre} className="mt-2"></InputError>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_descripcion" value="Descripción de la actualización"></InputLabel>
                                <TextAreaInput id="actualizacion_descripcion" name="descripcion" value={data.descripcion} className="mt-1 block w-full" onChange={(e) => setData("descripcion", e.target.value)}></TextAreaInput>
                                <InputError message={errors.descripcion} className="mt-2"></InputError>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_fecha_estimada" value="Fecha estimada"></InputLabel>
                                <TextInput id="actualizacion_fecha_estimada" type="date" name="fecha_estimada" value={data.fecha_estimada} className="mt-1 block w-full" onChange={(e) => setData("fecha_estimada", e.target.value)}></TextInput>
                                <InputError message={errors.fecha_estimada} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_estado" value="Estado de la actualización" />
                                <SelectInput name="estado" id="actualizacion_estado" value={data.estado} className="mt-1 block w-full" onChange={(e) => setData("estado", e.target.value)}>
                                    <option value="">Seleccionar estado</option>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="en_progreso">En progreso</option>
                                    <option value="completado">Completado</option>
                                </SelectInput>
                                <InputError message={errors.actualizacion_estado} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_prioridad" value="Prioridad de la actualización *" />
                                <SelectInput name="prioridad" id="actualizacion_prioridad" value={data.prioridad} className="mt-1 block w-full" onChange={(e) => setData("prioridad", e.target.value)}>
                                    <option value="">Seleccionar prioridad</option>
                                    <option value="baja">Baja</option>
                                    <option value="media">Media</option>
                                    <option value="alta">Alta</option>
                                </SelectInput>
                                <InputError message={errors.prioridad} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="actualizacion_usuario_asignado" value="Usuario asignado *" />
                                <SelectInput name="usuario_asignado_id" id="actualizacion_usuario_asignado" value={data.usuario_asignado_id} className="mt-1 block w-full" onChange={(e) => setData("usuario_asignado_id", e.target.value)}>
                                    <option value="">Seleccionar usuario</option>
                                    {users.data.map(user => (
                                        <option value={user.id} key={user.id}>{user.name}</option>
                                    ))}
                                </SelectInput>
                                <InputError message={errors.usuario_asignado_id} className="mt-2" />
                            </div>

                            <div className="mt-4 text-right">
                                <Link href={route('actualizacion.index')} className="bg-gray-100 py-2 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">Cancelar</Link>
                                <button className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600">Publicar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
