import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['923052362330', 'nobody|']
]
global.suittag = ['923052362330'] 
global.prems = ['923052362330'] 
global.reportes_solicitudes = ['923052362330']

global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '★ცơɬῳɧąıɬą★'
global.wm = '★ცơɬῳɧąıɬą ★'
global.vs = '3.0'
global.igfg = '★ცơɬῳɧąıɬą★'
global.wait = '*[❗]⌛ _Caricando..._*\n*▰▰▰▱▱▱▱▱*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')
global.imagen5 = fs.readFileSync('./src/+18.jpg')

global.mods = [] 

//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'it'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('it', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('it', { month: 'long' })
global.año = d.toLocaleDateString('it', { year: 'numeric' })
global.tiempo = d.toLocaleString('it', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ ცơɬῳɧąıɬą`
global.gt = '★ცơɬῳɧąıɬą★'
global.mysticbot = '★ცơɬῳɧąıɬą★'
global.md = 'https://github.com/Fabri115/botwhaita'
global.mysticbot = 'https://github.com/Fabri115/botwhaita'
global.waitt = '*[❗] ⌛ _Caricando..._*\n*▰▰▰▱▱▱▱▱*'
global.waittt = '*[❗]⌛ _Caricando..._*\n*▰▰▰▱▱▱▱▱*'
global.waitttt = '*[❗] ⌛ _Caricando..._*\n*▰▰▰▱▱▱▱▱*'
global.nomorown = '923052362330'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––╔'
global.cmenur = '╝––––––❖'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('Europe/Berlin').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Europe/Berlin').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
