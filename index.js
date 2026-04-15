const datejs = require ('datejs')

function combineUsers (...args){
  const combinedObject={
    users: []
  };

  for (const array of args){
    combinedObject.users=[...combinedObject.users, ...array];
  }

 const today = new Date();
 const dateStr =`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}` ;

 combinedObject.merge_date = dateStr;

 return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
