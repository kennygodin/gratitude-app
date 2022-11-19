import { FaPlus } from 'react-icons/fa';

const GratitudeForm = () => {
  return (
    <form>
      <input type="text" placeholder="What are you grateful for today?" />
      <button>
        <FaPlus />
      </button>
    </form>
  );
};

export default GratitudeForm;
