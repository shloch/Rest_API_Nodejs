import BookList from './components/BookList'
import AddBook from './components/AddBook'
import './App.css';

function App() {
  return (
    <div id="main">
      <h1> Liste des articles </h1>
      <h4> Clicker un article pour voir les details</h4>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
