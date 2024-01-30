import { CloseOutlined } from "@ant-design/icons"


interface TabItemProps {
    name:string,
    path:string,
    active:string
}

function TabItem ({
    name,
    path,
    active
}: TabItemProps) {

    function handleClick(){
        console.log(path)
    }
    
    return (
        <div className={ active ? "active tab-item" : 'tab-item '} onClick={handleClick}>
            <span className="name">{name}</span>
            <span className="close-icon">
                <CloseOutlined />
            </span>
        </div>
    )
};
 
export default TabItem;