import data from '../data';
import Question from './Question';
import Answer from './Answer';
import {useState} from 'react';

function FaqItem() {
    const [currentIndex, setCurrentIndex] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
       const clickedIndex = parseInt(e.currentTarget.id)
       setCurrentIndex(clickedIndex)
       isOpen&&clickedIndex === currentIndex ? setIsOpen(false) : setIsOpen(true)
    }

    return (
    data.map((item, index) => {
        return (
        <div className='faqItem' key={index} onClick={handleClick} id={index}>
            <Question item={item} isOpen={isOpen} index={index} currentIndex={currentIndex}/>
            <Answer item={item} isOpen={isOpen} index={index} currentIndex={currentIndex}/>
        </div>
        )
    }))
    
}

export default FaqItem
