import "./Card.less"
import { Children, ReactNode } from "react"; 


interface CardProps {
    title?: string; // 标题
    style?: React.CSSProperties; // 自定义样式
    children?: ReactNode; // 子元素
    border?: string | boolean; // 边框
}


function Card ({children, title, style, border, ...props}: CardProps) {
    
    return (
        <div style={{
            borderRadius: "1rem",
            border: border ? "1px solid #eee" : "none",
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
            fontSize: "1rem",
            paddingBottom: "1rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #eee",
        }}>{title}</div>
    )
}
 
export default Card;