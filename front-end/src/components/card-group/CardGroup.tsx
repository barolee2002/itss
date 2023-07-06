import { Figure, Modal, Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';

import './cardgroup.scss';

interface CardGroupProps {
    group: any;
}

function CardGroup({ group }: CardGroupProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div
                className="ms-3 me-4 mb-5 border border-black shadow-sm center flex-column"
                style={{
                    width: '17.5vw',
                    aspectRatio: '1/1',
                    background: 'var(--background-color)',
                    cursor: 'pointer',
                }}
                onClick={() => setShowModal(true)}
            >
                <Figure className="mb-4">
                    <Figure.Image
                        width={200}
                        height={200}
                        alt="Ảnh nhóm"
                        src={group.image}
                        style={{ objectFit: 'cover' }}
                    />
                </Figure>
                <div className="fw-medium fs-4">{group.name}</div>
            </div>
        </div>
    );
}

export default CardGroup;
