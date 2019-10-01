import React from "react";

function handClicked() {
  console.log("i am clicked");
}

function overPic() {
  console.log("touching picture!")
}

function App() {
  return (
    <div>
      <img onMouseOver={overPic} src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F72404661%2F219466576930%2F1%2Foriginal.20190911-113241?w=800&auto=compress&rect=0%2C40%2C1280%2C640&s=e348dc04943684a3f80559d108c86a86" />
      <br />
      <br />
      <button onClick={handClicked}>Click me</button>
    </div>
  );
}

export default App;
