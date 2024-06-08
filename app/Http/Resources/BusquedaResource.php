<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BusquedaResource extends JsonResource
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
            'especie' => $this->especie,
            'estado' => $this->estado,
            'fecha_desaparicion' => (new Carbon($this->fecha_desaparicion))->format('d-m-Y'),
            'ruta_imagen' => $this->ruta_imagen ? Storage::url($this->ruta_imagen) : '',
            'contacto' => $this->contacto,
            'subidoPor' => new UserResource($this->subidoPor),
            'actualizadoPor' => new UserResource($this->actualizadoPor),
        ];
    }
}
