/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleUser,
    faHouse,
    faPeopleGroup,
    faPlus,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import NavItem from '../../../NavbarItem/NavItem';
import SignOut from '../../../Signout/SignOut';
import './Taskbar.scss';
import { useSelector } from 'react-redux';
import { authenSelector } from '../../../../redux/selectors';

function Taskbar() {
    const isLogin = useSelector(authenSelector);
    const notifyRef = useRef<HTMLDivElement>(null);

    return (
        <div className="d-flex flex-column position-relative">
            {/* Khung head chứa thông tin đăng nhập hay chưa */}
            <div className="p-2 mt-2 w-100 d-flex align-items-center fs-6 ">
                {/* Nếu chưa đăng nhập thì hiện comp đky đăng nhập */}
                {!isLogin && (
                    <>
                        <FontAwesomeIcon icon={faCircleUser} style={{ height: '3.2rem' }} />
                        <Link to="/sign-up" className="taskbar_link ms-2 me-1">
                            Đăng ký
                        </Link>
                        /
                        <Link to="/sign-in" className="taskbar_link ms-1">
                            Đăng nhập
                        </Link>
                    </>
                )}
                {/* Nếu đã đăng nhập thì hiện tên, ảnh */}
                {isLogin && (
                    <>
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/133-512.png"
                            alt="hinhanh"
                            className="taskbar-img"
                        />
                        <div className="ms-2 d-flex flex-column">
                            <div className="fw-medium">Quang Đạt</div>
                            <div className="small">Sinh viên</div>
                        </div>
                    </>
                )}
            </div>
            {/* Các thanh điều hướng */}
            {isLogin && (
                <div className="mb-1">
                    <NavItem
                        text="Món ăn / Nguyên liệu"
                        classN={`${isLogin ? 'nav_active' : ''}`}
                        icon={faUtensils}
                        href="/cook"
                    />
                    <NavItem text="Xem nhóm" icon={faPeopleGroup} href="/group" />
                    <NavItem text="Thêm công việc mới" icon={faPlus} href="/add-task" />
                </div>
            )}

            {isLogin && (
                <div className="mt-5 mb-5">
                    <SignOut />
                </div>
            )}
        </div>
    );
}

export default Taskbar;
