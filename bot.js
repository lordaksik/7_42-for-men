require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/bot', async (ctx) => {
 async function request2() {

            const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/1/1/")
            const data = await response.json()

            let number_black=0;
            let number_yellow=0;
            let black2=0;
            let black2_itog=0;
            let black3_itog=0;
            let black3=0;

            for (let i = 0; i <1; i++) {
                if (data.items.results[i].results[0].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[1].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[2].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[3].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[4].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[5].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
                if (data.items.results[i].results[6].color === 'yellow') {
                    number_yellow = number_yellow + 1;
                }
            }
                if(number_yellow===1)
                {
                    console.log('Был только один жёлтый шар')
                }
            if(number_yellow===4)
            {
                console.log('Было 4 жёлтых шара')
            }
            for (let i = 0; i < 1; i++) {
                if (data.items.results[i].results[0].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[1].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[2].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[3].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[4].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[5].color === 'black') {
                    number_black = number_black + 1;
                }
                if (data.items.results[i].results[6].color === 'black') {
                    number_black = number_black + 1;
                }
            }
            if(number_black===1)
            {
                console.log('Был только один чёрный шар')
            }
            if(number_black===1)
            {
                console.log('Было 4 чёрных шара')
            }

            for (let i = 0; i < 4; i++) {
                if (data.items.results[i].results[0].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[1].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[2].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[3].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[4].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[5].color === 'black') {
                    black2 = black2 + 1;
                }
                if (data.items.results[i].results[6].color === 'black') {
                    black2 = black2 + 1;
                }
                if (black2===2){
                    black2_itog=black2_itog+1;
                }
                if (black2===3){
                    black3_itog=black3_itog+1;
                }
            }
            if(black2_itog===3)
            {
                console.log('только 2 черных в каждой раздаче, 3 раздачи подряд')
            }
            if(black3_itog===3)
            {
                console.log('только 3 черных в каждой раздаче, 3 раздачи подряд')
            }
        }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «7/42» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 240000)
   }



   good()
}
)

bot.hears('/end', async (ctx) => {

   try {
      clearInterval(time);

      ctx.reply("Пока");
   } catch (err) {
      ctx.reply("Этот бот и так выключен");
   }
})

bot.launch()

