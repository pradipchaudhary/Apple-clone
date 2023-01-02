import { makeStyles } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

const useStyles = makeStyles({
  app: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "100vh",
    padding: '0 30px',
  },
});


  
function App() {
  const classes = useStyles();
  return (
      <BrowserRouter>
        <div className={classes.app}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path="/coins/:id" component={<CoinPage/>} exact />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
