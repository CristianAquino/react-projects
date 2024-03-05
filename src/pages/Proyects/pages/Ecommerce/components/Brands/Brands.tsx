import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Handle, Slider } from "./styled-component";

export type BrandsProps = {};

const Brands = ({}: BrandsProps) => {
  const brandVariants = [
    "Golden",
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
  ];

  const [params] = useSearchParams();
  const brandParam = params.get("brand") || brandVariants[0];
  const [arrowSlide, setArrowSlide] = useState(0);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      let handle;
      if (e.target?.matches(".handle")) {
        handle = e.target;
      } else {
        handle = e.target?.closest(".handle");
      }
      if (handle != null) {
        onHandleClick(handle);
      }
    });

    function onHandleClick(handle: any) {
      const slider = handle.closest(".container").querySelector(".slider");
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        setArrowSlide((prev) => prev - 1);
      }
      if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        setArrowSlide((prev) => prev + 1);
      }
    }
  }, []);

  return (
    <Container className="container">
      {arrowSlide > 0 && (
        <Handle className="handle left-handle">&#8249;</Handle>
      )}
      <Slider className="slider">
        {brandVariants.map((brand) => (
          <li
            key={brand}
            className={`${brand == brandParam ? "active" : null}`}
          >
            <Link to={`?brand=${brand}`}>{brand}</Link>
          </li>
        ))}
      </Slider>
      {brandVariants.length / 2 - 1 > arrowSlide && (
        <Handle className="handle right-handle">&#8250;</Handle>
      )}
    </Container>
  );
};

export default Brands;
