function flatJson(obj, fatherName, original = {}){
  for(var key in obj){
      if(obj[key] instanceof Object){
          flatJson(obj[key], `${fatherName}.${key}`,original);
      }else{
          original[`${fatherName}.${key}`] = obj[key];
      }
  }
  return original;
}


function flatAsBooleanJson(obj, fatherName, original = {}){
  for(var key in obj){
      if(obj[key] instanceof Object){
          flatJson(obj[key], `${fatherName}.${key}`,original);
      }else{
          original[`${fatherName}.${key}`] = true;
      }
  }
  return original;
}

function hasIn(checkObj, boolObj, answer = {}, fatherKey = "root"){
    for(var key in checkObj){
        if(checkObj[key] instanceof Object){
            answer[key] = hasIn(checkObj[key], boolObj, {}, `${fatherKey}.${key}`);
        }else{
            if(boolObj[`${fatherKey}.${key}`]){
                answer[key] = "MUST Have";
            } else{
                answer[key] = "Not Obligated";
            }
            console.log("Answer2 is : in " + `${fatherKey}.${key}`);
            console.log(answer)
        }
    }
    return answer;
}

function hasInObj(object1, object2){
    let boolObj = flatAsBooleanJson(object2, "root"); // Obj2 must be the one with needed values
    return answer = hasIn(object1, boolObj);
}