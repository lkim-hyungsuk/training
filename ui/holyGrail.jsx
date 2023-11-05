// I have missed the min-height: 100vh on the #root.
// This was crucial since #root is inside <body>
// So setting min-height to <body> does not apply to #root unless I set it

// https://www.greatfrontend.com/questions/user-interface/holy-grail/solution


<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>


import "./styles.css";

export default function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

body {
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

header,
nav,
main,
aside,
footer {
  padding: 12px;
  text-align: center;
}

header {
  background-color: tomato;
  height: 60px;
}

.columns {
  display: flex;
  flex-grow: 1;
}

nav {
  background-color: coral;
  flex-shrink: 0;
  width: 100px;
}

main {
  background-color: moccasin;
  flex-grow: 1;
}

aside {
  background-color: sandybrown;
  flex-shrink: 0;
  width: 100px;
}

footer {
  background-color: slategray;
  height: 100px;
}
