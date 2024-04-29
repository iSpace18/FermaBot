from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
import json

bot = Bot('6539748697:AAGohquLKU_YNN_337Pdqph1Z6ILs01RsRE')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start']) 
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть веб страницу', web_app=WebAppInfo(url='https://www.youtube.com')))
    await message.answer('Привет, мой друг', reply_markup=markup)

@dp.message_handler(content_types=['web_app_data'])
async def web_app(message: types.Message):
    res = json.loads(message.web_app_data.data)
    await message.answer(f'Имя: {res["name"]}. Email: {res["email"]}.Номер телефона: {res["phone"]}')

executor.start_polling(dp)
