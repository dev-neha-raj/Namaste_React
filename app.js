/**
 * 1.nested structures
 * suppose we have, nested structure 
 * <div id = 'parent'>
 * <div  id='children'> 
 * let's create a siblings
 * <h1> This is h1 </h1>
 * <h2> This is h2 </h2>
 * </div>
 *  </div>
 * How we create this in react.
 * 2. How to create a siblings?
 * To pass the siblings we'll have to create an array of chidren
 *3. How to create the second child?
     we will now create the array of parent 
 * 
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
