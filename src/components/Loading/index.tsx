import "./loading.less"

function LoadingComponent() {
	return (
		<div className="loading-component">
            <div className="loading">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            <p>Loading...</p>
        </div>
	);
}

export default LoadingComponent;
