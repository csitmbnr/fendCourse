  //JavaScript const cannot be reassigned
  const pi = 3.14;
  console.log(pi);

  const pi = 3.14;
    pi = 4.4;
  console.log(pi);

//explains the const contains the Block Scope.
const x = 22;
       {
           const x = 90;
           console.log(x);
           {
               const x = 77;
               console.log(x);
           }
           {
               const x = 45;
               console.log(x);
           }
       }
       console.log(x);
