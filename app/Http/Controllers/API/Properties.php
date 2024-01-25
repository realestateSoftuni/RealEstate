<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\PropertyFeature;
use App\Models\PropertyPhoto;
use App\Models\PropertyVideo;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

error_reporting(E_ALL);
ini_set('display_errors', true);


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

        $property = new Property;
//        $save->user_id = 1;
//        $save->title = 'title test';
//        $save->description = 'test test';
//        $save->price = 100000;
//        $save->square_feet = 105;
//        $save->build = '1985';
//        $save->address = 'some address';
//        $save->latitude = 100.10;
//        $save->longitude = 105.25;
//        $save->country = 'Bulgaria';
//        $save->state = 'Test state';
//        $save->city = 'Sofia';
//        $save->email = 'test@gmail.com';
//        $save->name = 'Gaby';
//        $save->username = 'Gabito';
//        $save->phone = '0885929292';
//        $save->date_listed = date_create();
//        $save->property_type = 'lot';
//        $save->rooms = 3;
//        $save->status = 'rent';
//        $save->floor = 5;
//        $save->bedrooms = 3;
//        $save->bathrooms = 2;
//        $save->heating = 'air_conditioning';
//        $save->construction = 'brick';

        $property->user_id = 1;
        $property->title = trim($request->title);
        $property->description = $request->description;
        $property->price = trim($request->price);
        $property->square_feet = trim($request->square_feet);
        $property->build = trim($request->build);
        $property->address = trim($request->address);
        $property->latitude = $request->latitude;
        $property->longitude = $request->longitude;
        $property->country = trim($request->country);
        $property->state = trim($request->state);
        $property->city = trim($request->city);
        $property->email = trim($request->email);
        $property->name = trim($request->name);
        $property->username = trim($request->username);
        $property->phone = trim($request->phone);
        if ($request->property_type !== 'Type') {
            $property->property_type = $request->property_type;
        };
        if ($request->rooms !== 'Size') {
            $property->rooms = $request->rooms;
        };
        if ($request->status !== 'Status') {
            $property->status = $request->status;
        };
        if ($request->floor !== 'Floor') {
            $property->floor = $request->floor;
        };
        if ($request->bedrooms !== 'Bedrooms') {
            $property->bedrooms = $request->bedrooms;
        };
        if ($request->bathrooms !== 'Bathrooms') {
            $property->bathrooms = $request->bathrooms;
        };
        if ($request->heating !== 'Heating') {
            $property->heating = $request->heating;
        };
        if ($request->construction !== 'Construction Type') {
            $property->construction = $request->construction;
        };

        $property->save();

        $propertyId = $property->id;

        // Assuming $request->features is an array of feature names for the property
        if ($request->has('features') && is_array($request->features)) {
            // Iterate through each feature and create an entry in the properties_features table
            foreach ($request->features as $featureName) {
                $feature = new PropertyFeature;
                $feature->feature_name = $featureName;
                $feature->property_id = $propertyId;
                $feature->save();
            }
        }

        if ($request->has('images')) {
            foreach ($request->images as $image) {
                // Check if the 'path' key is present in the image data
                $uploadedFile = new UploadedFile(
                    $image->getPathname(),
                    $image->getClientOriginalName(),
                    $image->getClientMimeType(),
                    null,
                    true
                    );

                    // Validate and store image
                    $videoURL = $this->storeImage($uploadedFile, $propertyId);

                    // Save image information to the database
                    $propertyVideo = new PropertyPhoto;
                    $propertyVideo->photo_url = $videoURL;
                    $propertyVideo->property_id = $propertyId;
                    $propertyVideo->save();

            }
        }

        if ($request->has('videos')) {
            foreach ($request->videos as $video) {
                $uploadedFile = new UploadedFile(
                    $video->getPathname(),
                    $video->getClientOriginalName(),
                    $video->getClientMimeType(),
                    null,
                    true
                );

                // Validate and store image
                $videoURL = $this->storeVideo($uploadedFile, $propertyId);

                // Save image information to the database
                $propertyVideo = new PropertyVideo;
                $propertyVideo->video_url = $videoURL;
                $propertyVideo->property_id = $propertyId;
                $propertyVideo->save();

            }
        }
    }

    private function storeVideo($video, $propertyId)
    {
        // Validate and store the image in the 'public' disk
        $videoPath = $video->store('videos/property/' . $propertyId, 'public');

        // Generate the full URL for the stored image
        $videoUrl = Storage::disk('public')->url($videoPath);

        return $videoUrl;
    }

    private function storeImage($image, $propertyId)
    {
        // Validate and store the image in the 'public' disk
        $imagePath = $image->store('images/property/' . $propertyId, 'public');

        // Generate the full URL for the stored image
        $imageUrl = Storage::disk('public')->url($imagePath);

        return $imageUrl;
    }
}
