import { useGratitudeContext } from '../hooks/useGratitudesContext';

const GratitudesFooter = () => {
  const { dispatch } = useGratitudeContext();
  const handleDeleteAll = async () => {
    const response = await fetch('/api/gratitudes', {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      console.log('Gratitude items deleted', json);
      dispatch({ type: 'DELETE_GRATITUDES', payload: json });
    }
  };
  return (
    <div className="footer">
      <p>
        <strong>I'm grateful for 5 things today!</strong>
      </p>
      <span onClick={handleDeleteAll}>DELETE ALL</span>
    </div>
  );
};

export default GratitudesFooter;
