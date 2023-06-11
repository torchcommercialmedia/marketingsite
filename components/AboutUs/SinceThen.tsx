import React from "react";

type Props = {};

type EventProp = {
  title: string;
  exerpt: string;
  date: Date;
};

const SinceThen = (props: Props) => {
  const events: EventProp[] = [
    {
      title: "Event title 1",
      exerpt: "hello this is event happening",
      date: new Date(),
    },
    {
      title: "Event title 2",
      exerpt: "hello this is event happening",
      date: new Date(),
    },
    {
      title: "Event title 3",
      exerpt: "hello this is event happening",
      date: new Date(),
    },
    {
      title: "Event title 4",
      exerpt: "hello this is event happening",
      date: new Date(),
    },
    {
      title: "Event title 5",
      exerpt: "hello this is event happening",
      date: new Date(),
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen h-full flex items-center justify-center">
      <div className="border w-full p-8 bg-gray-700 rounded-2xl">
        <h2 className="text-white font-bold text-2xl">Since then</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {events.map((event: EventProp, index: number) => (
            <div
              key={index}
              className="border rounded-2xl p-4 bg-white col-span-1"
            >
              <img
                className="aspect-[3/2] w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-neutral-500">{event.exerpt}</p>
              <p className="text-sm text-neutral-400">
                {event.date.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinceThen;
