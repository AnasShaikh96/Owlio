$(function () {
    $('.daterange').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawBar);

function drawBar() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Total Income', 'Total Expense',],
        ['Sunday', 45, 40],
        ['Monday', 10, 40],
        ['Tuesday', 60, 79],
        ['Thursday', 97, 50],
        ['Friday', 23, 69],
        ['Saturday', 89, 34],

    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: Sunday-Saturday',
        },
        bars: 'vertical',
        vAxis: { format: 'decimal' },
        height: 400,
        colors: ['red', "#9c27b0"]
    };

    var chart = new google.charts.Bar(document.getElementById('chart_bar'));

    chart.draw(data, google.charts.Bar.convertOptions(options));



}

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ["Events", 62],
        ['My all', 38],

    ]);

    var options = {
        pieHole: 0.7,
        pieSliceTextStyle: {
            color: 'grey',
        },
        colors: ["red", "#eee"],
        legend: 'none'
    };

    var options_2 = {
        pieHole: 0.8,
        pieSliceTextStyle: {
            color: 'grey',
        },
        colors: ["#9c27b0", "#eee"],
        legend: 'none'
    };
    var data_2 = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ["Foods", 38],
        ['My all', 72],

    ]);
    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
    var chart_2 = new google.visualization.PieChart(document.getElementById('donut_second'));
    chart_2.draw(data_2, options_2);

    var chart_3 = new google.visualization.PieChart(document.getElementById('donut_third'));
    chart_3.draw(data_2, options_2)

    var chart_4 = new google.visualization.PieChart(document.getElementById('donut_fourth'));
    chart_4.draw(data, options)

}

$('.calendar-container').calendar({
    date: new Date() // today
});


google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Performance');

    data.addRows([
        [0, 0], [1, 10], [2, 23], [3, 17], [4, 22], [5, 25], [6, 29], [7, 31], [8, 10], [9, 25], [10, 45]]
    );

    var options = {
        curveType: "function",
        hAxis: {
            title: 'Time',
            textStyle: {
                color: '#01579b',
                fontSize: 20,
                fontName: 'Arial',
                bold: true,
                italic: true
            },
            titleTextStyle: {
                color: '#01579b',
                fontSize: 16,
                fontName: 'Arial',
                bold: false,
                italic: true
            }
        },
        vAxis: {
            title: 'School Performance',
            textStyle: {
                color: '#1a237e',
                fontSize: 14,
                bold: true
            }
        },
        colors: ['#9c27b0']
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
    chart.draw(data, options);
}

const studentArray = [
    { id: 12345, name: "Dawud Khan", class: "VII-A3", debt: "$1,521", image: "./components/images/placeholder-1.jpg" },
    { id: 12346, name: "Helena Somes", class: "VII-C1", debt: "$54", image: "./components/images/placeholder-4.jpg" },
    { id: 12347, name: "Peter Jim", class: "VII-C1", debt: "$5,634", image: "./components/images/placeholder-3.jpg" },
    { id: 12348, name: "Melinda Truth", class: "VIII-B5", debt: "$2,478", image: "./components/images/placeholder-4.jpg" },
    { id: 12349, name: "Hawkins Jr", class: "XI-C1", debt: "$2,478", image: "./components/images/placeholder-5.jpg" },
    { id: 12350, name: "Louis Vantahoun", class: "XI-C1", debt: "$56.8", image: "./components/images/placeholder-1.jpg" },
]

const foodMenu = [
    { name: "Spinach with Roasted Beans", time: "Breakfast", ratings: 2330, image: "./components/images/food.jpg" },
    { name: "Pumpkin Tekiyaki", time: "Lunch", ratings: 5400, image: "./components/images/food.jpg" },
    { name: "Fried Paneer Rolls", time: "Lunch", ratings: 983, image: "./components/images/food.jpg" },
    { name: "Manchurian Rice", time: "Lunch", ratings: 1287, image: "./components/images/food.jpg" },
]

const foodArray = foodMenu.map((item) => {
    return `
       <div class="px-4 pt-3" style="border-bottom: 1px solid #ddd;">
                                    <div class="card border-0 shadow-none">
                                        <img src="./components/images/food.jpg" alt="food-img"
                                            style="border-radius: 10px;" height="110">
                                        <div class="card-body p-0">
                                            <h6 class="card-title py-3 m-0 font-weight-bold" style="font-size: 14px;">
                                               ${item.name}
                                            </h6>
                                            <div class="d-flex justify-content-between align-items-center pb-2">
                                                <h6 class="text-uppercase font-weight-bold"
                                                    style="color:#9c27b0; font-size: 14px;">
                                                    for ${item.time}</h6>
                                                <div class="d-flex align-items-end">
                                                    <i class="mdi mdi-poll pr-1" style="color:#9c27b0"></i>
                                                    <span class="text-muted" style="font-size: 12px;">
                                                       ${item.ratings}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

    `
})

const debtArray = studentArray.map((arr) => {
    return `
     
                                    <tr class="text-left" style="border-color:white" >
                                        <td class="align-middle text-center" width="20%">
                                            <img src="${arr.image}" width="60"
                                                class="rounded-circle" alt="img" />
                                        </td>
                                        <td class="align-middle text-left" width="30%" >
                                            <div>
                                                <span class="font-weight-bold d-block m-0" style="font-size:15px">${arr.name}</span>
                                                <span style="font-size:12px;color:#aaa">ID ${arr.id} </span>
                                            </div>
                                        </td>
                                        <td class="align-middle text-left" width="25%">
                                            <div class="text-center">
                                                <h4 class="font-weight-bold m-0" style="color:#9c27b0;font-size:20px;">
                                                    <i class="mdi mdi-checkbox-marked"></i>
                                                    ${arr.class}
                                                </h4>
                                                <span style="color:#aaa">class</span>
                                            </div>
                                        </td>
                                        <td class="align-middle text-left" width="15%">
                                            <h5 style="font-size:16px;font-weight:bold;"><em>${arr.debt}</em></h5>
                                        </td>
                                    </tr>
                         
    `
})

const clientArray = studentArray.map((item) => {
    return `
                                    <tr>
                                        <td width="20%" class="align-middle text-right">
                                            <img src="${item.image}" width="50"
                                                class="rounded-circle" />
                                        </td>
                                        <td class="align-middle text-left p-0">
                                            <div class="m-0 align-items-center">
                                                <h6 class="font-weight-bold m-0" style="font-size:15px;">${item.name}</h6>
                                                <span style="font-size:12px;color:#aaa">${item.class}</span>
                                            </div>
                                        </td>
                                    </tr>`
})

document.getElementById('debtContent').innerHTML = debtArray.join('')
document.getElementById('clientContent').innerHTML = clientArray.join('')
document.getElementById('foodContent').innerHTML = foodArray.join('')
