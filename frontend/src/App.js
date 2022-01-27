import ArticleList from './components/ArticleList'
import AddArticle from './components/AddArticle'
import './App.css';

function App() {
  return (
    <div id="main">
      <h1> Liste des articles </h1>
      <h4> Clicker un article pour voir les details</h4>
      <ArticleList />
      <AddArticle />
    </div>
  );
}

export default App;
