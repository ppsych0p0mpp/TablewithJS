$(document).ready(function() {
    //Fetch the Details data from a JSON file
    fetch("Details.json")
    .then((rawData) => rawData.json())
    .then((Details) => {
        //console.log(details); // Example usage
        //Array of semester names
        let sem = ["First Year, First Semester",
                    "First Year, Second Semester",
                    "Second Year, First Semester",
                    "Second Year, Second Semester",
                    "Third Year, First Semester",
                    "Third Year, Second Semester",
                    "Fourth Year, First Semester",
                    "Fourth Year, Second Semester"];
        let semcount = 0; //Counter for current semester

        //Object defining column widths for the table
        const columnName = {"Course": 15,
                            "Description": 25,
                            "Unit": 8,
                            "Grade": 10,
                            "Remarks" : 12,
                            "Course2": 16,
                            "Term": 25}

        //Iterate through each semester in the Details
        Details.forEach(subjects => {
            // Add semester title to the table
            $(".tablebody").append(
                `<tr class="table-title">
                    <th colspan="7">${sem[semcount++]}</th>
                </tr>`
            )
            //Create table header row
            let tableHeadHTML;
            for (let x in columnName) {
                //Special case for "Course2" column
                if(x === "Course2")
                    tableHeadHTML += `<td width=${columnName[x]}%>${x.substring(0,(x.length-1))}</td>`;  
                else
                    tableHeadHTML += `<td width=${columnName[x]}%>${x}</td>`;
            }
            //Add table header to the table
            $(".tablebody").append(
                `<tr class="table-head">
                    ${tableHeadHTML}
                </tr>`
            )
            //Iterate through each subject in the semester
            for (let i in subjects) {
                //Extract subject details
                let subject = subjects[i];
                let course = subject["Course"];
                let course2 = subject["Course"];
                let desc = subject["Description"];
                let unit = subject["Unit"];
                let grade = subject["Grade"];
                let remarks = subject["Remarks"];
                let term = subject["Term"];
                
                //Add subject row to the table
                $(".tablebody").append(
                    `<tr>
                    <td>${course}</td>
                    <td>${desc}</td>
                    <td>${unit}</td>
                    <td>${grade}</td>
                    <td>${remarks}</td>
                    <td>${course2}</td>
                    <td>${term}</td>
                    </tr>`
                )
            }
        });
    });
})