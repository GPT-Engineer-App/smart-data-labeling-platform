import { Box, Button, ChakraProvider, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FaPlus, FaUserCircle, FaDatabase, FaTools, FaCog, FaHome } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Flex minHeight="100vh" direction="column">
        {/* Login Page */}
        <Box p={8} maxWidth="500px" mx="auto">
          <Heading mb={6}>登录</Heading>
          <FormControl isRequired>
            <FormLabel>用户名</FormLabel>
            <Input placeholder="请输入用户名" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>密码</FormLabel>
            <Input type="password" placeholder="请输入密码" />
          </FormControl>
          <Stack spacing={6} mt={4}>
            <Button colorScheme="blue">登录</Button>
            <Link color="blue.500">忘记密码?</Link>
          </Stack>
        </Box>

        {/* Main Page */}
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <FaHome /> 主页
            </Tab>
            <Tab>
              <FaUserCircle /> 项目管理
            </Tab>
            <Tab>
              <FaDatabase /> 数据集管理
            </Tab>
            <Tab>
              <FaTools /> 标注工具
            </Tab>
            <Tab>
              <FaCog /> 设置
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Heading size="md">项目概览</Heading>
                <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
                  创建新项目
                </Button>
              </VStack>
            </TabPanel>
            <TabPanel>
              <Text>项目管理功能</Text>
            </TabPanel>
            <TabPanel>
              <Text>数据集管理功能</Text>
            </TabPanel>
            <TabPanel>
              <Text>标注工具功能</Text>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Button onClick={toggleColorMode}>切换 {colorMode === "light" ? "暗色" : "亮色"} 模式</Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
