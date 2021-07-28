export function displayHead(table) {
    return table.head.map((title, index) => (
        <th className='border-top-0' key={index}>
            {title}
        </th>
    ));
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
