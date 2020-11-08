class UsersService {
    static baseEndpoint = 'http://localhost:3001/users'; 

    static commonRequestOptions = { 
        headers: {
            'Content-Type': 'application/json',
        },
    }

    static makeRequest(method, id=undefined, data=undefined) {
        const endpoint = id ? this.baseEndpoint + '/' + id : this.baseEndpoint;
        const requestOptions = Object.assign(
            {'method': method, 'body': JSON.stringify(data)},
            this.commonRequestOptions
        );
        return fetch(endpoint, requestOptions).then(
            (response) => response.json(),
        );
    }

    static detail(id) {
        return this.makeRequest('GET', id);
    }

    static create(data) {
        return this.makeRequest('POST', undefined, data);
    }

    static update(id, data) {
        return this.makeRequest('PUT', id, data);
    }

    static list() {
        return this.makeRequest('GET');
    }
}

export default UsersService;
