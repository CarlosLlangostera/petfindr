import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Recomendaciones({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Recomendaciones" />
            <div className="py-12 bg-gradient-to-b from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-12">
                    <div className="bg-white dark:bg-gray-800 shadow-lg sm:rounded-lg overflow-hidden">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h1 className="text-5xl font-extrabold text-purple-900 dark:text-purple-300">Recomendaciones y consejos</h1>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                La pérdida de una mascota es una experiencia dolorosa y estresante. Queremos brindarte algunas recomendaciones y consejos que te ayudarán en este difícil momento. **No estás solo**, y hay muchas formas en las que puedes obtener ayuda y apoyo.
                            </p>
                            <img src="/storage/recomendaciones/lennox-y-bogart.jpg" alt="Mascota perdida" className="rounded-lg shadow-lg mt-6 mx-auto" />
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-4xl font-semibold text-blue-800 dark:text-blue-200">Consejos generales</h2>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Mantén la calma</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Organiza una búsqueda sistemática y pide ayuda a tus amigos y familiares.</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Informa a tus vecinos</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Pide su ayuda para revisar sus patios y jardines.</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Publica avisos</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Utiliza redes sociales y grupos locales para difundir la búsqueda.</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Coloca carteles</h3>
                                    <p className="text-gray-700 dark:text-gray-300">Pon carteles en lugares estratégicos y de alta visibilidad.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-4xl font-semibold text-purple-800 dark:text-purple-200">Consejos específicos por tipo de mascota</h2>
                            <div className="mt-4">
                                <h3 className="mt-6 text-3xl font-semibold text-purple-800 dark:text-purple-200">Perros</h3>
                                <ul className="mt-4 list-disc list-inside text-gray-800 dark:text-gray-300">
                                    <li>Revisa los lugares donde solían jugar o pasear.</li>
                                    <li>Usa juguetes o ropa con su olor para atraerlos.</li>
                                    <li>Si tienes otro perro, llévalo contigo durante la búsqueda.</li>
                                </ul>
                                <img src="/storage/recomendaciones/dog-girl-440625.jpg" alt="Perro" className="rounded-lg shadow-lg mt-6 mx-auto" style={{ width: '60%' }} />

                                <h3 className="mt-6 text-3xl font-semibold text-purple-800 dark:text-purple-200">Gatos</h3>
                                <ul className="mt-4 list-disc list-inside text-gray-800 dark:text-gray-300">
                                    <li>Busca en espacios pequeños y escondidos, como debajo de muebles o en garajes.</li>
                                    <li>Usa su comida favorita o caja de arena para atraerlos.</li>
                                    <li>Revisa durante la noche, ya que los gatos tienden a estar más activos.</li>
                                </ul>
                                <img src="/storage/recomendaciones/covid-19-katze-adoptieren-1.jpeg" alt="Gato" className="rounded-lg shadow-lg mt-6 mx-auto" style={{ width: '60%' }} />

                                <h3 className="mt-6 text-3xl font-semibold text-purple-800 dark:text-purple-200">Otras mascotas</h3>
                                <ul className="mt-4 list-disc list-inside text-gray-800 dark:text-gray-300">
                                    <li>Para aves, revisa los árboles y áreas altas cercanas.</li>
                                    <li>Para animales pequeños, busca en espacios reducidos y oscuros.</li>
                                </ul>
                                <img src="/storage/recomendaciones/Hastings-Veterinary-Hospital-How-to-Make-Your-Rabbits-Life-Less-Stressful.jpg" alt="Conejo" className="rounded-lg shadow-lg mt-6 mx-auto" style={{ width: '60%' }} />
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-4xl font-semibold text-green-800 dark:text-green-200">Recursos y apoyo</h2>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-green-50 dark:bg-green-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Organizaciones de rescate</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Contacta con organizaciones de rescate locales. Infórmate en <a href="https://faada.org/entidades-asociaciones-protectoras" className="text-blue-500 hover:underline" target="_blank">Fundación FAADA</a>.
                                    </p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Servicios veterinarios</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Consulta a veterinarios locales. Encuentra veterinarios cercanos en <a href="https://infovet.vet/es-es/" className="text-blue-500 hover:underline" target="_blank">InfoVet</a>.
                                    </p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Refugios</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Comunícate con refugios de animales en tu área, como <a href="https://elrefugio.org/" className="text-blue-500 hover:underline" target="_blank">El Refugio</a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-4xl font-semibold text-yellow-800 dark:text-yellow-200">Apoyo emocional</h2>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-yellow-50 dark:bg-yellow-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Grupos de apoyo</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Únete a grupos de apoyo para dueños de mascotas, como <a href="https://potterleague.org/es/programs/pet-loss-support/" className="text-blue-500 hover:underline" target="_blank">Potter League</a>.
                                    </p>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-700 p-4 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Consejería profesional</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Considera buscar ayuda de un consejero o terapeuta especializado en pérdida de mascotas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-4xl font-semibold text-indigo-800 dark:text-indigo-200">¡No te rindas!</h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                Recuerda, la esperanza es una poderosa aliada. Mantén la fe y sigue buscando. Con el apoyo adecuado y la determinación, es posible reunirte con tu mascota perdida.
                            </p>
                            <img src="/storage/recomendaciones/final.jpg" alt="Esperanza" className="rounded-lg shadow-lg mt-6 mx-auto" style={{ width: '60%' }} />
                        </div>

                        <div className="p-6 flex justify-center">
                            <Link href="/" className="bg-indigo-500 py-2 px-6 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-200">
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
