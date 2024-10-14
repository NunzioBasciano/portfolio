"use client";

import Image from "next/image";

export default function ImageComponent({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <Image src={src} alt={alt} width={25} height={25} />;
}
