import ImageDistortion from "./MorphShader";

export default function Morph() {
  return (
    <div className="w-full h-screen bg-neutral-800 flex items-center justify-center">
      {" "}
      <div className="">
        <ImageDistortion
          imageUrl="/fh3.webp"
          className="z-10"
          fadeDuration={100}
          width={624}
          height={322} // Durée du fade en millisecondes
        />
      </div>
    </div>
  );
}
