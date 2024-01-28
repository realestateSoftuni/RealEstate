<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ComplexPassword implements Rule
{
    private $errors = [];

    public function passes($attribute, $value)
    {
        if (!preg_match('/[a-zA-Z]/', $value)) {
            $this->errors[] = 'one letter';
        }

        if (!preg_match('/\d/', $value)) {
            $this->errors[] = 'one number';
        }

        if (!preg_match('/[^a-zA-Z\d]/', $value)) {
            $this->errors[] = 'one special character';
        }

        return empty($this->errors);
    }

    public function message()
    {
        return 'The :attribute must include at least ' . implode(' and ', $this->errors);
    }
}
