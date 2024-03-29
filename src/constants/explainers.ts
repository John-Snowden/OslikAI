// export const explainers = [
//   'Чтобы скачать с Ослика записанные поездки, подключи к нему телефон по usb и выбери режим "C передачей файлов".\n',
//   'Первое подключение к Ослику может занять пару минут. В следующий раз будет быстро.\n',
//   'Посмотри в верхний правый угол. Если видишь перечеркнутый кабель - Ослик еще не подключился к телефону.\n',
//   'Если счетчик вверху справа показал новые маршруты, сначала нажми на значок кабеля, чтобы безопасно отключиться от Ослика.\n',
//   'Лучший! Не забывай безопасно отключаться от Ослика каждый раз, чтобы не выпороли за потерю данных.\n',
//   'Вот теперь можно отключить usb кабель от Ослика и даже выйти из приложения - данные не потеряются.\n',
//   'Но маршрут еще не сохранен и пользоваться им нельзя. Нажимай на счетчик и сохраняй.\n',
//   'Все маршруты хранятся в файле OslikHodovaya.json и Oslik.json в папке Downloads (или Загрузки) на телефоне. Не удаляй их, иначе потеряешь данные.\n',
//   'Чтобы скопировать данные на другой телефон, перенеси эти файлы в папку Downloads (или Загрузки) с заменой файлов (если нужно). На некоторых телефонах эти файлы видны только с компьютера.',
// ];

export const explainers = [
  {
    header: 'У Ослика 2 режима управления',
    text: 'Радиоуправление и автопилот. Автопилот - основной, радиоканал вспомогательный.',
  },
  {
    header: 'Радиоуправление',
    text: 'Этот режим добавлен для записи нового маршрута и как резервный способ управления.\n\nЧтобы записать новый маршрут в этом режиме, надо перевести тумблер, находящийся на Ослике, в положение "Запись" и вернуть в обратное положение, когда маршрут будет закончен. Можно записать несколько маршрутов подряд, отмечая их начало и конец при помощи тумблера записи. Все они будут сохранены в память Ослика.\n\nЗатем подключи смартфон к Ослику, на котором установлено это приложение. Не отключаясь от Ослика, открой приложение и дождись сообщения, что маршруты переданы на смартфон. Теперь можно отключиться и даже выйти из приложения - маршруты не пропадут.\n\nОднако этими маршрутами еще нельзя пользоваться. Зайди в меню и сохрани "Записанные маршруты".',
  },
  {
    header: 'Автопилот',
    text: 'После того как записанный в радиорежиме маршрут сохранен в приложении, его можно воспроизводить в режиме автопилота.\n\nДля этого открой приложение и выбери отправителя и получателя, а также точку, куда Ослик вернется после выполнения маршрута. Затем подключи смартфон к Ослику и дождись сообщения, что Ослик принял маршруты. Нажимай кнопку "Старт" на Ослике.\n\nКрайне важно всегда ставить Ослика в ту же самую точку на земле, где он находился, когда началась запись этого маршрута, т.к. Ослик ориентируется по пройденному расстоянию. Иначе весь маршрут окажется смещенным. То же самое касается точки получения, с которой Ослик отправится домой.\n\nЧтобы эти точки не потерялись, рекомендуется их пометить и сфотографировать. Фотографии можно добавить в маршрут во время его сохранения. При этом выставлять точный азимут не требуется - Ослик определит его сам.\n\nОднако если рельеф позволяет, точку отправки Ослика рекомендуется немного смещать при каждой отправке. Это поможет избежать формирования колеи и затруднит обнаружение Ослика при наблюдении с воздуха.',
  },
  {
    header: 'Собрать маршрут вручную',
    text: 'Если маршрут несложный, его можно набрать прямо в приложении, не прибегая к записи в радиорежиме. Для этого жми "Собрать маршрут вручную". После сохранения такой маршрут ничем не отличается от маршрута, записанного в радиорежиме.',
  },
  {
    header: 'Первое использование',
    text: 'Когда приложение открывается впервые, оно запросит разрешения на доступ к файлам. Да, разрешить.\n\nПеред подключением к Ослику приложение надо включить. Будут созданы нужные для подключения к Ослику файлы. Ты увидишь сообщение о том, что файлы созданы.\n\nИмей в виду, что если твой смартфон подключается к Ослику впервые, или до этого к Ослику подлючался другой смартфон, то сначала Ослик должен найти нужные файлы на твоем смартфоне. Это значит, что загрузка маршрутов может занять несколько больше времени. ',
  },
  {
    header: 'Подключение по usb',
    text: 'При подключении по usb увидишь варианты подключения. Выбирай подключение "с передачей файлов".',
  },
  {
    header: 'Как не потерять маршруты',
    text: 'Все данные о маршрутах хранятся на смартфоне в папке Oslik, которая находится в папке Donwloads (или Загрузки). Не удаляй ее. ',
  },
  {
    header: 'Выход в интернет',
    text: 'У приложения нет разрешения для выхода в интернет.',
  },
];

export const noSendersText = 'Для этого получателя нет отправителей';
