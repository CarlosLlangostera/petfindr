import Paginacion from "@/Components/Paginacion";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import EncabezadoTabla from "@/Components/EncabezadoTabla";

export default function Index({ auth, users, queryParams = null, success }) {
    queryParams = queryParams || {};
    
    const searchFieldChanged = (nombre, value) => {
        if (value) {
            queryParams[nombre] = value;
        } else {
            delete queryParams[nombre];
        }

        router.get(route('user.index'), queryParams);
    };

    const onKeyPress = (nombre, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(nombre, e.target.value);
    };

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
        router.get(route('user.index'), queryParams);
    };

    const borrarUser = (user) => {
        if (!window.confirm('¿Estás seguro de que deseas borrar el usuario?')) {
            return;
        }

        router.delete(route('user.destroy', user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuarios</h2>
                    <Link href={route("user.create")} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">Crear usuario</Link>
                </div>
            }
        >
            <Head title="Users" />
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
                                        <tr className="text-nowrap">
                                            <EncabezadoTabla nombre="id" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>ID</EncabezadoTabla>
                                            <EncabezadoTabla nombre="name" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Nombre</EncabezadoTabla>
                                            <EncabezadoTabla nombre="email" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Email</EncabezadoTabla>
                                            <EncabezadoTabla nombre="created_at" sort_field={queryParams.sort_field} sort_direction={queryParams.sort_direction} sortChanged={sortChanged}>Fecha de creación</EncabezadoTabla>
                                            <th className="px-3 py-3 text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput className="w-full" defaultValue={queryParams.name} placeholder="Nombre de usuario"
                                                    onBlur={e => searchFieldChanged('name', e.target.value)} onKeyPress={e => onKeyPress('name', e)}></TextInput>
                                            </th>
                                            <th className="px-3 py-3">
                                                <TextInput className="w-full" defaultValue={queryParams.email} placeholder="Email"
                                                    onBlur={e => searchFieldChanged('email', e.target.value)} onKeyPress={e => onKeyPress('email', e)}></TextInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map(user => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                                <td className="px-3 py-2">{user.id}</td>
                                                <th className="px-3 py-2 text-gray-100 text-nowrap">{user.name}</th>
                                                <td className="px-3 py-2">{user.email}</td>
                                                <td className="px-3 py-2 text-nowrap">{user.created_at}</td>
                                                <td className="px-3 py-2 text-nowrap flex space-x-2 justify-end">
                                                    <Link href={route('user.edit', user.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                                                    <button onClick={e => borrarUser(user)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Borrar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Paginacion links={users.meta.links}></Paginacion>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
