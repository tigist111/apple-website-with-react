import React from "react";

function Section4() {
  return (
    <div>
      <section className="fourth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="title-wrapper">iPad Air</div>
              <div className="description-wrapper">
                Powerful. Colorful. Wonderful.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="logo-wrapper"></div>
              <div className="description-wrapper">
                A new fitness experience for everyone. <br /> Powered byApple
                Watch.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">
                      Try it free<sup>3</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
