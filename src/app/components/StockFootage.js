function StockFootage() {
    return <>
        <video controls preload="auto" playsInline>
            <source src={'../../../video/stock-footage.webm'} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </>
}

export default StockFootage;