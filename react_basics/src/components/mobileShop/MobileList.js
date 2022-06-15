import React from "react";

function MobileList() {
  return (
    <div>
      <Mobile />
    </div>
  );
}

const Mobile = () => {
  return (
    <section>
      <MobileName />
      <Image />
      <Brand />
      <Memory />
    </section>
  );
};
const MobileName = () => <h2>Samsung Galaxy M53 5G</h2>;
const Image = () => (
  <img src="https://m.media-amazon.com/images/I/810Rscvmd4L._SX522_.jpg"></img>
);
const Brand = () => <h3>Samsung</h3>;
const Memory = () => <h4>128 GB</h4>;

export default MobileList;
