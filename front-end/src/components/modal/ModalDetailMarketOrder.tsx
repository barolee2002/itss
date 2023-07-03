import axios from 'axios';
import { Badge, Button, Col, Modal, Row, Image, Table, Tabs, Tab, Form } from 'react-bootstrap';
import Url from '../../utils/url';
import { useEffect, useState } from 'react';
import { dishsProps, shoppingProps } from '../../interface/Interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteMarket, restoreMarket } from '../../pages/market/MarketSlice';

interface ModalDetailMarketOrderProps {
    show: boolean;
    hide: () => void;
    indexOrder: number;
}

function ModalDetailMarketOrder({ show, hide, indexOrder }: ModalDetailMarketOrderProps) {
    const dispatch = useDispatch();
    const [reload, setReload] = useState(0);
    const [shopping, setShopping] = useState<shoppingProps>({} as shoppingProps);

    const callApi = async () => {
        try {
            const response = await axios.get(Url(`shopping/${indexOrder}`));
            return response.data;
        } catch (error) {
            alert('Không lấy được shopping detail!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApi();
                setShopping(results);
            } catch (error) {
                console.error(error);
            }
        };
        console.log(1);

        fetchData();
    }, [show, reload]);

    const handleChangeAttributeStatus = async (status: 1 | 0, ingredientId: number) => {
        if (status === 1) {
            try {
                await axios.put(Url(`shopping/remove/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
        if (status === 0) {
            try {
                await axios.put(Url(`shopping/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
    };

    //     const deleteApi = async (id: number, ingredientId: number) => {
    //         try {
    //             const response = await axios.delete(Url(`dish_ingredient/${id}/${ingredientId}`));
    //             return response.data;
    //         } catch (error) {
    //             alert('Không xóa được nguyên liệu!!!');
    //             return null;
    //         }
    //     };

    //     const handleDeleteIngredient = async (ingredientId: number) => {
    //         await deleteApi(indexOrder, ingredientId);
    //     };

    return (
        <Modal size="xl" show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title className="fs-3">
                    {shopping.code}
                    {shopping.status === 1 ? (
                        <Badge className="ms-3" pill bg="success">
                            Hoàn thành
                        </Badge>
                    ) : (
                        <Badge className="ms-3" pill bg="warning">
                            Đang thực hiện
                        </Badge>
                    )}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 fs-5 d-flex justify-content-between">
                    <div>
                        <b>Người tạo đơn:</b> {shopping.user?.name}
                    </div>
                    <div>
                        <b>Ngày tạo đơn:</b> {shopping.createAt}
                    </div>
                </div>
                <Tabs defaultActiveKey="ingredients" className="mb-3" justify>
                    <Tab eventKey="ingredients" title="Nguyên liệu">
                        <Table bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Người mua</th>
                                    <th>Ảnh</th>
                                    <th>Tên nguyên liệu</th>
                                    <th>Trạng thái</th>
                                    <th>Số lượng</th>
                                    <th>Đơn vị tính</th>
                                    <th>Ngày mua</th>
                                    <th>Ngày hết hạn</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {shopping.attributes &&
                                    shopping.attributes.map((attribute, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{attribute.user.name}</td>
                                            <td>
                                                <Image
                                                    src={attribute.ingredients.image}
                                                    alt="anh"
                                                    style={{ width: '3rem', aspectRatio: '1/1' }}
                                                />
                                            </td>
                                            <td>{attribute.ingredients.name}</td>
                                            <td>
                                                {attribute.status === 1 ? (
                                                    <Badge pill bg="success">
                                                        Đã mua
                                                    </Badge>
                                                ) : (
                                                    <Badge pill bg="warning">
                                                        Chưa mua
                                                    </Badge>
                                                )}
                                            </td>
                                            <td>{attribute.quantity}</td>
                                            <td>{attribute.measure}</td>
                                            <td>{attribute.buyAt}</td>
                                            <td>{attribute.exprided}</td>
                                            <td>
                                                <Form.Check
                                                    checked={attribute.status === 1}
                                                    onChange={() =>
                                                        handleChangeAttributeStatus(
                                                            attribute.status,
                                                            attribute.ingredients.id,
                                                        )
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="dishes" title="Món ăn">
                        Tab content for Profile
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hide}>Xong</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDetailMarketOrder;
