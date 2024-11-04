import Image from "next/image";

const TestimonialBox = ({ review }) => {
  return (
    <div className="rounded-lg bg-primary-600 p-5">
      <div className="flex items-center gap-3">
        <div className="relative h-[42px] w-[42px] overflow-hidden rounded-full">
          <Image
            src={review.image}
            layout="fill"
            objectFit="cover"
            alt={`${review.name}'s picture`}
          />
        </div>
        <div>
          <p className="font-medium capitalize">{review.name}</p>
          <p className="text-sm text-[#A7A7A8]">{review.role}</p>
        </div>
      </div>
      <div className="mt-4 text-[#D0D0D1]">{review.review}</div>
    </div>
  );
};

export default TestimonialBox;
