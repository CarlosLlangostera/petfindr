<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actualizacion extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'estado',
        'prioridad',
        'fecha_estimada',
        'ruta_imagen',
        'usuario_asignado_id',
        'subido_por',
        'actualizado_por',
        'busqueda_id',
    ];

    public function busqueda () {
        return $this->belongsTo(Busqueda::class);
    }

    public function usuarioAsignado () {
        return $this->belongsTo(User::class, 'usuario_asignado_id');
    }

    public function subidoPor () {
        return $this->belongsTo(User::class, 'subido_por');
    }

    public function actualizadoPor () {
        return $this->belongsTo(User::class, 'actualizado_por');
    }
}
