import axios from 'axios'

export const getList = () => {
    return axios

    .get('/api/events', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data
    })
}

export const updateItem = (event_name, new_event,id) => {

    return axios
        .put(`api/event/${id}`,
            {
                event_title: event_name,
                new_event: new_event
            }, {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })    
}

export const resetNewEvent = (new_event,id) => {

    return axios
        .put(`api/event/${id}`,
            {
                new_event: new_event
            }, {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })    
}