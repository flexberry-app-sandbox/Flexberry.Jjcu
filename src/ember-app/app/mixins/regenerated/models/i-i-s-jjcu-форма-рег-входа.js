import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  комната: DS.belongsTo('i-i-s-jjcu-комната', { inverse: null, async: false }),
  тчРегВхода: DS.hasMany('i-i-s-jjcu-тч-рег-входа', { inverse: 'формаРегВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчРегВхода: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-входа.validations.тчРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегВходаE', 'i-i-s-jjcu-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-jjcu-комната', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    тчРегВхода: hasMany('i-i-s-jjcu-тч-рег-входа', 'Тч рег входа', {
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
    })
  });

  modelClass.defineProjection('ФормаРегВходаL', 'i-i-s-jjcu-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-jjcu-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
