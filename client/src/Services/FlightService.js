const baseURL = 'http://localhost:9000/api/flights/'

export const getFlights = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postFlight = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteFlight = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateFlight = (flight) => {
    return fetch(baseURL + flight._id, {
        method: 'PUT',
        body: JSON.stringify(flight),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

