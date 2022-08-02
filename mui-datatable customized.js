import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { formatSeconds } from '../../helpers'
//for mui table
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
//for mui table
const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
})

// due to mui version > 5 so we should use component
const getMuiCustomizedTheme = createTheme({
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: { maxHeight: '780px', width: '100%' },
        responsiveScroll: {
          maxHeight: '20px',
          width: '100%',
          // overflowY: 'scroll',
        },
      },
    },

    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#0275d8', ///blue
          color: 'white',
          maxHeight: '180px',
          width: '', //colum width set
          //textAlign: 'center',
          justifyContent: 'centetr',
          align: 'center',
        },
        toolButton: {
          justifyContent: 'center',
          align: 'center',
        },
        '& th span': {
          align: 'center',
        },
      },
    },
    /**
     '&:nth-child(2)': {
            width: 70,
          },
   */
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#454d55',
          color: 'white',
          width: '20%',
          paddingLeft: '80px',
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: { backgroundColor: '#454d55', color: 'white' },
      },
    },
    MuiTablePaginationToolbar: {
      styleOverrides: {
        root: { backgroundColor: 'white', color: 'black' },
      },
    },
    MuiTablePaginationSelectLabel: {
      styleOverrides: {
        root: { backgroundColor: 'black', color: 'black' },
      },
    },
    MuiTablePaginationSelect: {
      styleOverrides: {
        root: { backgroundColor: 'black', color: 'black' },
      },
    },
    MuiTablePaginationDisplayedRows: {
      styleOverrides: {
        root: { backgroundColor: 'black', color: 'black' },
      },
    },
    MuiTablePaginationActions: {
      styleOverrides: {
        root: { backgroundColor: 'black', color: 'black' },
      },
    },
  },
})

