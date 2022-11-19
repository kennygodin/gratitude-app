import { FaTrash, FaPlus } from 'react-icons/fa';
const Home = () => {
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
