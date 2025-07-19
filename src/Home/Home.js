import { useState } from 'react';
import axios from 'axios';

function HomeCaller() {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = btoa('quma_admin:quma_p@ssw0rd');

  const callApi = () => {
    setLoading(true);
    setError(null);
    setResponse('');
    axios.get('https://quma-shopify.onrender.com/home/index?continue=null', {
      headers: {
        Authorization: `Basic cXVtYV9hZG1pbjpxdW1hX3BAc3N3MHJk`, // Basic authentication header
      }
    })
    .then((res) => setResponse(res.data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call Backend API</button>
        <div style={{ marginTop: '20px' }}>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
      </header>
    </div>
  );
}

export default HomeCaller;
