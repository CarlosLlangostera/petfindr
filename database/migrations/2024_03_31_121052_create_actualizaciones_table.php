<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('actualizacions', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->longText('descripcion')->nullable();
            $table->string('estado');
            $table->string('prioridad');
            $table->timestamp('fecha_estimada')->nullable();
            $table->string('ruta_imagen')->nullable();
            $table->foreignId('usuario_asignado_id')->constrained('users');
            $table->foreignId('subido_por')->constrained('users');
            $table->foreignId('actualizado_por')->constrained('users');
            $table->foreignId('busqueda_id')->constrained('busquedas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actualizacions');
    }
};
