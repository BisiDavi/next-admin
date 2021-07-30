export const createDispatcherFields: createDispatcherFields = {
    userInfo: ['First Name', 'Last Name'],
    userNumber: ['Email', 'Phone Number', 'Whatsapp Number'],
    userCredentials: ['User Name', 'Password', 'Confirm Password'],
    fleetType: ['Fleet Brand', 'Fleet Model'],
    fleetDetails: ['Fleet Color', 'Fleet Plate Number', 'Fleet Owner'],
};
export const createAdminFields: createAdminFields = {
    userInfo: ['First Name', 'Last Name'],
    userNumber: ['Email', 'Phone Number', 'Whatsapp Number'],
    userCredentials: ['User Name', 'Password', 'Confirm Password'],
};

export const createTripFields: fields = {
    fields: [
        'Pickup Vendor',
        'Pickup Description',
        'Pickup Contact',
        'Note',
        'Admin',
    ],
    group: ['Delivery Address', 'Phone Number'],
};

export const createStoreListFields: fields = {
    fields: ['Vendor Name', 'Email', 'Whatsapp', 'Phone Number', 'Orders Created'],
};

export const loginFields: fields = {
    fields: ['Email', 'Password'],
};

type createDispatcherFields = {
    userInfo: string[];
    userNumber: string[];
    userCredentials: string[];
    fleetType: string[];
    fleetDetails: string[];
};

type createAdminFields = {
    userInfo: string[];
    userNumber: string[];
    userCredentials: string[];
};

type fields = {
    fields: string[];
    group?: string[];
};
