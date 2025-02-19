
function CountRoles(users) {
    let roleCounts = { admin: 0, instructor: 0, student: 3};

    for (let user of users) {
        if (user.role in roleCounts) {
            roleCounts[user.role]++;
        }
    }
    return roleCounts;
}
function findAdmins(users) {
    let admins = users.filter(user => user.role === "admin").map(user => user.name);
    return admins.length > 0 ? admins : "No admins found";
}

function generateWelcomeMessages(users) {
    return users.map(user => `Welcome ${user.name} You are an ${user.role}.`);
}

const users = [
    { name: "Alice", role: "admin" },
    { name: "Ange", role: "student" },
    { name: "Celine", role: "instructor" },
    { name: "Bonte", role: "admin" },
    { name: "Devotha", role: "student" }
];

console.log(CountRoles(users));
console.log(findAdmins(users)); 
console.log(generteWelcomeMessages(users));

/// The Advantages of using array (map,filter)
//array help us to store more element with the same datatype
// array help us to develop program fast 
//array help us to work on big project but summarise as i said before 
// array help us to understand the programming language 
// 
