import ORContainer from "@/components/Reuse/ORContainer";
import ORImage from "@/components/Reuse/ORImage";
import { H3, P } from "@/components/Reuse/Tags";
import React from "react";

const Thankyou = () => {
  return (
    <>
      <section className="mt-7">
        <ORContainer>
          <div className="flex items-center justify-center h-[70vh]">
            <div className="text-center">
              <ORImage
                image="/images/thank you.png"
                width="100"
                height="100"
                alt="thank-you"
                className="m-auto"
              />
              <H3 h3="Your Order is Successful!" className="my-3" />
              <P p="Thank you. Your order has been received." />
            </div>
          </div>
        </ORContainer>
      </section>
    </>
  );
};

export default Thankyou;
