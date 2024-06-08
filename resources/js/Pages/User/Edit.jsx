import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, user }) {

    const { data, setData, post, errors, reset } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('user.update', user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Editar usuario "{user.name}"</h2>
                </div>
            }
        >

            <Head title="Users" />

            <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 w-full">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg space-y-6">

                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Editar información del usuario</h3>
                                <p className="text-gray-600 dark:text-gray-400">Por favor, introduzca la información actualizada del usuario.</p>
                            </div>

                            <div>
                                <InputLabel htmlFor="user_name" value="Nombre de usuario *" />
                                <TextInput id="user_name" type="text" name="name" value={data.name} className="mt-1 block w-full" isFocused={true} onChange={(e) => setData("name", e.target.value)} />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="user_email" value="Email *" />
                                <TextInput id="user_email" type="text" name="email" value={data.email} className="mt-1 block w-full" onChange={(e) => setData("email", e.target.value)} />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="user_password" value="Contraseña *" />
                                <TextInput id="user_password" type="password" name="password" value={data.password} className="mt-1 block w-full" onChange={(e) => setData("password", e.target.value)} />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="user_password_confirmation" value="Confirmar contraseña *" />
                                <TextInput id="user_password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} className="mt-1 block w-full" onChange={(e) => setData("password_confirmation", e.target.value)} />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="mt-4 text-right">
                                <Link href={route('user.index')} className="bg-gray-100 py-2 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">Cancelar</Link>
                                <button className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
