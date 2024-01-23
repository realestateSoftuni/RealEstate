<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;

class Properties extends Controller
{
    public function add_property(Request $request)
    {
        request()->validate([
            'username'=>'required|unique:users|max:20|min:4',
            'price'=>'required|min:0',
            'square_feet'=>'required|min:0',
            'city'=>'required',
            'country'=>'required',
            'email'=>'required|email',
            'title'=>'required|max:100|min:4',
            'description'=>'max:900',
            'property_type'=>'required',
            'name'=>'required|max:20|min:2',
            'phone'=>'required|max:255',
            'rooms'=>'required',
            'status'=>'required',
        ]);

        $save = new Property;
        $save->title = trim($request->title);
        $save->description = $request->description;
        $save->price = trim($request->price);
        $save->square_feet = trim($request->square_feet);
        $save->build = trim($request->build);
        $save->address = trim($request->address);
        $save->latitude = trim($request->latitude);
        $save->longitude = trim($request->longitude);
        $save->country = trim($request->country);
        $save->state = trim($request->state);
        $save->city = trim($request->city);
        $save->email = trim($request->email);
        $save->name = trim($request->name);
        $save->username = trim($request->username);
        $save->phone = trim($request->phone);
        if ($request->property_type !== 'Type') {
            $save->property_type = $request->property_type;
        };
        if ($request->rooms !== 'Size') {
            $save->rooms = $request->rooms;
        };
        if ($request->status !== 'Status') {
            $save->status = $request->status;
        };
        if ($request->floor !== 'Floor') {
            $save->floor = $request->floor;
        };
        if ($request->bedrooms !== 'Bedrooms') {
            $save->bedrooms = $request->bedrooms;
        };
        if ($request->bathrooms !== 'Bathrooms') {
            $save->bathrooms = $request->bathrooms;
        };
        if ($request->heating !== 'Heating') {
            $save->heating = $request->heating;
        };
        if ($request->construction !== 'Construction Type') {
            $save->construction = $request->construction;
        };

        $save->save();
    }
}
