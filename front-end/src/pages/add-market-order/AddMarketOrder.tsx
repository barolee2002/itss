import { faArrowLeft, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Image, InputGroup, Row, Tab, Table, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/userInfo';
import SearchIngredients from '../../components/search/SearchIngredients';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dishsSelector, ingredientsSelector } from '../../redux/selectors';
import axios from 'axios';
import Url from '../../utils/url';
import { updateIngredients } from '../ingredient/IngredientSlice';
import { dishesProps, dishsProps, ingredientProps } from '../../interface/Interface';
import { updateDishs } from '../cook/DishsSlice';
import moment from 'moment';

function AddMarketOrder() {
    const dispatch = useDispatch();
    const listIngredients = useSelector(ingredientsSelector);
    const listDishes = useSelector(dishsSelector);

    // Tab ingredients
    const [name, setName] = useState('');
    const [showResultIngredient, setShowResultIngredient] = useState(false);
    const [ingredientsSelected, setIngredientsSelected] = useState<ingredientProps[]>([]);

    const callApi2 = async (name: string) => {
        try {
            const response = await axios.get(Url(`ingredient/search`), {
                params: { name: name, status: 1 },
            });
            return response.data;
        } catch (error) {
            alert('Không tìm được nguyên liệu!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApi2(name);
                dispatch(updateIngredients(results));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [name]);

    const handleClickItemIngredient = (item: ingredientProps) => {
        if (!ingredientsSelected.includes(item)) setIngredientsSelected((prev) => [...prev, item]);
    };

    const handleDeleteIngredient = (id: number) => {
        setIngredientsSelected(ingredientsSelected.filter((item) => item.id !== id));
    };

    // Tab dishes
    const [nameDish, setNameDish] = useState('');
    const [typeDish, setTypeDish] = useState('');
    const [showResultDish, setShowResultDish] = useState(false);
    const [dishSelected, setDishSelected] = useState<dishsProps[]>([]);
    const [cookDate, setCookDate] = useState(['']);
    const [expireDate, setExpireDate] = useState(['']);
    const dishes = [];

    const callApiDish = async (name: string) => {
        try {
            const response = await axios.get(Url(`dishs/filter`), {
                params: { name: name, status: 1, type: '' },
            });
            return response.data;
        } catch (error) {
            alert('Không chọn được món ăn!!!');
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await callApiDish(nameDish);
                dispatch(updateDishs(results));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [nameDish]);

    const handleClickItemDish = (item: dishsProps) => {
        if (!dishSelected.includes(item)) {
            setDishSelected((prev) => [...prev, item]);
        }
    };

    const handleDeleteDish = (id: number) => {
        setDishSelected(dishSelected.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex">
                    <Link to="/market" className="me-3 text-dark">
                        <FontAwesomeIcon icon={faArrowLeft} size="2xl" className="p-2" />
                    </Link>
                    <h2>Tạo đơn đi chợ</h2>
                </div>
                <Button className="fs-5 me-3" style={{ width: '10%' }}>
                    Tạo đơn
                </Button>
            </div>
            <Form className="me-3">
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="codeMarketOrder">
                            <Form.Label>Mã đơn</Form.Label>
                            <Form.Control type="text" placeholder="SH..." />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="codeMarketOrder">
                            <Form.Label>Người tạo đơn</Form.Label>
                            <Form.Control disabled type="text" value={userInfo?.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="codeMarketOrder">
                            <Form.Label>Ngày tạo đơn</Form.Label>
                            <Form.Control
                                disabled
                                type="date"
                                value={moment(new Date()).format('YYYY-MM-DD')}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            <hr />

            <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3">
                <Tab eventKey="home" title="Nguyên liệu">
                    <InputGroup className="position-relative" size="lg" style={{ width: '40%' }}>
                        <InputGroup.Text id="basic-addon1">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên nguyên liệu"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setShowResultIngredient(true)}
                            onBlur={() =>
                                setTimeout(() => {
                                    setShowResultIngredient(false);
                                }, 200)
                            }
                        />
                        {showResultIngredient && (
                            <div
                                className="position-absolute bg-light top-110 start-0 end-0 border border-dark-subtle overflow-y-scroll"
                                style={{ maxHeight: '15rem' }}
                            >
                                {listIngredients.map((item, index) => (
                                    <div
                                        className="hover p-1 d-flex align-items-center border"
                                        key={index}
                                        onClick={() => handleClickItemIngredient(item)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt="item"
                                            style={{ width: '3rem', height: '3rem' }}
                                        />
                                        <div className="ms-3">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </InputGroup>

                    <Table hover bordered className="mt-3">
                        <thead className="fs-5 ">
                            <tr>
                                <th>STT</th>
                                <th>Ảnh</th>
                                <th>Tên nguyên liệu</th>
                                <th>Đơn vị tính</th>
                                <th>Số lượng</th>
                                <th className="text-center">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredientsSelected.map((ingredient, index) => (
                                <tr key={index}>
                                    <td style={{ width: '5%' }}>{index + 1}</td>
                                    <td>
                                        <img
                                            src={ingredient.image}
                                            alt="anh"
                                            style={{ height: '3rem', width: '3rem' }}
                                        />
                                    </td>
                                    <td>{ingredient.name}</td>
                                    <td style={{ width: '15%' }}>
                                        <Form.Group controlId={`measure ${index}`}>
                                            <Form.Control type="text" list="listMeasure" />
                                        </Form.Group>
                                        <datalist id="listMeasure">
                                            <option value="quả">quả</option>
                                            <option value="quả">quả</option>
                                            <option value="quả">quả</option>
                                            <option value="quả">quả</option>
                                        </datalist>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <Form.Group controlId={`quantity ${index}`}>
                                            <Form.Control type="number" />
                                        </Form.Group>
                                    </td>
                                    <td className="text-center">
                                        <div
                                            onClick={() => {
                                                handleDeleteIngredient(ingredient.id);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className="mt-2 p-1"
                                                size="xl"
                                                icon={faTrashCan}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>

                {/* Tab món ăn */}
                <Tab eventKey="profile" title="Món ăn">
                    <InputGroup className="position-relative" size="lg" style={{ width: '40%' }}>
                        <InputGroup.Text id="basic-addon2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên món ăn"
                            value={nameDish}
                            onChange={(e) => setNameDish(e.target.value)}
                            onFocus={() => setShowResultDish(true)}
                            onBlur={() =>
                                setTimeout(() => {
                                    setShowResultDish(false);
                                }, 200)
                            }
                        />
                        {showResultDish && (
                            <div
                                className="position-absolute bg-light top-110 start-0 end-0 border border-dark-subtle overflow-y-scroll"
                                style={{ maxHeight: '15rem' }}
                            >
                                {listDishes.map((item, index) => (
                                    <div
                                        className="hover p-1 d-flex align-items-center border"
                                        key={index}
                                        onClick={() => handleClickItemDish(item)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt="item"
                                            style={{ width: '3rem', height: '3rem' }}
                                        />
                                        <div className="ms-3">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </InputGroup>

                    <Table hover bordered className="mt-3">
                        <thead className="fs-5 ">
                            <tr>
                                <th>STT</th>
                                <th>Ảnh</th>
                                <th>Tên món ăn</th>
                                <th>Ngày nấu</th>
                                <th>Ngày hết hạn</th>
                                <th>Số lượng</th>
                                <th className="text-center">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dishSelected.map((dish, index) => (
                                <tr key={index}>
                                    <td style={{ width: '5%' }}>{index + 1}</td>
                                    <td>
                                        <img
                                            src={dish.image}
                                            alt="anh"
                                            style={{ height: '3rem', width: '3rem' }}
                                        />
                                    </td>
                                    <td>{dish.name}</td>
                                    <td style={{ width: '15%' }}>
                                        <Form.Group controlId={`cook ${index}`}>
                                            <Form.Control
                                                type="date"
                                                value={cookDate[index]}
                                                onChange={(e) => {
                                                    const updatedCookDate = [...cookDate];
                                                    updatedCookDate[index] = e.target.value;
                                                    setCookDate(updatedCookDate);
                                                }}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <Form.Group controlId={`expire ${index}`}>
                                            <Form.Control
                                                type="date"
                                                value={expireDate[index]}
                                                onChange={(e) => {
                                                    const updatedExpireDate = [...expireDate];
                                                    updatedExpireDate[index] = e.target.value;
                                                    setExpireDate(updatedExpireDate);
                                                }}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <Form.Group controlId={`quantityDish ${index}`}>
                                            <Form.Control type="number" />
                                        </Form.Group>
                                    </td>
                                    <td className="text-center">
                                        <div
                                            onClick={() => {
                                                handleDeleteDish(dish.id);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className="mt-2 p-1"
                                                size="xl"
                                                icon={faTrashCan}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AddMarketOrder;
