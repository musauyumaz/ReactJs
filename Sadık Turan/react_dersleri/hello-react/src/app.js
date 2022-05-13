// JSX - Javascript XML

var root = document.getElementById("root");
var app = {
  title: "Todo Application",
  description: "Lorem ipsum dolor sit amet, consectetur adip",
  items: ["item1", "item2"],
};
function onFormSubmit(event) {
  event.preventDefault();

  var item = event.target.elements.txtItem.value;
  console.log(item);

  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = "";
    render();
  }
  console.log("form submitted");
}
function clearItems() {
  app.items = [];
  render();
}

function render() {
  var numbers = [1, 2, 3, 4, 5];
  var listItems = app.items.map((item,index) =>
  <li key={index}>{item}</li>
  );

  var template = (
    <div>
      <h1>{app.title}</h1>
      <div>{app.description}</div>
      {/* <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
      </ul> */}

      {
          <ul>
              {listItems}
          </ul>
      }
      <button onClick={clearItems}>Clear Items</button>
      <p>{app.items.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem" />
        <button type="submit" name="">
          Add Item
        </button>
      </form>
    </div>
  );
  ReactDOM.render(template, root);
}

render();
