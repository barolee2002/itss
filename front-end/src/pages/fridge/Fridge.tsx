import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { fridgeProps } from '../../interface/Interface';
import axios from 'axios';
import Url from '../../utils/url';
import { userInfo } from '../../utils/userInfo';

function Fridge() {
    const [fridge, setFridge] = useState<fridgeProps>({} as fridgeProps);

    useEffect(() => {
        const fetchApiGroupFridge = async () => {
            try {
                const results = await axios.get(Url(`fridge/user/${userInfo?.id}`));
                setFridge(results.data);
            } catch (error: any) {
                alert(error.response.data.message);
                console.log(error);
            }
        };
        fetchApiGroupFridge();
    }, []);

    return (
        <Table hover bordered>
            <thead className="fs-5 ">
                <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tên nguyên liệu</th>
                    <th>Số lượng</th>
                    <th>Đơn vị tính</th>
                    <th>Ngày tạo</th>
                    <th>Ngày hết hạn</th>
                    <th>Sử dụng</th>
                </tr>
            </thead>
            <tbody>
                {fridge.ingredients?.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <img
                                src={item.ingredient.image}
                                alt="anh"
                                style={{ height: '3rem', width: '3rem' }}
                            />
                        </td>
                        <td>{item.ingredient.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.measure}</td>
                        <td>{item.createAt}</td>
                        <td>{item.exprided}</td>
                        <td
                            onClick={() => {
                                // setCurrentIngredient(item);
                                // setShowModalRemoveFridgeGroup(true);
                            }}
                        >
                            <FontAwesomeIcon size="lg" icon={faRightFromBracket} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Fridge;
