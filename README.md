# codete-test-task

1. Для запуску сервера npm run dev в папці сервера;
2. Для запуску клієнта npm start в папці клієнта;

Що не реалізовано:
    Найголовніше що потрібно було зробити - роботу з часом, вибір, резервування, показ залишку.
    на клієнті:
    - відсутня валідація данних, які вводить користувач, в деяких місцях вона примітивна. На сервері є валідація з форми реєстрації
    - кабінет лікаря рендериться 2 рази. Я догадуюсь чому це відбувається, але думав потім пофіксити.
    - не докінця адаптовано в кабінеті лікаря шкалу. Ідея була в тому, що лікар вибирає день (доречі лікар може вибрати одну й ту ж саму дату 
    декілька разів. На сервері при опрацюванні запиту не перевірив чи є вже графік цього ж лікаря на це й же день), час з якого він приймає, 
    час до якого здійснює прийом і кількість пацієнтів яку він може прийняти (5, 10 або 15). Тут в мене виникла проблема з часовим поясом. В базу 
    час зсунутий на 3 години в мінус. Не поправив, чесно кажучи я вже не знаю як це зробити, треба гуглити далі. Так ось, потім в залежності 
    від того скільки пацєнтів готовий прийняти лікар і кількості часу, який він обрав для прийому - будується шкала в якій вільні місця мали б
     бути синього кольору, а зайняті задизейблені і сірі. При натисканні на вільне місце пацієнтом буде вспливати модальне вікно, в якому має
     бути кнопка записатись. Далі всі махінації на сервері...
     - в кабінеті пацієнта мали відображатись записи, які він зробив, з можливістю редагування та видалення;
    - повністю відстуній рефакторинг;
    - зустрічається таке: папка з одною назвою, а в ній файл з іншою;
    - відсутній захист маршрутів, для того щоб все працювало так як задумано потрібно зареєструватись і зайти на сайт. Я це знаю, тобто 
    це не очевидно з першого погляду, воно не перенаправляє на сторінку входу. Планував це зробити в кінці. І для цього мені треба 
    було доробити валідацію jsonwebtoken на сервері;
    - використовував typescript - багато де any та //@ts-ignore
    
    на сервері: (NodeJS, express, mongoDb)
      - є лишні моделі, які просто треба було видалити;
      - відсутня модель пацієнта;
      - замість того, щоб повертати на клієнт помилки - заглушки
      
      Причини спізнення:
       1. Ніколи не працював з Material UI
       2. Хотів стрибнути вище голови.
       
       СОРОМНО ЗДАВАТИ ТАКУ РОБОТУ, АЛЕ стільки сил витрачено, не спав годин 35
