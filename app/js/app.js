
/* // ENGLISH BUTTON
const button = document.getElementById("engBtn");
button.addEventListener("click", async () => {
  const response = await fetch("index_eng.html");
  const html = await response.text();
  document.body.innerHTML = html;
}); */
    brancharray = [0,0,0,0,0,0,0]
    NLarray = [0,0,0,0,0,0,0]
    var questions = $(".question").length;
    var totalp1 = 0;
    var totalp2 = 0;
    var totalp3 = 0;
    var totalp4 = 0;
    var totalp5 = 0;
    var totalp6 = 0;
    var avg = 0;
    var selectedAnswers = {};
    selectedAnswers['branch'] = 'A';
    selectedAnswers['change'] = 'A';
    let selectedBranch = 'A';
    var instruments = ['Positieve en constructieve houding/gedrag','Kenmerken team','Team coordinatie en planning', 'Fit voor de toekomst', 'Middelen management', 'Netwerk sterkte']
    var instdescriptions = [
    "Gericht op een positieve, constructieve houding met training in productie, online marketing, personal branding, creativiteit, en design thinking. Een uitgebreid aanbod voor het ontwikkelen van essentiële vaardigheden.",
    
    "Teamgerichte trainingen: Projectmanagement met SCRUM, teamrollen volgens Belbin, en veerkracht workshops. Deze cursussen verbeteren teamdynamiek en persoonlijke ontwikkeling, gericht op het optimaliseren van teamperformantie.",
    
    "Uitgebreide training in teamcoördinatie en planning, inclusief een Agile workshop, Master-niveau cursus in Creative Production met vaardigheden voor pre- en postproductie, en uitgebreide projectmanagementtraining.",
    
    "Vooruitstrevende cursussen voor toekomstige gereedheid: 'Exploring Strategy in the Creative Industry', 'Landscape of the Future of the Creative Industry', en 'Platform Economy'. Deze cursussen bieden inzicht in nieuwe businessmodellen en samenwerkingen.",
    
    "Organisatieniveau cursussen: Strategieontwikkeling, klanteninzicht workshops, financieel beheer, change management, en branded entertainment marketing. Deze cursussen bieden diepgaande kennis en inzichten voor organisatorische groei.",
    
    "Netwerkversterking: Intensieve cursussen in productiepijplijnbeheer, stakeholderanalyse, en sociale innovatie. Gericht op het bouwen van sterke, veerkrachtige netwerken binnen de creatieve industrie."
];


// FUNCTIES
const buttons = document.getElementsByClassName("button");

// Function to hide all buttons
function hideButtons() {
for (let i = 0; i < buttons.length; i++) {
buttons[i].style.display = "none";
}
}

// Function to unhide all buttons
function showButtons() {
for (let i = 0; i < buttons.length; i++) {
buttons[i].style.display = "block";
}
}
    const progressMade = document.querySelector('.progressmade')
    progressMade.style.maxWidth = `2%`;

// 'HOME' PAGE WEERGEVEN

    let currentPage = 0; // set current page to 0 (page1)

    function getDate() {
        var today = new Date();
        var day = String(today.getDate()).padStart(2, '0');
        var month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        var year = today.getFullYear();
        var formattedDate = day + '/' + month + '/' + year;
        return formattedDate
    };
    

document.getElementById('selectChange').addEventListener('change', function() {
    const selectedOption = this.value; // Get the value of the selected option
    const key = this.name; // Use the name attribute of the select as the key
    selectedAnswers['change'] = selectedOption; // Update the selectedAnswers object
});

document.getElementById('selectBranch').addEventListener('change', function() {
    const selectedOption = this.value; 
    selectedBranch = selectedOption; 
    selectedAnswers['branch'] = selectedOption
    console.log(selectedBranch); // Note the corrected variable name
});


$(".page").eq(currentPage).addClass("active"); // add active class to current page
$(".page.active").show();
$(".page:not(.active)").hide();

