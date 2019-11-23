<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Event;
use Faker\Generator as Faker;
use Carbon\Carbon;

$autoIncrement = autoIncrement();

$factory->define(Event::class, function (Faker $faker) use ($autoIncrement) {
    $autoIncrement->next();

    return [
        'event_title' => '',
        'event_date' => Carbon::create('2019', '07', $autoIncrement->current()),
        'new_event' => false
    ];
});

function autoIncrement()
{
    for ($i = 0; $i < 31; $i++) {
        yield $i;
    }
}

