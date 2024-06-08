<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActualizacionResource;
use App\Http\Resources\BusquedaResource;
use App\Http\Resources\UserResource;
use App\Models\Actualizacion;
use App\Http\Requests\StoreActualizacionRequest;
use App\Http\Requests\UpdateActualizacionRequest;
use App\Models\Busqueda;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ActualizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Actualizacion::query();

        $sortField = request("sort_field", 'fecha_estimada');
        $sortDirection = request("sort_direction", "desc");

        if (request('nombre')) {
            $query->where('nombre', 'LIKE', '%' . request('nombre') . '%');
        }

        if (request('estado')) {
            $query->where('estado', request('estado'));
        }

        if (request('prioridad')) {
            $query->where('prioridad', request('prioridad'));
        }

        $actualizaciones = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Actualizacion/Index', [
            "actualizaciones" => ActualizacionResource::collection($actualizaciones),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $busquedas = Busqueda::query()->orderBy('nombre', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();

        return inertia("Actualizacion/Create", ['busquedas' => BusquedaResource::collection($busquedas), 'users' => UserResource::collection($users)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActualizacionRequest $request)
    {
        $data = $request->validated();
        /** @var $imagen \Illuminate\Http\UploadedFile */
        $imagen = $data['imagen'] ?? null;
        $data['subido_por'] = Auth::id();
        $data['actualizado_por'] = Auth::id();
        if ($imagen) {
            $data['ruta_imagen'] = $imagen->store('actualizacion/'.Str::random(), 'public');
        }
        Actualizacion::create($data);

        return to_route('actualizacion.index')->with('success', 'Se ha creado la actualización');
    }

    /**
     * Display the specified resource.
     */
    public function show(Actualizacion $actualizacion)
    {
        return inertia('Actualizacion/Show', ['actualizacion' => new ActualizacionResource($actualizacion)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Actualizacion $actualizacion)
    {
        $busquedas = Busqueda::query()->orderBy('nombre', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();

        return inertia("Actualizacion/Edit", ['actualizacion' => new ActualizacionResource($actualizacion), 'busquedas' => BusquedaResource::collection($busquedas), 'users' => UserResource::collection($users)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateActualizacionRequest $request, Actualizacion $actualizacion)
    {
        $data = $request->validated();
        $imagen = $data['imagen'] ?? null;
        $data['actualizado_por'] = Auth::id();
        if ($imagen) {
            if ($actualizacion->ruta_imagen){
                Storage::disk('public')->deleteDirectory(dirname
                ($actualizacion->ruta_imagen));
            }
            $data['ruta_imagen'] = $imagen->store('actualizacion/'.Str::random(), 'public');
        }
        $actualizacion->update($data);

        return to_route('actualizacion.index')->with('success', "La actualización de \"$actualizacion->nombre\" ha sido actualizada correctamente");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Actualizacion $actualizacion)
    {
        $nombre = $actualizacion->nombre;
        $actualizacion->delete();
        if ($actualizacion->ruta_imagen){
            Storage::disk('public')->deleteDirectory(dirname
            ($actualizacion->ruta_imagen));
        }
        return to_route('actualizacion.index')->with('success', "La actualización de \"$nombre\" ha sido borrada correctamente");
    }

    public function misActualizaciones(){
        $user = auth()->user();
        $query = Actualizacion::query()->where('usuario_asignado_id', $user->id);

        $sortField = request("sort_field", 'fecha_estimada');
        $sortDirection = request("sort_direction", "desc");

        if (request('nombre')) {
            $query->where('nombre', 'LIKE', '%' . request('nombre') . '%');
        }

        if (request('estado')) {
            $query->where('estado', request('estado'));
        }

        if (request('prioridad')) {
            $query->where('prioridad', request('prioridad'));
        }

        $actualizaciones = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Actualizacion/Index', [
            "actualizaciones" => ActualizacionResource::collection($actualizaciones),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }
}
