import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISJjcuГостьLForm from './forms/i-i-s-jjcu-гость-l';
import IISJjcuДолжностиLForm from './forms/i-i-s-jjcu-должности-l';
import IISJjcuКартыДоступаLForm from './forms/i-i-s-jjcu-карты-доступа-l';
import IISJjcuКомнатаLForm from './forms/i-i-s-jjcu-комната-l';
import IISJjcuСотрудникLForm from './forms/i-i-s-jjcu-сотрудник-l';
import IISJjcuФормаРегВходаLForm from './forms/i-i-s-jjcu-форма-рег-входа-l';
import IISJjcuФормаРегКартLForm from './forms/i-i-s-jjcu-форма-рег-карт-l';
import IISJjcuГостьEForm from './forms/i-i-s-jjcu-гость-e';
import IISJjcuДолжностиEForm from './forms/i-i-s-jjcu-должности-e';
import IISJjcuКартыДоступаEForm from './forms/i-i-s-jjcu-карты-доступа-e';
import IISJjcuКомнатаEForm from './forms/i-i-s-jjcu-комната-e';
import IISJjcuСотрудникEForm from './forms/i-i-s-jjcu-сотрудник-e';
import IISJjcuФормаРегВходаEForm from './forms/i-i-s-jjcu-форма-рег-входа-e';
import IISJjcuФормаРегКартEForm from './forms/i-i-s-jjcu-форма-рег-карт-e';
import IISJjcuГостьModel from './models/i-i-s-jjcu-гость';
import IISJjcuДолжностиModel from './models/i-i-s-jjcu-должности';
import IISJjcuКартыДоступаModel from './models/i-i-s-jjcu-карты-доступа';
import IISJjcuКомнатаModel from './models/i-i-s-jjcu-комната';
import IISJjcuСотрудникModel from './models/i-i-s-jjcu-сотрудник';
import IISJjcuТчРегВходаModel from './models/i-i-s-jjcu-тч-рег-входа';
import IISJjcuФормаРегВходаModel from './models/i-i-s-jjcu-форма-рег-входа';
import IISJjcuФормаРегКартModel from './models/i-i-s-jjcu-форма-рег-карт';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-jjcu-гость': IISJjcuГостьModel,
    'i-i-s-jjcu-должности': IISJjcuДолжностиModel,
    'i-i-s-jjcu-карты-доступа': IISJjcuКартыДоступаModel,
    'i-i-s-jjcu-комната': IISJjcuКомнатаModel,
    'i-i-s-jjcu-сотрудник': IISJjcuСотрудникModel,
    'i-i-s-jjcu-тч-рег-входа': IISJjcuТчРегВходаModel,
    'i-i-s-jjcu-форма-рег-входа': IISJjcuФормаРегВходаModel,
    'i-i-s-jjcu-форма-рег-карт': IISJjcuФормаРегКартModel
  },

  'application-name': 'Jjcu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Jjcu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Jjcu',
          title: 'Jjcu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        jjcu: {
          caption: 'Jjcu',
          title: 'Jjcu',
          'i-i-s-jjcu-форма-рег-входа-l': {
            caption: 'Форма рег входа',
            title: ''
          },
          'i-i-s-jjcu-форма-рег-карт-l': {
            caption: 'Форма рег карт',
            title: ''
          },
          'i-i-s-jjcu-гость-l': {
            caption: 'Гость',
            title: ''
          },
          'i-i-s-jjcu-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-jjcu-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-jjcu-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-jjcu-карты-доступа-l': {
            caption: 'Карты доступа',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-jjcu-гость-l': IISJjcuГостьLForm,
    'i-i-s-jjcu-должности-l': IISJjcuДолжностиLForm,
    'i-i-s-jjcu-карты-доступа-l': IISJjcuКартыДоступаLForm,
    'i-i-s-jjcu-комната-l': IISJjcuКомнатаLForm,
    'i-i-s-jjcu-сотрудник-l': IISJjcuСотрудникLForm,
    'i-i-s-jjcu-форма-рег-входа-l': IISJjcuФормаРегВходаLForm,
    'i-i-s-jjcu-форма-рег-карт-l': IISJjcuФормаРегКартLForm,
    'i-i-s-jjcu-гость-e': IISJjcuГостьEForm,
    'i-i-s-jjcu-должности-e': IISJjcuДолжностиEForm,
    'i-i-s-jjcu-карты-доступа-e': IISJjcuКартыДоступаEForm,
    'i-i-s-jjcu-комната-e': IISJjcuКомнатаEForm,
    'i-i-s-jjcu-сотрудник-e': IISJjcuСотрудникEForm,
    'i-i-s-jjcu-форма-рег-входа-e': IISJjcuФормаРегВходаEForm,
    'i-i-s-jjcu-форма-рег-карт-e': IISJjcuФормаРегКартEForm
  },

});

export default translations;
