import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const FirstEnter = () => {
  useEffect(()=>{

  }, [])
  return (
    <div className="first-enter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/first-enter/second-enter" className="akk-btn open-sans-medium">
              Заявка на аккредитацию
            </Link>
            <a className="od-btn open-sans-medium">Заявка на одебрение</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstEnter;
