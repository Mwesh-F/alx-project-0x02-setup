import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Card One" content="This is the content of the first card." />
          <Card title="Card Two" content="This card displays different content." />
          <Card title="Card Three" content="Cards are reusable and styled with Tailwind!" />
        </div>
      </main>
    </>
  );
};

export default HomePage;
