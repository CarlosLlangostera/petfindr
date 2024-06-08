<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Busqueda extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'ruta_imagen',
        'descripcion',
        'fecha_desaparicion',
        'estado',
        'especie',
        'contacto',
        'subido_por',
        'actualizado_por'
    ];

    public function actualizaciones()
    {
        return $this->hasMany(Actualizacion::class);
    }

    public function subidoPor()
    {
        return $this->belongsTo(User::class, 'subido_por');
    }

    public function actualizadoPor()
    {
        return $this->belongsTo(User::class, 'actualizado_por');
    }
}
