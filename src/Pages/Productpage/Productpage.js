import React, { Component } from "react";

class Productpage extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      productID: props.match.params.pid,
    };
  }

  componentDidMount() {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((products) => {
        const productList = products.products;
        const singleProduct = productList.filter(
          (x) => x.product_url == this.state.productID
        );
        this.setState((state) => {
          return {
            products: singleProduct,
          };
        });
      });
  }

  render() {
    // console.log(this.state.productID);
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {this.state.products.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let productPage = "/iphone/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper  bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default Productpage;

// import React, { Component } from "react";

// class Productpage extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       products: [],
//       productID: props.match.params.pid,
//     };
//   }

//   componentDidMount() {
//     fetch("/iphones.json")
//       .then((Response) => Response.json())
//       .then((products) => {
//         const productList = products.produts;
//         const singleProduct = productList.filter(
//           (x) => x.Id == this.state.productID
//         );
//         this.setState((state) => {
//           return {
//             prouducts: singleProduct,
//           };
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         <section className="internal-page-wrapper top-100">
//           <div className="container">
//             <div className="justify-content-center text-center">
//               <div className="col-12">
//                 <div className="title-wraper bold">Iphones</div>
//                 The best for the brightest
//               </div>
//             </div>
//           </div>
//           {products.map((product) => {
//             let id = product.Id;
//             let title = product.Title;
//             let img = product.img;
//             let Brief = product.Brief;
//             let startprice = product.startPrice;
//             let PriceRange = product.priceRange;
//             let Productpage = "/iphone/" + id;

//             let Order1 = 1;
//             let Order2 = 2;
//             if (Order1 !== 1) {
//               Order1 = 2;
//               Order2 = 1;
//               Order--;
//             } else {
//               Order++;
//             }
//             let productDiv = (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${Order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${startprice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="product-details">{details}</div>
//                   <div className="links-Wrapper">
//                     <ul>
//                       <li>{<Link to={productpage}>Learn more</Link>}</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${Order2}`}>
//                   <div className="product-image">
//                     <img src={img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </section>
//       </div>
//     );
//   }
// }

// export default Productpage;
