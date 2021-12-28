// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  //Setup regex that will be used to compare the url string
  const regex = /.+\/\/|www.|\..+/g;
  //Return the string, while using .replace to look for everything before and after the core domain name and replace it with an empty string. 
  return url.replace(regex,'');
}

//Commonly you would use .match(regex) for filtering strings but the above method works better due to the many different types of domain prefixs 

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
