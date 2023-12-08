import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-jjcu-гость-l');
  this.route('i-i-s-jjcu-гость-e',
  { path: 'i-i-s-jjcu-гость-e/:id' });
  this.route('i-i-s-jjcu-гость-e.new',
  { path: 'i-i-s-jjcu-гость-e/new' });
  this.route('i-i-s-jjcu-должности-l');
  this.route('i-i-s-jjcu-должности-e',
  { path: 'i-i-s-jjcu-должности-e/:id' });
  this.route('i-i-s-jjcu-должности-e.new',
  { path: 'i-i-s-jjcu-должности-e/new' });
  this.route('i-i-s-jjcu-карты-доступа-l');
  this.route('i-i-s-jjcu-карты-доступа-e',
  { path: 'i-i-s-jjcu-карты-доступа-e/:id' });
  this.route('i-i-s-jjcu-карты-доступа-e.new',
  { path: 'i-i-s-jjcu-карты-доступа-e/new' });
  this.route('i-i-s-jjcu-комната-l');
  this.route('i-i-s-jjcu-комната-e',
  { path: 'i-i-s-jjcu-комната-e/:id' });
  this.route('i-i-s-jjcu-комната-e.new',
  { path: 'i-i-s-jjcu-комната-e/new' });
  this.route('i-i-s-jjcu-сотрудник-l');
  this.route('i-i-s-jjcu-сотрудник-e',
  { path: 'i-i-s-jjcu-сотрудник-e/:id' });
  this.route('i-i-s-jjcu-сотрудник-e.new',
  { path: 'i-i-s-jjcu-сотрудник-e/new' });
  this.route('i-i-s-jjcu-форма-рег-входа-l');
  this.route('i-i-s-jjcu-форма-рег-входа-e',
  { path: 'i-i-s-jjcu-форма-рег-входа-e/:id' });
  this.route('i-i-s-jjcu-форма-рег-входа-e.new',
  { path: 'i-i-s-jjcu-форма-рег-входа-e/new' });
  this.route('i-i-s-jjcu-форма-рег-карт-l');
  this.route('i-i-s-jjcu-форма-рег-карт-e',
  { path: 'i-i-s-jjcu-форма-рег-карт-e/:id' });
  this.route('i-i-s-jjcu-форма-рег-карт-e.new',
  { path: 'i-i-s-jjcu-форма-рег-карт-e/new' });
});

export default Router;
