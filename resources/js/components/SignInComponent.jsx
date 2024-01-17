
import React, { useState, useEffect } from 'react';
import LoginView from './LoginView.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

const SignInComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if the modal should be initially opened based on the pathname
        if (location.pathname === '/signin') {
            openModal();

        }
    }, [location.pathname]);

    const openModal = () => {
        setIsModalOpen(true);
        // Set the path to "/" after opening the modal
        navigate('/signin');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };


    return (
        <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
            <div className="header-widget sign-in" >
                <div className="show-reg-form modal-open" onClick={openModal}>Sign In
                    <LoginView isOpen={isModalOpen} onClose={closeModal}>
                    </LoginView>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
