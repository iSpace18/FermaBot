from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
import json
from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram import executor

bot = Bot('6539748697:AAGohquLKU_YNN_337Pdqph1Z6ILs01RsRE')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start']) 
# async def start(message: types.Message):
#     markup = types.ReplyKeyboardMarkup()
#     markup.add(types.KeyboardButton('Открыть веб страницу', web_app=WebAppInfo(url='https://ispace18.github.io/FermaBot/')))
#     await message.answer('Привет, чтобы начать игру, нажмите кнопку внизу 👇 ', reply_markup=markup)
#     keyboard = ReplyKeyboardMarkup(resize_keyboard=True) # type: ignore
#     button = KeyboardButton("Играть") # type: ignore
#     keyboard.add(button)
async def start(message: types.Message):
    keyboard = InlineKeyboardMarkup()
    url_button = InlineKeyboardButton(text="Открыть веб-приложение", url="https://ispace18.github.io/FermaBot/")
    await message.answer('Привет, чтобы начать игру, нажмите кнопку внизу 👇 ')
    keyboard.add(url_button)
    await message.answer("Играть ", reply_markup=keyboard)

# @dp.message_handler(content_types=['web_app_data'])
# async def web_app(message: types.Message):
#     res = json.loads(message.web_app_data.data)
#     await message.answer(f'Имя: {res["name"]}. Email: {res["email"]}.Номер телефона: {res["phone"]}')

executor.start_polling(dp)