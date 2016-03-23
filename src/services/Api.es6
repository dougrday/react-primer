async function apiCall(uri, options = {}, payload = null) {
    let response = await fetch(uri, options);
    if (response.status >= 200 && response.status < 400) {
        let json = await response.json();
        return json;
    }
    else throw response;
}

function jsonOptions(method, payload) {
    let options = {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    if (payload) {
        options.body = JSON.stringify(payload);
    }
    return options;
}

export class ApiClass {
    constructor() {
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.delete = this.delete.bind(this);
    }

    async get(uri) {
        return apiCall(uri, jsonOptions('get'));
    }

    async post(uri, payload) {
        return apiCall(uri, jsonOptions('post', payload));
    }

    async put(uri, payload) {
        return apiCall(uri, jsonOptions('put', payload));
    }

    async delete(uri, payload) {
        return apiCall(uri, jsonOptions('delete', payload));
    }
}

// Create a singleton instance of our service
const Api = new ApiClass();

export default Api;
