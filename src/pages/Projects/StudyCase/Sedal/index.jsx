import React from "react";
import { Link } from 'react-router-dom';
function Sedal() {
  return (
    <div className="content-config">
      <h1 className="pt-5">Sedal Page</h1>
      <div className="proj-box-platon  pt-5">
        <div className="col-5 border text-center">
            <div className="title-plat">Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas</div>
            <div>
              <p className="p-3 pt-3">Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller.
               Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".
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

export default Sedal;
