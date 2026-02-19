import Card from "@/app/components/Card";
const Eboard = () => {
  return (
    <Card
      name="Hasan Ali"
      position="Education Director"
      major="CS & Physics"
      description1="Hasan Ali is a junior double-majoring in Computer Science and Physics and currently serves as the Education Director of USACS. Passionate about building community and sharing knowledge, Hasan loves connecting with peers and creating opportunities for growth within the organization."
      description2="Outside of academics, he enjoys playing the saxophone, hitting the tennis courts, reading, and exploring his love for cars. His favorite USACS memory is attending his very first Town Hall, and he’s excited to pursue a career in software engineering."
      imageSrc="icons/funny_anime_cs.png"
      isGod={false}
    />
  );
};

export default Eboard;
