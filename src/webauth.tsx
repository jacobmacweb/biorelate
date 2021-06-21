import auth0, { Auth0Callback } from "auth0-js";

const webAuth = new auth0.WebAuth({
    domain: 'dev-h7rcrzi5.eu.auth0.com',
    clientID: 'oqFwQOwcuC5fqqITBkVOBvGntotirQz6',
    redirectUri: 'http://localhost:8080/login/callback',
    responseType: 'token id_token',
    scope: 'openid profile authentication'
});
export default webAuth;


export function getUserData(cb: Auth0Callback<any>) {
    webAuth.checkSession({ prompt: 'none' }, (err, authResult) => {
        if (err && !process.env.REACT_APP_TESTING) {
            cb(err, authResult);
        } else {
            // Test data
            cb(null, {
                picture: "/pfp.png"
            })
        }
    });
}

export function loginUser(email: string, password: string, cb: Auth0Callback<any>) {
    webAuth.login({ email, password }, (err, res) => {
        if (err && !process.env.REACT_APP_TESTING) {
            cb(err, res)
        } else {
            cb(null, {});
        }
    })
    webAuth.checkSession({ prompt: 'none' }, (err, authResult) => {
        console.log(process.env);
        if (!err && !process.env.REACT_APP_TESTING) {
            cb(err, authResult);
        }
        
        // Test data
        cb(null, {
            
        })
    });
}