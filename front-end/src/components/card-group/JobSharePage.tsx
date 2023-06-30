import { Button, Table } from 'react-bootstrap';
import { ListJobProps } from '../../Model/ListJob';
import { listGroupProps } from '../../Model/listGroup';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addJobShareToProcessing } from '../../pages/Home/processSlice';
import { addJobShareToTodo } from '../../pages/Home/todoSlice';
import { addJobShareToDone } from '../../pages/Home/doneSlice';
import { filterListSelector } from '../../redux/selectors';
import { addNotify } from '../Notification/notifycationSlice';

interface JobSharePageProps {
    group: listGroupProps;
}

function JobSharePage({ group }: JobSharePageProps) {
    const list = useSelector(filterListSelector);

    const adminName = 'Quang Đạt';
    const listJobsShared = list.filter((job) => {
        if (job.group_shared && job.group_shared.includes(group.name)) {
            return true;
        } else {
            return false;
        }
    });

    const dispatch = useDispatch();

    const handleHelpSubmit = (job: ListJobProps) => {
        if (job.status === 'Processing') {
            dispatch(addJobShareToProcessing(job.id));
        }
        if (job.status === 'Todo') {
            dispatch(addJobShareToTodo(job.id));
        }
        if (job.status === 'Done') {
            dispatch(addJobShareToDone(job.id));
        }
        dispatch(
            addNotify({
                type: 'info',
                text: `Bạn đang cứu ${job.owner} với công việc *${job.task}* ở trạng thái ${job.status}`,
            }),
        );
    };
    return (
        <Table bordered hover className="fs-5">
            <thead>
                <tr className="fs-5">
                    <th>#</th>
                    <th>Công việc</th>
                    <th>Trạng thái</th>
                    <th>Người chia sẻ</th>
                    <th>Người giúp đỡ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listJobsShared.map((job, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div>
                                <div>
                                    <b>Tên công việc: </b> {job.task}
                                </div>
                                <div>
                                    <b>Mô tả: </b>
                                    {job.description}
                                </div>
                                <ul className="my-2">
                                    {job.steps.map((step, index) => (
                                        <li key={index}>{step.name} </li>
                                    ))}
                                </ul>
                                <div>
                                    <b>Ngày bắt đầu: </b>{' '}
                                    {moment(job.start_date).format('HH:mm | DD-MM-YYYY')}
                                </div>
                                <div>
                                    <b>Ngày kết thúc: </b>{' '}
                                    {moment(job.deadline).format('HH:mm | DD-MM-YYYY')}
                                </div>
                            </div>
                        </td>
                        <td>{job.status}</td>
                        <td>{job.owner}</td>
                        <td>
                            {job.helpers?.map((helper, index) => (
                                <div key={index}>{helper}</div>
                            ))}
                        </td>
                        <td className="">
                            {job.owner !== adminName && (
                                <Button
                                    onClick={() => handleHelpSubmit(job)}
                                    className="w-100"
                                    disabled={job.helpers?.includes(adminName)}
                                    variant={
                                        job.helpers?.includes(adminName) ? 'secondary' : 'primary'
                                    }
                                >
                                    Giúp đỡ
                                </Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default JobSharePage;
