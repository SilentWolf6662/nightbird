function StockFootage() {
    return <>
        <video controls preload="auto" playsInline className=" unselectable">
            <source src={'./../../public/video/stock-footage.webm'} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </>
}

export default StockFootage;