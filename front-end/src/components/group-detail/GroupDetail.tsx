import { faArrowLeft, faPlus, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Url from '../../utils/url';
import { groupsProps, marketProps } from '../../interface/Interface';
import { Badge, Button, Tab, Table, Tabs } from 'react-bootstrap';
import { userInfo } from '../../utils/userInfo';
import ModalDetailMarketOrder from '../modal/ModalDetailMarketOrder';

function GroupDetail() {
    const param = useParams();

    const [showModalDetailMarketOrder, setShowModalDetailMarketOrder] = useState(false);
    const [currentIdMarketOrder, setCurrentIdMarketOrder] = useState(1);
    const [currentMarketOrder, setCurrentMarketOrder] = useState<marketProps>({} as marketProps);

    const [group, setGroup] = useState<groupsProps>({} as groupsProps);
    const [marketOrder, setMarketOrder] = useState<marketProps[]>([]);

    useEffect(() => {
        const fetchApiGroupDetail = async () => {
            try {
                const results = await axios.get(Url(`group/${param.id}`));
                setGroup(results.data);
            } catch (error: any) {
                alert(error.response.data.message);
                console.log(error);
            }
        };

        const fetchApiGroupMkOrder = async () => {
            try {
                const results = await axios.get(Url(`shopping/group/${param.id}`));
                setMarketOrder(results.data);
            } catch (error: any) {
                alert(error.response.data.message);
                console.log(error);
            }
        };

        fetchApiGroupDetail();
        fetchApiGroupMkOrder();
    }, [param]);

    return (
        <div>
            <div className="d-flex">
                <Link to="/group" className="me-3 text-dark">
                    <FontAwesomeIcon icon={faArrowLeft} size="2xl" className="p-2" />
                </Link>
                <h2>{group.name}</h2>
            </div>
            <div className="mt-3">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Đơn đi chợ">
                        <div className="position-relative">
                            <div className="overflow-y-scroll" style={{ height: '92vh' }}>
                                <Table hover bordered>
                                    <thead className="fs-5 ">
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã đơn</th>
                                            <th>Người tạo đơn</th>
                                            <th>Trạng thái</th>
                                            <th>Ngày tạo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketOrder.map((order, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div>{order.code}</div>
                                                </td>
                                                <td
                                                    onClick={() => {
                                                        setCurrentIdMarketOrder(order.id);
                                                        setShowModalDetailMarketOrder(true);
                                                    }}
                                                >
                                                    {order.user.name}
                                                </td>
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
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                <ModalDetailMarketOrder
                                    show={showModalDetailMarketOrder}
                                    hide={() => setShowModalDetailMarketOrder(false)}
                                    indexOrder={currentIdMarketOrder}
                                    leaderId={group.leader?.id}
                                    listMember={group.groupMembers}
                                />
                            </div>
                        </div>
                    </Tab>

                    {group.leader?.id && userInfo?.id && (
                        <Tab eventKey="member" title="Thành viên">
                            <div>
                                <div className="mt-4 fs-5 fw-medium d-flex justify-content-around">
                                    <div className="">Tên thành viên</div>
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className="">Role</div>
                                </div>
                                <hr className="mb-0" />
                                <div className="d-flex flex-column">
                                    {group.groupMembers.map((member, index) => (
                                        <div key={index} className="position-relative">
                                            <div
                                                className="w-100 d-flex align-items-center"
                                                style={{ minHeight: '4rem' }}
                                            >
                                                <img
                                                    src={member.avatar}
                                                    alt="avatar"
                                                    style={{
                                                        marginLeft: '6.5rem',
                                                        width: '2.5rem',
                                                        height: '2.5rem',
                                                    }}
                                                />
                                                <div className="ms-3 flex-grow-1">
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="fs-5"
                                                    style={{ marginRight: '9rem' }}
                                                >
                                                    {member.id === group.leader.id
                                                        ? 'Owner'
                                                        : 'Member'}
                                                </div>
                                                <div className="position-absolute end-2">
                                                    {group.leader.id === userInfo?.id &&
                                                        member.id !== userInfo?.id && (
                                                            <FontAwesomeIcon
                                                                icon={faXmark}
                                                                size="xl"
                                                            />
                                                        )}
                                                    {member.id === userInfo?.id && (
                                                        <div className="fw-light fs-5">Bạn</div>
                                                    )}
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                        </div>
                                    ))}
                                    {userInfo?.id === group.leader.id && (
                                        <Button
                                            className="mt-3 fs-5 p-2 border"
                                            style={{
                                                marginLeft: '6rem',
                                                width: '14rem',
                                                minHeight: '3rem',
                                                backgroundColor: '#DDA0DD',
                                                color: 'black',
                                            }}
                                        >
                                            Thêm thành viên
                                            <FontAwesomeIcon className="ms-2" icon={faPlus} />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
}

export default GroupDetail;
