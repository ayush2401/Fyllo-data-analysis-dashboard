export function getData(data, parent, child) {
  function findRepeated(parent, child, results) {
    if (child in results[parent]) {
      results[parent][child] += 1;
    } else {
      results[parent][child] = 1;
    }
    return results;
  }

  function extractStatistics(data, objKey) {
    let statistics = {};

    for (let key in data) {
      statistics[key] = [];
      for (let childkey in data[key]) {
        let tempdata = { [objKey]: childkey, value: data[key][childkey] };
        statistics[key].push(tempdata);
      }
    }
    return statistics;
  }
  // result looks like this
  // {
  //   'Andaman & Nicobar': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  //   'Andhra Pradesh': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  //   'Arunachal Pradesh': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  // }

  let states = {};
  // let parent = "state"
  // let child = "product"
  for (let obj of data) {
    if (!states.hasOwnProperty(obj[parent])) {
      states[obj[parent]] = {};
      states = findRepeated(obj[parent], obj[child], states);
    } else {
      states = findRepeated(obj[parent], obj[child], states);
    }
  }
  // data to be exported
  let finaldata = extractStatistics(states, child);

  return finaldata;
}

export function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

export function getPieData(data, valueData) {
  const chartData = data.reduce((carry, item) => {
    const { product, [valueData]: req } = item;

    if (!(product in carry)) {
      carry[product] = 0;
    }

    carry[product] += parseFloat(req);

    return carry;
  }, {});

  const finalData = [...Object.entries(chartData)]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map((entry) => ({
      name: entry[0],
      value: entry[1],
    }));

  return finalData;
}

export function getPieDataReverse(data, valueData) {
  const chartData = data.reduce((carry, item) => {
    const { product, [valueData]: req } = item;

    if (!(product in carry)) {
      carry[product] = 0;
    }

    carry[product] += parseFloat(req);

    return carry;
  }, {});

  const finalData = [...Object.entries(chartData)]
    .sort((a, b) => a[1] - b[1])
    .slice(0, 5)
    .map((entry) => ({
      name: entry[0],
      value: entry[1],
    }));

  return finalData;
}

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const initialObj = months.reduce((obj, i) => {
  obj[i] = {
    required: 0,
    available: 0,
  };

  return obj;
}, {});

export function getMonthlyTotal(data) {
  const chartData = data.reduce((carry, item) => {
    const { month, requirement_in_mt_, availability_in_mt_ } = item;
    carry[month].required += parseFloat(requirement_in_mt_);
    carry[month].available += parseFloat(availability_in_mt_);

    return carry;
  }, initialObj);

  const finalData = [...Object.entries(chartData)].map((entry) => ({
    name: entry[0],
    required: entry[1].required,
    available: entry[1].available,
  }));

  return finalData;
}

export function getCityWiseProduct(data, dataKey, selectedProduct) {
  let total = 0;
  const filteredDataObj = data
    .filter((item) => item.product === selectedProduct)
    .reduce((obj, item) => {
      if (!(item.state in obj)) {
        obj[item.state] = 0;
      }

      obj[item.state] += parseFloat(item[dataKey]);
      total += parseFloat(item[dataKey]);
      return obj;
    }, {});
  
  const filteredData = Object.keys(filteredDataObj).map((x) => ({ state: x, [dataKey]: filteredDataObj[x] }));
  let sortedData = filteredData.sort((a, b) => parseFloat(b[dataKey]) - parseFloat(a[dataKey])).slice(0, 5);
  const otherQuantity =
    total -
    sortedData.reduce((t, item) => {
      t += item[dataKey];
      return t;
    }, 0);
  sortedData.push({ state: "others", [dataKey]: otherQuantity });
  return sortedData;
}
