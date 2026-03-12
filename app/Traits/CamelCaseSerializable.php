<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait CamelCaseSerializable
{
    /**
     * Convert the model's array form to camelCase keys.
     * This ensures JSON responses match the frontend's camelCase expectations.
     */
    public function toArray(): array
    {
        $array = parent::toArray();
        return $this->convertKeysToCamelCase($array);
    }

    protected function convertKeysToCamelCase(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            $camelKey = Str::camel($key);

            if (is_array($value)) {
                // Check if it's an associative array (object) or indexed array (list)
                if ($this->isAssociativeArray($value)) {
                    $value = $this->convertKeysToCamelCase($value);
                } else {
                    // It's a list — convert each item if it's an array
                    $value = array_map(function ($item) {
                        return is_array($item) ? $this->convertKeysToCamelCase($item) : $item;
                    }, $value);
                }
            }

            $result[$camelKey] = $value;
        }
        return $result;
    }

    protected function isAssociativeArray(array $array): bool
    {
        if (empty($array)) return false;
        return array_keys($array) !== range(0, count($array) - 1);
    }
}
