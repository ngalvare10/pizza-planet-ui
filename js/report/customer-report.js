

fetch('http://127.0.0.1:5000/report/customers')
.then(response => response.json())
.then(report => {
    console.log(report)
    rows = []
    reportkeys = Object.keys(report)
    
    for(var i =2; i>=0;i--)
    {
      var key = reportkeys[i];
      var value = report[key];
      rows.push(createReportTemplate(value[0], key, value[1]))
    }

    let table = $("#ingredients tbody");
    table.append(rows);
});


function createReportTemplate(name, dni, money) {
  let template = $("#ingredient-item-template")[0].innerHTML;
  return Mustache.render(template, {name: name, dni: dni, money: money});
}
