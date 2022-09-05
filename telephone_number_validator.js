function telephoneCheck(str) {
  let temp = str.replace(/-/g,"")
  // console.log(temp.split(')'))

  if (temp.match(/[a-z]/g)){
    return false
  }
  if (temp.length < 10){
    return false
  }
  return true;
}

console.log(telephoneCheck("123**&!!asdf#"));