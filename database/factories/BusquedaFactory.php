<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Busqueda>
 */
class BusquedaFactory extends Factory
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
            'especie' => fake()->randomElement(['perro', 'gato', 'conejo', 'roedor', 'pajaro', 'reptil', 'otro']),
            'estado' => fake()->randomElement(['perdido', 'visto', 'recuperado']),
            'fecha_desaparicion' => fake()->dateTimeBetween('-1 year', '+1 year'),
            'ruta_imagen' => fake()->imageUrl(),
            'contacto' => fake()->phoneNumber(),
            'subido_por' => 1,
            'actualizado_por' => 1,
        ];
    }
}
