import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import UrlBoard from './components/UrlBoard';

const App: React.FC = () => {
  return (<UrlBoard />);
}

ReactDOM.render(<App />, document.getElementById('root'));
