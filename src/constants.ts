export const COLORS = {
  yellow: '#FAA41A',
  dark: '#34465E',
};

export const SUPPLY_CASES = [
  {
    text: [
      'Прозорий розрахунок собівартості тарифу відповідно до графіку споживання та ціни ДП "Оператор ринку"',
      'Мінімальний тариф постачальника',
      'Авансовий платіж без застосування коефіцієнту витрат постачальника',
    ],
  },
  {
    text: [
      'Зручний, узгоджений зі Споживачем графік авансових платежів',
      'Можливість оплати по факту декади /місяця постачання',
      'Можливість відтермінування платежів',
    ],
  },
  {
    text: [
      'Повне покриття небалансу споживання електроенергії',
      'Відсутність лімітів споживання електроенергії',
      'Відсутність штрафів за відхилення від замовлених обсягів споживання',
    ],
  },
];

export const WORK_WITH_US = [
  {
    image: 'homka.png',
    name: 'Homka',
  },
  {
    image: 'mcdonalds.png',
    name: 'McDonalds',
  },
  {
    image: 'pulp-mill-print.png',
    name: 'PulpMillPrint',
  },
  {
    image: 'tulchin.png',
    name: 'Tulchin',
  },
];

export const CHANGE_SUPPLIER = [
  {
    step: 'КРОК 1',
    text:
      'Заповнення опитувального листа для підготовки комерційної пропозиції.',
    buttons: [
      { name: 'Опитувальний лист', file: 'Комерційна_пропозиція.docx' },
    ],
  },
  {
    step: 'КРОК 2',
    text:
      'Узгодження та підписання договору постачання електричної енергії та комерційної пропозиції з новим постачальником.',
    buttons: [
      { name: 'Комерційна пропозиція', file: 'Комерційна_пропозиція.docx' },
      { name: 'Договор', file: '' },
    ],
  },
  {
    step: 'КРОК 3',
    text:
      'Скан-копію заповненої та підписаної Заяви-приєднання Споживач надсилає на електрону адресу нового постачальника, водночас надсилає чинному постачальнику повідомлення щодо зміни.',
    buttons: [{ name: 'Заява-приєднання', file: '' }],
  },
  {
    step: 'КРОК 4',
    text:
      'Новий Постачальник формує запит на зміну та направляє до відповідного обленерго.',
    buttons: [],
  },
  {
    step: 'КРОК 5',
    text:
      'В продовж 3-х робочих днів обленерго розглядає запит та погоджує перехід.',
    buttons: [],
  },
];

export const INFO_CENTER = [
  {
    title: 'Нормативно-правова база',
    icon: 1,
    text: [
      '- Закон України “Про ринок електричної енергії” (від 13.04.2017 № 2019-VIII)',
      '- “Ліцензійні умови провадження господарської діяльності з постачання електричної енергії споживачу”, затверджені постановою НКРЕКП від 27.12.2017 № 1469',
    ],
  },
  {
    title: 'Посилання до державних органів і операторів систем',
    icon: 2,
    text: [
      '- Національна комісія, що здійснює державне регулювання у сфері енергетики та комунальних послуг',
      '- Державна інспекція енергетичного нагляду України',
      '- Міністрство енергетики та вугільної промисловості України',
      '- Оптовий постачальник електроенергії; Головний Оператор системи',
    ],
  },
  {
    title: 'Вирішення спорів',
    icon: 3,
    text: [
      'У випадку виникнення спірних питань, звертайтеся за адресою:',
      '- м. Київ, вул. Хохлових Сім’ї, буд.8. офіс 9',
      "- Режим роботи : понеділок-п'ятниця з 08: 00 до 18:00",
      '- тел. 097 000 00 92',
      '- email: info.htst@gmail.com',
      '- Особа відповідальна за врегулювання спорів : Директор Фененко Поліна Олександрівна',
    ],
  },
  {
    title: 'Права споживачів',
    icon: 4,
    text: [
      '- Закон України “Про ринок електричної енергії” (від 13.04.2017 № 2019-VIII)',
      '- “Ліцензійні умови провадження господарської діяльності з постачання електричної енергії споживачу”, затверджені постановою НКРЕКП від 27.12.2017 № 1469',
    ],
  },
];
