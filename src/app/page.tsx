import { Dashboard } from "@src/models/Dashboard.model";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/dashboard");
  const data = (await res.json()) as Dashboard;
  console.log(data);
  return (
    <section className="bg-[rgb(83, 83, 83)] p-4 main-height overflow-auto">
      {data.map((item) => (
        <div key={item.id} className="p-4">
          <h1 className="text-3xl font-bold p-4 flex-1">{item.title}</h1>
          <div className="cards">
            {item.content.map((content) => (
              <div
                className="w-full max-w-[187px] min-h-[273px] bg-red-500"
                key={content.name}
              >
                <h3>{content.name}</h3>
                <p className="text-ellipsis">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
