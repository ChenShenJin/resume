$(function () {

    $('#chart01').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Code',
            x: -40
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['HTML5', 'CSS', 'CSS3', 'Js/jQ', 'PHP', 'HTML'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Code',
            data: [38000, 45000, 30000, 30000, 17000, 42000],
            pointPlacement: 'off'
        }]

    });
});



$(function () {
    $('#chart02').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Software',
            size: '30'
           
        },
        plotOptions: {
            pie: {
                innerSize: 0,
                depth: 35
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [
                ['photoshop', 7],
                ['SublimeText', 6],
                ['Dreamweaver', 4],
                ['Illustrator', 7],
                ['AfterEffect', 4],
                ['FinalCut', 4],
                ['Sketch', 3],
                ['Other', 2]
            ]
        }]
    });
});

$(function () {
    $('#chart03').highcharts({
        title: {
            text: 'Open Source'
        },
        xAxis: {
            categories: ['2014','2015','2016']
        },
        labels: {
            items: [{
                html: 'Consumption',
                style: {
                    left: '20',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Bootstrap',
            data: [0.8 , 2.2, 4.1]
        }, {
            type: 'column',
            name: 'Prestashop',
            data: [0.2, 2.4, 3]
        }, {
            type: 'column',
            name: 'Wordpress',
            data: [1.1, 2, 3.8]
        }, {
            type: 'spline',
            name: 'Average',
            data: [0.7, 2.2, 3.5],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Bootstrap',
                y: 20,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Prestashop',
                y: 13,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Wordpress',
                y: 18,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [40, 60],
            size: 80,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});

