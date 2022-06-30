import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

export default function ForMachineParameeters(props) {
  const [lineMachine, setLineMachine] = useState([])

  useEffect(() => {
    if (props.machineList !== null && props.machineList !== undefined) {
      ghj()
    } else {
      setLineMachine(props.machine)
      console.log('list of available machines', props.machine)
    }
    console.log('props.machineList1', props.machineList)
  }, [props.machineList])

  const ghj = () => {
    setLineMachine(
      props.machineList?.lines?.find((key) => key.name == props.name).Machines,
    )
    console.log(
      'ghj list of available machines props.machineList?.lines',
      lineMachine,
      'props.machineList,',
      props.machineList,
    )
  }
  console.log('props.parm', props.param)
  console.log('props.list', props.list)

  const AllCheckBox = () => {
    const [sampleIncomingDataList, setSampleData] = useState([
      { id: 1, name: 'savindu', parm: 'da', check: true },
      { id: 2, name: 'savindu', parm: 'ka', check: false },
      { id: 3, name: 'savindu', parm: 'sa', check: false },
      { id: 4, name: 'savindu', parm: 'D3', check: true },
      { id: 5, name: 'savindu', parm: 'D2', check: true },
    ])
    const [allS, setAllS] = useState(false)
    const [allCheckBoxesList, setAllCheckBoxesList] = useState({
      da: false,
      ka: false,
      sa: false,
      ba: false,
      no1: false,
      no2: false,
      no3: false,
    })
    const [err, setErr] = useState('')
    const [
      countSelectedItemsOnebyOne,
      setCountSelectedItemsOnebyOne,
    ] = useState(0)

    useEffect(() => {
      //API eken en checkbox=machine names tik dala object ekk haduw dnt list eken en machin ek thinw nm ekt true kiyl assign kl
      var allParmsForAllTheCheckBoxNames = {}
      props.param?.map((object) => {
        allParmsForAllTheCheckBoxNames[object.Name] = props.list?.find(
          (dataInside) => object.Name === dataInside.parm,
        )
      })
      setAllCheckBoxesList(allParmsForAllTheCheckBoxNames)
      /*console.log(
        'useEffect in <AllCheckBoxes/>',
        allCheckBoxesList,
        'assignObjectKey ',
        allParmsForAllTheCheckBoxNames,
      )*/
    }, [])

    return (
      <>
        <div className="col-12">
          <h5 className="checkbox-inline fw-600">
            {err ? err : props?.checkBoxesTitle}
          </h5>
        </div>
        <div className="col-12">
          <FormControlLabel
            hidden={props?.hidddenSelectAllCheckBox}
            style={{ color: 'yellow' }}
            label="ALL(Machines)"
            control={<Checkbox style={{ color: 'white' }} checked={allS} />}
            onChange={(e) => {
              setAllS(e.target.checked)
              var tempObjForallCheckBoxesList = {}
              Object.keys(allCheckBoxesList).map((checkBoxkeyName, inde) => {
                tempObjForallCheckBoxesList[checkBoxkeyName] = e.target.checked
                  ? true
                  : props.list?.find(
                      (dataObj) => dataObj.parm === checkBoxkeyName,
                    )
                  ? true
                  : false
              })
              setAllCheckBoxesList(tempObjForallCheckBoxesList)
              /*console.log(
                'All(Machines) onchange ',
                e.target.checked,
                allS,
                allCheckBoxesList,
              )*/
            }}
          />
        </div>
        {Object.keys(allCheckBoxesList).map((checkBoxKeyName, ind) => (
          <div className="col-5 col-md-5 mb-4">
            <label className="checkbox-inline fw-600">
              <FormControlLabel
                style={{ color: 'white' }}
                label={checkBoxKeyName.replace(/([A-Z])/g, ' $1').trim()}
                control={
                  <Checkbox
                    style={{ color: 'white' }}
                    checked={allCheckBoxesList[checkBoxKeyName]}
                  />
                }
                onChange={(e) => {
                  if (
                    countSelectedItemsOnebyOne <= props?.maxOfSelectCheckBoxes
                  ) {
                    setAllS(e.target.checked ? false : false)
                    setAllCheckBoxesList({
                      ...allCheckBoxesList,
                      [checkBoxKeyName]: e.target.checked,
                    })
                    setCountSelectedItemsOnebyOne(
                      countSelectedItemsOnebyOne + 1,
                    )
                    /*console.log(checkBoxKeyName, 'onchange ', e.target.checked, {
                    [checkBoxKeyName]: allCheckBoxesList[checkBoxKeyName],
                  })*/
                  }else{
                    setErr(props?.error)
                  }
                }}
                /**
                 * onChange={(pop) =>
                          props?.handleChange(props?.id, checkBoxKeyName)
                 */
              />
            </label>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      <div
        className="card dark-card"
        id={'d' + (Math.random() + 1).toString(36).substring(4)}
      >
        <div
          className="card-header"
          id={'d' + (Math.random() + 1).toString(36).substring(4)}
        >
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target={`#${props.target}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {props.name}
            </button>
          </h2>
        </div>

        <div
          id={props.target}
          className="collapse"
          aria-labelledby={props.name}
        >
          <div className="card-body">
            <div className="col-md-12">
              <div className="row">
                <AllCheckBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
