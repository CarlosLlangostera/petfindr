<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ActualizacionResource extends JsonResource
{

    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'estado' => $this->estado,
            'prioridad' => $this->prioridad,
            'fecha_estimada' => (new Carbon($this->fecha_estimada))->format('d-m-Y'),
            'ruta_imagen' => $this->ruta_imagen ? Storage::url($this->ruta_imagen) : '',
            'busqueda_id' => $this->busqueda_id,
            'busqueda' => new BusquedaResource($this->busqueda),
            'usuario_asignado_id' => $this->usuario_asignado_id,
            'usuarioAsignado' => $this->usuarioAsignado ? new UserResource($this->usuarioAsignado) : null,
            'subidoPor' => new UserResource($this->subidoPor),
            'actualizadoPor' => new UserResource($this->actualizadoPor),
        ];
    }
}
