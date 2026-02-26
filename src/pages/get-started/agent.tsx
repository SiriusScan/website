import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/get-started/downloads",
      permanent: true,
    },
  };
};

export default function AgentRedirectPage() {
  return null;
}
