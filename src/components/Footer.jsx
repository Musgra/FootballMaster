const Footer = () => (
  <div
    className="w-full flex flex-col justify-between md:justify-center 
    items-center gradient-bg-footer p-4"
  >
    <div
      className="w-full flex sm:flex-row flex-col justify-between
        items-center my-4"
    >
      <div className="flex flex-[0.25] justify-center items-center"></div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-sm">
          &copy;2023 All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
