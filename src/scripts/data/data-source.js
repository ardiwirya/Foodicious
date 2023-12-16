class DataSource {
  static searchMealByName(query) {
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.meals) {
          return Promise.resolve(jsonResponse.meals);
        }
        return Promise.reject(`${query} is not found`);
      })
      .catch((e) => e);
  }
}

export default DataSource;
