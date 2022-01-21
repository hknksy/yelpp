import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VFBNfuZfpWbHVgCCpEPwZo4Sh-F-52iRGaHDLE2tft5xas2BBCcDl4u2JNQ-8Bc7LGsY9ttr4h5mKIPUg-zAIlCmSUCuOgVEcGOCmrfaVvhbWh6ZJa_TDumqaDzZYXYx",
  },
});
