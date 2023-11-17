import React, { useState } from 'react';
import LoginView from './LoginView.jsx';

const SignInComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
            <div className="header-widget sign-in" >
                <div className="show-reg-form modal-open" onClick={openModal}><a>Sign In</a>
                    <LoginView isOpen={isModalOpen} onClose={closeModal}>
                    </LoginView>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
