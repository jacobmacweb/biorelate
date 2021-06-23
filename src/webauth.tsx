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
    getSession((err_session, authResult) => {
        webAuth.client.userInfo(authResult.accessToken, (err_user, user) => {
            if ((err_user || err_session) && process.env.REACT_APP_TESTING) {
                cb(null, {
                    picture: "/pfp.png",
                    accessToken: "1234-1234-1234-1234",
                    given_name: "Ramona",
                    family_name: "Flowers",
                    email: "ramona.flowers@biorelate.com",
                    phone_number: "207 555 0119"
                });
            }
            
            cb(err_session, user);
        });
    });
}

export function getSession(cb: Auth0Callback<any>) {
    webAuth.checkSession({ prompt: 'none', scope: "openid profile" }, (err, authResult) => {
        if (err && process.env.REACT_APP_TESTING) {
            cb(null, {
                accessToken: "1234-1234-1234-1234",
            });
        }

        cb(err, authResult);
    });
}

export function loginUser(email: string, password: string, cb: Auth0Callback<any>) {
    webAuth.login({ email, password, realm: "Username-Password-Auth-Test", scope: "openid profile" }, (err, res) => {
        if (err && process.env.REACT_APP_TESTING) {
            cb(null, {});
        } else {
            cb(err, res);
        }
    })
}