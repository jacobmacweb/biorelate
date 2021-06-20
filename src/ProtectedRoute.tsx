import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ Component, userType, scope, render, ...rest }: any) {
    return (
        <Route {...rest} render={
            (props: any) => {
                // TODO: Run authorisation checks
                const authorized = false;
                if (authorized) {
                    return render(props);
                } else {
                    return <Redirect to='/login' />
                }
            }
        } />
    )
}
