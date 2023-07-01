import axios from 'axios';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import Url from '../../utils/url';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDishs } from '../../pages/cook/DishsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [status, setStatus] = useState<number>(1);
    const [type, setType] = useState('');
    const callApi2 = async (name: string, status: number, type: string) => {
        try {
            const response = await axios.get(Url(`dishs/filter`), {
                params: { name: name, status: status, type: type },
            });
            return response.data;
        } catch (error) {
            alert('Không lấy được dish detail!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApi2(name, status, type);
                dispatch(updateDishs(results));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [name, status, type]);

    return (
        <div className="mb-3 me-3">
            <Form className="d-flex justify-content-between">
                {/* Tên món ăn */}
                <InputGroup size="lg" style={{ width: '40%' }}>
                    <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Nhập tên món ăn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>

                {/* Trạng thái món ăn */}
                <InputGroup size="lg" className="" style={{ width: '25%' }}>
                    <InputGroup.Text>Trạng thái</InputGroup.Text>
                    <Form.Select
                        value={status}
                        onChange={(e) => setStatus(parseInt(e.currentTarget.value))}
                    >
                        <option value="">ALL</option>
                        <option value="1">Sẵn sàng đặt món</option>
                        <option value="0">Đã xóa</option>
                    </Form.Select>
                </InputGroup>

                {/* Kiểu món ăn */}
                <InputGroup size="lg" className="" style={{ width: '25%' }}>
                    <InputGroup.Text>Kiểu món ăn</InputGroup.Text>
                    <Form.Select onChange={(e) => setType(e.currentTarget.value)}>
                        <option>ALL</option>
                        <option value="Món chính">Món chính</option>
                        <option value="Món ăn sáng">Món ăn sáng</option>
                    </Form.Select>
                </InputGroup>
            </Form>
        </div>
    );
}

export default Search;
