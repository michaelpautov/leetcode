/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var dfs = function(nestedList,depth){
  var sum = 0;
  var n = nestedList.length;
  for(var i=0; i<n;i++){
    if(nestedList[i].isInteger()){
      sum += nestedList[i].getInteger() * depth;
    }
    else{
      sum += dfs(nestedList[i].getList(),depth+1);
    }
  }
  return sum;
};
var depthSum = function(nestedList) {
  return dfs(nestedList,1);
};
