import React, { useEffect } from 'react'
import MUIDataTable from "mui-datatables";

//styles compoennts
import styled,{keyframes} from 'styled-components';
// import styled,{keyframes} from '@emotion/styled'



//jquery
import $ from "jquery";
import { style } from '@mui/system';

export const MUIDataTableStyles =  styled(MUIDataTable)`background-color:red;
&:hover {
    background-color: #105b72c2;
  }`;
export const Buttonx = styled.button`background-color:white;border:none;width:150px;height:50px;`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
	animation: ${rotate} 1s linear infinite;
	position: relative;
	margin: auto;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	border: 6px solid white;
	border-right-color: transparent;
    background-color:black;
    padding:1rem;
    color:white;
`;
const CustomSpiner = styled.div`
width:150px;padding:10px;
background-color:black;
`;

const CustomCss = () => {
    useEffect(()=>{
        $(".MuiTableCell-root").css("background-color", "brown")
        $("tr").css("border", "3px solid white")
        $("th").append("<Buttonx>ssss</Buttonx>")
        $('.tss-hj53wm-MUIDataTableToolbar-titleText').remove()
        // $(".tss-hj53wm-MUIDataTableToolbar-titleText").css("display", "none")
         $(".tss-hj53wm-MUIDataTableToolbar-titleText").append("kkkkk");
        $(".tss-8ai1ls-MUIDataTableToolbarSelect-deleteIcon").css("width","0px")
        $('.tss-1dci9uv-MUIDataTableSelectCell-checkboxRoot').css("background-color","white")
        $('.tss-1dci9uv-MUIDataTableSelectCell-checkboxRoot').remove()
        $('.css-1x51dt5-MuiInputBase-input-MuiInput-input').css("background-color","white")

    },[])
  return (
    <div>
        <CustomSpiner><Spinner /></CustomSpiner>
      <div>
        <MUIDataTableStyles
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

export default CustomCss
export const columns = ["Name", "Company", "City", "State"];
export const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
export const options = {
  filterType: 'checkbox',
};
