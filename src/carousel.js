import React, { Component } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

    import img from './assets/bandmember.jpg'
    import img1 from './assets/chicago.jpg'
    import img2 from './assets/la.jpg'
    import img3 from './assets/map.jpg'
    import img4 from './assets/sanfran.jpg'


 class Carousell extends Component {
    render() {
        return (
            <div style={{width:"300px", marginLeft:"300px"}}>
                 <Carousel>
                <div>
                    <img src={img} style={{border:"10px solid green"}} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <p>loremjkhsadkljsdlkfdjalkjfdslkjflkdsj</p>
                </div>
                <h1>hello</h1>
            </Carousel>
            </div>
        )
    }
}

export default Carousell
