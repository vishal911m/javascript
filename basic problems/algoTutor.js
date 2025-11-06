import React, { useState, useEffect, useRef, useReducer, createContext, useContext, useMemo, lazy, Suspense } from 'react';

// Tailwind-ready, single-file demo of many React patterns requested by the user.
// Default export: App

/***********************
 * 1) Simple Hash Router
 ***********************/
function useHashRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const push = (path) => (window.location.hash = path);
  return { route, push };
}

/***************************
 * 2) Display List of Items
 ***************************/
const ListItem = React.memo(function ListItem({ item, onSelect, isSelected }) {
  // React.memo for performance
  return (
    <li
      role="option"
      aria-selected={isSelected}
      onClick={() => onSelect(item.id)}
      className={`cursor-pointer px-3 py-2 rounded-md ${isSelected ? 'bg-blue-200' : 'hover:bg-gray-100'}`}>
      {item.title}
    </li>
  );
});

function ItemList({ items, onSelect, selectedId }) {
  return (
    <ul role="listbox" className="space-y-2">
      {items.map((it) => (
        <ListItem key={it.id} item={it} onSelect={onSelect} isSelected={it.id === selectedId} />
      ))}
    </ul>
  );
}

/***************************
 * 3) User Input Component
 ***************************/
function UserInput({ onSubmit }) {
  const [text, setText] = useState('');
  const ref = useRef();

  useEffect(() => {
    // autofocus for better UX
    ref.current?.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit(text.trim());
        setText('');
      }}
      className="flex gap-2">
      <label htmlFor="new-item" className="sr-only">
        New item
      </label>
      <input
        id="new-item"
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type new item title"
        className="border rounded-md px-3 py-2 flex-1"
      />
      <button className="btn px-4 py-2 rounded-md bg-blue-600 text-white" type="submit">
        Add
      </button>
    </form>
  );
}

/***************************
 * 4) Fetch Data from API
 ***************************/
function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    let canceled = false;
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((data) => !canceled && setState({ data, loading: false, error: null }))
      .catch((error) => !canceled && setState({ data: null, loading: false, error }));
    return () => (canceled = true);
  }, [url]);
  return state;
}

function RemoteList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
  if (loading) return <div>Loading remote items...</div>;
  if (error) return <div role="alert">Error loading: {String(error)}</div>;
  return <ItemList items={data} onSelect={() => {}} selectedId={null} />;
}

/***************************
 * 5) Simple "Redux-like" State Management
 ***************************/
const initialState = { items: [], selectedId: null };
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] };
    case 'SELECT':
      return { ...state, selectedId: action.payload };
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    default:
      return state;
  }
}

const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // mimic Redux devtools: a memoized store object
  const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

/***************************
 * 6) Common UI Elements
 ***************************/
function Button({ children, ...rest }) {
  return (
    <button {...rest} className="px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-500 disabled:opacity-50">
      {children}
    </button>
  );
}

function Modal({ title, open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 shadow-lg z-10 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close modal" className="text-gray-600">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/***************************
 * 7) Complex UI: Sortable Table + SVG Chart
 ***************************/
function SortableTable({ rows }) {
  const [sortBy, setSortBy] = useState({ key: 'id', dir: 'asc' });
  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      const valA = a[sortBy.key];
      const valB = b[sortBy.key];
      if (valA < valB) return sortBy.dir === 'asc' ? -1 : 1;
      if (valA > valB) return sortBy.dir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [rows, sortBy]);

  function toggle(key) {
    setSortBy((s) => (s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }));
  }

  return (
    <table className="w-full table-auto border-collapse border">
      <thead>
        <tr>
          <th className="px-2 py-1 border" onClick={() => toggle('id')}>
            ID {sortBy.key === 'id' ? (sortBy.dir === 'asc' ? '▲' : '▼') : ''}
          </th>
          <th className="px-2 py-1 border" onClick={() => toggle('title')}>
            Title {sortBy.key === 'title' ? (sortBy.dir === 'asc' ? '▲' : '▼') : ''}
          </th>
          <th className="px-2 py-1 border">Completed</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((r) => (
          <tr key={r.id} className="odd:bg-white even:bg-gray-50">
            <td className="px-2 py-1 border">{r.id}</td>
            <td className="px-2 py-1 border">{r.title}</td>
            <td className="px-2 py-1 border">{String(r.completed)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Simple sparkline-style SVG chart (no external libs)
function Sparkline({ data = [] , width = 300, height = 80}){
  if (!data.length) return <div>No data</div>;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / (max - min || 1)) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
      <polyline points={points} fill="none" strokeWidth={2} stroke="#2563eb" />
    </svg>
  );
}

/***************************
 * 8) Performance: Lazy + Memo
 ***************************/
const LazyHeavyChart = lazy(() => new Promise((res) => setTimeout(() => res({ default: Sparkline }), 500)));

/***************************
 * 9) Accessibility: Keyboard Navigation List
 ***************************/
function KeyboardList({ items, onSelect }) {
  const [idx, setIdx] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIdx((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        onSelect(items[idx].id);
      }
    };
    el.addEventListener('keydown', handler);
    return () => el.removeEventListener('keydown', handler);
  }, [items, idx, onSelect]);

  return (
    <div tabIndex={0} ref={listRef} className="outline-none p-2 border rounded-md" aria-label="Keyboard navigable list">
      {items.map((it, i) => (
        <div
          key={it.id}
          className={`px-2 py-1 ${i === idx ? 'bg-blue-100' : ''}`}
          aria-current={i === idx}
          role="option">
          {it.title}
        </div>
      ))}
      <div className="text-xs text-gray-500 mt-2">Use ↑ / ↓ to move, Enter to select</div>
    </div>
  );
}

