import * as c3  from 'c3';

let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['良い感じ', 50],
            ['ピンとこない', 50]
        ]
    },
    donut: {
        title: 'TypeScriptの印象は？'
    }
});
// ↓　　ここから下を追記
setTimeout(() => {
   chart.load({
    columns: [
        ['良い感じ', 30],
        ['ピンとこない', 30],
        ['最高', 30]
    ]
   });
}, 3000);
setTimeout(()=> {
    chart.unload({
        ids: '最高'
    });
}, 5000);
// ↑ ここまで追記