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
            icon: "view_list",
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
                    name: "Exam Result"
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
    ],
    cfa: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
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
            key: 3,
            route: "attendance",
            name: "Attendance",
            icon: "fact_check",
            menu: [
                {
                    key: 1,
                    route: "",
                    name: "Attendance"
                },
                {
                    key: 2,
                    route: "condonation",
                    name: "Condonation"
                }
            ]
        },
        {
            key: 4,
            route: "reports",
            name: "Reports",
            icon: "monitoring",
            menu: [
                {
                    key: 1,
                    route: "internals",
                    name: "Internals",
                },
                {
                    key: 2,
                    route: "coa",
                    name: "CO Attainment",
                },
            ]
        },
        {
            key: 5,
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
                    name: "Exam Result"
                },
                {
                    key: 3,
                    route: "fees",
                    name: "Fees"
                }
            ]
        },
        {
            key: 6,
            route: "requests",
            name: "Requests",
            icon: "send",
            menu: null
        }
    ],
    hod: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
            menu: [ 
                {
                    key: 1,
                    route: "enrollment",
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
            key: 3,
            route: "attendance",
            name: "Attendance",
            icon: "fact_check",
            menu: [
                {
                    key: 1,
                    route: "",
                    name: "Attendance"
                },
                {
                    key: 2,
                    route: "condonation",
                    name: "Condonation"
                }
            ]
        },
        {
            key: 4,
            route: "reports",
            name: "Reports",
            icon: "monitoring",
            menu: [
                {
                    key: 1,
                    route: "internals",
                    name: "Internals",
                },
                {
                    key: 2,
                    route: "coa",
                    name: "CO Attainment",
                },
            ]
        },
        {
            key: 5,
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
                    name: "Exam Result"
                },
                {
                    key: 3,
                    route: "fees",
                    name: "Fees"
                }
            ]
        },
        {
            key: 6,
            route: "requests",
            name: "Requests",
            icon: "send",
            menu: null
        }
    ],
    pc: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
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
            key: 3,
            route: "examiners",
            name: "Examiners",
            icon: "group",
            menu: null
        },
    ],
    ttc: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
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
            key: 3,
            route: "staff",
            name: "Staff Allocation",
            icon: "tips_and_updates",
            menu: null
        },
        {
            key: 4,
            route: "ut",
            name: "UT Schedule",
            icon: "table_view",
            menu: null
        },
        {
            key: 5,
            route: "groups",
            name: "Groups",
            icon: "group_add",
            menu: null
        }
    ],
    fa: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
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
            key: 3,
            route: "attendance",
            name: "Attendance",
            icon: "fact_check",
            menu: [
                {
                    key: 1,
                    route: "onduty",
                    name: "On Duty"
                },
                {
                    key: 2,
                    route: "condonation",
                    name: "Condonation"
                },
                {
                    key: 3,
                    route: "report",
                    name: "Report"
                }
            ]
        },
        {
            key: 4,
            route: "reports",
            name: "Reports",
            icon: "monitoring",
            menu: [
                {
                    key: 1,
                    route: "internals",
                    name: "Internals",
                },
                {
                    key: 2,
                    route: "coa",
                    name: "CO Attainment",
                },
            ]
        },
        {
            key: 5,
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
                    name: "Exam Result"
                },
                {
                    key: 3,
                    route: "fees",
                    name: "Fees"
                }
            ]
        },
        {
            key: 6,
            route: "feedback",
            name: "Feedback",
            icon: "star",
            menu: null
        },
        {
            key: 7,
            route: "requests",
            name: "Requests",
            icon: "send",
            menu: null
        }
    ],
    ci: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
            menu: null
        },
        {
            key: 3,
            route: "attendance",
            name: "Attendance",
            icon: "fact_check",
            menu: null
        },
        {
            key: 4,
            route: "timetable",
            name: "Timetable",
            icon: "table",
            menu: [
                {
                    key: 1,
                    route: "",
                    name: "Timetable"
                },
                {
                    key: 2,
                    route: "class",
                    name: "Class Timetable"
                }
            ]
        },
        {
            key: 5,
            route: "internals",
            name: "Internals",
            icon: "rule",
            menu: [
                {
                    key: 1,
                    route: "ut",
                    name: "Unit Test"
                },
                {
                    key: 2,
                    route: "assignment",
                    name: "Assignments",
                },
                {
                    key: 3,
                    route: "tutorial",
                    name: "Tutorial"
                }
            ]
        },
        {
            key: 6,
            route: "coa",
            name: "CO Attainment",
            icon: "insert_chart",
            menu: null
        },
        {
            key: 7,
            route: "result",
            name: "Exam Result",
            icon: "verified",
            menu: null
        },
        {
            key: 8,
            route: "requests",
            name: "Requests",
            icon: "send",
            menu: null
        }
    ],
    student: [
        {
            key: 1,
            route: "curriculum",
            name: "Curriculum",
            icon: "library_books",
            menu: [
                {
                    key: 1,
                    route: "courses",
                    name: "Courses",
                },
                {
                    key: 2,
                    route: "electives",
                    name: "Electives"
                }
            ]
        },
        {
            key: 2,
            route: "enrollment",
            name: "Enrollment",
            icon: "view_list",
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
            key: 3,
            route: "timetable",
            name: "Timetable",
            icon: "table",
            menu: [
                {
                    key: 1,
                    route: "",
                    name: "Timetable"
                },
                {
                    key: 2,
                    route: "master",
                    name: "Master Timetable"
                }
            ]
        },
        {
            key: 4,
            route: "attendance",
            name: "Attendance",
            icon: "fact_check",
            menu: null
        },
        {
            key: 5,
            route: "internals",
            name: "Internals",
            icon: "rule",
            menu: [
                {
                    key: 1,
                    route: "ut",
                    name: "Unit Test"
                },
                {
                    key: 2,
                    route: "assignment",
                    name: "Assignments",
                },
                {
                    key: 3,
                    route: "tutorial",
                    name: "Tutorial"
                }
            ]
        },
        {
            key: 6,
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
                    name: "Exam Result"
                },
                {
                    key: 3,
                    route: "fees",
                    name: "Fees"
                }
            ]
        },
        {
            key: 7,
            route: "feedback",
            name: "Feedback",
            icon: "star",
            menu: null
        }
    ]
}

export default users