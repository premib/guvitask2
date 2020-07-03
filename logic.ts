let row: number= 0;
let col: number= 1;
let total: number= 0;
let ultimateTotal: number= 0;

async function teams(tableId, i, j): Promise<number>{
    return new Promise(function (res, rej) {
        let change= (): void=> {
            ultimateTotal+= total 
            tableRef.rows[i].cells[7].innerHTML= total.toString()   
            row++
            col= 0
            total= 0
        }
        var tableRef: HTMLTableSectionElement = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        var ball: number= Math.floor(Math.random()* 7)
        total+= ball

        tableRef.rows[i].cells[j].innerHTML= ball.toString();
        if(ball==0)
            change();    
        if(col==6)
            change();
        col++;
        if(row == 10){
            res(ultimateTotal)           
        }
    });
}

let timer= async(): Promise<void>=> {
    document.getElementById('btn-start-timer').style.display= 'none';
    document.getElementById('btn-team-1').style.display= 'block';
    let seconds: number= 60;
    let team1Score: number;
    let timerInterval: number= setInterval(()=>{
        document.getElementById('timer').innerHTML= (--seconds).toString();
        if(seconds == 0) {
            clearInterval(timerInterval)
            document.getElementById('btn-team-1').style.display= 'none';
            document.getElementById('btn-team-2').style.display= 'none';
            document.getElementById('h2-winner').innerHTML= "Match Timeout!"
        }
    }, 1000);
    document.getElementById('btn-team-2').addEventListener('click', async(): Promise<void>=> {
        await teams('tableTeam2', row, col);
        document.getElementById('h2-team-2-score').innerHTML= ultimateTotal.toString();
        document.getElementById('btn-team-2').style.display= 'none';
        clearInterval(timerInterval);
        document.getElementById('h2-winner').innerHTML= `Winner: ${(team1Score > ultimateTotal)?"Team1":"Team2"} by ${(team1Score > ultimateTotal)?(team1Score-ultimateTotal):(ultimateTotal-team1Score)}`;
    });
    document.getElementById('btn-team-1').addEventListener('click', async(): Promise<void>=> {
        await teams('tableTeam1', row, col);
        team1Score= ultimateTotal;
        document.getElementById('h2-team-1-score').innerHTML= team1Score.toString();
        document.getElementById('btn-team-2').style.display= 'block';
        document.getElementById('btn-team-1').style.display= 'none';
        row= 0;
        col= 1;
        ultimateTotal= 0;
    });
}

