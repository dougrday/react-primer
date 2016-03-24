async function apiCall(url, options = {}) {
    let request = new Request(url, options);
    let response = await fetch(request);
    if (response.status >= 200 && response.status < 400) {
        let json = await response.json();
        return json;
    }
    else throw response;
}

class ApiContext {
    constructor(previous) {
        this.options = {};
        this.options.headers = new Headers();
        this.options.headers.set("Accept", "application/json");
        this.options.headers.set("Content-Type", "application/json");

        // Ensure 'this' refers to ApiContext, because JavaScript.
        this.url = this.url.bind(this);
        this.method = this.method.bind(this);
        this.headers = this.headers.bind(this);
        this.payload = this.payload.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    url(url) {
        this.options.url = url;
        return this;
    }

    method(method) {
        this.options.method = method.toUpperCase();
        return this;
    }

    headers(headers) {
        const keys = Object.keys(headers);
        for (let k of keys) {
            this.options.headers.set(k, headers[k]);
        }
        return this;
    }

    payload(payload) {
        this.options.body = JSON.stringify(payload);
        return this;
    }

    fetch() {
        return apiCall(this.options.url, this.options);
    }
}

export class ApiClass {
    constructor() {
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.delete = this.delete.bind(this);
    }

    get(url) {
        return new ApiContext().url(url).method("GET");
    }

    post(url) {
        return new ApiContext().url(url).method("POST");
    }

    put(url) {
        return new ApiContext().url(url).method("PUT");
    }

    delete(url) {
        return new ApiContext().url(url).method("DELETE");
    }
}

// Create a singleton instance of our service
const Api = new ApiClass();

export default Api;
