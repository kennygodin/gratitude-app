import { useGratitudeContext } from '../hooks/useGratitudesContext';

const GratitudesFooter = () => {
  const { gratitudes, dispatch } = useGratitudeContext();

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
      {gratitudes && (
        <div>
          <p>
            <strong>
              You are grateful for {gratitudes.length} thing(s) today!
            </strong>
          </p>
        </div>
      )}

      <span onClick={handleDeleteAll}>DELETE ALL</span>
    </div>
  );
};

export default GratitudesFooter;
