import CardPlay from "@src/components/card-play/CardPlay";
import { Dashboard } from "@src/models/Dashboard.model";
import { getHome } from "@src/services/main";

export default async function Home() {
  const data = (await getHome()) as Dashboard;
  return (
    <main className="bg-[rgb(83, 83, 83)] md:min-h-full mb-12">
      {data.map((item) => (
        <div key={item.id}>
          <h1 className="md:text-3xl font-bold p-4 flex-1">{item.title}</h1>
          <div className="cards overflow-x-scroll md:overflow-x-hidden">
            {item.content.map((content) => (
              <CardPlay
                key={content.name}
                description={content.description}
                img={content.img}
                name={content.name}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
