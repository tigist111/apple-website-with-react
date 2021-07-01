import React, { useEffect, useState } from "react";
import "../LatestNews/LatestNews.css";

// function LatestNews() {
//   const [newsItems, getNewsItems] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=publishedAt&apiKey=9741cf1b0ea747e7badef430990073bbnpm"
//     )
//       .then((Response) => Response.json())
//       .then((data) => {
//         let articles = data.articles;
//         articles = articles.slice(0, 6);
//         getNewsItems(articles);
//       });
//   }, []);
//   console.log(newsItems);

//   return (
//     <div className="allVideoWrapper">
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wrapper">
//               Latest Articles
//               <br />
//             </div>
//           </div>
//           {newsItems.map((singlenews) => {
//             let url = singlenews.url;

//             let newsWrapper = (
//               <div key={url} className="col-sm-12 col-md-6 col-lg-4">
//                 <div className="singleNews">
//                   <div className="newsThumbnail">
//                     <a href={url} target="_blank">
//                       <img src={singlenews.urlToImage} />
//                     </a>
//                   </div>
//                   <div className="newsInfoWrapper">
//                     <div className="newsTitle">
//                       <a href={url} target="_blank">
//                         {singlenews.title}
//                       </a>
//                     </div>
//                     <div className="newsDesc">
//                       {/* {singlenews.snippet.description} */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//             return newsWrapper;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestNews;

function LatestNews() {
  const [NewsItems, getNewsItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-04-17&sortBy=publishedAt&apiKey=9741cf1b0ea747e7badef430990073bb"
    )
      .then((Response) => Response.json())
      .then((data) => {
        let articles = data.articles;
        articles = articles.slice(0, 6);
        getNewsItems(articles);
        console.log(articles);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              Latest News <br />
              <br />
            </div>
          </div>

          {NewsItems.map((singleNews) => {
            let url = singleNews.url;

            let newsWrapper = (
              <div key={url} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleNews">
                  <div className="newsThumbnail">
                    <a href={url} target="_blank">
                      <img src={singleNews.urlToImage} />
                    </a>
                  </div>
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={url} target="_blank">
                        {singleNews.title}
                      </a>
                    </div>
                    <div className="newsDesc">
                      {/* {singleNews.description}*/}
                    </div>
                  </div>
                </div>
              </div>
            );
            return newsWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
