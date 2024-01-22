<?php
// app/Http/Controllers/SearchController.php

namespace App\Http\Controllers;

use App\Models\SearchFormData;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        // Validate the incoming request data if needed

        // Create a new instance of the SearchFormData model
        $searchFormData = new SearchFormData($request->all());

        // Save the form data to the database
        $searchFormData->save();

        // You can return a response if needed
        return response()->json(['message' => 'Form data saved successfully'], 200);
    }
}
