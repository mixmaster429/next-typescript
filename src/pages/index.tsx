import { Center } from '@chakra-ui/react';
import MainLayout from "../components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home">
      <Center h="100%">This is Home screen</Center>
    </MainLayout>
  );
}
