const domain = () => {
  let first = ["apple", "banana", "candy"];
  let second = ["butter", "pecan", "alcohol"];
  let third = [".com", ".org", ".net", ".gov"];

  for (let i = 0; i < first.length; i++)
    for (let a = 0; a < second.length; a++)
      for (let b = 0; b < third.length; b++)
        console.log(first[i] + second[a] + third[b]);
};
console.log(domain());
