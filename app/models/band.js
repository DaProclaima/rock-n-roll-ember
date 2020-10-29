import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';

export default EmberObject.extend({
  name: '',
  language: '',
  slug: computed('name', function() {
    // eslint-disable-next-line no-console
    console.log('Recomputing slug');
    return dasherize(this.name)
  }),

  site: computed('slug', 'language', function() {
    // eslint-disable-next-line no-console
    console.log('Recomputing site');
    return `https://bands.com/${this.slug}.${this.language}`;

  }),


  init() {
    this._super(...arguments);
    if(!this.songs) {
      this.set('songs', [])
    }
  }
})
