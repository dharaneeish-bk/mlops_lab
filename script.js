```javascript
const students = {
    "101": {
        name: "Arun",
        department: "Computer Science",
        marks: {
            Mathematics: 85,
            Programming: 90,
            Database: 78
        }
    },

    "102": {
        name: "Priya",
        department: "Information Technology",
        marks: {
            Mathematics: 88,
            Programming: 92,
            Database: 84
        }
    },

    "103": {
        name: "Rahul",
        department: "Computer Science",
        marks: {
            Mathematics: 72,
            Programming: 75,
            Database: 80
        }
    }
};

function checkResult() {

    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const result =
        document.getElementById("result");

    if (students[rollNumber]) {

        const student = students[rollNumber];

        const maths = student.marks.Mathematics;
        const programming = student.marks.Programming;
        const database = student.marks.Database;

        const total = maths + programming + database;
        const percentage = total / 3;

        result.innerHTML = `
            <h2>Student Result</h2>
            <p><strong>Roll Number:</strong> ${rollNumber}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Department:</strong> ${student.department}</p>

            <p><strong>Mathematics:</strong> ${maths}</p>
            <p><strong>Programming:</strong> ${programming}</p>
            <p><strong>Database:</strong> ${database}</p>

            <p><strong>Total:</strong> ${total}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        `;

    } else {

        result.innerHTML =
            "<p>Student record not found.</p>";
    }
}
```
