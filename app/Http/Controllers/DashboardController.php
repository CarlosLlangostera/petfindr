<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActualizacionResource;
use App\Models\Actualizacion;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $actualizacionesPendientesTotales = Actualizacion::query()->where('estado', 'pendiente')->count();
        $actualizacionesPendientesPersonales = Actualizacion::query()->where('estado', 'pendiente')->where('usuario_asignado_id', $user->id)->count();

        $actualizacionesProgresoTotales = Actualizacion::query()->where('estado', 'en_progreso')->count();
        $actualizacionesProgresoPersonales = Actualizacion::query()->where('estado', 'en_progreso')->where('usuario_asignado_id', $user->id)->count();

        $actualizacionesCompletadasTotales = Actualizacion::query()->where('estado', 'completado')->count();
        $actualizacionesCompletadasPersonales = Actualizacion::query()->where('estado', 'completado')->where('usuario_asignado_id', $user->id)->count();

        $actualizacionesActivas = Actualizacion::query()->whereIn('estado', ['pendiente', 'en_progreso'])->where('usuario_asignado_id', $user->id)->limit(10)->get();
        $actualizacionesActivas = ActualizacionResource::collection($actualizacionesActivas);

        return inertia('Dashboard', compact('actualizacionesPendientesTotales', 'actualizacionesPendientesPersonales', 'actualizacionesProgresoTotales', 'actualizacionesProgresoPersonales', 'actualizacionesCompletadasTotales', 'actualizacionesCompletadasPersonales', 'actualizacionesActivas'));
    }
}
