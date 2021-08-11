import React from "react";
import './styled';
import { Link } from 'react-router-dom';

function Platon() {
  return (
    <div className="content-config">
      <h1 className="pt-5">Platon Page</h1>
      <div className="proj-box-platon  pt-5">
        <div className="col-5 border text-center">
            <div className="title-plat">Le challenge</div>
            <div>
              <p className="p-3 pt-3">Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
                Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes 
                vraiment la meilleure agence.
              </p>
            </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <Link to="/works">Back</Link>
      </div>
    </div>
  );
}

export default Platon;
