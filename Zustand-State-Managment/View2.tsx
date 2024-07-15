import React from 'react'
import {useStore2} from './Store'


function View2() {
    const {data3,loading2,error2,fetchData2} = useStore2()
    return (
        <div>
            <>View 2 screen</>
            <button onClick={()=>fetchData2()}>Data Fetch</button>
            {(!loading2 && !error2 && data3)? <><br/>{data3?.id}-{data3?.title}</> : <>...loding</>}
        </div>
    )
}

export default View2
