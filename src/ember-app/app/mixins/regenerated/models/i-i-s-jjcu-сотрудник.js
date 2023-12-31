import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  серНомПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-jjcu-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-jjcu-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-jjcu-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    должности: belongsTo('i-i-s-jjcu-должности', 'Должности', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-jjcu-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    должности: belongsTo('i-i-s-jjcu-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
