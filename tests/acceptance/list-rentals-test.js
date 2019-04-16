import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {click, currentURL, visit} from '@ember/test-helpers';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Should link to information about the company', async function(assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about')
  });

  test('Should link to contact information', async function(assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact')
  });

  test('Should list available rentals', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'There are 3 listings')
  });

  test('Should list available rentals by city', async function(assert) {

  });

  test('Should show details of selected rentals', async function(assert) {});

  test('Should show rentals at the home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'Should redirect automatically')
  });
});
