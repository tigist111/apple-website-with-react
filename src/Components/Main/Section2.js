import React from "react";

function Section2() {
  return (
    <div>
      <section className="second-highlight-wrapper">
        <div className="container col-12">
          <div className="title-wrapper">iPhone 12 Pro</div>
          <div className="description-wrapper">it's a leap year.</div>
          <div className="price-wrapper">
            From $41.62/mo. or $999 before trade-in.<sup>2</sup> <br /> Buy
            directly from Apple with special carrier offers.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                {" "}
                <a href="#">Learn more</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Buy</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
