import { ReactNode } from "react"; 
import Card from "@/components/Card";

interface TopCardProps {
    icon: ReactNode,
    bgc: string,
    value: string,
    text: string,
    color: string,
}


function TopCard ({icon, bgc,value,text, color}: TopCardProps) {
    
    return (
        <Card style={{
            width: "100%",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: bgc,
            color:color
        }}>
            {icon}
            <h3 style={{
                margin: " 0",
                fontSize: "2rem",
            }}>{value}</h3>
            <div>{text}</div>
        </Card>
    )
};
 
export default TopCard;