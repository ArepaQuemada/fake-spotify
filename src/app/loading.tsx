import LazyCard from "@src/components/lazy/card/LazyCard";
import LazyTitle from "@src/components/lazy/title/LazyTitle";

export default function Loading() {
  return (
    <section className="bg-[rgb(83, 83, 83)] p-8 h-full">
      <LazyTitle />
      <div className="cards">
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
      </div>
    </section>
  );
}
