import React from 'react'
import {useStore1} from './Store'


function View1() {
    const {data1,loading1,error1,fetchData1} = useStore1()
    return (
        <div>
            <>View 1 screen</>
            <button onClick={()=>fetchData1()}>Data Fetch</button>
            {(!loading1 && !error1 && data1)? <><br/>{data1?.id}-{data1?.title}</> : <>...loding</>}
        </div>
    )
}

export default View1
