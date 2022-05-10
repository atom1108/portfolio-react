import './App.css';
import React from 'react';
import CC from '../components/CC';

function getImages(context){
    let images = [];
    context.keys().map((item, index) => {
        images[item.replace('./', '')] = context(item);
    });
    return images;
}

function Tile(props){
    // hover:w-1/2 hover:h-fit
    return (
        <div className='max-w-md max-h-sm w-32 h-32 lg:m-5 md:m-3 sm:m-2 flex-2 hover:grow hover:h-fit ease-linear duration-300'>
        <a href={props.fullResSrc}><img 
        className='object-cover w-full h-full rounded-tl-lg rounded-br-lg '
        src={props.src}></img>
        </a>
    </div>
    );
}

function Gallery() {
    return (
        <div >
            <h1 className='text-center text-5xl text-custom-teal my-5'>Photography</h1>
                <div className='flex flex-wrap w-3/4 h-fit mx-auto justify-center'>
                    {
                        require.context('../images/Gallery', false, /\.(png|jpe?g|JPG|svg)$/).keys().map((item, index) => {
                            let name = String(item).substring(1);
                            return (
                                <Tile 
                                key={index} 
                                src={require("../images/Gallery"+name)}
                                fullResSrc={require("../images/FullSizeGallery"+name)}
                                />
                            );
                        })
                    }
            </div>
            <CC/>
        </div>
    );
}

export default Gallery;