/***************************
 * App: tie everything together
 ***************************/
export default function App() {
  const router = useHashRouter();
  const { route, push } = router;

  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        <header className="mb-6">
          <h1 className="text-2xl font-bold mb-2">React Components Showcase</h1>
          <nav className="flex gap-2">
            <a href="#/" className="px-3 py-1 rounded hover:bg-gray-200">Home</a>
            <a href="#/list" className="px-3 py-1 rounded hover:bg-gray-200">List</a>
            <a href="#/fetch" className="px-3 py-1 rounded hover:bg-gray-200">Fetch</a>
            <a href="#/state" className="px-3 py-1 rounded hover:bg-gray-200">State</a>
            <a href="#/table" className="px-3 py-1 rounded hover:bg-gray-200">Table & Chart</a>
            <a href="#/access" className="px-3 py-1 rounded hover:bg-gray-200">Accessibility</a>
          </nav>
        </header>

        <main className="space-y-6">
          {route === '/' && <Home push={push} />}
          {route === '/list' && <DemoList />}
          {route === '/fetch' && <RemoteList />}
          {route === '/state' && <DemoState />}
          {route === '/table' && <DemoTableChart />}
          {route === '/access' && <DemoAccess />}
        </main>

        <footer className="mt-8 text-sm text-gray-500">Tip: open your console to see the store in action.</footer>
      </div>
    </StoreProvider>
  );
}

function Home({ push }) {
  return (
    <section className="bg-white p-6 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Welcome</h2>
      <p className="mb-4">This single-file demo shows many React patterns: routing, fetching, state management, accessibility, performance optimizations and UI elements.</p>
      <div className="flex gap-2">
        <button onClick={() => push('/list')} className="px-3 py-2 bg-blue-600 text-white rounded-md">Open List</button>
        <button onClick={() => push('/fetch')} className="px-3 py-2 bg-gray-200 rounded-md">Fetch Remote</button>
      </div>
    </section>
  );
}

function DemoList() {
  const { state, dispatch } = useStore();
  const [open, setOpen] = useState(false);

  function addItem(title) {
    const newItem = { id: Math.random().toString(36).slice(2, 9), title };
    dispatch({ type: 'ADD', payload: newItem });
  }

  return (
    <section className="bg-white p-6 rounded-md shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">List + Input</h2>
      <UserInput onSubmit={addItem} />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Items</h3>
          {state.items.length ? <ItemList items={state.items} onSelect={(id) => dispatch({ type: 'SELECT', payload: id })} selectedId={state.selectedId} /> : <div>No items yet</div>}
        </div>
        <div>
          <h3 className="font-medium mb-2">Store</h3>
          <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(state, null, 2)}</pre>
          <div className="mt-2">
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)} title="Store Example">
              <div>Here is the current store snapshot:</div>
              <pre className="bg-gray-50 p-2 rounded mt-2">{JSON.stringify(state, null, 2)}</pre>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoState() {
  const { state, dispatch } = useStore();
  useEffect(() => {
    // seed some data
    if (!state.items.length) {
      dispatch({ type: 'ADD', payload: { id: 1, title: 'Example item 1' } });
      dispatch({ type: 'ADD', payload: { id: 2, title: 'Example item 2' } });
    }
  }, []);

  return (
    <section className="bg-white p-6 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold">State Management (useReducer + Context)</h2>
      <p className="mb-2">This mimics a Redux-like pattern using <code>useReducer</code> and context.</p>
      <pre className="bg-gray-50 p-3 rounded">{JSON.stringify(state, null, 2)}</pre>
      <div className="mt-3 flex gap-2">
        <Button onClick={() => dispatch({ type: 'REMOVE', payload: state.items[0]?.id })} disabled={!state.items.length}>Remove first</Button>
        <Button onClick={() => dispatch({ type: 'SELECT', payload: state.items[0]?.id })} disabled={!state.items.length}>Select first</Button>
      </div>
    </section>
  );
}

function DemoTableChart() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=12');
  const rows = data || [];
  const chartData = (data || []).map((d, i) => i % 3 === 0 ? Math.random()*100 : Math.random()*60 + 20);

  return (
    <section className="bg-white p-6 rounded-md shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Table + Lazy Chart</h2>
      <div>
        {rows.length ? <SortableTable rows={rows} /> : <div>Loading table...</div>}
      </div>
      <div>
        <h3 className="font-medium mb-2">Chart (lazy loaded)</h3>
        <Suspense fallback={<div>Loading chart...</div>}>
          <LazyHeavyChart data={chartData} />
        </Suspense>
      </div>
    </section>
  );
}

function DemoAccess() {
  const sample = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1, title: `Option ${i + 1}` }));
  const { dispatch } = useStore();
  return (
    <section className="bg-white p-6 rounded-md shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Accessibility</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-2">Keyboard navigable list</h3>
          <KeyboardList items={sample} onSelect={(id) => alert('Selected ' + id)} />
        </div>
        <div>
          <h3 className="font-medium mb-2">Screen-reader friendly form</h3>
          <form onSubmit={(e) => e.preventDefault()} aria-label="Example form">
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input id="name" className="block w-full border rounded p-2" aria-describedby="name-desc" />
              <div id="name-desc" className="sr-only">Your full name</div>
            </div>
            <div>
              <label htmlFor="agree" className="inline-flex items-center gap-2">
                <input id="agree" type="checkbox" />
                <span>Agree to terms</span>
              </label>
            </div>
            <div className="mt-3">
              <Button onClick={() => dispatch({ type: 'ADD', payload: { id: Date.now(), title: 'From ARIA form' } })}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
