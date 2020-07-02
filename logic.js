

window.addEventListener('load', function () {

    document.getElementById("btn-start-timer").onclick = function () {

        document.getElementById("btn-start-timer").style.display= 'none';

        var team1 = new Promise(function (resolve) {
            let ultimateTotal= 0;
            var tableRef = document.getElementById('tableTeam1').getElementsByTagName('tbody')[0];
            var i = 0;
            document.getElementById("btn-team-1").onclick= function () {
                    var tableRow = tableRef.getElementsByTagName('tr')[i];
                    var total = 0;
                    for (var j = 1; j < 7; j++) {
                        var tableCell = tableRow.getElementsByTagName('td')[j];
                        var ball= Math.floor(Math.random()* 7)
                        total= total + ball;
                        var score = document.createTextNode(ball.toString());
                        tableCell.appendChild(score); 
                        if (ball == 0) {
                            break
                        }       
                    }
                    var tableCell = tableRow.getElementsByTagName('td')[7];
                    var playerTotal = document.createTextNode(total.toString());
                    tableCell.appendChild(playerTotal);
                    ultimateTotal= ultimateTotal + total;
                    document.getElementById("h2-team-1-score").innerHTML = ultimateTotal
                    i++;
                if (i == 10){
                    resolve(ultimateTotal);
                }
            }

        });

        var team2 = new Promise(function (resolve) {
            let ultimateTotal= 0;
            var tableRef = document.getElementById('tableTeam2').getElementsByTagName('tbody')[0];
            var i= 0;
            document.getElementById("btn-team-2").onclick = function () {
                var tableRow = tableRef.getElementsByTagName('tr')[i];
                var total = 0;
                for(var j = 1; j < 7; j++ ){
                    var tableCell = tableRow.getElementsByTagName('td')[j];
                    var ball= Math.floor(Math.random()* 7);
                    total = total + ball;
                    var score = document.createTextNode(ball.toString());
                    tableCell.appendChild(score);       
                    if(ball == 0){
                        break;
                    }           
                }
                var tableCell = tableRow.getElementsByTagName('td')[7];
                var playerTotal = document.createTextNode(total.toString());
                tableCell.appendChild(playerTotal);
                ultimateTotal = ultimateTotal + total;
                document.getElementById("h2-team-2-score").innerHTML = ultimateTotal
                i++;
                if (i == 10){
                    resolve(ultimateTotal)
                }
            }

        });
        
        var timer = new Promise(function (resolve) {
            var times = null
            setTimeout(function () {
                times= document.getElementById("stats").getElementsByTagName("h1")[1]
            }, 0);
            var sec = 60;
            var timeInterval= setInterval(function () {
                times.innerHTML = sec;
                sec--;
                if(sec == 0){
                    clearInterval(timeInterval);
                    resolve("Time Exhausted");
                }
            }, 1000);
            
        });

        Promise.all([team1, team2]).then(function (res) {
            document.getElementById("h2-winner").innerHTML = `Winner: ${(res[0]>res[1])?"team1":"team2"} by ${(res[0]>res[1])?res[0]-res[1]:res[1]-res[0]} runs`;
        });

        timer.then( function (res) {
            document.getElementById("btn-team-1").style.display = 'none';
            document.getElementById("btn-team-2").style.display = 'none';
        });

    };
  })
