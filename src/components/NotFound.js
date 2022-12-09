import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
           <div>
               <h1 className="text-center">404</h1>
               <h2 className="text-center mt-5"><Link to="/">Bosh Sahifaga qaytish</Link></h2>
           </div>
        </div>
    );
};

export default NotFound;