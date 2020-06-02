import { jobTemplate } from './Templates.js';
import { extractFormData, getCurrencySymbol } from './Utils.js';


export class JobSearch {

  constructor(searchFormSelector, resultsContainerSelector, loadingElementSelector) {
    this.searchForm = document.querySelector(searchFormSelector);
    this.resultsContainer = document.querySelector(resultsContainerSelector);
    this.loadingElement = document.querySelector(loadingElementSelector);
  }

  setCountryCode() {
    this.countryCode = 'gb';
    this.setCurrencySymbol();

    fetch('http://ip-api.com/json')
      .then(results => results.json())
      .then(results => {
        this.countryCode = results.countryCode.toLowerCase();
        this.setCurrencySymbol();
      });
  }

  setCurrencySymbol() {
    this.currencySymbol = getCurrencySymbol(this.countryCode);
  }

  configureFormListener() {
    this.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    this.resultsContainer.innerHTML = '';
    const { search, location, distance, min, max } = extractFormData(this.searchForm);

    this.startLoading();
    fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/2?app_id=fe8c748e&app_key=20c3e73a59479724e90591efe9cdfa7d&results_per_page=10000&what=${search}&where=${location}&distance=${distance}&sort_by=salary&salary_min=${min}&salary_max=${max}`)
      .then(response => response.json())
      .then(({ results }) => {
        this.stopLoading();
        return results
          .map(job => jobTemplate(job, this.currencySymbol))
          .join('');
      })
      .then(jobs => this.resultsContainer.innerHTML = jobs)
      .catch(() => this.stopLoading());
    });
  }

  startLoading() {
    this.loadingElement.classList.add('loading');
  }

  stopLoading() {
    this.loadingElement.classList.remove('loading');
  }
}
