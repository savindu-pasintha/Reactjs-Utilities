import { click } from '@testing-library/user-event/dist/click';
import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'

//custom hook used for the do some external task same as a react hook
export const useCustomHook = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);
    return [data];
};


function ReactHookUsage() {
    const [stateHook, setStateHook] = useState(0)
    /*we can store any type javascript of data using this
    var const let
    strings, numbers, booleans, undefined, and null , objects
    */

    //wenm function ekk hadul data return krl dagnn useeffect eke ek krnne nathuwa
    const fetchData = useCustomHook("https://jsonplaceholder.typicode.com/todos")

    //useCallBack
    const execute_useCallBack = useCallback(() => {
        return (Math.random(1000) * 100).toFixed(1);
    }, []);

    /** mokak hari state ekk change weddi witrak mokk hari 
     * deyak krnn use krnn puluwan */
    const execute_useMemo = useMemo(() => {
        return (Math.random(1000) * 100).toFixed(1);
    }, [stateHook]);

    //use ref for store data
    const execute_useRef_value = useRef("Old 9");
    const execute_useRef_access_element = useRef(null);


    const click = () => {
        //assign values by seStateHook
        setStateHook((Math.random(1000) * 100).toFixed(1))
        console.log("custom hook : ", fetchData)

        //assigne values by UseRef
        execute_useRef_value.current = "New 10"

        //focus the element by useRef
        execute_useRef_access_element.current.focus();
    }


    /**useEffect - component load time do some thing 
     * componentDidMount, componentDidUpdate, and componentWillUnmount
     * state ekk update time do some thing */
    useEffect(() => { console.log("useEffect working !") }, [stateHook])

    return (
        <div>
            <button onClick={() => { click(); }}>click </button>
            <br />
            <h1>--- useState {stateHook}</h1>
            <br />
            <h1>--- useCallb {execute_useCallBack()}</h1>
            <br />
            <h1>--- useMemo {execute_useMemo}</h1>
            <br />
            <h1>--- useRef  {execute_useRef_value.current} <input ref={execute_useRef_access_element} type="text" /></h1>
        </div>
    )
}

export default ReactHookUsage
