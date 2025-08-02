import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col lg:flex-row gap-10">
        <img
          src={assets.about_img}
          className="w-full lg:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 lg:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, where style meets timeless elegance. We believe
            fashion is not just about clothes — it's about expressing who you
            truly are. Founded with a passion for modern trends and everyday
            comfort, Forever is your go-to destination for premium fashion that
            lasts beyond seasons. Our curated collection blends classic designs
            with a fresh, youthful energy, ensuring you feel confident in every
            outfit. Whether you're dressing up for a special occasion or keeping
            it casual, our mission is to provide high-quality clothing that
            celebrates individuality and empowers self-expression.
          </p>
          <p>
            At Forever, we don’t just sell clothes — we build confidence, spark
            attitude, and define lifestyle. Born from the idea that fashion
            should be fearless and forever evolving, our brand stands for bold
            designs, quality wear, and limitless expression. Whether you're
            chasing trends or creating your own, Forever is here to back your
            vibe. From street styles to minimal classics, every piece in our
            collection is made to turn heads, start conversations, and stay
            relevant — forever.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to redefine everyday fashion — where comfort meets
            class, and minimalism meets bold expression. We exist to inspire the
            youth, support local creators, and bring timeless designs to modern
            lifestyles. Forever isn’t just a name. It’s a promise — style that
            stays.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 text-sm mb-20 px-4 md:px-8">
        {/* Card 1 */}
        <div className="flex-1 bg-white border rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-800">Quality Assurance</h3>
          <p className="text-gray-600 leading-relaxed">
            At <b>Forever</b>, quality isn't a feature — it's our foundation.
            Every product undergoes multiple levels of inspection, from fabric
            selection to final packaging. We collaborate with trusted
            manufacturers and use durable materials to ensure that each piece
            not only looks great but lasts long. Your satisfaction is our
            commitment, and we never settle for less than premium.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white border rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-800">Convenience</h3>
          <p className="text-gray-600 leading-relaxed">
            At <b>Forever</b>, we believe shopping should be effortless. From
            intuitive browsing to smooth checkout and timely delivery, every
            step is designed with your convenience in mind. Whether you're on
            your phone or desktop, our platform offers a seamless experience so
            you can shop what you love — anytime, anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white border rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-800">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At <b>Forever</b>, exceptional customer service is at the heart of
            everything we do. Our dedicated support team is always ready to
            assist you — whether it's answering product queries, resolving order
            issues, or guiding you through returns and exchanges. We value your
            time and trust, and strive to ensure every interaction is friendly,
            prompt, and helpful.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
