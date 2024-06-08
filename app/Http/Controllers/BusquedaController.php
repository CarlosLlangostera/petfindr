<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActualizacionResource;
use App\Http\Resources\BusquedaResource;
use App\Models\Busqueda;
use App\Http\Requests\StoreBusquedaRequest;
use App\Http\Requests\UpdateBusquedaRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BusquedaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Busqueda::query();

        $sortField = request("sort_field", 'fecha_desaparicion');
        $sortDirection = request("sort_direction", "desc");

        if (request('nombre')) {
            $query->where('nombre', 'LIKE', '%' . request('nombre') . '%');
        }

        if (request('estado')) {
            $query->where('estado', request('estado'));
        }

        $busquedas = $query->orderBy($sortField, $sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Busqueda/Index', [
            "busquedas" => BusquedaResource::collection($busquedas),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Busqueda/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBusquedaRequest $request)
    {
        $data = $request->validated();
        /** @var $imagen \Illuminate\Http\UploadedFile */
        $imagen = $data['imagen'] ?? null;
        $data['subido_por'] = Auth::id();
        $data['actualizado_por'] = Auth::id();
        if ($imagen) {
            $data['ruta_imagen'] = $imagen->store('busqueda/'.Str::random(), 'public');
        }
        Busqueda::create($data);

        return to_route('busqueda.index')->with('success', 'Se ha creado la búsqueda');
    }

    /**
     * Display the specified resource.
     */
    public function show(Busqueda $busqueda)
    {
        $query = $busqueda->actualizaciones();
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
        return inertia('Busqueda/Show', [
            'busqueda' => new BusquedaResource($busqueda),
            "actualizaciones" => ActualizacionResource::collection($actualizaciones),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Busqueda $busqueda)
    {
        return inertia('Busqueda/Edit', [
            'busqueda' => new BusquedaResource($busqueda),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusquedaRequest $request, Busqueda $busqueda)
    {
        $data = $request->validated();
        $imagen = $data['imagen'] ?? null;
        $data['actualizado_por'] = Auth::id();
        if ($imagen) {
            if ($busqueda->ruta_imagen){
                Storage::disk('public')->deleteDirectory(dirname
                ($busqueda->ruta_imagen));
            }
            $data['ruta_imagen'] = $imagen->store('busqueda/'.Str::random(), 'public');
        }
        $busqueda->update($data);

        return to_route('busqueda.index')->with('success', "La búsqueda de \"$busqueda->nombre\" ha sido actualizada correctamente");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Busqueda $busqueda)
    {
        $nombre = $busqueda->nombre;
        $busqueda->delete();
        if ($busqueda->ruta_imagen){
            Storage::disk('public')->deleteDirectory(dirname
            ($busqueda->ruta_imagen));
        }
        return to_route('busqueda.index')->with('success', "La búsqueda de \"$nombre\" ha sido borrada correctamente");
    }
}
