"use client";

const AboutClient: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        <p className="mb-10 text-center text-gray-700 text-lg">
          Welcome to our{" "}
          <span className="text-purple-600 font-semibold">
            user-friendly image conversion service
          </span>
          ! Our platform is here to make your life easier by helping you{" "}
          <span className="text-purple-600 font-semibold">
            change the format of your images
          </span>
          . Do you have an image that&apos;s{" "}
          <span className="text-purple-600 font-semibold">
            not working on your device
          </span>
          ? No worries! Our service can help you{" "}
          <span className="text-purple-600 font-semibold">
            switch it to a format that&apos;s perfect for your needs
          </span>
          . Are your images taking{" "}
          <span className="text-purple-600 font-semibold">
            too long to load on your website
          </span>
          ? We&apos;re here to help you{" "}
          <span className="text-purple-600 font-semibold">
            optimize them for the web
          </span>
          , so your site can run smoothly and visitors won&apos;t get{" "}
          <span className="text-purple-600 font-semibold">
            frustrated waiting for images to appear
          </span>
          . All you need to do is{" "}
          <span className="text-purple-600 font-semibold">
            upload your image
          </span>
          ,
          <span className="text-purple-600 font-semibold">
            select the format you want
          </span>
          , and hit the{" "}
          <span className="text-purple-600 font-semibold">convert button</span>.{" "}
          <span className="text-purple-600 font-semibold">Voilà</span>!
          You&apos;ll get a{" "}
          <span className="text-purple-600 font-semibold">
            downloadable image that fits your needs
          </span>
          . Our goal is to provide a{" "}
          <span className="text-purple-600 font-semibold">
            simple solution for all your image format challenges
          </span>
          . Try our service now and{" "}
          <span className="text-purple-600 font-semibold">
            experience the difference
          </span>
          !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">
              How It Works
            </h2>
            <ul className="list-inside list-disc text-gray-700 space-y-4">
              <li className="font-semibold">Step 1: Upload your image.</li>
              <li className="font-semibold">
                Step 2: Select the extension you want to convert the image to.
              </li>
              <li className="font-semibold">Step 3: Hit the convert button.</li>
              <li className="font-semibold">
                Step 4: Download the converted image.
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">
              Why Choose Us
            </h2>
            <p className="text-gray-700">
              Our image conversion service is built with simplicity and
              efficiency in mind. We understand the importance of having the
              right image format, and our platform streamlines the process for
              you. With our user-friendly interface and quick conversion, you
              can save time and ensure your images are perfectly suited for your
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
