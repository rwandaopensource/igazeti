import { GetServerSideProps, NextPage } from 'next';

interface AboutPageProps {
    data: {
        name: string
    }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const About: NextPage<AboutPageProps> = ({ data }) => {
  return <div className="text-3xl font-bold underline">{data.name}</div>;
};

export default About;
