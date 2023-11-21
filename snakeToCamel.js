function snakeToCamel(json) {
  for(key in json){
    let camelKeyArray = key.split("_")
    for(let i = 1; i<camelKeyArray.length; i++){
      camelKeyArray[i] = camelKeyArray[i][0].toUpperCase() + camelKeyArray[i].substring(1);
    }

    let camelKey = camelKeyArray.join('')

    if(camelKey != key){
      json[camelKey] = json[key];
      delete json[key]
    }

    if(json[camelKey] instanceof Object){
      json[camelKey] = snakeToCamel(json[camelKey])
    }
  }
  return json;
}
