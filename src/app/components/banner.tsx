import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "react-bootstrap";

export type ComponentProps = {
  imgPath: string;
  imgAlt: string;
  height: number;
  title: string;
  btnText: string;
  btnCallback?: Function;
}

export default function BannerComponent({
  imgPath,
  imgAlt,
  height,
  title,
  btnText,
  btnCallback
}: ComponentProps) {
  const router = useRouter();

  return (
    <section className="banner">
      <div className="banner__bg">
        <Image className="banner__image" height={height} width="1920" src={imgPath} alt={imgAlt}/>
      </div>
      <h2 className="banner__slogan">{title}</h2>
      <Button variant="primary" className="icon white" onClick={() => {if (btnCallback) btnCallback()}}
        aria-label={`Call to action button for ${title}`}>
        {btnText}
        <i className="fas fa-arrow-right" />
      </Button>
    </section>
  )
}
