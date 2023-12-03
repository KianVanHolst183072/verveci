
/* // ENGLISH BUTTON
const button = document.getElementById("engBtn");
button.addEventListener("click", async () => {
  const response = await fetch("index_eng.html");
  const html = await response.text();
  document.body.innerHTML = html;
}); */

    var questions = $(".question").length;
    var totalp1 = 0;
    var totalp2 = 0;
    var totalp3 = 0;
    var totalp4 = 0;
    var totalp5 = 0;
    var totalp6 = 0;
    var avg = 0;
    var selectedAnswers = {};
    var instruments = ['Positieve en constructieve houding/gedrag','Kenmerken team','Team coordinatie en planning', 'Fit voor de toekomst', 'Middelen management', 'Netwerk sterkte']
    var instdescriptions = [
    "Gericht op een positieve, constructieve houding met training in productie, online marketing, personal branding, creativiteit, en design thinking. Een uitgebreid aanbod voor het ontwikkelen van essentiële vaardigheden.",
    
    "Teamgerichte trainingen: Projectmanagement met SCRUM, teamrollen volgens Belbin, en veerkracht workshops. Deze cursussen verbeteren teamdynamiek en persoonlijke ontwikkeling, gericht op het optimaliseren van teamperformantie.",
    
    "Uitgebreide training in teamcoördinatie en planning, inclusief een Agile workshop, Master-niveau cursus in Creative Production met vaardigheden voor pre- en postproductie, en uitgebreide projectmanagementtraining.",
    
    "Vooruitstrevende cursussen voor toekomstige gereedheid: 'Exploring Strategy in the Creative Industry', 'Landscape of the Future of the Creative Industry', en 'Platform Economy'. Deze cursussen bieden inzicht in nieuwe businessmodellen en samenwerkingen.",
    
    "Organisatieniveau cursussen: Strategieontwikkeling, klanteninzicht workshops, financieel beheer, change management, en branded entertainment marketing. Deze cursussen bieden diepgaande kennis en inzichten voor organisatorische groei.",
    
    "Netwerkversterking: Intensieve cursussen in productiepijplijnbeheer, stakeholderanalyse, en sociale innovatie. Gericht op het bouwen van sterke, veerkrachtige netwerken binnen de creatieve industrie."
];


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
    selectedAnswers[key] = selectedOption; // Update the selectedAnswers object
});

$(".page").eq(currentPage).addClass("active"); // add active class to current page
$(".page.active").show();
$(".page:not(.active)").hide();


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
                selectedAnswers[date] = getDate();
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

        updateScorebars();
        const bedrijfInput = document.getElementById("bedrijf");
        let bedrijfnaam = document.getElementById('bedrijfnaam');
        bedrijfnaam.innerHTML = bedrijfInput.value;

        progressMade.style.maxWidth = `100%`;
        console.log(FormData)
        $(".page.active").show();
        $(".page:not(.active)").hide();
}


// DOWNLOAD KNOP
$('#downloadBtn').on('click', function(){
    $(".page").eq(currentPage + 1).addClass("active"); // add active class to new current page
    $(".page.active").show();
    $(".page:not(.active)").hide();
    hideButtons();
    window.print();
    showButtons();
    $(".page").eq(currentPage + 1).removeClass("active")
    $(".page.active").show();
    $(".page:not(.active)").hide();
})

function printContent() {
        // Get the screenshot of the entire container
        var printContainer = document.getElementById("results");
        var htmlContent = printContainer.innerHTML;
        var cssContent = window.getComputedStyle(printContainer);
        var pdfDoc = new jsPDF();
        
        pdfDoc.fromHTML(htmlContent, 15, 15, {
            'width': 170,
            'height': 220
        });
        pdfDoc.addCSS(cssContent);
        pdfDoc.save('VeerkrachtAnalyse.pdf')
        var link = document.createElement('a');
        link.href = 'data:application/pdf;base64,'+ btoa(pdfDoc.output());
        link.setAttribute('download', 'VeerkrachtAnalyse.pdf');
        link.click();
    }


    document.getElementById('downloaBtn').addEventListener('click', function() {
        const element = document.getElementById('export-container');
        const options = {
            margin: 10,
            filename: 'exported-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf()
            .from(element)
            .set(options)
            .outputPdf()
            .then(function(pdf) {
                // The PDF has been generated. You can save it, display it, or do anything else you want.
                pdf.save();
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
// RESULTAAT -> SCOREBARS
function updateScorebars() {
const scores = [avgtotal, avgp1, avgp2, avgp3, avgp4, avgp5, avgp6];
const scoresexcl = [avgp1, avgp2, avgp3, avgp4, avgp5, avgp6];
const filmarray = [25, 75, 50, 30, 85, 50, 35]
const NLarray = [30, 60, 59, 64, 74, 23, 56]
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
    const value = filmarray[index];
    scorebarBR.style.width = `${value}%`;
})

scoretextBR.forEach((scoretextBR, index) => {
    const value = filmarray[index];
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