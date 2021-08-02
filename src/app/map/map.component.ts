
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 
  constructor() { }
  ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZGV2aXBpbGxhaSIsImEiOiJja3FveDE0bDYwYTkxMnNuYnJpbWdnN2VuIn0.XLlVqyzouciDKHc9ixzyCQ';
    let map = new mapboxgl.Map({
      container: 'map', // container ID
       style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
  });
    // Add map controls
  }
}