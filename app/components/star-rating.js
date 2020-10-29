import { computed, action } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  // tagName: 'div', // it s default tag
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,

  onClick() {},

  setRating: action(function(newRating) {
    return this.onClick(newRating);
  }),

  stars: computed('rating', 'maxRating', function() {
    let stars = [];
    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.rating >= i })
    }
    return stars;
  })
});
