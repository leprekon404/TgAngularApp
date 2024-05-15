import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  styleUrl: './movie.component.css', 
  template: `
  <div style= "
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    ">
    <button (click)="showForm=true">Add user</button>
  </div>
  
  <form [formGroup]="form" *ngIf="showForm" style="
    border: 2px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    width: 50%;
    margin: auto;
    ">
    <div style="
    display: flex; gap: 10px; width: 100%; margin-bottom: 20px
    ">
      <input formControlName="name" style=" flex-grow: 1" type="text" placeholder="Name">
      <input formControlName="email" style=" flex-grow: 1" type="text" placeholder="Email">
    </div>
    <input formControlName="city" style=" flex-grow: 1" type="text" placeholder="City">
    <h2>add contacts details
      <button (click)="addContact()">Add contact</button>
    </h2>

    <div formArrayName = "contacts" style="margin-bottom: 20px">
      <div *ngFor="let control of contacts.controls; let i = index" 
      style="
      border: 1px dotted #333; 
      padding: 20px; 
      margin-bottom: 10px; 
      position: relative;
      padding-top: 35px">

    <button (click)="deleteContact(i)"
    style="
    position: absolute;
    top: 0;
    rigth: 0;
    background: red;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    ">Delete</button>

      <ng-container [formGroupName] = "i">
        <div style="
          display: flex; gap: 10px; width: 100%; margin-bottom: 20px
        ">
          <input formControlName="number" style=" flex-grow: 1" type="text" placeholder="Number">
          <input formControlName="type" style=" flex-grow: 1" type="text" placeholder="Type">
        </div>

        <div style="
          display: flex; gap: 10px; width: 100%; margin-bottom: 20px
        ">

        <textarea formControlName="description" style="flex-grow: 1" placeholder="Description"></textarea>
        </div>
      </ng-container>
      </div>
    </div>
    <button type="submit" (click)="onSubmit()">submit</button>
  </form>



  <pre>{{ form.value | json }}</pre>
  `,
})
export class MovieComponent {

  showForm = false;

  constructor(private fb: FormBuilder){}

  form: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    city: [''],
    contacts: this.fb.array([
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      })
    ]),
  })

  get contacts() {
    return this.form.get('contacts') as FormArray;
  }

  addContact() {
    this.contacts.push(
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      })
    )
  }

  deleteContact(i: number) {
    this.contacts.removeAt(i);
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
