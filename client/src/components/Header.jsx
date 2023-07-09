import { Link } from 'react-router-dom';
import { GiSkullCrossedBones } from 'react-icons/gi';

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <GiSkullCrossedBones className="logo" />
            </Link>
          </div>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-secondary">
              <Link to="/">Home</Link>
            </button>
          </div>
        </header>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
};

export default Header;
