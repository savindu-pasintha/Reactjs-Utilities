export type id = number;
export type name = string;
export type title = string;
export type data = Array | object;
export type data2 = {id:id,title:title};
export type loading = boolean;
export type error = boolean | object | Array;


export type Model1 = {
    id : id,
    name : name
}

export type Store = {
    id: id,
    data: data,
    data2:data2,
    loading : loading,
    error : error,
    fetchData : () => void,
    promiseData :()=> void
    addId: (id) => void,
    updateId:(id) => void,
    deleteId:(id)=> void,
    reset : ()=> void
  }

  export type Store1 = {
    id1: id,
    data1: data,
    loading1 : loading,
    error1 : error,
    fetchData1 : () => void,
    reset : ()=> void
  }

  export type Store2 = {
    id2: id,
    data3: data,
    loading2 : loading,
    error2 : error,
    fetchData2 : () => void,
    reset : ()=> void
  }
  
  