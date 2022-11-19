import { FaTrash } from 'react-icons/fa';

const GratitudeDetails = ({ gratitudeItem }) => {
  return (
    <li>
      {gratitudeItem.content}
      <div className="del">
        <FaTrash />
      </div>
    </li>
  );
};

export default GratitudeDetails;
