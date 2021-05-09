import Head from "next/head"
import Link from "next/link"
import Container from '../components/Container'
import { Avatar, VStack, Center, Heading, Button, Text, useToast} from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaDonate, FaShoppingCart, FaDiscord, FaCode } from "react-icons/fa";

export default function Home() {
    const toast = useToast()
  return (
    <>
      <Head>
  <title>Matt_Lawz</title>
  <link rel="icon" href="/floppa.png" />
  <meta name="og:type" content="website" />
  <meta charSet="UTF-8" />
  <meta name="description" content="MattLawz website." />
  <meta name="keywords" content="NextJs, ChakraUI" />
  <meta name="author" content="MattLawz" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="og:image" content="/floppa.png" />
  <meta name="theme-color" content="#337ab7" />
  <script async src="https://arc.io/widget.min.js#Zn9FDne2"></script>
  </Head>
    <Container />
    <Center>
    <VStack spacing={4}>
    <Avatar size="2xl" name="MattLawz" src="./floppa.png" />
    {" "}
    <Heading>MattLawz</Heading>
    <Text>Fullstack Developer</Text>

    <Link href="https://github.com/MattLawz">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaGithub />}  onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>GitHub</Button>
      </a>
    </Link>


    <Link href="https://discord.com/users/358778308747460610">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDiscord />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Discord</Button>
      </a>
    </Link>

    <Link href="mailto:matt@mattlawz.dev">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaEnvelope />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Email</Button>
      </a>
    </Link>

    <Link href="https://payhip.com/MattDev">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaShoppingCart />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Shop Code</Button>
      </a>
    </Link>

    <Link href="https://www.buymeacoffee.com/devmatt">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDonate />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Donate</Button>
      </a>
    </Link>

    <Button width="350px" leftIcon={<FaCode />}onClick={() =>
        toast({
          title: "Languages I Know",
          description: " HTML, CSS, PHP, TypeScript, Lua, C#, Chakra UI",
          status: "info",
          duration: 9000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Languages & Technologies</Button>

</VStack>
</Center>

    </>
  )
}
