import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CustomModal from './components/MyComponent';

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <div>
            <CustomModal />
        </div>
    );
}

export default App;
