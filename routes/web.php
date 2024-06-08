<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BusquedaController;
use App\Http\Controllers\ActualizacionController;
use App\Http\Controllers\RecomendacionesController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

        Route::resource('busqueda', BusquedaController::class);
        Route::get('actualizacion/mis-actualizaciones', [ActualizacionController::class, 'misActualizaciones'])
            ->name('actualizacion.misActualizaciones');
        Route::resource('actualizacion', ActualizacionController::class);
        Route::resource('user', UserController::class);
        Route::get('/recomendaciones', [RecomendacionesController::class, 'index'])->name('recomendaciones.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';