import React from 'react'
import "./Destination.css";
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>The Gully Destinantions</h1>
      <p>Get the best out of every street!</p>
      <DestinationData
      heading = "The Gully Eats"
      text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at quis voluptatum quas obcaecati sint, suscipit, molestias minus ipsam necessitatibus itaque repellendus ea dolores incidunt aspernatur quia autem provident ex sed earum harum. Incidunt vero sequi, eius neque aspernatur fuga eum magnam rem? Repellendus repellat vel doloremque quasi nesciunt dolorem assumenda provident sequi explicabo quo ab debitis aperiam impedit beatae omnis at, placeat eveniet iste dolore corporis sit tenetur reiciendis. Suscipit, quibusdam libero maxime est numquam molestiae? Maiores, iste sint? Tempore id omnis natus eius repellendus sed eum tempora aliquam placeat, necessitatibus doloribus ad consequuntur, consectetur dolores possimus magnam deserunt."
      img1 = "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
      img2 = "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600"
      firstdes= "firstDes"
      destititle="destiTitle-1"
      />

<DestinationData
      heading = "The Gully Adventure"
      text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at quis voluptatum quas obcaecati sint, suscipit, molestias minus ipsam necessitatibus itaque repellendus ea dolores incidunt aspernatur quia autem provident ex sed earum harum. Incidunt vero sequi, eius neque aspernatur fuga eum magnam rem? Repellendus repellat vel doloremque quasi nesciunt dolorem assumenda provident sequi explicabo quo ab debitis aperiam impedit beatae omnis at, placeat eveniet iste dolore corporis sit tenetur reiciendis. Suscipit, quibusdam libero maxime est numquam molestiae? Maiores, iste sint? Tempore id omnis natus eius repellendus sed eum tempora aliquam placeat, necessitatibus doloribus ad consequuntur, consectetur dolores possimus magnam deserunt."
      img1 = "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600"
      img2 = "https://images.pexels.com/photos/1738622/pexels-photo-1738622.jpeg?auto=compress&cs=tinysrgb&w=600"
      firstdes= "firstDes-reverse"
      destititle="destiTitle-2"
      />
    </div>
  )
}

export default Destination