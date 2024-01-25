import React from "react";

function Section2() {
  return (
    <section id="Recently_added">
      <Items />
    </section>
  );
}

function Items() {
  return (
    <div className="items">
      <div className="item_card">Item 1</div>
      <div className="item_card">Item 2</div>
      <div className="item_card">Item 3</div>
    </div>
  );
}

export default Section2;
