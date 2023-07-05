import axios from 'axios';
import { Badge, Button, Modal, Image, Table, Tabs, Tab, Form } from 'react-bootstrap';
import Url from '../../utils/url';
import { useEffect, useState } from 'react';
import { shoppingProps } from '../../interface/Interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToiletPortable } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch } from 'react-redux';

interface ModalDetailMarketOrderProps {
    show: boolean;
    hide: () => void;
    indexOrder: number;
}

function ModalDetailMarketOrder({ show, hide, indexOrder }: ModalDetailMarketOrderProps) {
    // const dispatch = useDispatch();
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, reload]);

    const handleChangeAttributeStatus = async (status: 1 | 0 | null, ingredientId: number) => {
        if (status === 1) {
            try {
                // await axios.put(Url(`shopping/remove/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
        if (status === 0) {
            try {
                // await axios.put(Url(`shopping/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChangeDishStatus = async (status: 1 | 0, dishId: number) => {
        if (status === 1) {
            try {
                // await axios.put(Url(`shopping/remove/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
        if (status === 0) {
            try {
                // await axios.put(Url(`shopping/${indexOrder}/${ingredientId}`));
                setReload(Math.random());
            } catch (error) {
                console.log(error);
            }
        }
    };

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
                        <Table bordered hover className="mt-4 ">
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
                                    <th style={{ width: '5%' }}></th>
                                    <th style={{ width: '5%' }}></th>
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
                                            <td className="text-center">
                                                <Form.Check
                                                    className="fs-5"
                                                    checked={attribute.status === 1}
                                                    onChange={() =>
                                                        handleChangeAttributeStatus(
                                                            attribute.status,
                                                            attribute.ingredients.id,
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td className="text-center">
                                                <FontAwesomeIcon
                                                    size="xl"
                                                    icon={faToiletPortable}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="dishes" title="Món ăn">
                        <Table bordered hover className="mt-4 ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ảnh</th>
                                    <th>Tên món ăn</th>
                                    <th>Trạng thái</th>
                                    <th>Số lượng</th>
                                    <th>Ngày nấu</th>
                                    <th>Ngày hết hạn</th>
                                    <th style={{ width: '5%' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {shopping.attributes &&
                                    shopping.dishes.map((dish, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Image
                                                    src={dish.dish.image}
                                                    alt="anh"
                                                    style={{ width: '3rem', aspectRatio: '1/1' }}
                                                />
                                            </td>
                                            <td>{dish.dish.name}</td>
                                            <td>
                                                {dish.cook_status === 1 ? (
                                                    <Badge pill bg="success">
                                                        Đã mua
                                                    </Badge>
                                                ) : (
                                                    <Badge pill bg="warning">
                                                        Chưa mua
                                                    </Badge>
                                                )}
                                            </td>
                                            <td>{dish.quantity}</td>
                                            <td>{dish.cookDate}</td>
                                            <td>{dish.expride}</td>
                                            <td className="text-center">
                                                <Form.Check
                                                    className="fs-5"
                                                    checked={dish.cook_status === 1}
                                                    // onChange={() =>
                                                    //     handleChangeDishStatus(
                                                    //         dish.cook_status,
                                                    //         dish.dish.id,
                                                    //     )
                                                    // }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
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
