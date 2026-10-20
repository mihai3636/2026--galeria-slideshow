let data;

export async function loadData() {
  if (data) {
    console.log("Already have data");
    return data;
  }

  const response = await fetch("../public/data.json");
  const dataJson = await response.json();

  data = dataJson;
  return data;
}

export function getArtName() {
  console.log(data[0].name);
}
