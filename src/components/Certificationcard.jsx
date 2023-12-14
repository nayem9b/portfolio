import { TbExternalLink } from "react-icons/tb";

const Certificationcard = ({ testimonial }) => {
  const { image, name, live } = testimonial;
  console.log(live);
  return (
    <div className="">
      <div className="bg-tertiary p-5 rounded-2xl lg:w-5/6">
        <img
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
          src={image}
        />

        <div className="mt-5">
          <div className="flex mt-6">
            <h3 className="text-white font-bold lg:text-[24px] text-lg">
              {name}
            </h3>
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-white ml-3 text-3xl"
            >
              <TbExternalLink />
            </a>
          </div>

          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {/* {tags?.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Certificationcard;
