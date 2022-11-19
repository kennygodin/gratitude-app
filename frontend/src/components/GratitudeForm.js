import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const GratitudeForm = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gratitude = { content };

    const response = await fetch('/api/gratitudes', {
      method: 'POST',
      body: JSON.stringify(gratitude),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setContent('');
      console.log('New gratitude item added', json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What are you grateful for today?"
      />
      <button>
        <FaPlus />
      </button>
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

export default GratitudeForm;
