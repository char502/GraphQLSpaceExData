
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import Launches from './components/Launches'
import './App.css';
import spaceXLogo from './images/spaceXLogo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={spaceXLogo} alt="SpaceX logo" style={{ width: 300, height: 150, display: 'block', margin: 'auto' }}/>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
