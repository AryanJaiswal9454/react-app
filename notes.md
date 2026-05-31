# **What is ReactJS?**

ReactJS (or simply React) is a free, open-source JavaScript library primarily used for building dynamic, interactive user interfaces (UIs), particularly for Single Page Applications (SPAs). It was developed and is maintained by Meta (formerly Facebook). Instead of treating the whole web page as a single block, React allows you to break it down into smaller, manageable, and reusable pieces of code.

---

### **Why do we need React?**

Before React, building complex web applications with plain JavaScript (Vanilla JS) or jQuery required heavy, direct manipulation of the Document Object Model (DOM). This was slow, buggy, and hard to maintain as apps grew larger. We use React because it solves these problems:

- **Speed and Performance:** Updating the entire web page for a tiny change is slow. React uses a smart mechanism to only update the exact parts of the screen that changed.
- **Reusability:** You can build a UI element once (like a custom button or a navigation bar) and reuse it anywhere in your app, saving time and reducing bugs.
- **Easier Maintenance:** Because the code is modular, fixing a bug in one part of the app usually doesn't break the rest of it.
- **Seamless User Experience:** React powers Single Page Applications, meaning the app loads once, and navigating around feels instantaneous, like a native mobile app, without the browser having to reload the page.

---

### **Key Features of React**

- **JSX (JavaScript XML):** A syntax extension that allows you to write HTML-like code directly inside your JavaScript files. It makes the code incredibly easy to read and write.
- **Virtual DOM:** React keeps a lightweight, in-memory copy of the actual DOM (the website's structure). When a user interacts with the app, React updates the Virtual DOM first, compares it to the real DOM to figure out exactly what changed, and then updates _only_ those specific pieces on the actual screen.
- **One-Way Data Binding:** Data in React flows in a single direction (from parent components down to child components). This makes it much easier to track down bugs and understand how data is moving through your app.
- **Component-Based Architecture:** The entire UI is divided into self-contained building blocks.

---

# **FOLDER STRUCTURE**

When you create a new React project using Vite (a modern, incredibly fast build tool), the folder structure looks a bit different than older tools like Create React App. The most notable difference is that Vite treats `index.html` as part of your source code, not just a static asset.

Here is what a standard React + Vite folder structure looks like, followed by a breakdown of what each part does:

```text
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

### **1. The Root Folders**

- **`node_modules/`**
  This folder contains all the downloaded JavaScript libraries and packages your project needs to run (including React and Vite themselves). **You should never edit files in here manually**, and this folder is never pushed to GitHub (it's ignored by `.gitignore`) because it is huge and can be recreated anytime by running `npm install`.

- **`public/`**
  This folder is for static assets that you **do not** want Vite to process or bundle. Things placed here will be served exactly as they are.
  - _Example:_ Favicons (`vite.svg`), `robots.txt`, or large files like videos. You reference these files in your code using a simple absolute path (e.g., `/vite.svg`).

- **`src/` (Source)**
  This is where you will spend 99% of your time. It contains all the React components, CSS, and logic for your application. Vite processes and optimizes everything inside this folder.

---

### **2. Inside the `src/` Folder**

- **`assets/`**
  Unlike the `public` folder, assets put in here (like images, icons, or fonts) _are_ processed by Vite. If you import an image from this folder into a component, Vite will optimize it, hash the filename for caching, and bundle it with your code.
- **`main.jsx` (or `main.tsx` if using TypeScript)**
  This is the **entry point** of your React application. It selects the root `<div>` from your `index.html` file and renders your main `<App/>` component inside of it.
- **`App.jsx`**
  This is your root React component. It acts as the main container for your entire application. All other components you build (Navbar, Footer, Pages) will eventually be nested inside this file.
- **`index.css`**
  Your global stylesheet. This is where you put CSS resets, global variables, and styles that should apply to the entire website (like the `body` background color or global font families).
- **`App.css`**
  The specific stylesheet for the `App.jsx` component.

---

### **3. The Configuration Files (Root Directory)**

- **`index.html`**
  **Crucial Vite Difference:** In older tools, this file lived in the `public/` folder. Vite keeps it in the root directory. It is the main entry point to your app. If you look inside, you will see a `<script type="module" src="/src/main.jsx"></script>` tag, which is how Vite knows where to start reading your React code.
- **`package.json`**
  The "ID card" for your project. It contains:
  - The name and version of your app.
  - **Scripts:** Commands you can run (like `npm run dev` to start the server or `npm run build` to prepare for production).
  - **Dependencies:** A list of all external libraries your app needs to run (like `react` and `react-dom`).
- **`package-lock.json` (or `yarn.lock` / `pnpm-lock.yaml`)**
  An automatically generated file that locks down the exact versions of every single dependency in `node_modules`. This ensures that if another developer downloads your project, they get the exact same setup, preventing "it works on my machine" bugs.
- **`vite.config.js`**
  The configuration file for Vite itself. You can use this to add plugins (like the React plugin it comes with), change the port your local server runs on, or set up path aliases.
- **`.eslintrc.cjs`**
  The configuration file for ESLint, a tool that analyzes your code to quickly find and fix problems (like syntax errors or bad practices) before you even run the app.
- **`.gitignore`**
  Tells Git (your version control system) which files and folders to ignore and _not_ upload to GitHub. `node_modules` and your build output folders are always listed here.

# **Explaination of main.jsx**

This file, usually named `main.jsx` (or `index.js` in older setups), is the **entry point** of your entire React application. Its sole purpose is to grab your React code and inject it into the blank HTML page provided by the browser.

Here is a line-by-line breakdown of exactly what is happening:

### **1. `import { createRoot } from "react-dom/client";`**

React is actually split into two different libraries:

- `react`: The core library that handles components, state, and the Virtual DOM.
- `react-dom`: The library that knows how to take React's Virtual DOM and translate it into actual HTML that the browser can display.

Here, you are importing a specific function called `createRoot` from `react-dom/client`. This function tells React to prepare a specific spot on the webpage to act as the "root" (the foundation) where all your React code will live.
_(Note: `createRoot` is the modern standard introduced in React 18 to make apps run faster and smoother)._

### **2. `import App from "./App";`**

This line imports your main component.
Think of `<App/>` as the master container for your entire website. Every other component you build (Navbar, Sidebar, Profile, Footer) will eventually be nested inside this `App.jsx` file.

### **3. `createRoot(document.getElementById("root")).render(<App/>);`**

This is where the magic happens. It executes in two steps:

- **Step A: `document.getElementById("root")`**
  This is standard Vanilla JavaScript. It searches your `index.html` file (which Vite serves to the browser) and looks for an empty `<div>` with the ID of "root".
  _(If you open your `index.html` file, you will see `<div id="root"></div>` sitting completely empty)._

- **Step B: `createRoot(...).render(<App/>);`**
  React takes control of that empty "root" `<div>`. It then calls the `.render()` method to draw the `<App/>` component directly inside of it.

### **The Analogy**

Imagine you are plugging a video game console into a TV:

1.  **`index.html` (The TV):** It has a blank screen and an empty HDMI port (`<div id="root"></div>`).
2.  **`<App/>` (The Console):** It contains all your games, menus, and graphics (your React components).
3.  **`main.jsx` (The HDMI Cable):** It plugs the console into the TV, connecting your React code to the browser screen so the user can actually see it.

# **What are Components?**

Components are the fundamental building blocks of any React application. You can think of them as custom, independent JavaScript functions that return a piece of the user interface.

If you were building Twitter, you wouldn't write one massive file for the homepage. Instead, you would have a `Sidebar` component, a `Feed` component, and a `Tweet` component. You can then nest components inside each other (e.g., placing multiple `Tweet` components inside the `Feed` component) to build complex pages.

---

### **Types of Components and Syntax**

There are two primary ways to create components in React.

#### **1. Functional Components (The Modern Standard)**

These are simple JavaScript functions that accept inputs (called `props`) and return JSX. Since the introduction of "Hooks" in React 16.8, functional components can do everything class components can do, and they are now the industry standard because they are cleaner and easier to read.

```jsx
// Functional Component Syntax
import React from "react";

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to functional React.</p>
    </div>
  );
}

