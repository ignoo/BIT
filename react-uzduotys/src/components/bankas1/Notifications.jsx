export default function Notifications({notifications, setNotifications}) {

    if (!notifications.length) {
        return null;
    }


    return (
        <div className="notifications">
            {notifications.map(n => <div key={n.id} className={`notification ${n.type}`}>{n.text}</div>)}
        </div>
    )

}