function getBranchAverages(selectedBranch) {
    // Define the endpoint URL
    const endpoint = `/averages?selected_branch=${selectedBranch}`;

    // Send a GET request to the endpoint
    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            
            const nl_avg = data.total_averages[0];
            const branch_avg = data.branch_averages[0];

            NLarray[1] = Math.round(nl_avg.AvgA * 25);
            NLarray[2] = Math.round(nl_avg.AvgB * 25);
            NLarray[3] = Math.round(nl_avg.AvgC * 25);
            NLarray[4] = Math.round(nl_avg.AvgD * 25);
            NLarray[5] = Math.round(nl_avg.AvgE * 25);
            NLarray[6] = Math.round(nl_avg.AvgF * 25);
            // Set brancharray[0] to the calculated average
            const NLsum = NLarray.slice(1).reduce((a, b) => a + b, 0);
            const NLaverage = Math.round(NLsum / 6);
            NLarray[0] = NLaverage;

            // Update brancharray with the averages
            brancharray[1] = Math.round(branch_avg.AvgA * 25);
            brancharray[2] = Math.round(branch_avg.AvgB * 25);
            brancharray[3] = Math.round(branch_avg.AvgC * 25);
            brancharray[4] = Math.round(branch_avg.AvgD * 25);
            brancharray[5] = Math.round(branch_avg.AvgE * 25);
            brancharray[6] = Math.round(branch_avg.AvgF * 25);
            // Set brancharray[0] to the calculated average
            const sum = brancharray.slice(1).reduce((a, b) => a + b, 0);
            const average = Math.round(sum / 6);
            brancharray[0] = average;
        
            console.log('Updated brancharray:', brancharray);
        })
        .catch((error) => {
            // Handle errors here
            console.error(error);
        });
}


    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if ($('.selected').length === 44) {
            // Add the code for radio button validation here
            const radioButtons = document.querySelectorAll('input[name="role"]');
            let selected = false;

            // Check if at least one radio button is selected
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selected = true;
                    break;
                }
            }
            if (selected) {
                selectedAnswers['date'] = getDate();
                var formData = new FormData(this);
                var object = {};
                formData.forEach((value, key) => object[key] = value);

                // Merge the selectedAnswers with the form data
                Object.assign(object, selectedAnswers);

                var json = JSON.stringify(object);

                fetch('http://127.0.0.1:80/data/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: json
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        getBranchAverages(selectedBranch);
                        toFinalPage();
                    })
                    .catch(error => console.error(error));
            }else {
                // Display an error message or handle the validation as needed
                alert("Selecteer uw rol binnen het bedrijf voor het indienen.");
            }
        } else {
            message = 'Beantwoord alstublieft alle vragen voor uw analyse';
            alert(message);
        }
    });



// BUTTONS
// TERUG KNOP
$(".terug").on("click", () => {
    $(".page").eq(currentPage).removeClass("active"); // remove active class from current page
    currentPage--; // move to previous page
    $(".page").eq(currentPage).addClass("active"); // add active class to new current page
    $(".page.active").show();
    $(".page:not(.active)").hide();
});

// VOLGENDE KNOP
$(".volgende").on("click", () => {
    $(".page").eq(currentPage).removeClass("active"); // remove active class from current page
    currentPage++; // move to next page
    $(".page").eq(currentPage).addClass("active"); // add active class to new current page
    $(".page.active").show();
    $(".page:not(.active)").hide();
});

// FINAL SUBMIT KNOP  
function toFinalPage(){
        avgp1 = Math.round((totalp1/40)*100);
        avgp2 = Math.round((totalp2/40)*100);
        avgp3 = Math.round((totalp3/12)*100);
        avgp4 = Math.round((totalp4/36)*100);
        avgp5 = Math.round((totalp5/24)*100);
        avgp6 = Math.round((totalp6/12)*100);
        avgtotal = Math.round((avgp1 + avgp2 + avgp3 + avgp4 + avgp5 + avgp6)/6)

        $(".page").eq(currentPage).removeClass("active"); // remove active class from current page
        currentPage = currentPage + 1; // move to next page
        $(".page").eq(currentPage).addClass("active"); // add active class to new current page

        
        const bedrijfInput = document.getElementById("bedrijf");
        let bedrijfnaam = document.getElementById('bedrijfnaam');
        bedrijfnaam.innerHTML = bedrijfInput.value;

        progressMade.style.maxWidth = `100%`;
        console.log(FormData)
        $(".page.active").show();
        $(".page:not(.active)").hide();
        updateScorebars();
}

document.getElementById('downloadBtn').addEventListener('click', function () {
    // Select buttons to hide
    const buttonsToHide = document.querySelectorAll('.download, .dev');
    const progressMadeElement = document.querySelector('.progressmade');

    // Add the class no-transition to the element
    progressMadeElement.classList.add('no-transition');
    // Hide the selected buttons
    buttonsToHide.forEach(button => {
        button.style.display = 'none';
    });

    var element = document.getElementById('content-to-download');
    html2pdf(element, {
        margin:       10,
        filename:     'Verveci-Resillience-Analysis.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3}, // Capture entire content area
        jsPDF:        { unit: 'mm', format: [250,300], orientation: 'portrait' } // Use A4 format
    }).then(() => {
        // Add a timeout of 550 ms before showing the buttons again
        setTimeout(() => {
            buttonsToHide.forEach(button => {
                button.style.display = 'block';
            });
        }, 550);
    });
});





// ANTWOORDEN SELECTIE
// FUNCTIES
$('.answer').on('click', function(){
var pageId = $(this).parent().parent().attr('id');
var questionName = $(this).attr('name');
var answerValue = $(this).attr('value');
selectedAnswers[questionName] = answerValue;
console.log(selectedAnswers)
if($(this).parent().find('.selected').length > 0) {
    var oldValue = parseInt($(this).parent().find('.selected').attr('value'), 10);
    window['total' + pageId] -= oldValue;
    $(this).parent().find('.selected').removeClass('selected');
}

$(this).addClass('selected');
var newValue = parseInt($(this).attr('value'), 10);
window['total' + pageId] += newValue;

var progress = ($('.selected').length / 45) * 100;
progressMade.style.maxWidth = `${progress}%`;
});


