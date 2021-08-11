import React from 'react';
import './styled';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
    <div className="content-config">
      <h1 className="pt-5">Projects Page</h1>
      <div className="projects-mainbox  d-flex pt-5">
        <div className="item item-1 col-3  text-center">
          <Link to="/works/platon">Platon Project</Link>
        </div>
        <div className="item item-2 col-3 text-center">
          <Link to="/works/sedal">Sedal Project</Link>
        </div>
        <div className="item item-3 col-3 text-center">
          <Link to="/works/solane">Solane Project</Link>
        </div>
      </div>
    </div>

    </>
  );
}
export default Projects;
