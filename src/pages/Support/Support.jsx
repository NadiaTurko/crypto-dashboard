import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          leftComponent={<ContactCard />}
          icon={IoMdMail}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          leftComponent={
            <InfoCard
              imgUrl="/grid_bg.svg"
              tagText="Contact"
              text=" Learn more about our real estate, mortgage and corporate account services"
              inverted={true}
            />
          }
          icon={AiTwotoneMessage}
          title="Live Chat"
          text=" Don't have time to wait for the answer?Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
