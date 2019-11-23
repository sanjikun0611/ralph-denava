<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('events', 'EventController@index');
Route::get('events/{id}', 'EventController@show');
Route::post('event', 'EventController@store');
Route::put('event/{id}', 'EventController@update');
Route::delete('event/{id}', 'EventController@delete');
