import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjcu-должности', 'Unit | Serializer | i-i-s-jjcu-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-jjcu-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-jjcu-виды-карт',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
