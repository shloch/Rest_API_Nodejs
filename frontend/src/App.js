import BookList from './components/BookList'
import AddBook from './components/AddBook'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> List of books </h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
