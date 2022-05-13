var template = (
  <div>
    <h1 id="header">Hello World</h1>
    <div>Lorem, ipsum dolor.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
);

// var name = "Samsung S10";
// var price = 5000;
// var description = "çok iyi bir telefon"

// var product = {
//     name : "Samsung S11",
//     price : 7000,
//     description : "çok iyi bir telefon"
// }

// function formatPrice(p) {
//     return p.price + ' TL';
// }

// var template2 = (
//     <div id="product-details">
//         <h2 id="product-name">name: {product.name}</h2>
//         <p id="product-price">price: {formatPrice(product)}</p>
//         <p id="product-desc">description: {product.description}</p>
//     </div>
// );





var number = 0;
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnBlue";
var addOne = () => {
  number++;
  console.log("add one");
  renderApp();
};
var minusOne = () => {
  number--;
  console.log("minus one");
  renderApp();
};

function renderApp() {
  var template3 = (
    <div>
      <h1>Number : {number}</h1>
      <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>
        +1
      </button>
      <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>
        -1
      </button>
    </div>
  );
  // ReactDOM
  ReactDOM.render(template3, root);
}

function tick(){
    var element = (
        <div>
            <h2>time is : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element,root);
}

setInterval(tick,1000);
// renderApp();