export default Greeting;
```

#### **2. Class Components (The Legacy Method)**

Before Hooks, if you needed your component to manage its own memory (state) or hook into specific moments in its lifespan (lifecycle methods), you _had_ to use a Class Component. They require you to extend `React.Component` and use a `render()` method.

```jsx
// Class Component Syntax
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to class-based React.</p>
      </div>
    );
  }
}

export default Greeting;
```

---

### **Difference Between Functional and Class-Based Components**

| Feature                  | Functional Components                                                                | Class-Based Components                                                        |
| :----------------------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Foundation**           | Plain JavaScript functions.                                                          | ES6 Classes extending `React.Component`.                                      |
| **Syntax & Boilerplate** | Minimal and clean code.                                                              | Requires more boilerplate code (constructors, `super()`, `render()` methods). |
| **Handling State**       | Uses the `useState()` Hook to manage state.                                          | Uses the `this.state` object and `this.setState()` method.                    |
| **Lifecycle Methods**    | Uses the `useEffect()` Hook to handle side effects (mounting, updating, unmounting). | Uses specific methods like `componentDidMount()`, `componentDidUpdate()`.     |
| **The `this` Keyword**   | Does not require the confusing `this` keyword.                                       | Heavily relies on `this` to access props, state, and methods.                 |
| **Current Usage**        | **Highly recommended.** The modern standard for React development.                   | Mostly seen in older legacy codebases. Rarely used for new features.          |

---

# **What are React Fragments?**

In React, a **Fragment** is a built-in feature that lets you group a list of multiple elements together without adding an extra HTML node (like a `<div>`) to the actual DOM (the structure of your webpage).

---

### **The Problem Fragments Solve**

In React, a component can only return **one single parent element**. If you try to return two adjacent elements without wrapping them, React will throw an error: _"Adjacent JSX elements must be wrapped in an enclosing tag."_

**The Wrong Way (This will cause an error):**

```jsx
function UserDetails() {
  return (
    <h2>Alice</h2>
    <p>Age: 25</p> // Error! Two siblings, no parent.
  );
}
```

**The Old Solution (Using a `<div>`):**
To fix this, developers used to wrap everything in a `<div>`.

```jsx
function UserDetails() {
  return (
    <div>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </div>
  );
}
```

While this works, it creates a problem: if you do this everywhere, your webpage ends up with hundreds of useless, invisible `<div>` tags. This "DOM bloat" can make your app slightly slower and, more importantly, it can break CSS layouts like Flexbox or CSS Grid.

---

### **The Modern Solution: Fragments**

Fragments solve this by acting as an "invisible wrapper." They satisfy React's rule of returning a single parent, but they completely disappear when the HTML is actually rendered on the screen.

There are two ways to write a Fragment in a functional component:

#### **1. The Shorthand Syntax (Most Common)**

You can use empty HTML tags: `<>` and `</>`. This is what you will see in 99% of modern React code.

```jsx
import React from "react";

function UserDetails() {
  return (
    <>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </>
  );
}
```

_When this renders in the browser, only the `<h2>` and `<p>` will exist. The `<></>` vanishes._

#### **2. The Explicit Syntax (`React.Fragment`)**

You can also write out the full name.

```jsx
import React, { Fragment } from "react";

