'use strict';

let cardTemplate = {
    id: 'id',
    title: 'Название',
    category: 'Категория love, body, pepper',
    subCategory: '1: kiss, question, story, touch, gift, ',
    languageCard: 'Ru-En',
    specialRandom: 100,
    text: 'Сам текст',
    icon: 'Иконка категории',
    picture: 'Картинка',
    visible: true,
    conditionalSex: 'uni, couple, male, famale, company, other',
    fastOrLong: 'now, today, soon, sometime',
    saveCard: false,
    schedule: false,
    timeOfReadThisCard: 'time',
    placePlay: 'indoor, outdoor, other',
    props: 'none, haveAll, mayBeHave, needSale',
    actionNaturePlay_List: 
    'slow, fast, silence, noisy, danger, long, very long, funny, durty, \
    long run-up, fast run-up, cute, nude, topless, undress, public, \
    expensive, cheap, free, along, other',
    countSaveThisCard: 0,
    countRead_andPlay: 0,
    countSkipThisCard: 0,


};

let userTemplate = {
    loginMailAccount: 'Email',
    name: 'UserName',
    passwordAccount: 'pass',
    avatarAccount: 'avatar',
    freeAccount: true,
    languageUser: 'Ru-En',
    onePayAccount: false,
    confirmEmail: false,
    list_PlayedCards: 'id list',
    list_HiddenCards: 'id list',
    amountSaveCards: 0,
    listSaveCards: 'list id',
    listFavoriteTheme: 'list of subCategory',
    dateRegistration: 'Date',
    dateLastVisit: 'Date',
    timeOnSite: 'Time, Date',
    actionListPlay: 'config',



};

if(cardTemplate.icon11 === undefined) console.log('Такой записи нет');
console.log(cardTemplate.actionPlay_List)

