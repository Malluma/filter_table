# Технологии
React, Redux, styled-components.

API (backend часть проекта) находится здесь: https://github.com/Malluma/filter_table_backend.git.

# Задание
Tаблица в формате Single Page Application.

Таблица содержит 4 колонки: Дата, Название, Количество, Расстояние.

Таблица имеет функцию **сортировки** по возрастанию по всем колонкам, кроме "Дата". Сортировка осуществляется при клике на заголовок соответствующего столбца.

**Фильтрация** реализована в виде двух выпадающих списков и текстового поля:
  + Выбор колонки, по которой будет фильтрация
  + Выбор условия (равно, содержить, больше, меньше)
  + Поле для ввода значения для фильтрации

Таблица должна иметь пагинацию. Количество записей на странице установлено по умолчанию равным 5 для удобства тестирования.

![Внешний вид приложения](./forREADME/project_image.jpg)

## Развертывание проекта
+ Клонирование репозитория:

  `git clone git@github.com:Malluma/filter_table.git`
+ Установка зависимостей:

  `npm install`
+ Запуск проекта:

  `npm start`
  
node version: v16.13.1 
