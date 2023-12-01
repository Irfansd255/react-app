import React, { useEffect, useState } from "react";
import LocalStorage from "./LocalStorage";

const AboutUs = () => {
  const [data, setData] = useState([]);

  // const dataFetching = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       res.json().then((result) => {
  //         console.log(result);
  //         setData(result);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const postFetching = async () => {
    // try {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/post");
    //   const result = await res.json();
    //   // console.log(result)
    //   setData(result);
    // } catch (err) {
    //   console.log("Errorin Post API", err);
    // }

    // try {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/post");
    //   if (!res.ok) {
    //     throw new Error("Failed to fetch");
    //   }
    //   const result = await res.json();
    //   setData(result);
    // } catch (err) {
    //   console.log("Error in Post API", err);
    // }
  };

  // useEffect(() => {
  //   // dataFetching();
  //   postFetching();
  // }, []);

  // console.log(data);
  return (
    <div>
      <h1>AboutUs page</h1>
      <ul>
        {/* {data.map((posts, index) => {
          return (
            <div key={posts.id}>
              <li>{posts.body}</li>
              <li></li>
            </div>
          );
        })} */}
      </ul>
      {/* <LocalStorage /> */}
    </div>
  );
};

export default AboutUs;
