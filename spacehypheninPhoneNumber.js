
The + sign is a special character in regex

Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy) (from regex101.com)
It needs to be escaped if you want to match against the string literal +:

/\+91/
will match.

An example replacement like you want it to have would be (again from regex101.com)


// Code goes here

const regex = /(\+91)/g;
const str = `+911147005555, +911147005556, +919999973703`;
const subst = `\$1 - `;

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

console.log('Substitution result: ', result);

It will replace only one +91/^(\+91)/g 

But it will always repaces all +91 in the string /(\+91)/g? 
