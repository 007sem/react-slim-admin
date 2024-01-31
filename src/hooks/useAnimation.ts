import { useState, useRef, useEffect } from "react";


export const useAnimation = (initShow: boolean, duration: number, key: string[]) => {
	const [show, setShow] = useState<boolean>(); // 控制动画的显示状态，初始值为 false，表示不显示动画。
	const [stage, setStage] = useState(initShow ? key[0] : key[1]);
	const timeRef = useRef<any>();

	useEffect(() => {
		if (initShow) {
			setShow(true);
			setStage(key[0]);
		} else {
			setStage(key[1]);
			timeRef.current = setTimeout(() => {
				setShow(false);
			}, duration);
		}

		return () => {
			clearTimeout(timeRef.current);
		};
	}, [initShow]);

	return [show, stage];
};