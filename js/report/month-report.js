

fetch('http://127.0.0.1:5000/report/month')
.then(response => response.json())
.then(report => {
    console.log(report)
    rows = []
    for(var key in report) {
        var value = report[key];
        rows.push(createReportTemplate(key, value))
      }
    let table = $("#ingredients tbody");
    table.append(rows);
});


function createReportTemplate(month, reveneu) {
let template = $("#ingredient-item-template")[0].innerHTML;
return Mustache.render(template, {month: toMonthName(month), reveneu: reveneu});
}


function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }