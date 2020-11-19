import '../styles/main.css';
import Artwork from './Artwork';
import { ArtworkConsumer } from '../context';


function Overview() {

  return (

    <div className="w-full flex justify-center items-center">

      <div className="w-10/12 flex flex-wrap justify-between items-center py-6">

        {/*
        <ArtworkConsumer>
          {context => {
              return <Artwork key={context.artworks[0].id} artwork={context.artworks[0]} />
            }
          }
        </ArtworkConsumer>
        */}

        {/*
        <ArtworkConsumer>
          {context => {
              return <TextBlock key={context.artworks[0].id} artwork={context.artworks[0]} />
            }
          }
        </ArtworkConsumer>
        */}

        <ArtworkConsumer>
          {context => {
            return context.artworks.slice(0).reverse().map(artwork => {
              return <Artwork key={artwork.id} artwork={artwork} className="m-4" />
            })
          }}
        </ArtworkConsumer>




      </div>
    </div>





  );
}

export default Overview;
