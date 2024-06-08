import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        imagen: '',
        nombre: '',
        estado: '',
        descripcion: '',
        fecha_desaparicion: '',
        contacto: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('busqueda.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Crear nueva búsqueda</h2>
                </div>
            }
        >
            <Head title="Busquedas" />
            <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">¡Ayúdanos a encontrar a una mascota perdida!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Por favor, proporciona la información de la mascota para que podamos ayudarte a encontrarla.</p>
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_ruta_imagen" value="Imagen" />
                                <TextInput id="busqueda_ruta_imagen" type="file" name="imagen" className="mt-1 block w-full" onChange={e => setData('imagen', e.target.files[0])} />
                                <InputError message={errors.imagen} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_nombre" value="Nombre de la mascota *" />
                                <TextInput id="busqueda_nombre" type="text" name="nombre" value={data.nombre} className="mt-1 block w-full" isFocused={true} onChange={(e) => setData("nombre", e.target.value)} />
                                <InputError message={errors.nombre} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_descripcion" value="Descripción" />
                                <TextAreaInput id="busqueda_descripcion" name="descripcion" value={data.descripcion} className="mt-1 block w-full" onChange={(e) => setData("descripcion", e.target.value)} />
                                <InputError message={errors.descripcion} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_fecha_desaparicion" value="Fecha de desaparición" />
                                <TextInput id="busqueda_fecha_desaparicion" type="date" name="fecha_desaparicion" value={data.fecha_desaparicion} className="mt-1 block w-full" onChange={(e) => setData("fecha_desaparicion", e.target.value)} />
                                <InputError message={errors.fecha_desaparicion} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_estado" value="Estado de la mascota" />
                                <SelectInput name="estado" id="busqueda_estado" className="mt-1 block w-full" onChange={(e) => setData("estado", e.target.value)}>
                                    <option value="">Seleccionar estado</option>
                                    <option value="perdido">Perdido</option>
                                    <option value="visto">Visto</option>
                                    <option value="recuperado">Recuperado</option>
                                </SelectInput>
                                <InputError message={errors.busqueda_estado} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="busqueda_contacto" value="Información de contacto *" />
                                <TextInput id="busqueda_contacto" type="text" name="contacto" value={data.contacto} className="mt-1 block w-full" onChange={(e) => setData("contacto", e.target.value)} />
                                <InputError message={errors.contacto} className="mt-2" />
                            </div>

                            <div className="mt-4 text-right">
                                <Link href={route('busqueda.index')} className="bg-gray-100 py-2 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">Cancelar</Link>
                                <button className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600">Publicar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
