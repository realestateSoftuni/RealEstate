<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\PropertyFeature;
use App\Models\PropertyFloorPlans;
use App\Models\PropertyPhoto;
use App\Models\PropertyVideo;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

error_reporting(E_ALL);
ini_set('display_errors', true);


class PropertiesController extends Controller
{
    public function add_property(Request $request)
    {
        try {
            request()->validate([
                'username'=>'required|unique:users|max:20|min:4',
                'price'=>'required|min:0',
                'square_feet'=>'required|min:0',
                'city'=>'required',
                'country'=>'required',
                'email'=>'required|email',
                'title'=>'required|max:100|min:4',
                'description'=>'max:900',
                'property_type'=>[
                    'required',
                    Rule::notIn(['Type']),
                ],
                'name'=>'required|max:20|min:2',
                'phone'=>'max:255',
                'rooms'=>[
                    'required',
                    Rule::notIn(['Size']),
                ],
                'status'=>[
                    'required',
                    Rule::notIn(['Status']),
                ],
                'images.*' => 'mimes:jpg,jpeg,png,gif|max:2048',
                'video' => 'nullable|url',
            ]);
        } catch (ValidationException $e) {
            $errors = $e->validator->errors()->getMessages();

            // Modify error messages to remove .0 suffix
            $formattedErrors = [];
            foreach ($errors as $field => $messages) {
                $formattedErrors[$field] = array_map(function ($message) {
                    return str_replace('.0', '', $message);
                }, $messages);
            }

            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $formattedErrors,
            ], $e->status);
        }

        $property = new Property;

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
        $property->rooms = $request->rooms;
        $property->property_type = $request->property_type;
        $property->status = $request->status;

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

        if ($request->has('video') && $request->video !== null ) {
            $video = new PropertyVideo;
            $video->video_url = $request->video;
            $video->property_id = $propertyId;
            if ($video->video_url !== '') {
                $video->save();
            }
        }

        if ($request->has('images')) {
            foreach ($request->images as $image) {
                //dd($image);
                $uploadedFile = new UploadedFile(
                    $image->getPathname(),
                    $image->getClientOriginalName(),
                    $image->getClientMimeType(),
                    null,
                    true
                    );
                $folder = 'images/property/';

                // Store image
                $photoURL = $this->storeImage($uploadedFile, $propertyId, $folder);

                // Save image information to the database
                $propertyImage = new PropertyPhoto;
                $propertyImage->photo_url = $photoURL;
                $propertyImage->property_id = $propertyId;
                $propertyImage->save();

            }
        }

        if ($request->has('floorPlans')) {
            foreach ($request->floorPlans as $plan) {
                $uploadedFile = new UploadedFile(
                    $plan->getPathname(),
                    $plan->getClientOriginalName(),
                    $plan->getClientMimeType(),
                    null,
                    true
                );
                $folder = 'floorPlans/property/';

                // Store image
                $photoURL = $this->storeImage($uploadedFile, $propertyId, $folder);

                // Save image information to the database
                $propertyPlan = new PropertyFloorPlans;
                $propertyPlan->image_url = $photoURL;
                $propertyPlan->property_id = $propertyId;
                $propertyPlan->save();

            }
        }
    }


    private function storeImage($image, $propertyId, $imageFolder)
    {
        // Validate and store the image in the 'public' disk
        $imagePath = $image->store($imageFolder . $propertyId, 'public');

        // Generate the full URL for the stored image
        $imageUrl = Storage::disk('public')->url($imagePath);

        return $imageUrl;
    }

    public function getAllProperties()
    {
        $properties = Property::orderBy('created_at', 'desc')->get();
        return response()->json($properties);
    }

    public function show($id)
    {
        $property = Property::with(['property_features', 'property_photos', 'property_videos'])->find($id);

        if (!$property) {
            return response()->json(['error' => 'Property not found'], 404);
        }

        return Response::json($property);
    }
}
