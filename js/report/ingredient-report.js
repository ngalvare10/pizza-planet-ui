

fetch('http://127.0.0.1:5000/report/ingredient')
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


function createReportTemplate(ingredient, price) {
    let template = $("#ingredient-item-template")[0].innerHTML;
    return Mustache.render(template, {ingredient: ingredient, price: price});
}
