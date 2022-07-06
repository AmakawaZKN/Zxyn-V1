const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['ZyKuan-Kun']
global.namaowner = ['Zykuan']
global.owner = ['628979440862']
global.premium = ['6287881508547''628979440862']
global.packname = 'ZyKuan-Kun'
global.author = 'Zykuan|wa.me/6282133532380'
global.sessionName = 'zxyn'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Succes Onii-chan/Onee-chan ><',
    admin: 'Baka!!, Khusus admin, Anata bukan admin',
    botAdmin: 'Jadiin Jiikuan admin, baru bisa HAHAHA',
    owner: 'Fitur Khusus Zykuan-Kun >//<',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading Onii-chan/Onee-chan ^,^',
    endLimit: 'Limit lu habis cokk, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 35
}
global.thumb = fs.readFileSync('./lib/zxyn.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
