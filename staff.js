window.onload = function() {

/**
 *
 *  TODO: Fix get the JSON working.
 *  var xmlhttp = new XMLHttpRequest();
    var staff;
    var staffdiv = document.getElementById("staff");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            staff = JSON.parse(this.responseText);
            for (x = 0; x < staff.length; x++) {
                staffdiv.innerHTML += "<h4 class=\"section\">" + staff[x].sectionName + "</h4>";
                for (y = 0; y < staff[x].staffList.length; y++) {
                    staffdiv.innerHTML += "<h4 class=\"name\">" + staff[x].staffList[y].employeeName + "</h4>";
                    staffdiv.innerHTML += "<h4 class=\"position\">" + staff[x].staffList[y].employeePosition + "</h4>"
                }
            }

        }
    };
    xmlhttp.open("GET", "staff.json", true);
    xmlhttp.send();
*/
    var staff = [
        {
            "sectionName" : "Corporate Officers",
            "staffList" : [
                {
                    "employeeName": "Ching E. Pialan-Barretto",
                    "employeePosition": "President/Publisher/Founder"
                },
                {
                    "employeeName": "Ma. Olivia Pagkatipunan",
                    "employeePosition": "Exec. Vice President"
                },
                {
                    "employeeName": "Lt. Bambi Barretto, Ret.",
                    "employeePosition": "VP For Operation"
                },
                {
                    "employeeName": "Sr/Supt Ernesto A. Collado, Ret.",
                    "employeePosition": "VP For Internal Affairs"
                },
                {
                    "employeeName": "Victor P. Cuestas",
                    "employeePosition": "VP For Finance"
                },
                {
                    "employeeName": "Cherry Rose P. Senen",
                    "employeePosition": "VP For Treasury"
                },
                {
                    "employeeName": "Cherryl Jane Senen",
                    "employeePosition": "Corporate Secretary"
                }
            ]
        },
        {
            "sectionName" : "Board of Directors",
            "staffList" : [
                {
                    "employeeName": "Joel Arsolon",
                    "employeePosition": "Board Member"
                },
                {
                    "employeeName": "Ariel Mendoza",
                    "employeePosition": "Board Member"
                },
                {
                    "employeeName": "P/Supt Gilbert Dela Fuente",
                    "employeePosition": "Police Consultant"
                },
                {
                    "employeeName": "SPO4 Virgilio Pascual, Ret.",
                    "employeePosition": "Board Member"
                },
                {
                    "employeeName": "Atty. Carmina Abras",
                    "employeePosition": "Legal Counsel"
                },
                {
                    "employeeName": "Atty. Romeo De Leon",
                    "employeePosition": "Legal Counsel"
                },
                {
                    "employeeName": "Larry Queano",
                    "employeePosition": "Board Member"
                }
            ]
        },
        {
            "sectionName" : "Editorial Staff",
            "staffList" : [
                {
                    "employeeName": "Thalia Marbella",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Danilo Evangelista",
                    "employeePosition": "Feature Writer"
                },
                {
                    "employeeName": "Joey R. Martinez",
                    "employeePosition": "Editor-in-Chief"
                },
                {
                    "employeeName": "Patrick Esguerra",
                    "employeePosition": "Publication Coordinator"
                },
                {
                    "employeeName": "Marissa Pialan",
                    "employeePosition": "Encoder"
                },
                {
                    "employeeName": "George F. Agcanas",
                    "employeePosition": "Layout Artist"
                },
                {
                    "employeeName": "Teresa V. Hernandez",
                    "employeePosition": "Feature Writer"
                },
                {
                    "employeeName": "Maureen Braza",
                    "employeePosition": "Documentation Officer"
                },
                {
                    "employeeName": "Bernadette Santos",
                    "employeePosition": "Field Reporter"
                },
                {
                    "employeeName": "Antonia C. Alonso",
                    "employeePosition": "Field Reporter"
                },
                {
                    "employeeName": "Alejandria Collado",
                    "employeePosition": "Associate Editor"
                },
                {
                    "employeeName": "Budski Hondante",
                    "employeePosition": "Press Photographer"
                },
                {
                    "employeeName": "Cherryl Jane Sene",
                    "employeePosition": "Creative Art Consultant"
                },
                {
                    "employeeName": "Aime Pialan",
                    "employeePosition": "Secretary"
                },
                {
                    "employeeName": "Olive Pimentel",
                    "employeePosition": "Editorial Consultant"
                },
                {
                    "employeeName": "Rustico Reyes",
                    "employeePosition": "Correspondent"
                },
                {
                    "employeeName": "Miriam Laureta",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Nhapp Jose",
                    "employeePosition": "Press Photographer"
                }
            ]
        },
        {
            "sectionName" : "Functionaries",
            "staffList" : [
                {
                    "employeeName": "Nazareno \"Joey\" Padilla",
                    "employeePosition": "Public Relation Officer"
                },
                {
                    "employeeName": "Reynald Gabrinao",
                    "employeePosition": "Circulation Officer"
                },
                {
                    "employeeName": "Yolanda Homo",
                    "employeePosition": "Circulation Officer"
                },
                {
                    "employeeName": "Rey Soledad",
                    "employeePosition": "Liaison Officer"
                },
                {
                    "employeeName": "Fermo Nilo",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Andy Subeldia",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Danila Tabago",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Beth Cruz",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Jocelyn R. Repangue",
                    "employeePosition": "Advertising Officer"
                },
                {
                    "employeeName": "Julie R. Llanera",
                    "employeePosition": "Advertising Officer"
                }
            ]
        }
    ];

    var staffdiv = document.getElementById("staff");
    for (x = 0; x < staff.length; x++) {
        staffdiv.innerHTML += "<h4 class=\"section\">" + staff[x].sectionName + "</h4>";
        for (y = 0; y < staff[x].staffList.length; y++) {
            staffdiv.innerHTML += "<h4 class=\"name\">" + staff[x].staffList[y].employeeName + "</h4>";
            staffdiv.innerHTML += "<h4 class=\"position\">" + staff[x].staffList[y].employeePosition + "</h4>"
        }
    }
};


