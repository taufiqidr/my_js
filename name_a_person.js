const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = () => firstAndLast.split(' ')[0];
    this.getLastName = () => firstAndLast.split(' ')[1];
    this.getFullName = () => firstAndLast;
    this.setFirstName=(first)=> {
      firstAndLast = first +" "+firstAndLast.split(' ')[1]
      }
    this.setLastName=(last)=>{
      firstAndLast =firstAndLast.split(' ')[0] +" "+last
      }
    this.setFullName=(input)=>{firstAndLast=input;}
  
    
      
    
  };
  
  const bob = new Person('Bob Ross');
  bob.setFirstName("Haskell")
  console.log(bob.getFullName()); 
  
  
  