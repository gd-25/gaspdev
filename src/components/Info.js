import '../styles/main.css';
import Social from './Social';



function Info() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center cursor-default">
      <div className="flex flex-col justify-center items-center"
        style={{ width: "780px", fontSize: "0.91rem", lineHeight: "1.3;" }}>

        <div className="text-justify" style={{ columnCount: "3", columnGap: "35px" }}>Born in March 1991, Gaspard Deshusses is an independent French artist and graphic designer who likes to shred fashion magazines.
        Nothing makes him feel more electrified than tearing up a blood red scrap of paper off of a glossy page. Having been raised between the city and the mountains, he then lived in Paris, the French Alps and New York City for several years. Gaspard was constantly surrounded around graphic lines. The wild and brutal lines of ridges and peaks, in contrast to the neat and geometric lines of buildings and avenues made him who he is. Now, with stolen ripped off shapes and colors, he aims to create wild and sensual moods and sceneries through methodic and structured compositions. This orderly chaos that Gaspard designs, is his chosen way to illustrate a paradox between a form of contrast, of confrontation– and eventually, an inevitable form of coexistence and harmony.
        Dazzled by the techniques and aesthetics of abstract expressionism, Gaspard has been particularly influenced by the work of artists Nicolas de Staël and Jean-Michel Basquiat.
        Exploring the edge between abstract and figurative art, his process as well as the collages that he creates are fundamentally experimental, which is the reason why most them used to be named with numbers instead of actual titles. This led him to focus on a kind of obsessive, endless visual research, through a consistent and profuse production
        The desktop version of this website generates his artworks randomly and not chronologically. You can keep up with Gaspard’s latest work on his personal Instagram account.
                </div>

        <div className="h-10"></div>

        <h2>EDUCATION</h2>
        <h3>2014 / 2016 – MFA Visual Communication - Creapole ESDI, Paris, France</h3>
        <h3>2011 / 2014 – BFA Visual Communication - Creapole ESDI, Paris, France</h3>

        <div className="h-4"></div>

        <h2>CONTRIBUTION</h2>
        <h3>April 2020 – upcoming project for WWD magazine, digital publication worldwide</h3>
        <h3>July 2016 – showing of ten framed collages for a collective exhibition in Bozel, France</h3>

        <div className="h-10"></div>

        <Social />


      </div>
    </div>
  );
}

export default Info;
