import {products, categories} from './Data'; 
import './App.scss'
import ProductList from './components/products/ProductList';
import Header from './components/header/Header';

function App(){
console.log(products, categories);
  return (
    <div>
      <Header categories={categories} title='Products List' />
      <ProductList products={products} />

    </div>
  );
}

export default App;
