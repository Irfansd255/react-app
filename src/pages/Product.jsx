import React from "react";

const Product = () => {
  const data = new Promise((resolve, reject) => {
    let a = 4;

    if (a === 6) {
      resolve("success");
    } else {
      reject("error");
    }
  });

  data.then((msg) => {
    console.log("success Data", msg);
  }).catch((err)=>{
    console.log("error message",err)
  })

  console.log(data);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default Product;
