import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";


//??60% COMPLETED
const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <section>
      <li className="startup-card flex flex-col gap-4">
        {/* Top Info */}
        <div className="flex-between">
          <p className="startup-card_date">{formatDate(_createdAt)}</p>
          <div className="flex gap-1.5 items-center">
            <EyeIcon className="size-5" color="#ee2b69" />
            <span className="text-16-medium">{views}</span>
          </div>
        </div>

        {/* Author + Title */}
        <div className="flex-between gap-5">
          <div className="flex-1">
            <Link href={`/user/${authorId}`}>
              <p className="text-16-medium line-clamp-1">{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`}>
            <Image
              src="https://placehold.co/48x48"
              alt={`${name}'s avatar`}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Description + Image */}
        <Link href={`/startup/${_id}`} className="flex flex-col gap-2">
          <p className="startup-card_desc line-clamp-3">{description}</p>
          <img
            src={image}
            alt={title}
            className="startup-card_img rounded-md"
          />
        </Link>

        {/* Category + Button */}
        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </li>
    </section>
  );
};

export default StartupCard;
