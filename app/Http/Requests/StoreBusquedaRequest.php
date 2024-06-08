<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBusquedaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "nombre" => ['required', 'max:255'],
            "imagen" => ['nullable', 'image'],
            "descripcion" => ['nullable', 'string'],
            "fecha_desaparicion" => ['nullable', 'date'],
            "estado" => ['required', Rule::in(['perdido', 'visto', 'recuperado'])],
            "contacto" => ['required', 'max:255'],
        ];
    }
}