// RESULTAAT -> SCOREBARS
function updateScorebars() {
const scores = [avgtotal, avgp1, avgp2, avgp3, avgp4, avgp5, avgp6];
const scoresexcl = [avgp1, avgp2, avgp3, avgp4, avgp5, avgp6];
const scorebars = document.querySelectorAll('.scorebarfill');
const scorebarsBR = document.querySelectorAll('.scorebarfillbr');
const scorebarsNL = document.querySelectorAll('.scorebarfillnl');
const scoretext = document.querySelectorAll('#score')
const scoretextBR = document.querySelectorAll('#scorebr')
const scoretextNL = document.querySelectorAll('#scorenl')


scorebars.forEach((scorebar, index) => {
    const value = scores[index];
    scorebar.style.width = `${value}%`;
})

scoretext.forEach((scoretext, index) => {
    const value = scores[index];
    scoretext.innerHTML= `${value}`; 
})


scorebarsBR.forEach((scorebarBR, index) => {
    const value = brancharray[index];
    scorebarBR.style.width = `${value}%`;
})

scoretextBR.forEach((scoretextBR, index) => {
    const value = brancharray[index];
    scoretextBR.innerHTML= `${value}`; 
})


scorebarsNL.forEach((scorebarNL, index) => {
    const value = NLarray[index];
    scorebarNL.style.width = `${value}%`;
})

scoretextNL.forEach((scoretextNL, index) => {
    const value = NLarray[index];
    scoretextNL.innerHTML= `${value}`; 
})

const lowest = getLowestIndices(scoresexcl, 3);
const searchResult = searchLowestIndicesValues(lowest, instruments, instdescriptions)

}

function getLowestValuees(scores) {
const sortedScores = scoresexcl.slice().sort((a, b) => a - b);
const lowestValues = sortedScores.slice(0, 3);
const indices = [];

for (let i = 0; i < scoresexcl.length; i++) {
if (lowestValues.includes(scoresexcl[i])) {
  indices.push(i);
}
}

return indices;
}
function getLowestValues(scores) {
const sortedScores = scores.slice().sort((a, b) => a - b);
const lowestValues = sortedScores.slice(0, 3);
const indices = [];

for (let i = 0; i < scores.length; i++) {
if (lowestValues.includes(scores[i])) {
  indices.push(i);
}
}

return indices;
}

function getLowestIndices(inputArray, count) {
const indices = [];

for (let i = 0; i < count; i++) {
let lowestIndex = -1;
let lowestValue = Infinity;

for (let j = 0; j < inputArray.length; j++) {
  if (inputArray[j] < lowestValue && !indices.includes(j)) {
    lowestValue = inputArray[j];
    lowestIndex = j;
  }
}

indices.push(lowestIndex);
}

return indices;
}

function searchLowestIndicesValues(lowestIndices, searchArray, searchArray2) {
const resultInstruments = [];
const resultDescriptions = [];

lowestIndices.forEach(index => {
if (index >= 0 && index < searchArray.length) {
  resultInstruments.push(searchArray[index]);
}
});

const recinstruments = document.querySelectorAll('#recInstruments');
recinstruments.forEach((recinstrument, index) => {
if (index < resultInstruments.length) {
  const value = resultInstruments[index];
  recinstrument.innerHTML = value;
}
});

lowestIndices.forEach(index => {
if (index >= 0 && index < searchArray2.length) {
  resultDescriptions.push(searchArray2[index]);
}
});

const recdescriptions = document.querySelectorAll('#recInstDesc');
recdescriptions.forEach((recdescription, index) => {
if (index < resultDescriptions.length) {
  const value = resultDescriptions[index];
  recdescription.innerHTML = value;
}
});

return { resultInstruments, resultDescriptions };
}

function getLowestIndicces(inputArray, count) {
const indices = [];

for (let i = 0; i < count; i++) {
let lowestIndex = -1;
let lowestValue = Infinity;

for (let j = 0; j < inputArray.length; j++) {
  if (inputArray[j] < lowestValue && indices.indexOf(j) === -1) {
    lowestValue = inputArray[j];
    lowestIndex = j;
  }
}

indices.push(lowestIndex);
}

return indices;
}

function searchLowestIndicesVallues(lowestIndices, searchArray, searchArray2) {
const result = [];

lowestIndices.forEach(index => {
if (index >= 0 && index < searchArray.length) {
  result.push(searchArray[index]);
}
});

const recinstruments = document.querySelectorAll('#recInstruments');
recinstruments.forEach((recinstrument, index) => {
    const value = result[index];
    recinstrument.innerHTML = value;
})
return result;

lowestIndices.forEach(index => {
if (index >= 0 && index < searchArray2.length) {
  result.push(searchArray2[index]);
}
});
const recdescriptions = document.querySelectorAll('#recInstDesc');
recdescriptions.forEach((recdescription, index) => {
    const value = result[index];
    recinstrument.innerHTML = value;
})
return result;

}

function updateRecInstruments(){

}