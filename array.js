var fruits=['mango', 'mango', 'apple', 'kiwi', 'kiwi', 'kiwi', 'papaya', 'papaya', 'banana']

function uniquearray(arr){
    var fru=[]
    arr.forEach(function(element,index)
      {
       
        console.log("item is:"+element)
        console.log("item is:"+index)
        if(fru.includes(element)){

        }
        else{
            fru.push(element)
        }
        
        
        
        
        
        
     })
     return fru;
    }