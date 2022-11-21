import { FaTrash } from 'react-icons/fa';
import { useGratitudeContext } from '../hooks/useGratitudesContext';

const GratitudeDetails = ({ gratitudeItem }) => {
  const { dispatch } = useGratitudeContext();
  const handleClick = async () => {
    const response = await fetch('/api/gratitudes/' + gratitudeItem._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <li>
      {gratitudeItem.content}
      <div className="del" onClick={handleClick}>
        <FaTrash />
      </div>
    </li>
  );
};

export default GratitudeDetails;
