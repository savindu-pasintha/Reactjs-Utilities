
function combinations(){
  

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

var tmp = [];
tmp = subset([2,1,3], 2);
console.log("subsets : ",tmp);
var count=0,sum=0;
tmp.map((items,ind)=>{
   console.log('sample : ',ind,' : ',items);
   items.map((item,inde)=>{
     //console.log(item);
     sum = sum+item;
      console.log(sum);
      if(sum/items.length==2){
        count=count+1;
        console.log("sum/length : ",sum/items.length, ' count :  ',count);
      }
   });
   sum=0;
});
return count;
}
console.log('count : ',combinations());
