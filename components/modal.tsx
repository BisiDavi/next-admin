import { PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';
import CreateTripForm from '@components/forms/createTrip.form';
import styles from '@styles/Modal.module.css';

export default function AppModal({
    close,
    show,
    children,
    title,
}: PropsWithChildren<AppModalProps>) {
    return (
        <Modal
            size='lg'
            show={show}
            contentClassName={styles.modal}
            animation={true}
            onHide={close}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                <div className='d-flex flex-column mx-auto justify-content-center'>
                    <h4 className='text-center my-1'>InstaDrop | {title} </h4>
                </div>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}
interface AppModalProps {
    close: () => void;
    show: boolean;
    title: string;
}