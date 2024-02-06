import "./Card.less"
import { Children, ReactNode } from "react"; 
import { useCommonStore } from "@/hooks/useCommonStore"; 


interface CardProps {
    title?: string; // 标题
    style?: React.CSSProperties; // 自定义样式
    children?: ReactNode; // 子元素
    border?: string | boolean; // 边框
}


function Card ({children, title, style, border, ...props}: CardProps) {

    const { themeStyle } = useCommonStore();

    
    return (
        <div style={{
            borderRadius: "1rem",
            backgroundColor: themeStyle.bgc2,
            border: "1px solid transparent" ,
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