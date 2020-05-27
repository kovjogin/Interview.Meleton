import Vue from 'vue';

Vue.filter('dateLocal', (val) => new Date(val).toLocaleDateString());