function UserDetails() {
  return (
    <Fragment>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </Fragment>
  );
}
```

---

### **When MUST you use the Explicit Syntax?**

You can almost always use the `<></>` shorthand, with **one exception**: when you are looping through an array to render a list of items.

In React, every item in a list needs a unique `key` prop. The shorthand `<></>` cannot accept props. If you need to pass a key, you _must_ use the explicit `<React.Fragment>` or `<Fragment>`.

```jsx
function UserList({ users }) {
  return (
    <dl>
      {users.map((user) => (
        // We have to use <Fragment> here because we need to pass a 'key'
        <React.Fragment key={user.id}>
          <dt>{user.name}</dt>
          <dd>{user.bio}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

### **Summary: Why use Fragments instead of Divs?**

1. **Cleaner Code:** It keeps your HTML output clean and semantic.
2. **Better Performance:** Less memory usage and faster rendering because the browser has fewer DOM nodes to process.
3. **Doesn't Break CSS:** Prevents accidental layout bugs when using CSS Grid or Flexbox, which rely on specific parent-child relationships.</Fragment></React.Fragment>

# **What is "State" in React?**

In React, **State** is a built-in memory system for components. It is used to store data or information about the component that can change over time (like a user typing in a form, clicking a "Like" button, or fetching data from an API).

The most important thing to know about state is this: **Whenever a component's state changes, React automatically re-renders that component** to update the user interface with the new data.

Here is how state works in both class-based and function-based components.

---

### **1. State in Class-Based Components (The Old Way)**

In class components, state is always a single JavaScript object. You initialize it inside the `constructor` (or directly as a class property) and update it using a special built-in method called `this.setState()`.

**Key Rule:** You must _never_ modify state directly (e.g., `this.state.count = 1`). You must always use `this.setState()`, which tells React to update the UI.

**Example: A Simple Counter**

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // 1. Initializing state as an object
    this.state = {
      count: 0,
      username: "Alice",
    };
  }

  // 2. Function to update state
  increment = () => {
    // We use this.setState to change the value
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>User: {this.state.username}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
```

_Note: In class components, `this.setState` automatically merges your updates. In the example above, updating `count` does not erase `username`._

---

### **2. State in Function-Based Components (The Modern Way)**

Functional components don't have built-in state objects. Instead, you use a React **Hook** called `useState`.

The `useState` hook returns an array with exactly two items:

1. The current state value.
2. A function that lets you update it.

**Example: A Simple Counter**

```jsx
import React, { useState } from "react";

function Counter() {
  // 1. Initializing state using the useState Hook
  // 'count' is the value, 'setCount' is the function to update it.
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Alice");

  // 2. Function to update state
  const increment = () => {
    setCount(count + 1); // We call the updater function directly
  };

  return (
    <div>
      <p>User: {username}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default Counter;
```

_Note: You can use `useState` as many times as you want in a single component to create separate pieces of state, which is much cleaner than managing one giant object._

---

### **Summary of Differences**

| Feature              | Function-Based (`useState`)                                                                                       | Class-Based (`this.state`)                                |
| :------------------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **Initialization**   | `const [value, setValue] = useState(initialValue)`                                                                | `this.state = { key: initialValue }`                      |
| **Data Type**        | Can be anything (number, string, boolean, object, array).                                                         | **Must** be an object.                                    |
| **Updating**         | Call the specific updater function (e.g., `setValue(newValue)`).                                                  | Call `this.setState({ key: newValue })`.                  |
| **Updating Objects** | **Replaces** the old state entirely. You must manually copy old data if needed (using the spread operator `...`). | **Merges** the new data with the old state automatically. |
| **Readability**      | High. Very clean, especially with multiple independent variables.                                                 | Lower. Requires boilerplate code and the `this` keyword.  |

### **What are "Props" in React?**

**Props** (short for "properties") are how React components communicate with each other. They are used to pass data from a **Parent** component down to a **Child** component.

If a React component is like a custom JavaScript function, **props are the arguments** you pass into that function. Alternatively, you can think of them like standard HTML attributes (e.g., the `src` attribute in an `<img>` tag or the `href` in an `<a>` tag).

---

### **How Props Work in Function-Based Components**

When you pass data to a child component, React gathers all that data and bundles it into a single JavaScript object. This object is passed to your functional component as its first argument.

Here is a step-by-step look at how to pass and receive props.

#### **1. Passing Props (The Parent Component)**

You pass props to a component exactly like you add attributes to an HTML tag. You can pass strings, numbers, arrays, objects, or even other functions.

```jsx
import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h2>User Directory</h2>
      {/* Passing 'name' (string) and 'age' (number) as props */}
      <UserProfile name="Alice" age={25} />
      <UserProfile name="Bob" age={30} />
    </div>
  );
}

export default App;
```

#### **2. Receiving Props (The Child Component)**

In the child component, you accept the `props` object as an argument and use dot notation to access the data.

```jsx
import React from "react";

function UserProfile(props) {
  return (
    <div className="card">
      {/* Accessing the data using props.propertyName */}
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserProfile;
```

#### **3. The Modern Way: Destructuring Props**

Writing `props.name` and `props.age` over and over can get repetitive. Most React developers use a JavaScript feature called **object destructuring** to unpack the props directly in the function parameters. This makes the code much cleaner.

```jsx
import React from "react";

// Unpacking 'name' and 'age' directly from the props object
function UserProfile({ name, age }) {
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;
```

---

### **The Golden Rule of Props: They are Read-Only**

A component must **never modify its own props**.

Props are strictly for data flowing _down_ the component tree. If you try to write `props.name = "Charlie"` inside the `UserProfile` component, React will throw an error. A component should act like a pure function with respect to its props: if it receives the same exact props, it should always return the same exact UI.

---

### **Props vs. State (A Quick Comparison)**

Because both Props and State hold data, they are often confused. Here is how to tell them apart:

| Feature                | Props                              | State (`useState`)                      |
| :--------------------- | :--------------------------------- | :-------------------------------------- |
| **What is it?**        | Data passed _in_ from a parent.    | A component's _internal_ memory.        |
| **Can it be changed?** | **No** (Immutable/Read-only).      | **Yes** (Mutable via updater function). |
| **Who controls it?**   | The Parent component.              | The Component itself.                   |
| **Analogy**            | A manager giving you instructions. | Your own internal to-do list.           |

---

# **Props**

### **1. What is Prop Drilling?**

**Prop Drilling** (sometimes called "threading") is a situation that happens when you need to pass data from a top-level component down to a deeply nested component.

Because React data only flows downwards (One-Way Data Binding), you are forced to pass the props through every single intermediate component in the middle—**even if those middle components don't need or care about the data.**

#### **The Analogy**

Imagine a Grandparent wants to give a gift to their Grandchild.
Instead of handing it to them directly, the Grandparent gives it to the Parent, and tells the Parent to hand it to the Child. The Parent acts as a "middleman." If there are 5 generations, the gift has to pass through 4 people who don't care about the gift, just to reach the youngest child.

#### **A Code Example of Prop Drilling**

Imagine an app where the root `App` component holds the user's data, but only the tiny `Avatar` component (deep down in the UI) actually needs the user's profile picture.

```jsx
// 1. TOP LEVEL (Has the data)
function App() {
  const user = { name: "Alice", avatarUrl: "/alice.jpg" };
  // App passes user down to Dashboard
  return <Dashboard user={user} />;
}

// 2. MIDDLE LEVEL (Doesn't care about user, but has to pass it)
function Dashboard({ user }) {
  // Dashboard passes user down to Profile
  return <Profile user={user} />;
}

// 3. MIDDLE LEVEL (Doesn't care about user, but has to pass it)
function Profile({ user }) {
  // Profile passes user down to Avatar
  return <Avatar user={user} />;
}

// 4. BOTTOM LEVEL (Finally uses the data!)
function Avatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />;
}
```

### **Why is Prop Drilling a Problem?**

Prop drilling isn't inherently a "bug" (it works perfectly fine!), but as your app grows, it becomes a major headache:

1. **Messy Code:** Components get cluttered with props they don't even use.
2. **Hard to Maintain:** If you rename a prop, or need to pass a _new_ piece of data down the chain, you have to manually update every single component in the middle.
3. **Less Reusable:** The middle components become tightly connected to data they shouldn't even know about.

### **How do we fix Prop Drilling?**

If you only are passing data down 1 or 2 levels, prop drilling is totally fine. But if you are passing data down 5, 10, or 20 levels, React developers use state-management tools to fix it.

These tools allow a deeply nested component to "teleport" or grab data directly from a central vault, skipping the middle components entirely.

- **React Context API:** A built-in React feature for sharing data across the app without passing props.
- **State Management Libraries:** External tools like **Redux**, **Zustand**, or **Recoil** that act as a global database for your app's state.

# **How to Send Data from Child to Parent in React**

In React, we know that data naturally flows downwards (from Parent to Child) using **props**. Because of this "One-Way Data Binding" rule, there is no direct way to send props _upwards_.

However, there is a very standard workaround: **You pass a function from the Parent to the Child as a prop.**

Here is the exact process:

1. The Parent creates a function that takes some data as an argument.
2. The Parent passes that function down to the Child as a prop.
3. The Child calls that function and passes its data into it.
4. The Parent's function runs, and the Parent now has the data!

---

### **Step-by-Step Code Example**

Let's say we have a Parent component that wants to know what the user typed into an input box located inside a Child component.

#### **1. The Child Component**

The Child receives the function via props (we'll call it `onSendData`). When the user types or clicks a button, the Child executes that function and puts its internal data inside the parentheses.

```jsx
import React, { useState } from "react";

function ChildComponent({ onSendData }) {
  const [childText, setChildText] = useState("");

  const handleClick = () => {
    // 3. The Child calls the Parent's function and passes the data!
    onSendData(childText);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h4>Child Component</h4>
      <input
        type="text"
        placeholder="Type a message..."
        value={childText}
        onChange={(e) => setChildText(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}

export default ChildComponent;
```

#### **2. The Parent Component**

The Parent holds the state to store the incoming data. It defines the function and passes it down.

```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // State to hold the data coming from the child
  const [messageFromChild, setMessageFromChild] = useState("No message yet.");

  // 1. The Parent creates a function to handle the incoming data
  const handleDataFromChild = (data) => {
    setMessageFromChild(data);
  };

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>Parent Component</h2>
      <p>
        <strong>Message received:</strong> {messageFromChild}
      </p>

      <hr />

      {/* 2. The Parent passes the function to the Child as a prop */}
      <ChildComponent onSendData={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;
```

# **What is "Lifting State Up"?**

Since we just talked about sending data from a Child to a Parent, you actually already know half of how this works!

**Lifting State Up** is a core React pattern used when two or more sibling components need to share the exact same data. Because React enforces "One-Way Data Binding" (data only flows down), **siblings cannot talk to each other directly.**

To solve this, you take the state out of the children and **"lift" it up to their closest common Parent component**. The Parent then becomes the single source of truth and passes that data down to the children via props.

---

### **The Problem: Siblings Can't Communicate**

Imagine you have a `CheckoutPage` (Parent) that renders two components:

1. `<PromoCodeInput/>` (Sibling A)
2. `<OrderSummary/>` (Sibling B)

If the user types a discount code into Sibling A, Sibling B needs to know about it to update the final price. But Sibling A cannot send props sideways to Sibling B.

### **The Solution: Lift the State to the Parent**

#### **The Analogy**

Imagine two siblings in the backseat of a car who aren't allowed to talk to each other. If Sibling A wants to share a snack with Sibling B, they have to hand it up to the Parent driving the car, and the Parent reaches back to hand it to Sibling B.

#### **Step-by-Step Code Example**

Let's build a simple app where typing in one component (Child A) instantly updates the text in another component (Child B).

**1. Sibling A: The Input Component**
This component doesn't own the state. It just receives the current text and a function to update it from the Parent.

```jsx
import React from "react";

// Receives 'text' and 'onTextChange' as props from the Parent
function TextInput({ text, onTextChange }) {
  return (
    <div style={{ padding: "10px", border: "2px solid blue" }}>
      <h3>Input (Sibling A)</h3>
      <input
        type="text"
        value={text}
        // When typing, it calls the Parent's function
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
```

**2. Sibling B: The Display Component**
This component also doesn't own the state. It just receives the text from the Parent and displays it.

```jsx
import React from "react";

// Receives 'text' as a prop from the Parent
function TextDisplay({ text }) {
  return (
    <div
      style={{ padding: "10px", border: "2px solid red", marginTop: "10px" }}
    >
      <h3>Display (Sibling B)</h3>
      <p>
        The user is typing: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default TextDisplay;
```

**3. The Parent: The Common Ancestor**
This is where the magic happens. The Parent holds the state and distributes it. It passes the updater function to Sibling A, and the actual data to Sibling B.

```jsx
import React, { useState } from "react";
import TextInput from "./TextInput";
import TextDisplay from "./TextDisplay";

function ParentApp() {
  // 1. We "lifted" the state up to the Parent
  const [sharedText, setSharedText] = useState("");

  // 2. A function to update the state
  const handleTextChange = (newText) => {
    setSharedText(newText);
  };

  return (
    <div style={{ padding: "20px", border: "2px solid green" }}>
      <h2>Parent Component (Single Source of Truth)</h2>

      {/* 3. Pass the data AND the updater function to Sibling A */}
      <TextInput text={sharedText} onTextChange={handleTextChange} />

      {/* 4. Pass JUST the data to Sibling B */}
      <TextDisplay text={sharedText} />
    </div>
  );
}

export default ParentApp;
```

### **Summary of the Flow:**

1. User types "Hello" into `<TextInput/>` (Sibling A).
2. `<TextInput/>` fires its `onChange` event and calls `onTextChange("Hello")`.
3. That triggers the Parent's `handleTextChange` function.
4. The Parent updates its `sharedText` state using `setSharedText`.
5. Because the Parent's state changed, **React re-renders the Parent and all of its children.**
6. `<TextDisplay/>` (Sibling B) receives the new "Hello" prop and updates the screen.

# **How Lists Work in React**

In React, there are no special built-in HTML tags for looping (like you might find in other frameworks). Because React is heavily based on plain JavaScript, you use standard JavaScript array methods to render lists—most commonly, the **`.map()`** function.

The goal is simple: You take an array of data, and you transform it into an array of JSX elements.

---

### **1. The Basics: Using `.map()**`

The `.map()` function goes through an array item by item, applies a function to each one, and returns a completely new array. In React, we use it to turn data strings or objects into HTML tags.

**Example: A Simple List of Strings**
Notice how we wrap the `fruits.map()` inside curly braces `{}`. This is required because we are writing JavaScript logic inside JSX.

```jsx
import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {/* We loop through the array and return an <li> for each fruit */}
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
```

---

### **2. The Golden Rule of Lists: The `key` Prop**

If you look closely at the code above, you will see `key={index}` attached to the `<li>` tag.

Whenever you render a list in React, **every item must have a unique `key` prop.** If you forget to add it, the list will still render, but React will complain in your browser console with a red warning.

#### **Why does React need keys?**

React uses the Virtual DOM to efficiently update the screen. If a list changes (e.g., you delete an item, add a new one, or reorder them), React needs to know _exactly_ which item was changed so it doesn't have to re-draw the entire list from scratch. The `key` acts as a unique ID tag for that specific element.

#### **What should you use as a key?**

1. **Unique IDs (Best Practice):** Always use a unique identifier from your database if you have one (e.g., `user.id` or `post.uuid`).
2. **Array Index (Last Resort):** You can use the loop index (0, 1, 2...) as a key, but **only** if the list is static (it will never be reordered, filtered, or changed). If the list order changes, using indexes can cause bizarre bugs where the wrong data is shown on the screen.

---

### **3. A Real-World Example: Array of Objects**

In actual applications, you will rarely map over simple strings. You will usually fetch an array of objects from a database and map them into custom child components.

Here is how you render a list of users, passing the data down as props.

```jsx
import React from "react";

// 1. The Child Component (represents a single item)
function UserCard({ name, role }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}

// 2. The Parent Component (contains the list)
function UserDirectory() {
  // A mock array of data (usually this comes from an API)
  const users = [
    { id: 101, name: "Alice", role: "Admin" },
    { id: 102, name: "Bob", role: "Editor" },
    { id: 103, name: "Charlie", role: "Viewer" },
  ];

  return (
    <div>
      <h2>Company Directory</h2>

      {/* Map through the 'users' array */}
      {users.map((user) => (
        <UserCard
          key={user.id} // The unique key (React needs this!)
          name={user.name} // Passing data as props
          role={user.role} // Passing data as props
        />
      ))}
    </div>
  );
}

export default UserDirectory;
```

### **Summary of Steps for Rendering Lists:**

1. Get your array of data.
2. Open a set of curly braces `{}` inside your JSX.
3. Call `.map()` on your array.
4. Return the HTML element or React Component you want to display.
5. Attach a unique `key` prop to the outermost element you are returning.

# **What is Reconciliation?**

In React, **Reconciliation** is the behind-the-scenes algorithm that React uses to decide how to update the user interface efficiently.

To understand reconciliation, you first have to understand the problem it solves: **Updating the Real DOM is slow.** If you have a massive webpage and change one small text block, tearing down the entire HTML structure and rebuilding it from scratch would cause the webpage to freeze or lag.

Reconciliation is React’s smart "diffing" (finding the differences) process that ensures only the exact elements that changed are updated on the screen.

---

### **The Analogy: The Architect's Blueprints**

Imagine you own a house (the **Real DOM**), and you want to add a new window to the living room.

1. **The Bad Way (Vanilla JS):** You demolish the entire house and rebuild it from the ground up, just to include the new window.
2. **The React Way (Reconciliation):** You have a blueprint of your house (the **Virtual DOM**). You draw a _second_ blueprint showing the house with the new window. You lay the two blueprints on top of each other, compare them, and realize: _"Ah, the only difference is this one wall."_ You go to the physical house and cut a hole for just that one window. The rest of the house is untouched.

---

### **How the Reconciliation Process Works (Step-by-Step)**

When a component's State or Props change, React triggers the reconciliation process. It happens in three main phases:

#### **1. The Render Phase**

When state changes, React calls your component function again. It looks at the new data and generates a brand-new **Virtual DOM** tree. (The Virtual DOM is just a lightweight JavaScript object that describes what the UI _should_ look like).

#### **2. The Diffing Phase**

React now has two Virtual DOM trees:

- The **Old Tree** (what is currently on the screen).
- The **New Tree** (what needs to be on the screen).

React runs a highly optimized algorithm to compare these two trees and figure out exactly what changed.

#### **3. The Commit Phase**

Once React has a strict list of the differences (e.g., "Change the text of this `<p>` tag" or "Add a new `<li>` to this list"), it reaches out to the **Real DOM** and applies _only_ those specific updates.

---

### **React's "Diffing" Rules**

Comparing two massive trees node-by-node is mathematically very slow. To make reconciliation blazingly fast, React uses a few strict heuristics (shortcut rules):

- **Rule 1: Different Element Types = Rebuild**
  If React sees that an element tag has changed (for example, a `<div>` changed into an `<span>`, or an `<Article>` component changed into a `<Header>` component), React won't even bother looking inside. It will immediately tear down the old element and its children, and build the new one from scratch.
- **Rule 2: Same Element, Different Attributes = Update**
  If the element type is the same (e.g., an `<img>` is still an `<img>`), React keeps the element on the screen and only updates the attributes that changed.
  _(Example: If the `src` attribute changes, React just swaps the image file, but leaves the HTML tag in place)._
- **Rule 3: The Magic of "Keys" in Lists**
  Remember when we discussed lists and the `key` prop? This is exactly where keys are used!
  If you have a list of 100 items and you insert a new item at the very top, React might get confused and think it needs to rebuild all 100 items. By providing a unique `key` to each item, you tell React: _"Item 101 is new, but Items 1-100 are exactly the same."_ React uses those keys during the diffing phase to skip unnecessary work.

# **What is a Controlled Form?**

In traditional HTML, form elements (like `<input>`, `<textarea>`, and `<select>`) maintain their own internal memory. When you type into an HTML input, the browser updates the DOM itself.

In React, we want our components to be the **"Single Source of Truth."**

A **Controlled Form** is a pattern where React completely takes over the form. The input field's value is driven entirely by a React state variable (`useState`). The input cannot change unless the React state changes first.

#### **The Puppeteer Analogy**

Think of a controlled input like a marionette puppet. The input field is the puppet, and React State is the puppeteer. The input cannot move or display new text on its own; it only updates when the puppeteer (the state) pulls the strings.

---

### **How to Build a Controlled Input (Step-by-Step)**

There are three mandatory pieces to make an input "controlled":

1. **State:** You need a `useState` variable to hold the input's current value.
2. **The `value` Prop:** You must bind the input's `value` attribute directly to that state variable.
3. **The `onChange` Event:** You must provide a function that updates the state every time the user presses a key.

#### **Example: A Single Controlled Input**

```jsx
import React, { useState } from "react";

function NameForm() {
  // 1. Create the state
  const [name, setName] = useState("");

  const handleChange = (event) => {
    // event.target.value contains the exact letter(s) the user just typed
    // 3. Update the state with the new keystroke
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Stops the page from refreshing
    alert(`Submitting Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name} // 2. Bind the value to state
          onChange={handleChange} // 3. Fire the updater function on every keystroke
        />
      </label>
      <button type="submit">Submit</button>

      {/* Because it's controlled, we can instantly display the value! */}
      <p>Live preview: {name}</p>
    </form>
  );
}

export default NameForm;
```

---

### **Handling Multiple Inputs (Best Practice)**

If you have a form with 10 fields (Name, Email, Password, Age, etc.), creating 10 separate `useState` variables gets very messy.

Instead, the standard practice is to use **a single state object** to hold all the form data. You give each `<input>` a `name` attribute, and use that `name` to dynamically update the correct property in your state object.

#### **Example: A Multi-Field Controlled Form**

```jsx
import React, { useState } from "react";

function SignupForm() {
  // 1. One state object for the whole form
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 2. A single, reusable change handler
  const handleChange = (event) => {
    // Extract the 'name' and 'value' from the input that triggered the event
    const { name, value } = event.target;

    // Update the state object dynamically
    setFormData((prevData) => ({
      ...prevData, // Copy all the existing data
      [name]: value, // Update ONLY the field that the user is currently typing in
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data ready to send to server:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username" // Matches the state key!
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <br />
      <input
        type="email"
        name="email" // Matches the state key!
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        name="password" // Matches the state key!
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignupForm;
```

### **Why go through this effort?**

At first glance, it seems like a lot of extra typing just to get a form working. However, controlling your forms unlocks powerful features instantly:

- **Instant Validation:** You can prevent a user from typing numbers into a name field _as they type_, or instantly highlight a password that is too short.
- **Conditional UI:** You can easily disable the "Submit" button until all required fields are filled out.
- **Ready-to-Send Data:** When the user clicks submit, you don't have to scrape the DOM to find what they typed. All their data is already perfectly packaged in your `formData` state object, ready to be sent to your database.

---

Now that you have state and forms down, the next major hurdle is understanding how React interacts with the outside world (like fetching data from a real database). Would you like to explore how to handle "side effects" using the **`useEffect` Hook**?

# **CSS in React**

### **1. Inline CSS**

Inline styling in React is similar to inline styling in standard HTML, but with one massive difference: **you do not pass a string; you pass a JavaScript object.**

Because you are writing JavaScript, you cannot use standard CSS kebab-case (like `background-color`). You must write the properties in **camelCase** (like `backgroundColor`).

#### **How it works:**

You define a JavaScript object containing your styles and pass it directly to the `style` prop of your JSX element.

#### **Code Example:**

```jsx
import React, { useState } from "react";

function AlertBox() {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Define the styles as a JavaScript object
  const boxStyle = {
    backgroundColor: "darkblue",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    // You can dynamically change styles using JavaScript logic!
    border: isHovered ? "3px solid yellow" : "3px solid transparent",
  };

  return (
    <div
      style={boxStyle} // 2. Attach the object to the style prop
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>Inline Styled Box</h3>
      <p>My styles live inside the component.</p>
    </div>
  );
}

export default AlertBox;
```

- **When to use it:** When you have a style that changes dynamically based on state (like a progress bar's width changing from `10%` to `50%`).
- **When to avoid it:** For general styling. It makes your component files massive, and you **cannot** use CSS features like `:hover`, `::before`, or `@media` queries inside an inline style object.

---

### **2. Global CSS (Standard CSS)**

This is the traditional way you are probably used to from plain HTML/JS web development. You write your CSS in a `.css` file and import it directly into your React component.

#### **How it works:**

Once you import a standard CSS file into _any_ component, React injects those styles into the `<head>` of the actual webpage. **This means the styles become global.**

#### **Code Example:**

**`styles.css`**

```css
/* These styles will apply everywhere in the app */
.global-card {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.title {
  color: red;
}
```

**`UserProfile.jsx`**

```jsx
import React from "react";
import "./styles.css"; // 1. Import the file directly

function UserProfile() {
  return (
    // 2. Use standard class names (but write 'className' instead of 'class'!)
    <div className="global-card">
      <h2 className="title">User Profile</h2>
    </div>
  );
}

export default UserProfile;
```

- **When to use it:** For absolute global rules like `body` background colors, typography resets, or setting up global CSS variables (`:root`).
- **When to avoid it:** For styling specific components. Because everything is global, if you have a `.title` class in your `UserProfile.jsx` and you later create a completely different `.title` class for your `SettingsPage.jsx`, **they will collide** and overwrite each other.

---

### **3. CSS Modules (Scoped CSS)**

CSS Modules were created specifically to solve the "global collision" problem mentioned above. They allow you to write normal CSS, but React automatically makes the class names **unique to that specific component**.

#### **How it works:**

You must name your file with the `.module.css` extension (e.g., `Button.module.css`). When you import it, React takes your class names and generates a random, unique hash for them in the browser (e.g., your `.card` class becomes `.card_1x8g9`).

#### **Code Example:**

**`ProductCard.module.css`**

```css
/* This looks like normal CSS */
.card {
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.title {
  color: green;
}
```

**`ProductCard.jsx`**

```jsx
import React from "react";
// 1. Import the styles as a JavaScript object (usually named 'styles')
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    // 2. Access the class names using dot notation
    <div className={styles.card}>
      <h2 className={styles.title}>Laptop</h2>
    </div>
  );
}

export default ProductCard;
```

- **When to use it:** This is the **best practice** for traditional CSS in React. It guarantees that the styles you write for your `ProductCard` will never accidentally mess up your `UserProfile` component, even if they both use a class named `.title`.
- **When to avoid it:** If you dislike having to switch back and forth between two separate files (a `.jsx` file and a `.module.css` file) while building a single component.

---

# **10 — Todo App (Putting It All Together)**

The Todo App in `src/allTopics/10_todoApp/` is a **mini full-stack UI pattern** built only with React. It combines almost everything you have learned so far: **state**, **lifting state up**, **controlled forms**, **lists with keys**, **props**, **callbacks from child to parent**, and **CSS Modules**.

Think of this folder as your first "real" project structure—not one giant file, but multiple focused components that work together.

---

### **Folder Structure**

```text
10_todoApp/
├── TodoWrapper.jsx          ← Parent: owns ALL state & logic
├── TodoWrapper.module.css
├── CreateTodo/
│   ├── CreateTodo.jsx       ← Child: input form only
│   └── CreateTodo.module.css
└── DisplayTodo/
    ├── DisplayTodo.jsx      ← Child: renders the list
    └── DisplayTodo.module.css
```

| File | Responsibility |
|------|----------------|
| **`TodoWrapper.jsx`** | Single source of truth: `todo`, `allTodos`, `editTodoId`. Handles create, update, delete, edit, and `localStorage`. |
| **`CreateTodo.jsx`** | Controlled input + submit button. Does not own state—it receives `todo`, `setTodo`, and `handleCreateTodo` from the parent. |
| **`DisplayTodo.jsx`** | Maps over `allTodos` and shows Edit/Delete buttons. Calls parent handlers via props. |

---

### **The Architecture: Lifting State Up in Practice**

`CreateTodo` and `DisplayTodo` are **siblings**. They cannot share state directly. So `TodoWrapper` holds everything:

```jsx
const [todo, setTodo] = useState("");                    // current input text
const [allTodos, setAllTodos] = useState(() => { ... }); // full list
const [editTodoId, setEditTodoId] = useState(null);      // null = create mode, id = edit mode
```

**Data flow:**

1. **Down:** Parent passes `todo`, `setTodo`, `allTodos`, and handler functions as props.
2. **Up:** Children never mutate the list themselves—they call `handleCreateTodo`, `handleDeleteTodo`, or `handleEditTodo` defined in the parent.

This is the same "car backseat" pattern from **Lifting State Up**, applied to a production-style layout.

---

### **Todo Object Shape**

Each todo is a plain JavaScript object stored in an array:

```js
{ id: 1735123456789, text: "Learn React" }
```

- **`id`:** Created with `Date.now()` so each item has a unique, stable `key` for `.map()`.
- **`text`:** The trimmed string from the controlled input (`todo.trim()`).

---

### **Controlled Form in `CreateTodo`**

The input is fully controlled by parent state:

```jsx
<input
  type="text"
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/>
<button>{editTodoId ? "Update" : "Create"}</button>
```

The button label switches based on **`editTodoId`**: if you are editing an existing todo, the same form acts as an **update** form instead of **create**.

---

### **Create vs Update (Edit Mode)**

`handleCreateTodo` in `TodoWrapper` does two jobs depending on `editTodoId`:

**A. Update path** (when `editTodoId` is set):

1. Map over `allTodos` and replace the matching `id` with `{ ...ele, text: todo.trim() }`.
2. Save to `localStorage`, clear input, set `editTodoId` back to `null`.

**B. Create path** (when `editTodoId` is `null`):

1. Build `newTodo = { id: Date.now(), text: todo.trim() }`.
2. Read existing array from `localStorage`, `push` the new item, save, update `allTodos`.
3. Clear input with `setTodo("")`.

Using one submit handler for both operations is common in small apps—it avoids duplicating two separate forms.

---

### **Delete and Edit**

**Delete** — immutable filter pattern:

```jsx
const handleDeleteTodo = (id) => {
  let filteredTodos = [...allTodos].filter((ele) => ele.id !== id);
  setAllTodos(filteredTodos);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
};
```

**Edit** — "hydrate" the form from the list:

```jsx
const handleEditTodo = (id) => {
  const todoToBeEdited = allTodos.find((ele) => ele.id === id);
  setTodo(todoToBeEdited.text);  // fill the input
  setEditTodoId(id);             // switch submit to "Update"
};
```

---

### **Rendering the List (`DisplayTodo`)**

```jsx
{allTodos.map((todo) => {
  let { id, text } = todo;
  return (
    <div key={id} className={style.todo}>
      <h3>{text}</h3>
      <button onClick={() => handleEditTodo(id)}>Edit</button>
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
    </div>
  );
})}
```

- **`key={id}`** — required for reconciliation when items are added, removed, or reordered.
- **Empty state** — if `allTodos.length === 0`, show `"No Todos Available"`.

---

### **Persisting Data with `localStorage`**

The browser's **`localStorage`** API stores strings that survive page refreshes.

**Load on first render (lazy initializer):**

```jsx
const [allTodos, setAllTodos] = useState(() => {
  let todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
});
```

Using a **function** inside `useState` means this read runs **once** on mount, not on every re-render.

**Save after every change:**

```jsx
localStorage.setItem("todos", JSON.stringify(updatedTodos));
```

| Method | Purpose |
|--------|---------|
| `localStorage.getItem("todos")` | Read saved JSON string (or `null` if empty). |
| `JSON.parse(...)` | Turn string back into a JavaScript array. |
| `JSON.stringify(...)` | Turn array into a string before saving. |
| `localStorage.setItem("todos", ...)` | Write to disk in the browser. |

**Important:** React state (`allTodos`) is what drives the UI **right now**. `localStorage` is the **backup** so data survives a refresh. Always update **both** when the list changes, or the UI and storage will get out of sync.

---

### **CSS Modules in This App**

Each component imports its own scoped file:

```jsx
import style from "./TodoWrapper.module.css";
// ...
<main className={style.wrapper}>
```

`TodoWrapper.module.css` handles the page layout (`wrapper`, `heading`). `CreateTodo` and `DisplayTodo` have their own `.module.css` files for the form and list cards—no class name collisions with the rest of the app.

---

### **Summary: What the Todo App Teaches**

1. Split UI into **smart parent** + **dumb children**.
2. One controlled input can serve **create** and **update** flows.
3. Lists need **`.map()`**, **`key`**, and immutable updates (`filter`, `map`).
4. **`localStorage`** + `JSON.parse` / `JSON.stringify` for persistence.
5. **CSS Modules** keep styles local per component.

---

# **11 — Uncontrolled Forms**

In `src/allTopics/11_UncontrolledForms/UncontrolledForms.jsx`, you learn the **opposite** pattern from Topic 08 (Controlled Forms).

| | **Controlled** | **Uncontrolled** |
|---|----------------|------------------|
| **Who owns the value?** | React state (`useState`) | The DOM / browser |
| **How you read input** | `formData.email` from state | `ref.current.value` on submit |
| **Required on `<input>`** | `value` + `onChange` | `ref` (no `value` prop) |
| **Live preview while typing** | Easy (`{name}` in JSX) | Harder—you must read the DOM |
| **Best for** | Validation, dynamic UI, most React forms | Simple forms, integrating non-React libraries, file inputs |

---

### **The Analogy**

- **Controlled:** You type into a notebook **you** hold; React reads the notebook on every keystroke.
- **Uncontrolled:** The user writes on a sticky note attached to the DOM; you only **pick up the note** when they click Submit (`useRef`).

---

### **The `useRef` Hook**

`useRef` creates a **mutable box** that persists across re-renders but **does not** trigger a re-render when its contents change.

```jsx
const emailRef = useRef(null);
```

Attach it to an input:

```jsx
<input type="email" ref={emailRef} />
```

After the component mounts, `emailRef.current` points to the **actual DOM `<input>` element**. You can read:

```jsx
emailRef.current.value
```

---

### **Full Flow in Your Workspace Code**

```jsx
import { useRef } from "react";

const UncontrolledForms = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(newUser);

    // Clear the DOM inputs directly (no setState needed)
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <button>Submit</button>
    </form>
  );
};
```

**Step-by-step:**

1. User types — browser updates the DOM; React state is untouched.
2. User submits — `handleSubmit` runs.
3. `e.preventDefault()` stops a full page reload.
4. Read values from `emailRef.current.value` and `passwordRef.current.value`.
5. Build `newUser` and log (or send to an API).
6. Reset fields by assigning `""` to `.value` on the DOM nodes.

---

### **When to Choose Uncontrolled**

- Very simple login/search forms where you only care about values **on submit**.
- Integrating with third-party DOM plugins that expect to own the input.
- Avoiding re-renders on every keystroke in huge forms (rare concern today).

**Default in modern React:** prefer **controlled** forms unless you have a clear reason not to.

---

# **12 — Component Lifecycle**

Lifecycle describes **what happens to a component from birth to death**: when it appears on screen, when it updates, and when it is removed.

In `src/allTopics/12_LifeCycle/` you have two implementations of the same ideas:

| File | Component type | API |
|------|----------------|-----|
| `LifeCycleInFBC.jsx` | Function-based | `useEffect` |
| `LifeCycleInCBC.jsx` | Class-based | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |

---

### **The Three Lifecycle Phases (Conceptual)**

```text
MOUNT   → Component is created and inserted into the DOM (first appearance)
UPDATE  → State or props changed; component re-renders
UNMOUNT → Component is removed from the DOM (destroyed)
```

**Typical use cases:**

- **Mount:** Fetch data, subscribe to WebSocket, start a timer, read `localStorage`.
- **Update:** React to prop/state changes (sync document title, log analytics).
- **Unmount:** Clean up timers, listeners, or subscriptions so you do not leak memory.

---

### **Function Components: `useEffect`**

`useEffect` runs **after** React paints the UI. It replaces the old class lifecycle methods in function components.

#### **1. Mount only — empty dependency array `[]`**

Runs **once** after the first render (like `componentDidMount`):

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

Your `LifeCycleInFBC` uses this to log when the component first appears.

---

#### **2. Update — dependency array with values `[count]`**

Runs after **every render where `count` changed** (like `componentDidUpdate`, but scoped):

```jsx
useEffect(() => {
  if (initailRender) {
    setInitialRender(false);
    return;
  }
  console.log("Component Updated");
}, [count]);
```

**Why the `initailRender` flag?**

On the **first** render, `count` is already in the dependency array, so this effect would run immediately and log "Updated" even though nothing changed yet. The pattern:

1. First run: `initailRender` is `true` → set it to `false` and `return` early (skip the log).
2. Later runs: only when `count` actually changes → log `"Component Updated"`.

This is a common teaching trick to **skip the first effect run** when you only want "updates," not "mount."

---

#### **3. Unmount — cleanup function**

Return a function from `useEffect` to run cleanup when the component is removed (like `componentWillUnmount`):

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("API CALLED");
  }, 2000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

Your class component does the same cleanup in `componentWillUnmount` with `clearInterval(this.intervalId)`.

---

### **Class Components: Lifecycle Methods**

`LifeCycleInCBC.jsx` shows the classic API:

| Method | When it runs |
|--------|----------------|
| **`constructor`** | Before first render; initialize `this.state`. |
| **`render`** | Every time React needs to draw UI (logs `"I am render"`). |
| **`componentDidMount`** | After first paint; start `setInterval` (simulated API every 2s). |
| **`componentDidUpdate`** | After every re-render when state/props changed. |
| **`componentWillUnmount`** | Right before removal; `clearInterval` cleanup. |

```jsx
componentDidMount() {
  this.intervalId = setInterval(() => {
    console.log("API CALLED");
  }, 2000);
}

componentWillUnmount() {
  clearInterval(this.intervalId);
}
```

**Rule:** Anything you start in `componentDidMount` (timers, listeners) should be **stopped** in `componentWillUnmount`.

---

### **Seeing Unmount in `App.jsx`**

Your `App.jsx` demonstrates unmounting with a toggle:

```jsx
const [toggle, setToggle] = useState(false);

<button onClick={handleToggle}>toggle me</button>
{toggle && <LifeCycleInCBC />}
```

When `toggle` becomes `false`, React **removes** `LifeCycleInCBC` from the tree → `componentWillUnmount` fires → interval is cleared. If you skip cleanup, the timer keeps running in the background even though the UI is gone (**memory leak**).

---

### **FBC vs CBC Lifecycle Mapping**

| Phase | Class-based | Function-based (`useEffect`) |
|-------|-------------|------------------------------|
| Mount | `componentDidMount` | `useEffect(() => { ... }, [])` |
| Update | `componentDidUpdate` | `useEffect(() => { ... }, [dep1, dep2])` |
| Unmount | `componentWillUnmount` | `return () => { ... }` inside `useEffect` |

Modern React codebases almost always use **function components + hooks**. Class lifecycle methods still appear in older codebases and interviews, so knowing both is valuable.

---

### **Summary**

1. **Lifecycle** = mount, update, unmount.
2. **`useEffect`** handles side effects in function components; dependencies control **when** it re-runs.
3. **Cleanup** (return function from `useEffect` or `componentWillUnmount`) prevents leaked timers and listeners.
4. **Simulated API polling** in `LifeCycleInCBC` with `setInterval` is a stand-in for real `fetch` calls you will wire up later.