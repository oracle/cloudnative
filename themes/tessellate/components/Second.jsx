import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import kubernetes from '../images/kubernetes.png';
import microservices from '../images/microservices.png';
import fnproject from '../images/fnproject.png';
import cloudops from '../images/cloudops.png';
import terraform from '../images/terraform.png';


export default function Second(props) {

  return (
    <section id="second" className="main">
      <header>
        <div className="container">
          <h2>Euismod sed feugiat lorem tempus magna</h2>
          <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
          feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
        </div>
      </header>
      <div className="content  style2">
        <div className="container">
          <div className="row">
            <div className="4u 12u(narrow)">
              <section>
                <h3>Cloud Native Curriculum</h3>
                <p>Every journey starts with a step. This is your first.</p>
                <footer>
                  
                </footer>
              </section>
            </div>
            <div className="8u 12u(narrow)">

              <div className="row">
                <div className="6u">
                  <div className="topic">
                    <a href="#" className="title">
                      <span className="topic__imageContainer">
                        <span className="topic__imageContainer__item">
                          <img src={kubernetes} alt="" />
                        </span>
                      </span>
                      <span className="topic__title dark">Kubernetes</span>  
                    </a>
                  </div>
                 </div>
                
                   
                <div className="6u">
                  <div className="topic">
                    <a href="#" className="title">
                      <span className="topic__imageContainer">
                        <span className="topic__imageContainer__item">
                          <img src={microservices} alt="" />
                        </span>
                      </span>
                      <span className="topic__title dark">Microservices</span>  
                    </a>
                  </div>
                 </div>
                
                <div className="6u">
                  <div className="topic">
                    <a href="#" className="title">
                      <span className="topic__imageContainer">
                        <span className="topic__imageContainer__item">
                          <img src={terraform} alt="" />
                        </span>
                      </span>
                      <span className="topic__title dark">Terraform</span>  
                    </a>
                  </div>
                </div>

                <div className="6u">
                  <div className="topic">
                    <a href="#" className="title">
                      <span className="topic__imageContainer">
                        <span className="topic__imageContainer__item">
                          <img src={fnproject} alt="" />
                        </span>
                      </span>
                      <span className="topic__title dark">FN Project</span>  
                    </a>
                  </div>
                 </div>

                 <div className="6u">
                  <div className="topic">
                  <a href="cloudops" className="title">
                    <span className="topic__imageContainer">
                      <span className="topic__imageContainer__item">
                        <img className="topic__imageContainer_image" src={cloudops} alt="" />
                      </span>
                    </span>
                    <span className="topic__title dark">Cloud-Ops</span>  
                    </a>
                  </div>
                 </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
