var chart1 = document.getElementById("myChart");

var options ={
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend:{
        position:'bottom'
    }
};
var dataHospital = {
    labels: ["10/15","10/16","10/17","10/18","10/19","10/20","10/21","10/22","10/23","10/24"],
    datasets: [
        {
            label: "사용자1",
            fill: false,
            lineTension: 0,
            borderColor: "rgba(255, 19, 56, 0.65)",
            data: [100,80,92,57,61,99,60,88,90,87],
        },
        {
            label: "사용자2",
            fill: false,
            lineTension: 0,
            borderColor: "rgba(61,155,74,0.65)",
            data: [66,15,100,98,45,99,78,42,65,88],
        },
        {
            label: "사용자3",
            fill: false,
            lineTension: 0,
            borderColor: "rgba(54,127,247,0.65)",
            data: [70,56,72,87,91,45,25,35,58,97],
        },
        {
            label: "사용자4",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(22,65,78,0.65)",
            data: [70,56,72,87,91,45,25,35,58,97],
        },
    ],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

var hospitalChar = new Chart(chart1, {
    type: 'line',
    data: dataHospital,
    options: options

});
var chart2 = document.getElementById("myChart2");

var options ={
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend:{
        position:'bottom'
    }
};
var dataHospital2 = {
    labels: ["기획","Front","Back","Test"],
    datasets: [
        {
            label: "사용자1",
            fill: true,
            backgroundColor: "rgba(255, 19, 56, 0.65)",
            data: [100,50,16,25],
        },
        {
            label: "사용자2",
            fill: true,
            backgroundColor: "rgba(61,155,74,0.65)",
            data: [100,50,60,34],
        },
        {
            label: "사용자3",
            fill: true,
            backgroundColor: "rgba(54,127,247,0.65)",
            data: [100,50,56,14],
        },
        {
            label: "사용자4",
            fill: true,
            backgroundColor: "rgba(22,65,78,0.65)",
            data: [100,50,20,30],
        },
    ],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
};

var hospitalChar2 = new Chart(chart2, {
    type: 'bar',
    data: dataHospital2,
    options: options

});