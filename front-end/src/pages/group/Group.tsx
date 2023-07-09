import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import CardGroup from '../../components/card-group/CardGroup';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Url from '../../utils/url';
import { userInfo } from '../../utils/userInfo';
import { groupsProps } from '../../utils/interface/Interface';
import CardGroup from '../../components/card-group/CardGroup';

function Group() {
    const [listGroup, setListGroup] = useState<groupsProps[]>([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const results = await axios.get(Url(`user/groups/${userInfo?.id}`));
                setListGroup(results.data);
            } catch (error: any) {
                alert(error.response.data.message);
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {listGroup?.map((group, index) => (
                <CardGroup key={index} group={group} />
            ))}
            <div
                className="ms-3 me-4 mb-5 border border-black shadow-sm center flex-column"
                style={{
                    width: '17.5vw',
                    aspectRatio: '1/1',
                    background: 'var(--background-color)',
                }}
            >
                <FontAwesomeIcon icon={faPlus} style={{ width: 170, height: 170 }} />
                <div className="fw-medium fs-4">Thêm nhóm</div>
            </div>
        </div>
    );
}

export default Group;
