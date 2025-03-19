# Тестовое задание KODE

ФИО: Ковалишин Фёдор Павлович

<a href="https://kuror0lucifer.github.io/test-frontend/#/">Сайт на gh-pages</a>

## :books: Оглавление

1. [Декомпозиция задания](#декомпозиция)
2. [Описание проделанной работы](#описание-работы)
3. [Ответ на задание со звёздочкой](#ответы-звёздочка)
4. [Описание выполнения дополнительных заданий](#описание-дополнительных)
5. [Использованные технологии](#технологии)

## <a id="декомпозиция">:jigsaw: Декомпозиция задания</a>

1. Подготовка окружения
   - Инициализация проекта Vite с шаблоном React + Typescript
   - Установка необходимых зависимостей
   - Настройка структуры проекта
2. Роутинг
   - Настройка маршрутов
   - Реализация навигации
   - Обработка несуществующих маршрутов
3. Создание сервиса для работы с API
   - Реализация функций для загрузки данных о сотрудниках
   - Запрос всех сотрудников
   - Фильтрация сотрудников по департаменту
   - Обработка ошибок и состояния загрузки
4. Создание переиспользуемых компонентов
   - Поле поиска
   - Кнопки (сортировка, табы)
   - Карточки сотрудников
   - Скелетон
   - Отображение ошибки
5. Вёрстка главной страницы
   - Top App Bar
   - Список сотрудников
   - Фильтрация и сортировка
6. Вёрстка страницы сотрудника
   - Отображение аватара, имени, департамента сотрудника
   - Отображение даты рождения и номера телефона
   - Кнопка назад и возврат к предыдущему состоянию
7. Выполнение дополнительных заданий
   - Отслеживание состояния сети
     - Реализация отслеживания офлайн режима
     - Уведомление о потере соединения
     - Обновление данных при подключении к сети
   - Сохранение состояний фильтрации и поиска
     - Парсинг фильтрации и поиска в URL и отображение оттуда
   - Кеширование данных
     - Кеширование запросов к API на 5 минут с помощью библиотеки React Query
   - Темная тема
   - Смена языка

## <a id="описание-работы">:memo: Описание проделанной работы</a>

1. Тестовое задание выполнено строго согласно макету в Figma
2. Приложение адаптированно для разных устройств
3. Приложение анимировано
4. Все дополнительные задания выполнены

## <a id="ответы-звёздочка">:pencil2: Ответы на задания со звёздочкой</a>

1. Рассказать о преимуществах и недостатках разных способов реализации пагинации

   **Ответ:** Реализация различных способов пагинации зависит от количества данных, которое получает пользователь.

   a. Клиентскую пагинацию лучше использовать, когда данные, которые возвращаются от API немного, так как обработка большого количества данных может вызвать перегрузку памяти браузера.

   :white_check_mark: **Преимущества:**

   - Быстрое переключение между разделами
   - Низкая нагрузка на сервер
   - Простота реализации

   :x: **Недостатки:**

   - Длинная загрузка данных при запросе
   - Плохая масштабируемость

   b. Серверную пагинацию лучше использовать, когда данных в БД много.

   :white_check_mark: **Преимущества:**

   - Работа с большим количеством данных
   - Меньшая нагрузка на клиент
   - Меньшая нагрузка на сетевой трафик

   :x: **Недостатки:**

   - Ожидание обработки запросов
   - Непостоянный порядок возвращаемых данных с API
   - Дополнительная логика обработки на бекенде

2. Поиск, обновление списка должно происходить только после того, как пользователь закончил печатать.

   **Ответ:** Задание реализовано созданием debounce, который срабатывает через 0.5 секунды после того, как пользователь прекратил печать

## <a id="описание-дополнительных">:book: Описание выполнения дополнительных заданий</a>

1. **Реализовать real-time отслеживание состояния сети устройства:**

   - Отслеживание реализованно с использованием API навигатора в JS, который в режиме реального времени проверяет интернет-соединение у пользователя, как только соединение восстанавливается на API из задания отправляется запрос. У навигатор API есть небольшой недостаток, так, например, если у пользователя просто отключится интернет, но соединение будет продолжено, то навигатор не отследит, что соединение отсутствует.

2. **Сохранение состояния фильтрации и поиска:**

   - Данное задание реализованно с сохранением состояния фильтрации в localStorage, а поиск парсится в URL в query параметр и оттуда используется.

3. **Кэширование результатов запроса по различным параметрам:**

   - Данное задание реализованно с использованием библиотеки React Query. С помощью библиотеки данные, которые получаем с API кешируются на 5 минут, после истечения срока жизни запрос отправляется снова.

4. **Реализовать темную тему для приложения:**

   - Задание реализованно с использованием theme provider в styled-components.

5. **Добавить локализацию:**
   - Данное задание реализованно с помощью библиотеки i18n. Реализованы русский и английский языки.

## <a id="технологии">:hammer_and_wrench: Использованные технологии</a>

- Vite
- Typescript
- React
- Styled Components
- Axios
- React Router
- Redux Toolkit
- Redux Persist
- React Query
- React Hook Form
- React-scan (Для отслеживания перерисовки компонентов)
- Date-fns
- i18next
- React Icons
- Knip (Поиск неиспользованных экспортов, файлов и т.д.)
