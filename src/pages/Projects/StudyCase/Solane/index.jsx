import React from "react";
import { Link } from 'react-router-dom';
function Solane() {
  return (
    <>
 <div className="content-config">
      <h1 className="pt-5">Solane Page</h1>
      <div className="proj-box-platon  pt-5">
        <div className="col-5 border text-center">
            <div className="title-plat">Solane est le premier vendeur de fraises du Poitou-Charentes</div>
            <div>
              <p className="p-3 pt-3">Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs,
               nos campagnes de communication sur la place du marché ont fonctionné.
              </p>
            </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <Link to="/works">Back</Link>
      </div>
    </div>
    </>
  );
}

export default Solane;
