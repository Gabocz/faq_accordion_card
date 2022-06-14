function Arrow({isOpen, currentIndex, index}) {
    return (
        <div className={isOpen&&currentIndex===index ? "arrow rotated" : "arrow"}>
            
        </div>
    )
}

export default Arrow
