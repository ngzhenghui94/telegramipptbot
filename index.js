import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv"
import moment from "moment-timezone"
dotenv.config()
moment.tz.setDefault("Asia/Singapore");

const bot = new TelegramBot(process.env.TELEGRAMBOTAPIKEY, {polling: true})

const regex = /^(M|F), (1[8-9]|[2-5][0-9]|60), ([0-5]?[0-9]|60), ([0-5]?[0-9]|60), (0[0-9]{3}|1[0-7][0-9]{2}|18[0-2][0-9]|1830)$/; 






var pushupTable = [
    [60, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [59, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [58, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [57, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [56, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [55, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [54, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25],
    [53, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25],
    [52, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25],
    [51, 22, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25, 25],
    [50, 22, 22, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25],
    [49, 22, 22, 22, 23, 23, 23, 23, 24, 24, 25, 25, 25, 25, 25],
    [48, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 25, 25, 25, 25],
    [47, 21, 22, 22, 22, 22, 23, 23, 23, 24, 24, 25, 25, 25, 25],
    [46, 21, 21, 22, 22, 22, 22, 23, 23, 23, 24, 24, 25, 25, 25],
    [45, 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 25, 25, 25],
    [44, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 25, 25],
    [43, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 24, 24, 25, 25],
    [42, 20, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 24, 25, 25],
    [41, 20, 20, 20, 21, 21, 21, 21, 22, 22, 23, 23, 24, 24, 25],
    [40, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 23, 23, 24, 25],
    [39, 19, 20, 20, 20, 20, 21, 21, 21, 22, 22, 23, 23, 24, 24],
    [38, 19, 19, 20, 20, 20, 20, 21, 21, 21, 22, 22, 23, 23, 24],
    [37, 19, 19, 19, 20, 20, 20, 20, 21, 21, 22, 22, 22, 23, 24],
    [36, 18, 19, 19, 19, 20, 20, 20, 20, 21, 21, 22, 22, 23, 23],
    [35, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 23],
    [34, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 23],
    [33, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 22, 22],
    [32, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 22],
    [31, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 22],
    [30, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 21, 21],
    [29, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 21],
    [28, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20],
    [27, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20],
    [26, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19],
    [25, 14, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19],
    [24, 13, 14, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19],
    [23, 12, 13, 14, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18],
    [22, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18],
    [21, 10, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17, 17, 17, 18],
    [20, 9, 10, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17, 17, 17],
    [19, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17, 17],
    [18, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 16, 16, 17],
    [17, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 16, 16],
    [16, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 16],
    [15, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16],
    [14, 0, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15],
    [13, 0, 0, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15],
    [12, 0, 0, 0, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14],
    [11, 0, 0, 0, 0, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13],
    [10, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 9, 10, 11, 12],
    [9, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 9, 10, 11],
    [8, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 9, 10],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 9],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  var situpTable = [
    [60, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [59, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [58, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [57, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [56, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [55, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    [54, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25],
    [53, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25],
    [52, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25],
    [51, 22, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25, 25],
    [50, 22, 22, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25],
    [49, 22, 22, 22, 23, 23, 23, 23, 24, 24, 25, 25, 25, 25, 25],
    [48, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 25, 25, 25, 25],
    [47, 21, 22, 22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 25],
    [46, 21, 21, 22, 22, 22, 22, 23, 23, 23, 24, 24, 25, 25, 25],
    [45, 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 24, 25, 25],
    [44, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 25, 25],
    [43, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 25],
    [42, 20, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 24, 24, 25],
    [41, 20, 20, 20, 21, 21, 21, 21, 22, 22, 23, 23, 23, 24, 24],
    [40, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 23, 23, 24, 24],
    [39, 19, 20, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23, 23, 24],
    [38, 19, 19, 20, 20, 20, 20, 21, 21, 21, 22, 22, 23, 23, 23],
    [37, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 22, 22, 23, 23],
    [36, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 22, 22, 23],
    [35, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22],
    [34, 16, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22],
    [33, 15, 16, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21, 22],
    [32, 14, 15, 16, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21, 21],
    [31, 14, 14, 15, 16, 17, 18, 18, 19, 19, 20, 20, 20, 21, 21],
    [30, 13, 14, 14, 15, 16, 17, 18, 18, 19, 19, 20, 20, 20, 21],
    [29, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19, 19, 20, 20, 20],
    [28, 12, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19, 19, 20, 20],
    [27, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19, 19, 20],
    [26, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19, 19],
    [25, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18, 18, 19],
    [24, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18, 18],
    [23, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18],
    [22, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17],
    [21, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16],
    [20, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15],
    [19, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14],
    [18, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14],
    [17, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13],
    [16, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13],
    [15, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12],
    [14, 0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11],
    [13, 0, 0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10],
    [12, 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9],
    [11, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8],
    [10, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 7, 7],
    [9, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 6],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  
var runTable = [
    [830, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [840, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [850, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [900, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [910, 46, 47, 48, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [920, 45, 46, 47, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [930, 44, 45, 46, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    [940, 43, 44, 45, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50],
    [950, 42, 43, 44, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50],
    [1000, 41, 42, 43, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50],
    [1010, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50],
    [1020, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50],
    [1030, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50],
    [1040, 38, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50],
    [1050, 37, 38, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [1100, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [1110, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    [1120, 36, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    [1130, 35, 36, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    [1140, 35, 35, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45],
    [1150, 34, 35, 35, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43, 44],
    [1200, 33, 34, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41, 42, 43],
    [1210, 32, 33, 34, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41, 42],
    [1220, 31, 32, 33, 35, 35, 36, 36, 37, 37, 38, 38, 39, 40, 41],
    [1230, 30, 31, 32, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 40],
    [1240, 29, 30, 31, 33, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39],
    [1250, 28, 29, 30, 32, 33, 34, 35, 35, 36, 36, 37, 37, 38, 38],
    [1300, 27, 28, 29, 31, 32, 33, 34, 35, 35, 36, 36, 37, 37, 38],
    [1310, 26, 27, 28, 30, 31, 32, 33, 34, 35, 35, 36, 36, 37, 37],
    [1320, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 35, 36, 36, 37],
    [1330, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36, 36],
    [1340, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36],
    [1350, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35],
    [1400, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    [1410, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    [1420, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [1430, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [1440, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1450, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1500, 12, 14, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [1510, 10, 12, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [1520, 8, 10, 12, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [1530, 6, 8, 10, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    [1540, 4, 6, 8, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25],
    [1550, 2, 4, 6, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24],
    [1600, 1, 2, 4, 8, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23],
    [1610, 0, 1, 2, 6, 8, 10, 12, 14, 16, 18, 19, 20, 21, 22],
    [1620, 0, 0, 1, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20, 21],
    [1630, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20],
    [1640, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 19],
    [1650, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18],
    [1700, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14, 16],
    [1710, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12, 14],
    [1720, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 12],
    [1730, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10],
    [1740, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8],
    [1750, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [1800, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4],
    [1810, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [1820, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1820, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  ]

  function getAgeGroup(age) {
    if (age < 22) {
      return 1;
    } else if (age < 25) {
      return 2;
    } else if (age < 28) {
      return 3;
    } else if (age < 31) {
      return 4;
    } else if (age < 34) {
      return 5;
    } else if (age < 37) {
      return 6;
    } else if (age < 40) {
      return 7;
    } else if (age < 43) {
      return 8;
    } else if (age < 46) {
      return 9;
    } else if (age < 49) {
      return 10;
    } else if (age < 52) {
      return 11;
    } else if (age < 55) {
      return 12;
    } else if (age < 58) {
      return 13;
    } else if (age < 60) {
      return 14;
    } else {
      return "Invalid age";
    }
  }

  function ipptResult(totalScore){
    totalScore = parseInt(totalScore)
    if (totalScore >=51 && totalScore <75){
        return "Pass"
    } else if (totalScore >= 75){
        return "Silver"
    } else if (totalScore >= 85){
        return "Gold"
    }else{
        return "Fail"
    }
  }

  function findIndexOfValue(runTable, targetValue) {
    for (let i = 0; i < runTable.length; i++) {
      if (runTable[i][0] == targetValue) {
        return i; 
      }
    }
    return -1; // Not found
  }
  
  // Listen for any kind of message. 
bot.on('message', async (msg) => {
    const userId = msg.chat.id;
    try {
        if (msg.chat.type == "private") {
            let str = msg.text;
            const match = regex.exec(str);
            if (match) {
                console.log(`Valid: ${str}`);
        
                // Extract and use captured values
                const [_, gender, age, pushupCount, situpCount, runTime] = match;

                let ageGroup = getAgeGroup(age)
                let pushUpScore = pushupTable[60-parseInt(pushupCount)][ageGroup]
                let sitUpScore = situpTable[60-parseInt(situpCount)][ageGroup]
                let runScore = runTable[findIndexOfValue(runTable, runTime)][ageGroup]
                let totalScore = pushUpScore+sitUpScore+runScore;
                console.log(`${msg.chat.first_name}\nGender: ${gender}, Age: ${age} (Age Group: ${ageGroup}), Push Up: ${pushupCount}, Sit Up: ${situpCount}, Run Time: ${runTime}`);
                
                bot.sendMessage(msg.chat.id, `${msg.chat.first_name}\nGender: ${gender}\nAge: ${age} (Age Group: ${ageGroup})\nPush Up: ${pushupCount}\nSit Up: ${situpCount}\nRun Time: ${runTime}\n\n\nPush Up Score: ${pushUpScore}\nSit Up Score: ${sitUpScore}\nRunning Score: ${runScore}\nTotal Points: ${totalScore}\nIPPT Result: <b>${ipptResult(totalScore)}</b>`, {parse_mode: 'HTML'})

            } else {
                console.log(`Invalid: ${str}`);
                bot.sendMessage(msg.chat.id, `Invalid. Please follow the format:\nGender (M/F), Age (18-60), Push up Score (0-60), Sit up Score (0-60), Run Time (0830-1820)\nExample: M, 25, 60, 60, 1230`, {parse_mode: 'HTML'})
            }
        }
    } catch (err) {
        console.log(`Invalid: ${err}`);
    }
});