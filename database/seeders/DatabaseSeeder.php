<?php

namespace Database\Seeders;

use App\Models\Busqueda;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Carlos',
            'email' => '1754630@alu.murciaeduca.es',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time()
        ]);

        Busqueda::factory()
            ->count(30)
            ->hasActualizaciones(5)
            ->create();
    }
}
