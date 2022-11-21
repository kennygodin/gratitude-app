import { useEffect } from 'react';
import { useGratitudeContext } from '../hooks/useGratitudesContext';

// components
import GratitudeDetails from '../components/GratitudeDetails';
import GratitudeForm from '../components/GratitudeForm';

const Home = () => {
  const { gratitudes, dispatch } = useGratitudeContext();

  useEffect(() => {
    const fetchGratitudes = async () => {
      const response = await fetch('/api/gratitudes');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_GRATITUDES', payload: json });
      }
    };

    fetchGratitudes();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="container">
        <GratitudeForm />

        <ul>
          {gratitudes &&
            gratitudes.map((gratitudeItem) => (
              <GratitudeDetails
                key={gratitudeItem._id}
                gratitudeItem={gratitudeItem}
              />
            ))}
        </ul>

        <div className="footer">
          <p>
            <strong>I'm grateful for 5 things today!</strong>
          </p>
          <button>DELETE ALL</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
