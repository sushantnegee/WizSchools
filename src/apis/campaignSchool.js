export async function fetchCampaignSchool(search) {
    const baseUrl = 'https://api.devharlemwizardsinabox.com/campaign/campaign_school_list/';
    const url = search ? `${baseUrl}?search=${encodeURIComponent(search)}` : baseUrl;
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return data; // Pass the data to the next `then`
      })
      .catch((error) => {
        throw error; // Re-throw the error to be caught by `.catch`
      });
  }
  