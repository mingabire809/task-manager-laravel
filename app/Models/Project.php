<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    // a project can have multiple tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}