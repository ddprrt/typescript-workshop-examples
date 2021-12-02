const enum Direction {
    Up, Down, Left, Right
}

function move(direction: Direction) : void {
    switch(direction) {
        case 2:
            console.log("Moving donw...")
        default:
            console.log("Nope, only down")
    }
}

move(1000) // One big problem with enums

const enum Status {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator"
}

type Values<T> = T[keyof T]


function closeThread(threadId: number, status: (Values<typeof MyEnum>)): void {
    switch(status) {
        case "Admin":
            break;
        case "Moderator":
            break;
        default:
            console.log("Users are not allowed to close threads")
    }
}

closeThread(2, Status.Admin);

const enum UserRole {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator"
}

closeThread(2, UserRole.Admin)
closeThread(2, "Admin")

type UserStatus = "Admin" | "Moderator" | "User"

const MyEnum = {
    Admin: "Admin",
    Moderator: "Moderator",
    User: "User"
} as const

class MyEnumClass {
    static Admin: "Admin"
}

closeThread(2, MyEnumClass.Admin)
closeThread(2, MyEnum.Admin)