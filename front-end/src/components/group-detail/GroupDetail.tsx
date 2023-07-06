import { useParams } from 'react-router-dom';

function GroupDetail() {
    const param = useParams();
    console.log(param.id);
    return <h1>GroupDetail</h1>;
}

export default GroupDetail;
