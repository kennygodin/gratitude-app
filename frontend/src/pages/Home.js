import { useEffect, useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
const Home = () => {
  const [gratitudes, setGratitude] = useState(null);

  useEffect(() => {
    const fetchGratitudes = async () => {
      const response = await fetch('/api/gratitudes');
      const json = await response.json();

      if (response.ok) {
        setGratitude(json);
      }
    };

    fetchGratitudes();
  }, []);
  return (
    <div className="home">
      <div className="container">
        <form>
          <input type="text" placeholder="What are you grateful for today?" />
          <button>
            <FaPlus />
          </button>
        </form>
        <ul>
          {gratitudes &&
            gratitudes.map((gratitudeItem) => (
              <li key={gratitudeItem._id}>
                {gratitudeItem.content}
                <div className="del">
                  <FaTrash />
                </div>
              </li>
            ))}
          <li>
            I am grateful for health
            <div className="del">
              <FaTrash />
            </div>
          </li>
          <li>
            I am grateful for family
            <div className="del">
              <FaTrash />
            </div>
          </li>
          <li>
            I am grateful for friends
            <div className="del">
              <FaTrash />
            </div>
          </li>
          <li>
            I am gratful for provision
            <div className="del">
              <FaTrash />
            </div>
          </li>
          <li>
            I am grateful for mentors
            <div className="del">
              <FaTrash />
            </div>
          </li>
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
