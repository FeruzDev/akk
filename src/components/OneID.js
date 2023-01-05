import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom'
import axios from "axios";
import {API_APTH} from "../tools/Const";

const OneId = (props) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const history = useHistory();
    useEffect(() => {
        axios.post(API_APTH + "users/one_id/",
            {"access_token": params.get("code")}
        )
            .then(res => {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("role", '3');
                history.push("/first-enter")

            })
            .catch(err => {
                alert("ERROR");
                history.push("/404")
            })

    }, []);
    return (
        <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
            <div>
                <div className="spinner-border text-primary m-5" style={{width: "100px", height: "100px"}} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
};

export default OneId;
