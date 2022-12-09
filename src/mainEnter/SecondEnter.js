import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const SecondEnter = () => {
  useEffect(()=>{
  }, [])
  return (
    <div className="second-enter">
      <div className="container">
        <div className="row">
          <Link to="/first-enter/second-enter/management-systems-certification"   className="col-md-12 open-sans-medium">
            O'z DSt ISO/IEC 17021:2015 Сертификация систем менеджмента
          </Link>

          <a className="col-md-12 open-sans-medium inActive" >
            O'z DSt ISO/IEC 17065:2015 Сертификация продукции и услуг
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO/IEC 17024:2009 Сертификация персонала
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO/IEC 17043:2015 Проверки провайдера
          </a>

          <Link to="/first-enter/second-enter/inspection-body"  className="col-md-12 open-sans-medium">
            O'z DSt ISO/IEC 17020:2019 Орган инспекции
          </Link>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO/IEC 17025:2019 Неразрушающий контроль
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO/IEC 17025:2019 Испытательные лаборатории
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO 15189:2019 Медицинские лаборатории
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt ISO/IEC 17025:2019 Калибровочные лаборатории
          </a>

          <a className="col-md-12 open-sans-medium inActive">
            O'z DSt 3444:2020 Метрологическая служба/лаборатории
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondEnter;
