const baseApi = "http://localhost:3001";
const headers = {
    'Accept': 'application/json'
  }

export const getAllReports = () =>
  fetch(`${baseApi}/reports`, { headers })
    .then(res => res.json())

export const updateReport = (reportId, state) =>
  fetch(`${baseApi}/reports/${reportId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ state })
  }).then(res => res.json())
