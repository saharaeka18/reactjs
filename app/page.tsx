"use client";

import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import MovieSlide from './MovieSlide';

export default function Home() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ fontSize: "24px", color: "violet" }}>Home Movie List</h1>
          <h2 style={{ fontSize: "20px", color: "brown" }}>Sahara Eka Aprilia</h2>
          <h3 style={{ fontSize: "160x", color: "pink" }}>Kelas Pemrograman Web 2023-2024</h3>

          <Stack direction="horizontal" gap={2}>
            {/* <Button as="a" variant="primary">
              tombol link primer
            </Button>
            <Button as="a" variant="success">
              tombol link sukses
            </Button> */}
          </Stack>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11">
          <br />
          <MovieForms />
        </div>
      </div>
      <div className='bg-white'>
        <MovieCard />
        <br />
          <br />
          <br />
          <MovieSlide />
      </div>
    </div>
  );
}
