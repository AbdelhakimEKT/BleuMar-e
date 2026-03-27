import Image from "next/image";

type GalleryItem = {
  title: string;
  caption: string;
  image: string;
};

type GalleryMosaicProps = {
  items: GalleryItem[];
};

export function GalleryMosaic({ items }: GalleryMosaicProps) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article key={item.title} className="image-frame gallery-item">
          <Image src={item.image} alt={item.title} fill className="image-cover" sizes="(max-width: 720px) 100vw, 50vw" />
          <div className="gallery-caption">
            <div>
              <p className="kicker">{item.title}</p>
              <p className="microcopy">{item.caption}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
