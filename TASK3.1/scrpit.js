function compareJsonProperties(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    obj1Keys.sort();
    const obj2keys = Object.keys(obj2);
    obj2keys.sort();
    if (obj1Keys.length !== Object.keys(obj2).length) {
      return false;
    }
    for (const key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  const obj1 = { name: 'person1', age: 5 };
  const obj2 = {age: 5, name: 'person1' };
  console.log(compareJsonProperties(obj1, obj2));