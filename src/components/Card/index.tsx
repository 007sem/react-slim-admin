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
            {children}
        </div>
    )
};
 
export default Card;