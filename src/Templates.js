export const jobTemplate = (job, currency) => `
  <div class="card">
  <h4 class="animated fadeIn job-title">${job.title} up to ${currency}${job.salary_max}</h4>
  <h5 class="animated fadeIn job-location">${job.location.display_name}</h5>
  <p class="animated fadeIn job-description">${job.description}</p>
  <a class="animated fadeIn view-job" href="${job.redirect_url}" target="_blank">View Job</a>
  </div>
`;
