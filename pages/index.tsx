import Head from "next/head"
import Link from "next/link"
import Container from '../components/Container'
import { Avatar, VStack, Center, Heading, Button, Text, useToast} from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaDev, FaTwitter, FaLinkedin, FaCodepen, FaDribbble, FaCode } from "react-icons/fa";

export default function Home() {
    const toast = useToast()
  return (
    <>
      <Head>
  <title>Alec_Campbell</title><link rel="icon" href="/floppa.png" />
  <meta name="og:type" content="website" />
  <meta charSet="UTF-8" />
  <meta name="description" content="Alec_Campbell website." />
  <meta name="keywords" content="NextJs, ChakraUI" />
  <meta name="author" content="Alec_Campbell" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="og:image" content="/floppa.png" />
  <meta name="theme-color" content="#337ab7" />
  <script async src="https://arc.io/widget.min.js#Zn9FDne2"></script>
  </Head>
    <Container />
    <Center>
    <VStack spacing={4}>
    <Avatar size="2xl" name="Alec_Campbell" src="./floppa.png" />
    {" "}
    <Heading>Alec Campbell</Heading>
    <Text>Fullstack Developer</Text>

    <Link href="https://github.com/uvacoder">
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


    <Link href="https://dribbble.com/uvacoder">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDribbble />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Dribbble</Button>
      </a>
    </Link>
        
    <Link href="https://dev.to/fu4303">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaDev />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Dev.to</Button>
      </a>
    </Link>       

    <Link href="https://twitter.com/AlecCam43544378">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaTwitter />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Twitter</Button>
      </a>
    </Link>    
        
    <Link href="mailto:freeunioncoder@gmail.com">
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

    <Link href="https://codepen.com/uvacoder">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaCodepen />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Codepen</Button>
      </a>
    </Link>

    <Link href="https://www.linkedin.com/in/alecbcampbell">
    <a target="_blank">
    <Button width="350px" leftIcon={<FaLinkedin />}onClick={() =>
        toast({
          title: "Link Opened",
          description: "Opened the requested link!",
          status: "success",
          duration: 3000,
          position: "bottom-left",
          isClosable: true,
        })
      }>Linkedin</Button>
      </a>
    </Link>

    <Button width="350px" leftIcon={<FaCode />}onClick={() =>
        toast({
          title: "Languages I Know",
          description: " HTML, CSS, TypeScript, Chakra UI",
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
