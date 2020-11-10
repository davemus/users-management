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

    static list(searchParams, pageParams) {
        let endpoint = this.baseEndpoint.slice();
        const requestOptions = Object.assign(
            {'method': 'GET'},
            this.commonRequestOptions
        );
        endpoint = `${endpoint}?_page=${pageParams['page']}&_limit=${pageParams['pageSize']}`
        if (searchParams['search'] && searchParams['searchField']) {
            endpoint = `${endpoint}&${searchParams['searchField']}_like=${searchParams['search']}`;
        }
        return fetch(endpoint, requestOptions).then(
            (response) => {
                const link = response.headers.get('link');
                const lastLinkPartMatch = link.match(/[^,]+_page=(\d+)[^,]+; rel="last"/);
                let lastPageNumber = 0;
                if (lastLinkPartMatch) {
                    lastPageNumber = lastLinkPartMatch[1];
                }
                return Promise.all([
                    response.json(),
                    new Promise((resolve, reject) => { resolve(lastPageNumber); })
                ]);
            }
        );
    }
}

export default UsersService;
