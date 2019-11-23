<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use Carbon\Carbon;

class EventController extends Controller
{
    public function index(){

        $results = \DB::table('events')
            ->select('id','event_title','event_date', 'new_event')
            ->get();

        foreach($results as $result) {
            $result->event_date = Carbon::parse($result->event_date)->format('d D');
        }

        return $results;
    }

    public function show($id){
        return Event::find($id);
    }

    public function store(Request $request){
        return Event::create($request->all());
    }

    public function update(Request $request, $id){
        $event = Event::findOrFail($id);
        $event->update($request->all());

        return $event;
    }

    public function delete(Request $request, $id){
        $event = Event::findOrFail($id);
        $event->delete();

        return 204;
    }
}
