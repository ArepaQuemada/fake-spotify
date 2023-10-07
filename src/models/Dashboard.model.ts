export type Content = {
  img: string;
  name: string;
  description: string;
};

export type Dashboard = [
  {
    id: number;
    title: string;
    content: Content[];
  }
];
