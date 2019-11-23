<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['event_title', 'event_date', 'new_event'];

    protected $dates = [
        'event_date'
    ];


}
