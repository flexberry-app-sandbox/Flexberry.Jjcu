import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjcu-сотрудник', 'Unit | Model | i-i-s-jjcu-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-jjcu-гость',
    'model:i-i-s-jjcu-должности',
    'model:i-i-s-jjcu-карты-доступа',
    'model:i-i-s-jjcu-комната',
    'model:i-i-s-jjcu-сотрудник',
    'model:i-i-s-jjcu-тч-рег-входа',
    'model:i-i-s-jjcu-форма-рег-входа',
    'model:i-i-s-jjcu-форма-рег-карт',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
