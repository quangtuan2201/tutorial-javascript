const products = [
     { name: 'Laptop', price: 1000 },
     { name: 'Phone', price: 500 },
     { name: 'Tablet', price: 300 }
   ];
   
   const {name , price} = products[1]; 
   //console.log(name)
   //bt3
   const employees = [
     { id: 1, name: 'Alice', department: 'HR' },
     { id: 2, name: 'Bob', department: 'Engineering' },
     { id: 3, name: 'Charlie', department: 'Finance' }
   ];
   
   
   const {id,name:nameE,department} = employees.find(param=>param.id === 2);
   //console.log(nameE)
   //bt4 : lay ra id=3
   //lay ra name copany của employees id=3
   const company = {
     name: 'ABC Inc.',
     employees: [
       { id: 1, name: 'Alice', department: 'HR' },
       { id: 2, name: 'Bob', department: 'Engineering' },
       { id: 3, name: 'Charlie', department: 'Finance' }
     ]
   };
   
   const {name : cName , employees:[,,{id:eId,name:eName,deePartment}]} = company;
   console.log(cName,eId)
   //bt5 : llay ra ptu thu 5
   const matrix = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   const[,[,arr,],]=matrix;
   //console.log(arr)
   //bt6 name của ng thứ 3 và age của ng thứ 2
   const matrixOfPeople = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 35 }
   ];
   const [,{age:e2Age},{name:e2Name}] = matrixOfPeople;
   console.log(e2Age , e2Name)