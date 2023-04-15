//import telegraf module using CJS
const { Telegraf } = require('telegraf');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const linear = ' const linearSearch = function search(arr, x){ for (var i = 0; i < arr.length; i++) {if(arr[i] === x){return i; } return undefined;  }}';


try {
    bot.start((ctx) => ctx.reply('Welcome to gourav bot')); // /start

    bot.command('linearsearch', (ctx) => ctx.reply(linear)); //linear search

    bot.on(('sticker'), (ctx) => ctx.reply('❤️'));

    bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

    bot.command('oldschool', (ctx) => ctx.reply('Hello'));

    bot.command('hipster', Telegraf.reply('λ'));

    bot.on('text', (ctx) => ctx.reply('I don/ t understand humans '));

    bot.launch();
} catch {
    console.log("unexpected command");
}


console.log(process.env)