import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-jjcu-гость', { inverse: null, async: false }),
  должности: DS.belongsTo('i-i-s-jjcu-должности', { inverse: null, async: false }),
  картыДоступа: DS.belongsTo('i-i-s-jjcu-карты-доступа', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-jjcu-сотрудник', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-jjcu-форма-рег-входа', { inverse: 'тчРегВхода', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-jjcu-тч-рег-входа.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-jjcu-тч-рег-входа.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картыДоступа: {
    descriptionKey: 'models.i-i-s-jjcu-тч-рег-входа.validations.картыДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-jjcu-тч-рег-входа.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-jjcu-тч-рег-входа.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчРегВходаE', 'i-i-s-jjcu-тч-рег-входа', {
    гость: belongsTo('i-i-s-jjcu-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-jjcu-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    картыДоступа: belongsTo('i-i-s-jjcu-карты-доступа', 'Карты доступа', {
      кодКарты: attr('Код карты', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'кодКарты' }),
    должности: belongsTo('i-i-s-jjcu-должности', 'Должности', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });
};
