import Layout from "./layouts/Layouts";
import Hero from "./hero-section/Hero";
import Juara from "./juara/Juara";
import Agenda from "./agenda/Agenda";
import Gallery from "./gallery/Gallery";
import Program from "./program/Program";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Juara />
        <Agenda />
        <Gallery />
        <Program />
      </Layout>
    </>
  );
}
