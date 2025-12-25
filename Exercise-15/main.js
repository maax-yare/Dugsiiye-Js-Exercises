
const students = [
  {
    id: "S12345",
    name: "Alex Smith",
    major: "Computer Science",
    age: 20,
    gpa: 3.8,
    enrollmentYear: 2024,
  },
  {
    id: "S12365",
    name: "Olivia Martinez",
    major: "Science and Mathematics",
    age: 22,
    gpa: 3.5,
    enrollmentYear: 2021,
  },
  {
    id: "S12949",
    name: "Noah Parker",
    major: "Social Sciences",
    age: 29,
    gpa: 3.3,
    enrollmentYear: 2022,
  },
  {
    id: "S12888",
    name: "Oliver Collins",
    major:  "Business and Management",
    age: 24,
    gpa: 3.2,
    enrollmentYear: 2023,
  },
];

for (const student of students){
    console.log("-----------------------------");
    console.log("properties and values of each student:");
    console.log("-----------------------------");
    for(const key in student){
        console.log(key + " : "+ student[key]);
    };
};


