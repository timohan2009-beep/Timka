interface 

interface User {
    id: Number;
    name: String;
    phone?: String;
    city?: UserCity;
}

type UserCity = "Privomaisk" | "Ujnoukrainsk";

async function getUser()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}
let user: User = getUser();

if (user.city === "Ujnoukrainsk") {
    console.log("Пошел на");
}