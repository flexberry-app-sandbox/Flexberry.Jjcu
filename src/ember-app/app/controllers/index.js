import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.jjcu.caption'),
          title: i18n.t('forms.application.sitemap.jjcu.title'),
          children: [{
            link: 'i-i-s-jjcu-форма-рег-входа-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-форма-рег-входа-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-форма-рег-входа-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-jjcu-форма-рег-карт-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-форма-рег-карт-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-форма-рег-карт-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-jjcu-гость-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-гость-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-jjcu-должности-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-должности-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-jjcu-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-сотрудник-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-jjcu-комната-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-комната-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-jjcu-карты-доступа-l',
            caption: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-карты-доступа-l.caption'),
            title: i18n.t('forms.application.sitemap.jjcu.i-i-s-jjcu-карты-доступа-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})