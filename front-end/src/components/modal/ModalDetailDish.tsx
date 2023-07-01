import axios from 'axios';
import { Badge, Button, Col, Modal, Row, Image, Table } from 'react-bootstrap';
import Url from '../../utils/url';
import { useEffect, useState } from 'react';
import { dishsProps } from '../../interface/Interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface ModalDetailDishProps {
    show: boolean;
    hide: () => void;
    indexDish: number;
}

function ModalDetailDish({ show, hide, indexDish }: ModalDetailDishProps) {
    const [dish, setDish] = useState<dishsProps>({} as dishsProps);

    const callApi = async () => {
        try {
            const response = await axios.get(Url(`dishs/${indexDish}`));
            return response.data;
        } catch (error) {
            alert('Không lấy được dish detail!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApi();
                setDish(results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [indexDish]);

    return (
        <Modal size="xl" show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {dish.name}{' '}
                    {dish.status === 1 ? (
                        <Badge pill bg="success">
                            Sẵn sàng đặt món
                        </Badge>
                    ) : (
                        <Badge pill bg="danger">
                            Đã xóa
                        </Badge>
                    )}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <div>
                            <b>Kiểu món ăn:</b> {dish.type}
                        </div>
                        <div>
                            <b>Mô tả:</b> {dish.descriptions}
                        </div>
                        <div>
                            <b>Cách nấu:</b> {dish.recipeDes}
                        </div>
                        <div>
                            <b>Ngày tạo món:</b> {dish.createAt}
                        </div>
                    </Col>
                    <Col>
                        <Image src={dish.image} alt="Anh" rounded />
                    </Col>
                </Row>
                <Table bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ảnh</th>
                            <th>Tên nguyên liệu</th>
                            <th>Trạng thái</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dish.ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Image
                                        src={ingredient.image}
                                        alt="anh"
                                        style={{ width: '3rem', aspectRatio: '1/1' }}
                                    />
                                </td>
                                <td>{ingredient.name}</td>
                                <td>
                                    {dish.status === 1 ? (
                                        <Badge pill bg="success">
                                            Sẵn sàng mua
                                        </Badge>
                                    ) : (
                                        <Badge pill bg="danger">
                                            Đã xóa
                                        </Badge>
                                    )}
                                </td>
                                <td>
                                    <div
                                    // onClick={() => {
                                    //     setCurrentDish(dish);
                                    //     setShowModalModalDeleteDish(true);
                                    // }}
                                    >
                                        <FontAwesomeIcon size="lg" icon={faTrashCan} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button onClick={hide}>Thêm nguyên liệu</Button>
                <Button onClick={hide}>Xong</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDetailDish;