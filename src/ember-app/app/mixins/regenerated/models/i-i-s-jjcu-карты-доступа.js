import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКарты: DS.attr('number'),
  типКарты: DS.attr('i-i-s-jjcu-виды-карт')
});

export let ValidationRules = {
  кодКарты: {
    descriptionKey: 'models.i-i-s-jjcu-карты-доступа.validations.кодКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типКарты: {
    descriptionKey: 'models.i-i-s-jjcu-карты-доступа.validations.типКарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартыДоступаE', 'i-i-s-jjcu-карты-доступа', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 })
  });

  modelClass.defineProjection('КартыДоступаL', 'i-i-s-jjcu-карты-доступа', {
    кодКарты: attr('Код карты', { index: 0 }),
    типКарты: attr('Тип карты', { index: 1 })
  });
};
