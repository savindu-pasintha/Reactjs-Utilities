import React from 'react'
import { useStore, useStore2, useStore1 } from './Store'


function View() {
    const { id, data, data2, loading, error, fetchData, promiseData, addId, updateId, deleteId ,reset} = useStore()
    const { data3, loading2, error2 } = useStore2()
    const { data1, loading1, error1 } = useStore1()
    return (
        <div>
            {id}
            <button onClick={() => addId(10)}>Add</button>
            <button onClick={() => updateId(11)}>Update</button>
            <button onClick={() => deleteId(7)}>Delete</button>
            <button onClick={() => fetchData()}>Data Fetch</button>
            <button onClick={() => promiseData()}>Primise Fetch</button>
            <button onClick={() => reset()}> Reset State values as default</button>

            {(!loading && !error && data2 && Object.keys(data2).length > 0) ? <><br />{data2?.id}-{data2?.title}</> : <>...loding</>}
           
           
            {(!loading && !error && data && data.length > 0) ? <>{data?.map((itm: { title: string, id: number }) => <>{itm?.id}-{itm?.title}<br /></>)}</> : <>...loding</>}


            {(!loading2 && !error2 && data3) ? <><br />{data3?.id}-{data3?.title}</> : <>...loding</>}

            <br />
            {(!loading1 && !error1 && data1) ? <><br />{data1?.id}-{data1?.title}</> : <>...loding</>}


        </div>
    )
}

export default View
