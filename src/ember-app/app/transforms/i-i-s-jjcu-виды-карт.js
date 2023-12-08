import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидыКартEnum from '../enums/i-i-s-jjcu-виды-карт';

export default FlexberryEnum.extend({
  enum: ВидыКартEnum,
  sourceType: 'IIS.Jjcu.ВидыКарт'
});
