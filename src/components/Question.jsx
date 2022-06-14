import Arrow from "./Arrow"

function Question({item, isOpen, currentIndex, index}) {
    return (
        <div className={isOpen&&currentIndex===index ? "question active": "question"}>
            <p>{item.Q}</p>
            <Arrow isOpen={isOpen} currentIndex={currentIndex} index={index}/>
        </div>
    )
}

export default Question
