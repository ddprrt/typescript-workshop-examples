declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 24 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);

console.log(loggedInUser?.name)
