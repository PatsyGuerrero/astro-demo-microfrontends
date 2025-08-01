import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_TOKEN,
  host: import.meta.env.PUBLIC_CONTENTFUL_HOST,
  insecure: true
});