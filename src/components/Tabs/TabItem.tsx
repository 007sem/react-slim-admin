import { CloseOutlined } from "@ant-design/icons"

import { TabItemType } from './type'


function TabItem ({
    name,
    path,
    active
}: TabItemType) {

    function handleClick(){
        console.log(path)
    }
    
    return (
        <div className={ active ? "active tab-item" : 'tab-item '} onClick={handleClick}>
            <span className="name">{name}</span>
            {
                path !== "/" ? (
                    <span className="close-icon">
                        <CloseOutlined />
                    </span>
                ) : ""
            }
        </div>
    )
};
 
export default TabItem;