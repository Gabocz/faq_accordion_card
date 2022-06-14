function Answer({item, index, currentIndex, isOpen}) {
    return (
        <div className={isOpen&&currentIndex===index ? "answer open" : "answer"}>
            <p>{item.A}</p>
        </div>
    )
}

export default Answer
