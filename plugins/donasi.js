const qrku = "https://telegra.ph/file/e40025d9f200a9c08cd84.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • XL    [+62 819-5929-3465]
│ • Gopay  [+62 812-7367-7810]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281273677810
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
