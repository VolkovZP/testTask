import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './components/Card';
import Goods from './components/Goods';

function App() {
  return (
    <>
      <Goods />
      <Card />
    </>
  );
}

export default App;
