import axios from 'axios';
import { useEffect, useState } from 'react';
import Url from '../../utils/url';
import { Badge, Button, Form, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ModalDeleteDish from '../../components/modal/ModalDeleteDish';
import ModalDetailDish from '../../components/modal/ModalDetailDish';
import { dishsProps } from '../../interface/Interface';
import Search from '../../components/search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { dishsSelector } from '../../redux/selectors';
import { updateDishs } from './DishsSlice';

function Cook() {
    const dispatch = useDispatch();
    const lishDishs = useSelector(dishsSelector);

    // const [dishs, setDishs] = useState<dishsProps[]>([]);
    const [showModalDeleteDish, setShowModalModalDeleteDish] = useState(false);
    const [showModalDetailDish, setShowModalDetailDish] = useState(false);
    const [indexCurrentDish, setIndexCurrentDish] = useState(1);
    const [currentDish, setCurrentDish] = useState<dishsProps>({} as dishsProps);

    const callApi = async () => {
        try {
            const response = await axios.get(Url(`dishs`));
            return response.data;
        } catch (error) {
            alert('Lỗi Server!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApi();
                dispatch(updateDishs(results));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Search />
            <Table hover bordered>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tên món ăn</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {lishDishs.map((dish, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={dish.image} alt="anh" />
                            </td>
                            <td
                                onClick={() => {
                                    setIndexCurrentDish(dish.id);
                                    setShowModalDetailDish(true);
                                }}
                            >
                                {dish.name}
                            </td>
                            <td>
                                {dish.status === 1 ? (
                                    <Badge pill bg="success">
                                        Sẵn sàng đặt món
                                    </Badge>
                                ) : (
                                    <Badge pill bg="danger">
                                        Đã xóa
                                    </Badge>
                                )}
                            </td>
                            <td>{dish.createAt}</td>
                            <td>
                                <div
                                    onClick={() => {
                                        setCurrentDish(dish);
                                        setShowModalModalDeleteDish(true);
                                    }}
                                >
                                    <FontAwesomeIcon size="lg" icon={faTrashCan} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ModalDeleteDish
                show={showModalDeleteDish}
                hide={() => setShowModalModalDeleteDish(false)}
                dish={currentDish}
            />
            <ModalDetailDish
                show={showModalDetailDish}
                hide={() => setShowModalDetailDish(false)}
                indexDish={indexCurrentDish}
            />
        </div>
    );
}

export default Cook;
