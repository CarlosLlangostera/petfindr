import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TablaActualizaciones from "./TablaActualizaciones";


export default function Index({ auth, success, actualizaciones, queryParams = null }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Actualizaciones</h2>
                    <Link href={route("actualizacion.create")} className="bg-emerald-500 py-2 px-4 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200">Crear actualización</Link>
                </div>
            }
        >

            <Head title="Actualizaciones" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TablaActualizaciones actualizaciones={actualizaciones} queryParams={queryParams} success={success}></TablaActualizaciones>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}