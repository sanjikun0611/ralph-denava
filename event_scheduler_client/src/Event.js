import React, {Component} from 'react';
import {getList, updateItem, resetNewEvent} from './EventFunctions';

const items = [
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
    'Sun',
];

class Event extends Component {
    constructor(){
        super()
        this.state ={
            newEventTrigger: false,
            event_name: '',
            date_from: '',
            date_to: '',
            days: [
                {mon: false},
                {tue: false},
                {wed: false},
                {thur: false},
                {fri: false},
                {sat: false},
                {sun: false},
            ],
            items: []
        }

        this.onChangeEventName = this.onChangeEventName.bind(this)
        this.onChangeEventDateFrom = this.onChangeEventDateFrom.bind(this)
        this.onChangeEventDateTo = this.onChangeEventDateTo.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    onChangeEventName = event => {
        this.setState({ event_name: event.target.value})
    }

    onChangeEventDateFrom = event => {
        this.setState({ date_from: event.target.value})
    }

    onChangeEventDateTo = event => {
        this.setState({ date_to: event.target.value})
    }

    getAll = () => {
        getList().then(data => {
            this.setState({
                items:[...data]
            },
            () => {
                console.log(this.state.items)
            })
        })
    }

    onSave = e => {
        e.preventDefault()

        this.setState({ newEventTrigger: true})

        const state = this.state;
        const items = this.state.items;
        const from = parseInt(this.state.date_from.substring(8, 10));
        const to = parseInt(this.state.date_to.substring(8, 10));

        for (const key in items) {

            let eventDay = (items[key].event_date);
            let eventDate = parseInt((items[key].event_date).substring(0, 2));

            if(items[key].new_event){
                resetNewEvent(false, items[key].id)
            }
            
            if(eventDate >= from && eventDate <= to){
                if(eventDay.includes("Mon")){
                    if(state.days[0].mon)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Tue")){
                    if(state.days[1].tue)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Wed")){
                    if(state.days[2].wed)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Thur")){
                    if(state.days[3].thur)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Fri")){
                    if(state.days[4].fri)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Sat")){
                    if(state.days[5].sat)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
    
                if(eventDay.includes("Sun")){
                    if(state.days[6].sun)
                    {
                        updateItem(state.event_name, true, items[key].id)
                    }
                }
            }
        }

        this.getAll()
    }

    createCheckbox = label => (
        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="checkbox"
                key={label}
                onChange={this.toggleCheckbox.bind(this, label)}/>
            <label className="form-check-label">{label}</label>
        </div>
    )

    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )

    toggleCheckbox(label) {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }

        let days = [false, false, false, false, false, false, false]

        for (const checkbox of this.selectedCheckboxes) {
            if(checkbox === 'Mon')
            {
                days[0] = true
            }

            if(checkbox === 'Tue')
            {
                days[1] = true
            }

            if(checkbox === 'Wed')
            {
                days[2] = true
            }

            if(checkbox === 'Thur')
            {
                days[3] = true
            }

            if(checkbox === 'Fri')
            {
                days[4] = true
            }

            if(checkbox === 'Sat')
            {
                days[5] = true
            }

            if(checkbox === 'Sun')
            {
                days[6] = true
            }

            let daysCopy = JSON.parse(JSON.stringify(this.state.days))
                daysCopy[0].mon = days[0]
                daysCopy[1].tue = days[1]
                daysCopy[2].wed = days[2]
                daysCopy[3].thur = days[3]
                daysCopy[4].fri = days[4]
                daysCopy[5].sat = days[5]
                daysCopy[6].sun = days[6]
                this.setState({
                    days:daysCopy 
                }) 
        }
    }

    render(){
        return (
            <div className="border border-light rounded">

                <div class="alert alert-success alert-dismissible fade show" role="alert" style={{display: this.state.newEventTrigger ? 'block' : 'none'}}>
                    Event successfull saved
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <h4 className text-left>Calendar</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <form>
                                <div className="form-group">
                                    <label for="event_name">Event</label>
                                    <input type="text" className="form-control"
                                    value={this.state.event_name || ''}
                                    onChange={this.onChangeEventName.bind(this)}/>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="date_from">From</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                min="2019-07-01" max="2019-07-30"
                                                value={this.state.date_from || ''}
                                                onChange={this.onChangeEventDateFrom.bind(this)}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="date_to">To</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                min="2019-07-01" max="2019-07-30"
                                                value={this.state.date_to || ''}
                                                onChange={this.onChangeEventDateTo.bind(this)}>
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {this.createCheckboxes()}
                                </div>
                                
                                <button type="submit" className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
                            </form>
                        </div>
                        <div className="col-7">
                        <h4 className text-left>July 2018</h4>
                        <table className="table">
                            <tbody>
                                {this.state.items.map((item, index) => (
                                    <tr key = {index} className = {item.new_event ? 'table-success' : null}>
                                        <td>{item.event_date}</td>
                                        <td>{item.event_title}</td>
                                    </tr>
                                ))} 
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event
