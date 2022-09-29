const handleTextChange = (value,type) =>{
    //1 check values is null | undefined
    if(value){
      // 2 remove the spacess in start & last
      var enteredValue = value.toString().trim();
      //3 check string have any specialcharacters
      var format = type == 'email' ? /[!#$%^&()_+\-=\[\]{};':"\\|,<>\/?]+/ : /[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]+/;
     
      var hasAnySpace = /\s/.test(value);
      var hasAnySpecialCharacters = format.test(enteredValue);
      if(hasAnySpecialCharacters || hasAnySpace){
        ToastError("Cannot enter special characters/space");
      }
      else{
        // if no have any special characters variable value set
        if(type=='firstName'){
          setFirstName(enteredValue);
        }
       if(type=='email'){
        setEmail(enteredValue);
       }
      }
    }else{
      if(type=='firstName'){
        setFirstName(value);
      }
      if(type=='email'){
        setEmail(value);
      }
    }
  }
