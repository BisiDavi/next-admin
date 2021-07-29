export function displayHead(table) {
    return table.head.map((title, index) => (
        <th className='border-top-0' key={index}>
            {title}
        </th>
    ));
}

function displayCreateTripBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.pickupVendor && <td>{content.pickupVendor}</td>}
            {content.pickupDescription && <td>{content.pickupDescription}</td>}
            {content.pickupContact && <td>{content.pickupContact}</td>}
            {content.deliveryAddress && <td>{content.deliveryAddress}</td>}
            {content.phoneNumber && <td>{content.phoneNumber}</td>}
            {content.note && <td>{content.note}</td>}
            {content.author && <td>{content.author}</td>}
            {content.date && <td>{content.date}</td>}
        </tr>
    ));
}

export function displayActiveTripBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.date && <td>{content.date}</td>}
            {content.orderNumber && <td>{content.orderNumber}</td>}
            {content.pickup && <td>{content.pickup}</td>}
            {content.destination && <td>{content.destination}</td>}
            {content.numberOfDestination && (
                <td>{content.numberOfDestination}</td>
            )}
            {content.timeCreated && <td>{content.timeCreated}</td>}
            {content.timeAccepted && <td>{content.timeAccepted}</td>}
            {content.cancel && <td>{content.cancel}</td>}
            {content.delete && <td>{content.delete}</td>}
        </tr>
    ));
}

export function displayTripHistoryBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.date && <td>{content.date}</td>}
            {content.orderNumber && <td>{content.orderNumber}</td>}
            {content.pickup && <td>{content.pickup}</td>}
            {content.destination && <td>{content.destination}</td>}
            {content.numberOfDestination && (
                <td>{content.numberOfDestination}</td>
            )}
            {content.timeCreated && <td>{content.timeCreated}</td>}
            {content.timeAccepted && <td>{content.timeAccepted}</td>}
            {content.dispatcherName && <td>{content.dispatcherName}</td>}
            {content.timeDelivered && <td>{content.timeDelivered}</td>}
            {content.duration && <td>{content.duration}</td>}
        </tr>
    ));
}

export function displayDispatcherTripBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.name && <td>{content.name}</td>}
            {content.email && <td>{content.email}</td>}
            {content.whatsapp && <td>{content.whatsapp}</td>}
            {content.phoneNumber && <td>{content.phoneNumber}</td>}
            {content.fleetBrand && <td>{content.fleetBrand}</td>}
            {content.fleetModel && <td>{content.fleetModel}</td>}
            {content.fleetColor && <td>{content.fleetColor}</td>}
            {content.plateNumber && <td>{content.plateNumber}</td>}
            {content.owner && <td>{content.owner}</td>}
            {content.orders && <td>{content.orders}</td>}
            {content.delete && <td>{content.delete}</td>}
            {content.deactivate && <td>{content.deactivate}</td>}
            {content.viewLocation && <td>{content.viewLocation}</td>}
        </tr>
    ));
}

export function displayStoreListBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.name && <td>{content.name}</td>}
            {content.email && <td>{content.email}</td>}
            {content.whatsapp && <td>{content.whatsapp}</td>}
            {content.phoneNumber && <td>{content.phoneNumber}</td>}
            {content.ordersCreated && <td>{content.ordersCreated}</td>}
            {content.delete && <td>{content.delete}</td>}
        </tr>
    ));
}

export function displayAdminListBody(table) {
	return table.body.map((content, index) => (
			<tr key={index}>
					{content.sn && <td>{content.sn}</td>}
					{content.name && <td>{content.name}</td>}
					{content.email && <td>{content.email}</td>}
					{content.phoneNumber && <td>{content.phoneNumber}</td>}
					{content.ordersCreated && <td>{content.ordersCreated}</td>}
					{content.delete && <td>{content.delete}</td>}
			</tr>
	));
}

export function displayTableBody(name, table) {
    switch (name) {
        case 'activeTrip': {
            return displayActiveTripBody(table);
        }
        case 'createTrip': {
            return displayCreateTripBody(table);
        }
        case 'dispatcherTrip': {
            return displayDispatcherTripBody(table);
        }
        case 'tripHistory': {
            return displayTripHistoryBody(table);
        }
        case 'storeList': {
            return displayStoreListBody(table);
        }
				case 'adminList': {
					return displayAdminListBody(table);
			}
        default:
            return null;
    }
}

export function displayBody(table) {
    return table.body.map((content, index) => (
        <tr key={index}>
            {content.sn && <td>{content.sn}</td>}
            {content.storeName && <td>{content.storeName}</td>}
            {content.orders && <td>{content.orders}</td>}
            {content.averageDesination && <td>{content.averageDesination}</td>}
            {content.date && <td>{content.date}</td>}
            {content.dispatcherName && <td>{content.dispatcherName}</td>}
            {content.completedOrders && <td>{content.completedOrders}</td>}
            {content.bonusOrders && <td>{content.bonusOrders}</td>}
            {content.status && <td>{content.status}</td>}
            {content.activeOrders && <td>{content.activeOrders}</td>}
            {content.totalDestination && <td>{content.totalDestination}</td>}
            {content.averageDeliveryTime && (
                <td>{content.averageDeliveryTime}</td>
            )}
        </tr>
    ));
}
