import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Popular Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Paris" description="The city of lights awaits you." image="/images/paris.jpg" />
        <Card title="Tokyo" description="Experience modern meets tradition." image="/images/tokyo.jpg" />
        <Card title="New York" description="The city that never sleeps." image="/images/ny.jpg" />
      </div>
    </div>
  );
};

export default Home;
