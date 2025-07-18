import { Controller } from '@hotwired/stimulus';

export default class SchemaController extends Controller {
  connect() {
    this.element.textContent = 'Controller connected';
  }
}
