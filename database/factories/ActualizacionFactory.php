<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Actualizacion>
 */
class ActualizacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => fake()->sentence(),
            'descripcion' => fake()->realText(),
            'estado' => fake()->randomElement(['pendiente', 'en_progreso', 'completado']),
            'prioridad' => fake()->randomElement(['baja', 'media', 'alta']),
            'fecha_estimada' => fake()->dateTimeBetween('-1 year', '+1 year'),
            'ruta_imagen' => fake()->imageUrl(),
            'usuario_asignado_id' => 1,
            'subido_por' => 1,
            'actualizado_por' => 1,
        ];
    }
}
