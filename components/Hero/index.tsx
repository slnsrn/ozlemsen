const Hero = () => (
  <div className="bg-gray-100 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14 designer-portfolio flex">
    <div className="mx-auto w-full max-w-7xl lg:px-8 self-center">
      <div className="flex flex-wrap items-center">
        <div className="w-5/12">
          <div className="designer-thumbnail">
            <img src="/images/ozlem-sen.jpg" alt="Slider Images" />
          </div>
        </div>
        <div className="w-7/12 mt_md--40 mt_sm--40">
          <div className="inner text-left">
            <h1 className="title">
              Hi, ich bin Ozlem Sen
              <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
