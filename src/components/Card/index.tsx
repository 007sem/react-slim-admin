import "./Card.less"
import { Children, ReactNode } from "react"; 


interface CardProps {
    title?: string; // 标题
    style?: React.CSSProperties; // 自定义样式
    children?: ReactNode; // 子元素
}


function Card ({children, title, style, ...props}: CardProps) {
    
    return (
        <div style={{
            borderRadius: "1rem",
            ...style
        }}
        {...props}
        >
            {title && <CardTitle title={title} />}
            {children}
        </div>
    )
};


function CardTitle ({title}: {title: string}) {
    return (
        <div style={{
            fontSize: "1.25rem",
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
        }}>{title}</div>
    )
}
 
export default Card;