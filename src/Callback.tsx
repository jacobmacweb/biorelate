import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import webAuth from "./webauth";

export default function Callback(props: any) {
    let [result, setResult] = useState<any>(null);

    useEffect(() => {
        webAuth.parseHash((err, authResult) => {
            if (err) {
                // Invalid
                setResult(<Redirect to="/login"></Redirect>);
            } else {
                // Valid
                setResult(<Redirect to="/"></Redirect>);
            }
        });
    })

    return <>{result}</>
}