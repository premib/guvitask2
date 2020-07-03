var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var row = 0;
var col = 1;
var total = 0;
var ultimateTotal = 0;
function teams(tableId, i, j) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (res, rej) {
                    var change = function () {
                        ultimateTotal += total;
                        tableRef.rows[i].cells[7].innerHTML = total.toString();
                        row++;
                        col = 0;
                        total = 0;
                    };
                    var tableRef = document.getElementById(tableId).getElementsByTagName('tbody')[0];
                    var ball = Math.floor(Math.random() * 7);
                    total += ball;
                    tableRef.rows[i].cells[j].innerHTML = ball.toString();
                    if (ball == 0)
                        change();
                    if (col == 6)
                        change();
                    col++;
                    if (row == 10) {
                        res(ultimateTotal);
                    }
                })];
        });
    });
}
var timer = function () { return __awaiter(_this, void 0, void 0, function () {
    var seconds, team1Score, timerInterval;
    var _this = this;
    return __generator(this, function (_a) {
        document.getElementById('btn-start-timer').style.display = 'none';
        document.getElementById('btn-team-1').style.display = 'block';
        seconds = 60;
        timerInterval = setInterval(function () {
            document.getElementById('timer').innerHTML = (--seconds).toString();
            if (seconds == 0) {
                clearInterval(timerInterval);
                document.getElementById('btn-team-1').style.display = 'none';
                document.getElementById('btn-team-2').style.display = 'none';
                document.getElementById('h2-winner').innerHTML = "Match Timeout!";
            }
        }, 1000);
        document.getElementById('btn-team-2').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teams('tableTeam2', row, col)];
                    case 1:
                        _a.sent();
                        document.getElementById('h2-team-2-score').innerHTML = ultimateTotal.toString();
                        document.getElementById('btn-team-2').style.display = 'none';
                        clearInterval(timerInterval);
                        document.getElementById('h2-winner').innerHTML = "Winner: " + ((team1Score > ultimateTotal) ? "Team1" : "Team2") + " by " + ((team1Score > ultimateTotal) ? (team1Score - ultimateTotal) : (ultimateTotal - team1Score));
                        return [2 /*return*/];
                }
            });
        }); });
        document.getElementById('btn-team-1').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teams('tableTeam1', row, col)];
                    case 1:
                        _a.sent();
                        team1Score = ultimateTotal;
                        document.getElementById('h2-team-1-score').innerHTML = team1Score;
                        document.getElementById('btn-team-2').style.display = 'block';
                        document.getElementById('btn-team-1').style.display = 'none';
                        row = 0;
                        col = 1;
                        ultimateTotal = 0;
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
