import { Drawer } from "antd";
import { useCommonStore } from "@/hooks/useCommonStore";
import { ReactNode, useEffect } from "react";

interface DrawerProps {
	children?: ReactNode;
	title: string;
}

function DrawerComponent({ children, ...props }: DrawerProps) {
	const { themeStyle } = useCommonStore();

	const styles = {
		mask: {
            background: "transparent"
        },
		content: {
            background: themeStyle.bgc+ "88",
			backdropFilter: "blur(20px)",
            color: themeStyle.textColor,
		},
		header: {
            color: themeStyle.textColor,
        },
		body: {},
	};

    useEffect(()=>{

    },[])


	return (
		<Drawer styles={styles} {...props}>
			{children}
		</Drawer>
	);
}

export default DrawerComponent;
