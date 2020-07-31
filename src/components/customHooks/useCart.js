import React, {useState} from 'react'

function useCart(){
    let [list, setList] = useState([])

    function addItem(item){
        setList([...list, item])
        console.log(list)
    }

    // que entrego?
    return [list, addItem]
}

export default useCart