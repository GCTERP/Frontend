const users = {
    admin: [
        {
            key: 1,
            route: "users",
            name: "Users",
            icon: "group",
            menu: [ 
                {
                    key: 1,
                    route: "",
                    name: "Users"
                },
                {
                    key: 2,
                    route: "students",
                    name: "Students"
                },
                {
                    key: 3,
                    route: "faculty",
                    name: "Faculty"
                }
            ]
        },
        
        {
            key: 2,
            route: "faculty",
            name: "Faculty",
            icon: "tips_and_updates",
            menu: [ 
                {
                    key: 1,
                    route: "roles",
                    name: "Roles"
                },
                {
                    key: 2,
                    route: "details",
                    name: "Details"
                }
            ]
        },
        {
            key: 3,
            route: "students",
            name: "Students",
            icon: "school",
            menu: null
        },
        {
            key: 4,
            route: "academics",
            name: "Academics",
            icon: "account_balance",
            menu: [ 
                {
                    key: 1,
                    route: "semester",
                    name: "Semester"
                },
                {
                    key: 2,
                    route: "branches",
                    name: "Branches"
                }
            ]
        },
        {
            key: 5,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [ 
                {
                    key: 1,
                    route: "courses",
                    name: "Courses"
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 6,
            route: "enrollment",
            name: "Enrollment",
            icon: "dns",
            menu: [ 
                {
                    key: 1,
                    route: "",
                    name: "Enrollment"
                },
                {
                    key: 2,
                    route: "registration",
                    name: "Registration"
                },
            ]
        },
        {
            key: 7,
            route: "examination",
            name: "Examination",
            icon: "receipt_long",
            menu: [
                {
                    key: 1,
                    route: "hallticket",
                    name: "Hallticket"
                },
                {
                    key: 2,
                    route: "result",
                    name: "Result"
                },
                {
                    key: 3,
                    route: "fees",
                    name: "Fees"
                }
            ]
        },
        {
            key: 8,
            route: "feedback",
            name: "Feedback",
            icon: "star",
            menu: null
        },
        {
            key: 9,
            route: "requests",
            name: "Requests",
            icon: "send",
            menu: null
        }
    ]
}

export default users