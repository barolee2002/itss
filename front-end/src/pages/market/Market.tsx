import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Url from '../../utils/url';
import { Badge, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRotateLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { marketProps, userInfoProps } from '../../interface/Interface';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginSelector } from '../../redux/selectors';
import SearchMarketOrders from '../../components/search/SearchMarketOrders';

function Market() {
    const dispatch = useDispatch();

    const isLogin = useSelector(isLoginSelector);
    // Lấy thông tin người dùng
    const userInfoString: string | null = localStorage.getItem('userInfo');
    const userInfo: userInfoProps | null = userInfoString ? JSON.parse(userInfoString) : null;

    const [marketOrders, setMarketOrders] = useState<marketProps[]>([]);

    const callApi = async () => {
        try {
            const response = await axios.get(Url(`/shopping/user/${userInfo?.id}`));
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
                setMarketOrders(results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return isLogin ? (
        <div className="position-relative">
            <div className="mb-3 position-relative ">
                <SearchMarketOrders />
            </div>
            <div className="overflow-y-scroll" style={{ height: '92vh' }}>
                <Table hover bordered>
                    <thead className="fs-5 ">
                        <tr>
                            <th>STT</th>
                            <th>Mã đơn</th>
                            <th>Người tạo đơn</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                            <th>Xóa đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <div>{order.code}</div>
                                </td>
                                <td>{order.userId}</td>
                                <td>
                                    {order.status === 1 ? (
                                        <Badge pill bg="success">
                                            Hoàn thành
                                        </Badge>
                                    ) : (
                                        <Badge pill bg="warning">
                                            Chưa xong
                                        </Badge>
                                    )}
                                </td>
                                <td>{order.createAt}</td>
                                <td>
                                    {order.status === 1 ? (
                                        <div
                                            onClick={() => {
                                                // handleDeleteIngredient(ingredient.id);
                                            }}
                                        >
                                            <FontAwesomeIcon size="lg" icon={faTrashCan} />
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => {
                                                // handleRestoreIngredient(ingredient.id);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faRotateLeft} />
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Link to="/market/add" className="position-absolute end-3 bottom-3">
                <Button
                    title="Tạo đơn đi chợ"
                    className="rounded-circle fs-2"
                    style={{ width: '5rem', height: '5rem' }}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Link>
        </div>
    ) : (
        <div></div>
    );
}

export default Market;
