import Image from "next/image";

import { Stack,Button, Card,CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
   <div>
     <h1 style={{ fontSize: "24px", color: "violet"}}>Home Movie List</h1>
     <h2 style={{ fontSize: "20px", color: "brown"}}>Sahara Eka Aprilia</h2>
     <h3 style={{ fontSize: "160x", color: "pink"}}>Kelas Pemrograman Web 2023-2024</h3>

     <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
<Card className='bg-transparent text-white text-center movieImage'>
    {/* <Image src="https://pyxis.nymag.com/v1/imgs/01e/69b/1c83ec34fe0f94d9f524079bc93d5f197e-27-x-men-apocalypse-poster.rhorizontal.w700.jpg" alt="card image" height= "300" width="480"></Image> */}
    <img className="card-img-top"
    src="https://cdn1-production-images-kly.akamaized.net/LVpH33_-lt1qJwRRI39bSKHInMg=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/948585/original/029998000_1438912366-AVX-005-1.jpg" alt="card image" height= "300" width="480"></img>
    <div className='bg-dark p-2 m-1'>
    <CardText>Xmen Days of Future Past</CardText>
    <CardText>Bagus 3.8/4.0</CardText>
   </div>  
   </Card>
</div>
  );
}