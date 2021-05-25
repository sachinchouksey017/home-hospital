import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  value = 20
  selectedValue = ''
  count = 8;
  temp: any[] = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6'
  ];
  searchData = [
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    },
    {
      name: ' Dr. John Diego',
      age: '35',
      specialist: 'M. D. Medicine, Children Specialist'
    }
  ]
  ngOnInit() {
  }

}
