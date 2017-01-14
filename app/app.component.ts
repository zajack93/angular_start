import { Component } from '@angular/core';

export class Student {
	id: number;
	name: string;
}

const STUDENTS: Student[] = [
  { id: 11, name: 'Juri' },
  { id: 12, name: 'Roman' },
  { id: 13, name: 'Piotrek' },
  { id: 14, name: 'Kasia' },
  { id: 15, name: 'Klaudia' },
  { id: 16, name: 'Anita' },
  { id: 17, name: 'Lucyna' },
  { id: 18, name: 'Ania' },
  { id: 19, name: 'Rafał' },
  { id: 20, name: 'Asia' }
];

@Component({
  	selector: 'my-app',
	template: `<h1>{{title}}</h1> 
	<h2> Students</h2>
	<ul class="heroes">
	<li *ngFor="let student of students" (click)="onSelect(student)"[class.selected]="student === selectedStudent" >
		 <span class="badge">{{student.id}}</span> 
		{{student.name}}
	  </li>
	</ul>
	
	<div *ngIf="selectedStudent">
	<h2> Selected student: {{selectedStudent.id}}. {{selectedStudent.name}}.</h2>
		<div>
			<label>name: </label>
			<input [(ngModel)]="selectedStudent.name" placeholder="name">
		</div>
	</div>

	 `,
	
	styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
	//<input value="{{student.name}}" placeholder="name">
})

//<div> 
//		<label> first name: </label> {{student.firstName}}
//	</div> 
//	<div>
//		<label> last name: </label>{{student.lastName}} 
//	</div> `,

export class AppComponent  { 
	title= "Akademia 108 - lista studentów"; 
//	student ="Juri";
	students = STUDENTS; //dodaje sobie nasza zadeklarowana tablice STUDENTS do komponentu stdents
	
	selectedStudent: Student;
//selectedStudent - pole klasy: Student - typ ten klasy
//student: Student, gdzie student - tworze sobie typ dla typescript, a Student - klasa, ktora zdefiniowalam sobie na samej górze i to jest wlasnie typowanie
//nastepnie na metodzie  onclick - w clicku wywołuje metode onSelect (po kilknieciu wybieram studenta np Juri i wysla sie to do onSelect do student (przez male s) i przypisuje  Student - klasa, ktora zdefiniowalam sobie na samej górzei jego usawtaimy jako selected, do this,selectedStudent przypisuje tego studenta z malego, króego sobie pobrałam po onclick przypisuje  nastepnie przechodze do ifa, ktory mowi, ze jeżeli zmienna selected ma wartosc (ngif) to wyswietla w inpucie to co wybrane zostalo) i musi to byc klasa wewnetrzna AppComponent, bo w ndexie jest selektos my-app i tu wywołuje sie cala aplikacja
	onSelect(student: Student): void {
  		this.selectedStudent = student;
	}
}
