// Interview Preparation - 12/11/2025
// Converted into a single JavaScript reference file

// -------------------------------------------------
// Q1: Event Bubbling
// -------------------------------------------------
// Event bubbling means an event triggers on the target element
// and then moves upward through its parent elements.

function eventBubblingExample() {
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.addEventListener("click", () => console.log("Parent clicked"));
  child.addEventListener("click", (e) => {
    console.log("Child clicked");
    // e.stopPropagation();
  });
}

// -------------------------------------------------
// Q2: Debouncing
// -------------------------------------------------
// Ensures a function runs only AFTER a delay of no repeated triggers.

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example usage:
const handleSearch = debounce(() => console.log("Searching..."), 500);

// -------------------------------------------------
// Q3: Throttling
// -------------------------------------------------
// Ensures a function runs once in a given time interval.

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// Example usage:
const handleScroll = throttle(() => console.log("Scrolling..."), 1000);

// -------------------------------------------------
// Q4 + Q5: Event Loop + Microtask Queue
// -------------------------------------------------
function eventLoopDemo() {
  console.log("Start");

  setTimeout(() => console.log("Timeout"), 0); // macrotask

  Promise.resolve().then(() => console.log("Promise")); // microtask

  console.log("End");
}

// Output: Start → End → Promise → Timeout

// -------------------------------------------------
// Q6: Redux / Redux Toolkit Explanation
// -------------------------------------------------
// Redux Flow: UI → dispatch(action) → reducer → store updates → UI re-renders

// Basic Redux Toolkit slice example:
/*
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    }
  }
});
*/

// -------------------------------------------------
// Q7: useEffect lifecycle mapping
// -------------------------------------------------
// Mount = useEffect(() => {...}, [])
// Update = useEffect(() => {...}, [dependency])
// Unmount = return () => {...} inside useEffect

// -------------------------------------------------
// Q8: SCSS Example
// -------------------------------------------------
// SCSS Code Example:
// $primary: #4f46e5;
// .btn {
//   background: $primary;
//   &:hover {
//     background: darken($primary, 10%);
//   }
// }

// -------------------------------------------------
// Q9: Webpack Mini Config
// -------------------------------------------------
// module.exports = {
//   entry: './src/index.js',
//   output: { filename: 'bundle.js', path: __dirname + '/dist' },
//   module: {
//     rules: [ { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] } ]
//   }
// };

// -------------------------------------------------
// Q10: Prepend "Mr" to names array
// -------------------------------------------------
const names = ["Vishal", "Mohan", "Subramani"];
const updatedNames = names.map((n) => "Mr " + n);
console.log(updatedNames);

// -------------------------------------------------
// Additional React Example (state update)
// -------------------------------------------------
// setNames(prev => prev.map(name => "Mr " + name));

// END OF FILE