const MachineLog = (props) => {
  //for mui table
  const [responsive, setResponsive] = useState('vertical')
  const [tableBodyHeight, setTableBodyHeight] = useState('400px')
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('')
  const [searchBtn, setSearchBtn] = useState(true)
  const [downloadBtn, setDownloadBtn] = useState(true)
  const [printBtn, setPrintBtn] = useState(true)
  const [viewColumnBtn, setViewColumnBtn] = useState(true)
  const [filterBtn, setFilterBtn] = useState(true)
  const [listOfTableData, setListOfTableData] = useState([])
  const [listOfMuiTableData, setListOfMuiTableData] = useState([])

  const renderName = (name) => {
    if (name === 'Running') {
      return <td class="text-center text-success">{name}</td>
    } else if (name === 'Stopped') {
      return <td class="text-center text-danger">{name}</td>
    } else {
      return <td class="text-center text-warning">{name}</td>
    }
  }
  const timeDuration = (startTime, endTime) => {
    if (endTime) {
      const duration = endTime - startTime

      return formatSeconds((duration / 1e9).toFixed(), 'h min s')
    } else {
      const duration = moment().unix() - startTime / 1e9

      return formatSeconds(duration.toFixed(), 'h min s')
    }
  }
  /**{
                label: "Name",
                name: "Name",
                options: {
                    filter: true,
                    customHeadRender: (columnMeta, updateDirection) => (
                        <th key={1} onClick={() => updateDirection(2)} style={{cursor: 'pointer'}}>
                            {columnMeta.name}
                        </th>
                    )
                }
            }, 
            { name: 'Time', options: { filterOptions: { fullWidth: true } } },
            
            const columns = [
   { name: 'Time', options: { filterOptions: { fullWidth: true } } },
          
    'Status',
    'Duration',
    'Description',
    'Level',
  ]

            */
  const columns = [
    { name: 'Time', options: { filterOptions: { fullWidth: true } } },

    'Status',
    'Duration',
    'Description',
    'Level',
  ]
  /*const columns = [
    {
      label: 'Time',
      name: 'Time',
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th
            key={1}
            onClick={() => updateDirection(2)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#0275d8',
              color: 'white',
              padding: '0px',
              width: '20%',
            }}
          >
            {columnMeta.name}
          </th>
        ),
      },
    },
    {
      label: 'Status',
      name: 'Status',
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th
            key={1}
            onClick={() => updateDirection(2)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#0275d8',
              color: 'white',
              width: '20%',
            }}
          >
            {columnMeta.name}
          </th>
        ),
      },
    },
    {
      label: 'Duration',
      name: 'Duration',
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th
            key={1}
            onClick={() => updateDirection(2)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#0275d8',
              color: 'white',
              width: '20%',
            }}
          >
            {columnMeta.name}
          </th>
        ),
      },
    },
    {
      label: 'Description',
      name: 'Description',
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th
            key={1}
            onClick={() => updateDirection(2)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#0275d8',
              color: 'white',
              width: '20%',
            }}
          >
            {columnMeta.name}
          </th>
        ),
      },
    },
    {
      label: 'Level',
      name: 'Level',
      options: {
        filter: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th
            key={1}
            onClick={() => updateDirection(2)}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              backgroundColor: '#0275d8',
              color: 'white',
              height: '70px',
              width: '20%',
            }}
          >
            {columnMeta.name}
          </th>
        ),
      },
    },
  ]
*/
  const options = {
    //search: searchBtn,
    //download: downloadBtn,
    //print: printBtn,
    //viewColumns: viewColumnBtn,
    //filter: filterBtn,
    //tableBodyHeight,
    //tableBodyMaxHeight: '400px',
    filterType: 'dropdown',
    responsive: 'scroll', //'scroll', //'standard
    resizableColumns: false,
    selectableRows: false,
    search: false,
    pagination: true,
    searchPlaceholder: 'Searchn Machine Details',
    searchOpen: false,
    searchAlwaysOpen: false,
    filter: false,
    print: false,
    download:true,
   downloadOptions: { 
      filename: 'eventTable.csv',//thi one is working yes
    //customCSVdata: {"a":"1","b":"5555"}, //not working this
  },
    onDownload: (buildHead, buildBody, columns, data) => {
     // console.log("custom onDownload","buildeader : ",buildHead," body : ",buildBody, " colums :",columns," data : ",data);
     const headerCol=[{  name: "Asset",
     label: "Ship Name (Imo)",},{ name: "CustomerContract",
     label: "Customer Name",
     },{
      name: "GroupFlag",
      label: "Flag",}];
      data = data.filter((value,ind)=>{{
        if(value.index<10){return value;}
      }})
      return `${buildHead(headerCol)}${buildBody(data)}`.trim();
      },
    expandableRows: false,
    confirmFilters: false,
    viewColumns: false,
    sortFilterList: true,
    selectToolbarPlacement: 'none', //'none','replace'
    onTableChange: (action, state) => {
      console.log(action)
      console.dir(state)
    },
    
  }

  useEffect(() => {
    if (props?.data != null && props?.data != undefined) {
      setListOfTableData(props?.data)
      dataSet(props.data)
    }
  }, [props.data])

  const dataSet = (data) => {
    var arr = []
    for (let i = 0; i < data.length; i++) {
      var log = data[i]
      var tm = moment
        .unix(log['Start Time'] / 1e9)
        .format('YYYY/MM/DD - h:mm:ss a')
      var nm = renderName(log.Name)
      var du = timeDuration(log['Start Time'], log['End Time'])
      var des = log.Description
      var lv = log.Level
      /*for (let i = 0; i < 5; i++) {
        const tmp = [
          '022/06/25 - 1:10:50 Pm',
          ['Stopped', 'Running', 'Warning', 'Idle', 'Else'][i],
          Math.round(Math.random(1000)),
          '	Machine Is ' + ['Stopped', 'Running', 'Warning', 'Idle', 'Else'][i],
          ['Stopped', 'Running', 'Warning', 'Idle', 'Else'][i],
        ]
        arr.push(tmp)
      }*/
      arr.push([tm, nm, du, des, lv])
    }
    setListOfMuiTableData(arr)
  }
  return (
    <div class="table-responsive">
      <div className="">
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={getMuiCustomizedTheme}>
            <MUIDataTable
              title={''}
              data={listOfMuiTableData}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </CacheProvider>
      </div>
      {/**
      <div className="row">
        <table class="table table-dark table-hover">
          <thead class="bg-primary">
            <tr>
              <th className="txt-center">Time</th>
              <th className="txt-center">Status</th>
              <th className="txt-center">Duration</th>
              <th className="txt-center">Description</th>
              <th className="txt-center">Level</th>
            </tr>
          </thead>

          <tbody>
            {listOfTableData?.map((log, idx) => (
              <tr key={idx}>
                <td style={{ width: 'fit-content' }}>
                  {moment
                    .unix(log['Start Time'] / 1e9)
                    .format('YYYY/MM/DD - h:mm:ss a')}
                </td>
                <td>{renderName(log.Name)} </td>
                <td>{timeDuration(log['Start Time'], log['End Time'])}</td>
                <td>{log.Description}</td>
                <td>{log.Level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       */}
    </div>
  )
}

export default MachineLog
