import styles from "../styles/Home.module.css";
const data = [
  {
    img: "react.png",
    alt: "React.js",
    name: "reactlogo",
    id: 2,
  },
  {
    img: "next.png",
    alt: "Next.js",
    name: "nextlogo",
    id: 3,
  },
  {
    img: "redux.png",
    alt: "Redux",
    name: "reduxlogo",
    id: 4,
  },
  {
    img: "tailwind.png",
    alt: "Tailwind",
    name: "tailwindlogo",
    id: 5,
  },
  {
    img: "node.png",
    alt: "Node.js",
    name: "nodelogo",
    id: 6,
  },
  {
    img: "expr.png",
    alt: "Express",
    name: "expresslogo",
    id: 7,
  },
  {
    img: "m.png",
    alt: "Mongo DB",
    name: "mongologo",
    id: 8,
  },
  {
    img: "git.png",
    alt: "GitHub",
    name: "gitlogo",
    id: 9,
  },
];

function Language() {
  return (
    <div className={styles.img}>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:gap-14 2xl:gap-5 gap-8 w-auto h-auto sm:gap-10 sm:pl-0 pl-0 sm:p-0 pr-0 lg:pr-2 ">
        {data.map((item) => {
          // Transformation du champ alt en une classe CSS valide
          const className = item.name;

          return (
            <div key={item.id} className={styles[className]}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Language;
