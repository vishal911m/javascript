/* 
Frontend Developer Mock Interview – Answers (2 Years Experience)
Author: Vishal
*/


// Q1: Difference between section, article and div in semantic HTML
/*
section: A thematic grouping of related content (ex: About, Contact).
article: Independent, self-contained content (ex: blog post).
div: Non-semantic wrapper used only for layout/grouping.
*/


// Q2: What is reflow and repaint?
/*
Reflow: Browser recalculates layout (position, size). Expensive.
Repaint: Browser updates visuals (color, background) without layout change.
*/


// Q3: Output of CSS priority?
/*
<p id="p1" class="text">Hello</p>

p {color: blue}
.text{color: green;}
#p1{color: red;}

ANSWER → red (ID selector has highest specificity)
*/


// Q4: Use of meta charset?
/*
<meta charset="UTF-8"> defines character encoding.
Ensures browser correctly displays symbols, emojis, multilingual text.
*/


// Q5: Difference between localStorage, sessionStorage, cookies?
/*
localStorage: Persistent, survives browser close. (5–10 MB)
sessionStorage: Removed when tab is closed.
cookies: Small (4 KB), sent with every HTTP request. Can set expiry.
*/


// Q6: What is z-index?
/*
Controls stacking order of positioned elements (higher z-index = top).
*/


// Q7: Difference between flexbox and grid?
/*
Flexbox: One-dimensional (row OR column).
Grid: Two-dimensional (rows AND columns).
*/


// Q8: Difference between var, let, const?
/*
var: Function-scoped, hoisted, can re-declare.
let: Block-scoped, hoisted but in TDZ, cannot re-declare.
const: Block-scoped, cannot reassign.
*/


// Q9: Event loop output?
console.log("A");
setTimeout(()=> console.log("B"), 0);
Promise.resolve().then(()=>console.log("C"));
console.log("D");

/*
ORDER → A, D, C, B  
(Microtask before Macrotask)
*/


// Q10: Output?
console.log(x);
var x = 5;

/*
ANSWER → undefined 
(hoisting brings var x to top but undefined)
*/


// Q11: Output using closure (fix var issue)
for (var i = 0; i < 3; i++){
  (function(i){
    setTimeout(()=> console.log(i), 1000);
  })(i)
}

/*
Output → 0, 1, 2
*/


// Q12: Output explanations
/*
console.log(1 + "2" + "2");  → "122"
console.log(1 + +"2" + "2"); → "32"
console.log(1 + - "1" + "2"); → "02"
console.log(+"1" + "1" + "2"); → "112"
console.log("A" - "B" + "2"); → "NaN2"
console.log("A" - "B" + 2); → NaN
*/


// Q13: Closure example output
function outer(){
	let count = 0;
	return function inner(){
		return ++count
	};
}
const counter = outer();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3


// Q14: Event loop output
console.log("Start");
setTimeout(()=> console.log("timeout"), 0);
Promise.resolve().then(()=> console.log("promise"));
console.log("end");

/*
Output →
Start
end
promise
timeout
*/


// Q15: Output?
console.log([1,2,3] + [4,5,6]);  // "1,2,3 4,5,6"
console.log([..."hello"]);       // ['h','e','l','l','o']


// Q16: Remove duplicates using Set
const arr = [1,2,3,1,2,3];
const unq = [...new Set(arr)];
console.log(unq); // [1,2,3]


// Q17: Flatten nested array
const nested = [1,2,[3,[6,7]],1,4,2];
const flat = nested.flat(Infinity);
console.log(flat); // [1,2,3,6,7,1,4,2]


// Q18: Lifecycle methods in functional components?
/*
componentDidMount → useEffect(() => {}, [])
componentDidUpdate → useEffect(() => {})
componentWillUnmount → useEffect(() => return () => {})
*/


// Q19: Controlled vs Uncontrolled components?
/*
Controlled: Form value controlled by React state.
Uncontrolled: Value stored in DOM (useRef).
DOM manipulation: Directly changing DOM using JS (not recommended in React).
*/


// Q20: Redux architecture?
/*
Action → describes event
Reducer → pure function that updates state
Store → global state
Dispatch → sends action to reducer
Subscribe → listen for state updates
*/


// Q21: What is Context API?
/*
A React feature to avoid prop drilling and share global data (user auth, theme, language).
*/


// Q22: Lazy loading & Code splitting?
/*
Lazy loading: Load component only when needed.
Code splitting: Split bundle to improve performance (React.lazy + Suspense).
*/


// Q23: Error boundaries?
/*
React components that catch JavaScript errors in UI.
Created using class components with:
componentDidCatch() and getDerivedStateFromError()
*/
