import axios from "axios";
import { Question } from "../layouts/ProductDetails/components/DetailsQuestions/DetailsQuestions";

export const getResultsByQuery = async (query: string) => {
  const res = await axios
    .get(`https://api.mercadolibre.com/sites/MLC/search?q={${query}}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return res;
};

export const getProductDetails = async (productID: string | undefined) => {
  const res = axios
    .get(`https://api.mercadolibre.com/items?ids=${productID}`)
    .then((res) => res.data[0].body)
    .catch((e) => console.log(e));
  return res;
};

export async function getProductDesc(id: string | undefined) {
  const desc = await axios
    .get(`https://api.mercadolibre.com/items/${id}/description`)
    .then((res) => res.data.plain_text)
    .catch((e) => console.log(e));

  return desc;
}

export async function getProductQuestions(id: string | undefined) {
  const questions = await axios
    .get(`https://api.mercadolibre.com/questions/search?item=${id}`)
    .then((res) => res.data.questions)
    .catch((e) => console.log(e));

  console.log("questions from api: ", questions);
  return questions;
}

export async function getResultsByCategory(categoryID: string | undefined) {
  const results = await axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryID}`)
    .then((res) => res.data.results)
    .catch((e) => console.log(e));

  return results;
}

export function getNameCategory(categoryID: string | undefined) {
  const res = axios
    .get(`https://api.mercadolibre.com/categories/${categoryID}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return res;
}
