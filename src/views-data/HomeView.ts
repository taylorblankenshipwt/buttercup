import { getRandomDogImageURL } from "@/services/network/DoggyAPI";
import { GetServerSideProps } from "next";
import { HomePageProps } from "../services/models/pages/HomePage";

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  // This is the backend portion of the code. Anything in here will only be run on the server.
  // You won't be able to access the user's data or the browser window.
  return {
    props: {
      doggyName: "Kara 🐶",
      dogImage: await getRandomDogImageURL(),
    },
  };
};
