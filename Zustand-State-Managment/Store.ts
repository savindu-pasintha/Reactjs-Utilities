import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Store, Store1, Store2, id } from './Types'


export const initialState ={
    id: 0,
    data: [],
    data2: { id: 0, title: '' },
    loading: false,
    error: false,
} 

export const initialState1 ={
    id1: 0,
    data1: { id: 0, title: '' },
    loading1: false,
    error1: false,
} 

export const initialState2 ={
    id2: 0,
    data3: { id: 0, title: '' },
    loading2: false,
    error2: false,
} 

export const useStore = create<Store>()(
    devtools(
        persist(
            (set) => ({
                ...initialState,                   // append the states to store
                reset:()=> set({...initialState}), // this function call for reset the initialState2
                addId: (_id: id) => set((state) => ({ id: state.id + _id })),
                deleteId: (_id: id) => set({ id: _id }),
                updateId: (_id: id) => set({ id: _id }),
                fetchData: async () => {
                    set({ loading: true });
                    try {
                        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                        const data = await response.json();
                        set({ data: data ?? [], loading: false });
                    } catch (error) {
                        set({ error: error ?? true, loading: false });
                    }
                },
                promiseData: async () => {
                    return new Promise((resolve, reject) => {
                        fetch('https://jsonplaceholder.typicode.com/todos/1')
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(data => {
                                set({ data2: data ?? [], loading: false });
                                resolve(data)
                            })
                            .catch(error => {
                                set({ error: error ?? true, loading: false });
                                reject(error)
                            });
                    });
                }
            })
            , { name: 'local-storage-store',
                getStorage: () => sessionStorage   // define the web storage to save states
             })
    ))


export const useStore1 = create<Store1>()(
    devtools(
        persist(
            (set) => ({
                ...initialState1,
                reset:()=> set({...initialState1}),
                fetchData1: async () => {
                    set({ loading1: true });
                    try {
                        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                        const data = await response.json();
                        set({ data1: data ?? [], loading1: false });
                    } catch (error) {
                        set({ error1: error ?? true, loading1: false });
                    }
                },
            })
            , { name: 'local-storage-store1' })
    ));

export const useStore2 = create<Store2>()(
    devtools(
        persist(
            (set) => ({
                ...initialState2,
                reset:()=> set({...initialState2}),
                fetchData2: async () => {
                    set({ loading2: true });
                    try {
                        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
                        const data = await response.json();
                        set({ data3: data ?? [], loading2: false });
                    } catch (error) {
                        set({ error2: error ?? true, loading2: false });
                    }
                },
            })
            , { name: 'local-storage-store2' })
    ));
