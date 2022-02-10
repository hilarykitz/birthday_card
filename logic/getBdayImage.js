export const getBdayImage = async (query, setImages, setSubmitStatus) => {
  const key = process.env.API_KEY;
  let images;
  try {
    const resp = await fetch(
      `https://g.tenor.com/v1/search?q=${query}&key=${key}&limit=12`
    );

    const respJson = await resp.json();
    images = respJson.results;
  } catch (err) {
    alert("oof soz try something else");
  }
  setImages(images);
  return;
};
