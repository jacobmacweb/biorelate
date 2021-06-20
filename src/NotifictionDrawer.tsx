import { Badge } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./NotificationDrawer.scss";

interface NotificationDrawerProps {
    shouldDisplay: boolean;
    notifCount: number;
    setNotifCount: (value: number) => void;
}

export default function NotificationDrawer({ shouldDisplay, notifCount, setNotifCount }: NotificationDrawerProps) {
    const [notifs, setNotifs] = useState<any[]>([]);
    // Calculate notifs
    useEffect(() => {
        if (notifs.length === 0) {
            axios.get("https://mockend.com/biorelate/fe-mock-api/notification").then((response) => {
                let tempNotifs = [];
                let unread = 0;
                for (let i = 5; i > 0; i--) {
                    const element = response.data[i];
                    
                    tempNotifs.push(
                        <div className="Notification" key={element.id}>
                            {
                                element.read ?
                                null :
                                <Badge status="default" color="red" className="Unread"></Badge>
                            }
                            <div className="Content">
                                <div className="Title">
                                    {element.title}
                                </div>
                                <small>
                                    {element.timestamp}
                                </small>
                            </div>
                        </div>
                    );
                    
                    if (!element.read) {
                        unread += 1;
                    }
                }
                
                setNotifCount(unread);
                setNotifs(tempNotifs);
            });
        }
    })

    return (
        <div className="Drawer" style={{
            display: shouldDisplay ? "block" : "none"
        }}>
            <h3>Notifications <span className="NewNotif">
            {
                notifCount > 0 ? `${notifCount} new` : null
            }
            </span></h3>
            {notifs}
        </div>
    )
} 