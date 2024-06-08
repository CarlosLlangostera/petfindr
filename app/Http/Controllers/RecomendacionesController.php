<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class RecomendacionesController extends Controller
{
    public function index()
    {
        return Inertia::render('Recomendaciones');
    }
}
