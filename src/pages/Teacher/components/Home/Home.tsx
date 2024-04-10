"use client";

import { useEffect, useState } from "react";
import { Container, Data, Image } from "./styled-components";

export type HomeProps = {
  // types...
};

const data = [
  {
    title: "teacher",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id placeat nemo, odio illo culpa minima dolor consequuntur reiciendis at.",
    thumbnail:
      "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id placeat nemo, odio illo culpa minima dolor consequuntur reiciendis at.",
    thumbnail:
      "https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg",
  },
  {
    title: "student",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id placeat nemo, odio illo culpa minima dolor consequuntur reiciendis at.",
    thumbnail:
      "https://images.pexels.com/photos/4145038/pexels-photo-4145038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "attendance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id placeat nemo, odio illo culpa minima dolor consequuntur reiciendis at.",
    thumbnail:
      "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "calification",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id placeat nemo, odio illo culpa minima dolor consequuntur reiciendis at.",
    thumbnail:
      "https://media.istockphoto.com/id/140269389/es/foto/informe-escolar.jpg?s=612x612&w=0&k=20&c=sQfTQVPSPi92CwZgiPouqRJdY0JeHxOMDWc_hY_Y1wc=",
  },
];

const Home = ({}: HomeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0]);

  const selectNewImage = (index: number, images: any[], next = true) => {
    setTimeout(() => {
      const condition = next ? index < images.length - 1 : currentIndex > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : images.length - 1;
      setCurrentImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(currentIndex, data);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Image src={currentImage.thumbnail} />
      <Data>
        <h1>{currentImage.title}</h1>
        <p>{currentImage.description}</p>
      </Data>
    </Container>
  );
};

export default Home;
