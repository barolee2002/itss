import axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';
import Url from '../../utils/url';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDishs } from '../../pages/cook/DishsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const dispatch = useDispatch();
    const [params, setParams] = useState('');
    const callApi2 = async (param: string) => {
        try {
            const response = await axios.get(Url(`dishs/search`), {
                params: { searchString: param },
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
                const results = await callApi2(params);
                dispatch(updateDishs(results));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [params]);

    return (
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Nhập tên món ăn"
                    value={params}
                    onChange={(e) => setParams(e.target.value)}
                />
            </InputGroup>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    placeholder="Nhập tên món ăn"
                    value={params}
                    onChange={(e) => setParams(e.target.value)}
                />
            </Form.Group> */}
        </Form>
    );
}

export default Search;
