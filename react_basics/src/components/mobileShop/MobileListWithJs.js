import React from "react";

function MobileListWithJs() {
  return (
    <div>
      <Mobile />
    </div>
  );
}

const Brand = "Samsung";
const Mobile = () => {
  const MobileName = "Samsung Galaxy M53 5G";
  const Memory = "128 GB";
  return (
    <section>
      <h2>{MobileName}</h2>
      <img src="https://m.media-amazon.com/images/I/810Rscvmd4L._SX522_.jpg"></img>
      <h3>{Brand}</h3>
      <h4>{Memory}</h4>
    </section>
  );
};

export default MobileListWithJs;
