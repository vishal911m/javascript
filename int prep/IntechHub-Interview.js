/**
 * IntechHub Interview Preparation
 * Date: 13/11/2025
 * Format: JavaScript file containing interview theory + examples
 * Includes React, JS, HTML, CSS concepts
 */

// -------------------------------------------------------------------
// Q1: Create a React App – Two Inputs + Submit + Second Page
// -------------------------------------------------------------------

/**
 * Requirement:
 * Home page → enter username + password → on submit → navigate to Page 2
 * Page 2 displays → "Hello! username"
 *
 * Example Code:
 *
 * // Home.jsx
 * import { useState } from "react";
 * import { useNavigate } from "react-router-dom";
 *
 * export default function Home() {
 *   const [username, setUsername] = useState("");
 *   const [password, setPassword] = useState("");
 *   const navigate = useNavigate();
 *
 *   const handleSubmit = () => {
 *     navigate(`/welcome/${username}`);
 *   };
 *
 *   return (
 *     <div>
 *       <input onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
 *       <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
 *       <button onClick={handleSubmit}>Submit</button>
 *     </div>
 *   );
 * }
 *
 * // Welcome.jsx
 * import { useParams } from "react-router-dom";
 *
 * export default function Welcome() {
 *   const { username } = useParams();
 *   return <h1>Hello! {username}</h1>;
 * }
 */


// -------------------------------------------------------------------
// Q2: JavaScript Datatypes – Explanation
// -------------------------------------------------------------------

/**
 * JavaScript Datatypes: 2 Categories
 *
 * I. Primitive Types:
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. BigInt
 * 7. Symbol
 *
 * Example:
 * let age = 25;
 * let name = "Vishal";
 * let isLoggedIn = true;
 * let x;
 * let data = null;
 * let big = 1000000000000n;
 * let id = Symbol("id");
 *
 * II. Non-Primitive (Reference)
 * 1. Object → let user = {name:"John"};
 * 2. Array → let nums = [1,2,3];
 * 3. Function → function greet(){ console.log("Hi"); }
 *
 * Important:
 * - Primitives are copied by VALUE
 * - Objects/arrays/functions are copied by REFERENCE
 */


// -------------------------------------------------------------------
// Q3: Types of Lists in HTML
// -------------------------------------------------------------------

/**
 * HTML supports 3 main types of lists:
 *
 * 1️⃣ Ordered List (<ol>)
 * Items displayed in sequence (1,2,3)
 *
 * <ol>
 *   <li>Step 1</li>
 *   <li>Step 2</li>
 * </ol>
 *
 * 2️⃣ Unordered List (<ul>)
 * Bullet points (●)
 *
 * <ul>
 *   <li>HTML</li>
 *   <li>CSS</li>
 * </ul>
 *
 * 3️⃣ Definition List (<dl>) – Term + Description
 *
 * <dl>
 *   <dt>HTML</dt>
 *   <dd>Markup Language</dd>
 * </dl>
 *
 */


// -------------------------------------------------------------------
// Q4: Tell me about CSS Selectors
// -------------------------------------------------------------------

/**
 * CSS selectors define which HTML elements we want to style.
 *
 * 1. Universal: * { }
 * 2. Type: p { }
 * 3. Class: .card { }
 * 4. ID: #header { }
 * 5. Attribute: input[type="email"] { }
 * 6. Pseudo-Class: button:hover { }
 * 7. Pseudo-Element: p::first-letter { }
 * 8. Combinators:
 *    - Descendant: div p
 *    - Child: div > p
 *    - Adjacent: h1 + p
 *    - Sibling: h1 ~ p
 */


// -------------------------------------------------------------------
// Q5: Suspense + Lazy Loading in React
// -------------------------------------------------------------------

/**
 * Lazy loading → Load components only when needed.
 * Suspense → Show fallback UI while loading.
 *
 * Example:
 *
 * const Dashboard = React.lazy(() => import("./Dashboard"));
 *
 * function App() {
 *   return (
 *     <Suspense fallback={<div>Loading...</div>}>
 *       <Dashboard />
 *     </Suspense>
 *   );
 * }
 *
 * Summary:
 * - React.lazy() → dynamic import
 * - Suspense → fallback loader
 * - Helps reduce bundle size
 */


// -------------------------------------------------------------------
// Q6: React Window (Virtualization)
// -------------------------------------------------------------------

/**
 * React Window renders only visible items instead of full list.
 *
 * Purpose:
 * - Improve performance for large datasets (1000+ items)
 *
 * Example:
 *
 * <FixedSizeList
 *    height={500}
 *    width={300}
 *    itemSize={35}
 *    itemCount={10000}
 * >
 *   {({ index, style }) => (
 *     <div style={style}>Row {index}</div>
 *   )}
 * </FixedSizeList>
 */


// -------------------------------------------------------------------
// Q7: Tell me more about useLayoutEffect()
// -------------------------------------------------------------------

/**
 * useEffect → Runs AFTER painting on screen
 * useLayoutEffect → Runs BEFORE painting (synchronous)
 *
 * useLayoutEffect is used when:
 * - You need to measure DOM before browser paints
 * - You want no visual flicker
 *
 * Example:
 *
 * useLayoutEffect(() => {
 *   const width = boxRef.current.offsetWidth;
 *   console.log("Width:", width);
 * });
 *
 * Summary:
 * - useLayoutEffect blocks visual updates until it finishes
 * - Used for animations, measurements, scroll syncing
 */


// -------------------------------------------------------------------
// QUICK INTERVIEW VERSIONS
// -------------------------------------------------------------------

/**
 * Datatypes (10 seconds):
 * "JS has 7 primitive types like number, string, boolean etc., and 3 reference types: object, array, function.
 * Primitives are stored by value, reference types by memory address."
 *
 * Lists (10 seconds):
 * "HTML lists: ordered (<ol>), unordered (<ul>), and definition (<dl>).
 * Used for structured content."
 *
 * CSS Selectors (10 seconds):
 * "Selectors target HTML elements: element, class, ID, attribute, pseudo-class, and pseudo-element."
 *
 * Suspense + Lazy (10 seconds):
 * "React.lazy loads components only when needed, and Suspense shows fallback UI while loading."
 *
 * useLayoutEffect (10 seconds):
 * "Runs before browser paints. Used for measurements and preventing visual flicker."
 */

