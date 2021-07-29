import { useState } from 'react';

export default function useModal() {
    const [modal, setModal] = useState(false);

    function modalHandler(value) {
        setModal(value);
    }
    return {
        modal,
        modalHandler,
    };
}
