import React, {useState} from "react";

//since we just implement a basic flip, we just implement initial state and useState

const useFlip = (initialState = true) => {
    const [isFlip, setIsFlip] = useState(initialState);
    const flipCard = () => {
        setIsFlip(isUp => !isUp);
        };
    return [isFlip, flipCard];
}

export default useFlip;