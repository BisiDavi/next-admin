import { CreateStoreListForm, CreateTripForm } from '@components/forms';
import AppModal from '@components/modal';

export default function displayModal(
    name: string,
    modalContent: modalContentType,
) {
    switch (name) {
        case 'createTrip': {
            return (
                <AppModal
                    title={modalContent.title}
                    show={modalContent.show}
                    close={modalContent.close}
                >
                    <CreateTripForm onClose={modalContent.close} />
                </AppModal>
            );
        }
        case 'createStoreList': {
            return (
                <AppModal
                    title={modalContent.title}
                    show={modalContent.show}
                    close={modalContent.close}
                >
                    <CreateStoreListForm onClose={modalContent.close} />
                </AppModal>
            );
        }
        default:
            return null;
    }
}

type modalContentType = {
    title: string;
    show: boolean;
    close: () => void;
};
