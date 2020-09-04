import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { mentors } from 'src/app/models/enums/mentors';
import { ModuleUtilsService } from 'src/app/services/module-utils.service';
import { locations } from 'src/app/models/enums/locations';
import { skills } from 'src/app/models/enums/skills';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent extends ModuleUtilsService implements OnInit {

  person: Person = new Person();
  personMentor;
  personLocation;
  personSkills;

  mentors = mentors;
  locations = locations;
  skills = skills;

  personList: Person[] = [];

  showRegister = false;
  showEdit = false;

  constructor(public config: ConfigService) { super(); }

  ngOnInit() {
    this.getPersons();
  }

  cancel() {
    this.showRegister = false;
    this.showEdit = false;
    this.personLocation = null;
    this.personMentor = null;
    this.personSkills = null;
    this.person = new Person();
  }

  getPersons() {
    const list = JSON.parse(localStorage.getItem('persons'));
    list ? this.personList = list : this.personList = [];
    this.getData();
  }

  getData() {
    this.personList.forEach((person: any) => {
      const location = this.locations.find(loc => loc.id === person.location);
      const locationName = location ? location.name : '-';
      person.locationName = locationName;
    });
  }

  fillSkills() {
    let list = [];
    this.personSkills.forEach(skill => {
      list.push(skill.id);
    });
    this.person.skills = list;
  }

  register() {
    this.fillSkills();
    if (this.showRegister) {
      this.person.id = this.generateId();
      console.log(this.person.id);
      this.personList.push(this.person);
      this.showRegister = false;
    } else {
      const personIndex = this.personList.findIndex(p => p.id === this.person.id);
      this.personList[personIndex] = this.person;
      this.showEdit = false;
    }
    localStorage.setItem('persons', JSON.stringify(this.personList));
    this.getPersons();
  }

  editPerson(person: Person) {
    this.person = Object.assign({}, person); //clona objeto
    this.showEdit = true;
    this.personLocation = this.locations.find(location => location.id === person.location);
    this.personMentor = this.mentors.find(mentor => mentor.id === person.mentorId);
    this.getSkills();
  }

  getSkills() {
    this.personSkills = [];
    let skills;
    if (this.person.skills) {
      this.person.skills.forEach(skillId => {
        skills = this.skills.find(s => s.id === skillId);
        this.personSkills.push(skills);
      });
    }
  }
}
