import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddMarketOrder() {
    return (
        <div>
            <Link to="/market" className="text-dark">
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" className="p-2" />
            </Link>
        </div>
    );
}

export default AddMarketOrder;
