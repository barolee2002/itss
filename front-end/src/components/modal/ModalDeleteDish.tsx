import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Url from '../../utils/url';
import { dishsProps } from '../../interface/Interface';

interface ModalDeleteDishProps {
    show: boolean;
    hide: () => void;
    dish: dishsProps;
}

function ModalDeleteDish({ show, hide, dish }: ModalDeleteDishProps) {
    // Xóa món ăn
    const handleDeleteDish = async () => {
        await axios.delete(Url(`dish/${dish.id}`));
    };

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Xóa món ăn</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa món {dish.name}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Hủy bỏ
                </Button>
                <Button variant="danger" onClick={handleDeleteDish}>
                    Xóa vĩnh viễn
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteDish;
