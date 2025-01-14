// --------------task1--------------
const x = (str) => str.split(",");

const input = "Orange,Jordan";
const output = x(input);     
console.log(output); // ["Orange", "Jordan"]

// --------------task2--------------
const num = (mop) => "*******" + mop.slice(-3);

console.log(num('0776807777')); 
// *******777

// --------------task3--------------
const email1 = (email) => {
  const [z, a] = email.split("@");
  const y = z.slice(0, 6) + "...";
  return y + "@" + a;
};

console.log(email1("orange_academy@orange.jo")); 

// --------------task5--------------
const upp = (str) => 
    str
      .split(" ") 
      .map(w1 => w1.charAt(0).toUpperCase() + w1.slice(1)) 
      .join(" ");
  
  console.log(upp("coding academy by orange")); 
  // --------------task6--------------

  const num6 = (num) => 
    parseInt(num.toString().split("").reverse().join(""), 10);
  
  const input6 = 92485;
  const output6 = num6(input6);
  console.log(output6); 
  // --------------task7-1--------------

  const temp7 = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return { a, b };
  };
  
  let a = 3, b = 4;
  console.log(temp7(a, b));
  
  // --------------task7-2--------------
  const num72 = (obj) => {
    obj.a = obj.a + obj.b;
    obj.b = obj.a - obj.b;
    obj.a = obj.a - obj.b;
    return obj;
  };
  
  const obj = { a: 3, b: 4 };
  console.log(num72(obj)); 
  

  // --------------task7-3--------------
  const num73 = (obj) => {
    [obj.a, obj.b] = [obj.b, obj.a];
    return obj;
  };
  
  const obj2 = { a: 3, b: 4 };
  console.log(num73(obj2)); 

  // --------------task8-------------

  const re8 = (str, i) => 
    str.slice(0, i) + str.slice(i + 1);
  
  const input8 = "Orange";
  const output8 = re8(input8, 3);
  console.log(output8); 
  
  // --------------task9--------------

  const re9 = (str1, str2) => str1.slice(1) + str2.slice(1);

  const input9_1 = "lora";
  const input9_2 = "inge";
  const output9 = re9(input9_1, input9_2);
  console.log(output9); 
  
  // --------------task10--------------
  const num10 = (ch, str) => 
    str.startsWith(ch) || str.endsWith(ch);
  
  console.log(num10("o", "orange")); 
  console.log(num10("z", "orange")); 
  

  // --------------task11--------------
  const xx = str => str.split(" ");

  const input11 = "Coding Academy by Orange";
  const output11 = xx(input11);
  console.log(output11);
  
  // --------------task12--------------
  const sortt = str => str.split("").sort().join("");

  const input12 = "orange";
  const output12 = sortt(input12);
  console.log(output12); 
  
  // --------------task13--------------
  const time13 = (fu, ...args) => {
    const x = performance.now(); 
    fu(...args);
    const y = performance.now(); 
    return `${y - x} ms`;
  };
  
  const timea = (num) => {
    for (let i = 0; i < num; i++) {} 
  };
  
  const timex = time13(timea, 1000000);
  console.log(`time: ${timex}`);
  
