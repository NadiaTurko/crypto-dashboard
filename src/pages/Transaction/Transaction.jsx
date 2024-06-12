import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Widthdraw", count: 55 },
    { name: "Trade", count: 50 },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="3" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxWidth="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search ..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
