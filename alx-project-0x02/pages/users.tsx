import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const UsersPage = () => {
  return <div>Users Page</div>;
};

export default UsersPage;
