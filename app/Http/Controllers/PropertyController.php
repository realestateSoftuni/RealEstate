<?php

namespace App\Http\Controllers;

use App\Models\AddPropertyData;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index()
    {
        // Retrieve all property data
        $properties = AddPropertyData::all();

        return response()->json(['properties' => $properties]);
    }

    public function show($id)
    {
        // Retrieve a specific property by ID
        $property = AddPropertyData::findOrFail($id);

        return response()->json(['property' => $property]);
    }

    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            // Add validation rules based on your requirements
        ]);

        // Create a new property
        $property = AddPropertyData::create($request->all());

        return response()->json(['property' => $property], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate incoming request
        $request->validate([
            // Add validation rules based on your requirements
        ]);

        // Find the property by ID and update it
        $property = AddPropertyData::findOrFail($id);
        $property->update($request->all());

        return response()->json(['property' => $property]);
    }

    public function destroy($id)
    {
        // Find the property by ID and delete it
        $property = AddPropertyData::findOrFail($id);
        $property->delete();

        return response()->json(null, 204);
    }
}
