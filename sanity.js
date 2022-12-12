import SanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "elhf28ub",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};

export default client;