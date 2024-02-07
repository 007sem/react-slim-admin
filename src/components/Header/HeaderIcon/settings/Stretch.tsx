import { useCommonStore } from "@/hooks/useCommonStore";
import {  useState } from "react";
import { setIsStretched } from "@/store/settings";
import { useDispatch } from "react-redux";

function Stretch() {
	const { themeStyle, isStretched } = useCommonStore();
	const dispatch = useDispatch();

	const [isStretch, setIsStretch] = useState(isStretched);

	function handleClick() {
		setIsStretch(!isStretch);
		dispatch(setIsStretched(!isStretch));
	}

	return (
		<div
			style={{
				border: "1px dashed  " + themeStyle.primary,
				padding: "2rem",
				borderRadius: "1rem",
				cursor: "pointer",
				textAlign: "center",
				userSelect: "none",
				background: themeStyle.bgc + "88",

				color: themeStyle.primary,
			}}
			onClick={handleClick}
		>
			{isStretch ? ">-----<" : "<----------->"}
		</div>
	);
}

export default Stretch;
