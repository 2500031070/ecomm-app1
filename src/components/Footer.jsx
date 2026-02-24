import { useEffect, useState } from "react";


function Footer(){

    const currentDate = new Date().toDateString();

    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <footer style={{ textAlign: "center", padding: "15px" }}>
            <p>© 2025 MyShop. All Rights Reserved.</p>
            <p>Date: {currentDate}</p>
            <p>Time: {currentTime}</p>
        </footer>
    )
}

export default Footer;