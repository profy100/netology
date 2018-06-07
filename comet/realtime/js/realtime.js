const ctx = document.getElementById('chart').getContext('2d');
const realtime = new Chart(ctx).Bar({
  labels: [],
  datasets: [{
    fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: []
  }]
}, {
  responsive: true,
  barValueSpacing: 2
});

let isFirst = true;
const ws = new WebSocket('wss://neto-api.herokuapp.com/realtime');
ws.addEventListener('message', event => {
  if (isFirst) {
    let list = JSON.parse(event.data);

    list.forEach(data => {
      realtime.addData([Number(data.online)], data.time);
    });

    isFirst = false;
  } else {
    let list = JSON.parse(event.data);
    realtime.removeData();
    realtime.addData([Number(list.online)], list.time);
  }
});
