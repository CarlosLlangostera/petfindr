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
        Schema::create('busquedas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->longText('descripcion')->nullable();
            $table->string('especie')->nullable();
            $table->string('estado');
            $table->timestamp('fecha_desaparicion')->nullable();
            $table->string('ruta_imagen')->nullable();
            $table->string('contacto');
            $table->foreignId('subido_por')->constrained('users');
            $table->foreignId('actualizado_por')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('busquedas');
    }
};
