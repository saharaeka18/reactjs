import Image from "next/image";

import { Stack,Button } from 'react-bootstrap';
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
   </div>    
  );
}